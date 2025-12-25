import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function CreeperModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree(); 

  const lastScroll = useRef(0);

  // --- CONFIGURATION ---
  const modelScale = 2;
  
  // 1. Position: Bottom of the screen, adjusted upward to fit tighter in viewport
  const yPosition = -viewport.height / 2 + 0.5; 
  
  // 2. Horizontal Movement Limits
  const startX = -viewport.width / 2 - 2; // Start far left
  const endX = viewport.width / 2 + 2;    // End far right

  // --- ANIMATION SETUP ---
  useEffect(() => {
    const action = actions['Walk']; 
    
    if (action) {
        action.play();
        action.paused = true; // Start paused, scroll will drive it
    } else {
        console.error("Animation 'Walk' not found. Available:", Object.keys(actions));
    }
  }, [actions]);

  // --- THE LOOP ---
  useFrame((state, delta) => {
    if (!group.current) return;

    // A. Scroll Math
    const currentScroll = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    // Ensure scrollProgress is between 0 and 1
    const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, currentScroll / maxScroll)) : 0;

    // CHANGED BACK: Standard Left-to-Right movement math.
    // At progress 0, it's at startX. At progress 1, it's at endX.
    const targetX = startX + (endX - startX) * scrollProgress;


    // Smooth movement (Lerp)
    group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x, 
        targetX, 
        0.1 // Adjust this value for faster/slower smoothing (higher = faster follow)
    );

    // B. Animation Control
    const action = actions['Walk'];
    if (action) {
        const scrollDelta = Math.abs(currentScroll - lastScroll.current);
        
        if (scrollDelta > 0.5) {
            action.paused = false;
            // Optional: cap the speed so it doesn't look crazy on fast scrolls
            action.timeScale = Math.min(scrollDelta * 0.2, 2.5); 
        } else {
            action.paused = true;
        }
    }
    lastScroll.current = currentScroll;
  });

  return (
    // Initialize position at startX so it doesn't jump on first load
    <group ref={group} position={[startX, yPosition, 0]}>
      {/* rotation-y={Math.PI / 2} 
         CHANGED BACK: Positive value rotates it 90 degrees to face "Right".
      */}
      <primitive 
        object={scene} 
        scale={modelScale} 
        rotation-y={-Math.PI / 2} 
      />
    </group>
  );
}

export default function ScrollModelContainer() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '200px', 
      zIndex: 10,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 20 }}
        gl={{ alpha: true }} 
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        
        <React.Suspense fallback={null}>
            <CreeperModel url="/creeper/creeper.gltf" />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/creeper/creeper.gltf');