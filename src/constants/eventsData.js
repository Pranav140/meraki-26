
import minecraftimg from "../assets/MinecraftDungeons_S2AdventurePass_1280x768.webp";

export const events = [
    {
        id: 1,
        title: "DRONE EVENT",
        slug: "drone-event",
        image: minecraftimg,
        description: "Capture the Tower by night, and in a whole new light, with these times.",
    },
    {
        id: 2,
        title: "ROBO DRIVE",
        slug: "robo-drive",
        image: minecraftimg,
        description: "Experience the ultimate robotics competition with cutting-edge technology.",
    },
    {
        id: 3,
        title: "TECH CHALLENGE",
        slug: "tech-challenge",
        image: minecraftimg,
        description: "Test your technical skills in this exciting challenge event.",
    },
    {
        id: 4,
        title: "INNOVATION QUEST",
        slug: "innovation-quest",
        image: minecraftimg,
        description: "Showcase your innovative ideas and compete for the grand prize.",
    },
];

export const eventDetailsData = {
    'robo-drive': {
        title: 'ROBO DRIVE',
        price: '₹19000/-',
        tags: ['Robotics', 'Engineering', 'Competition', 'Innovation'],
        badge: 'FLAGSHIP EVENT',
        description: 'Experience the world of Hermitcraft, Season 10 with this Free map. This world was made by a remarkable group of talented people over...',
        fullDescription: 'Experience the world of Hermitcraft, Season 10 with this Free map. This world was made by a remarkable group of talented people over several months. Join us for an amazing robotics competition where teams compete to build and program the most efficient robots. This event challenges your engineering skills, programming knowledge, and creativity.',
        eventDate: 'February 15-17, 2026',
        teamSize: '2-4 Members',
        venue: 'IIIT Una Campus',
        contact: 'events@meraki.com'
    },
    'drone-event': {
        title: 'DRONE EVENT',
        price: '₹15000/-',
        tags: ['Drones', 'Aerospace', 'Competition', 'Technology'],
        badge: 'POPULAR EVENT',
        description: 'Master the skies with our drone racing competition...',
        fullDescription: 'Master the skies with our drone racing competition. Build, customize, and fly your drones through challenging obstacle courses.',
        eventDate: 'February 16, 2026',
        teamSize: '1-3 Members',
        venue: 'Open Ground, IIIT Una',
        contact: 'drones@meraki.com'
    },
    'tech-challenge': {
        title: 'TECH CHALLENGE',
        price: '₹10000/-',
        tags: ['Coding', 'Problem Solving', 'Competition', 'Tech'],
        badge: 'COMPETITIVE',
        description: 'Put your coding skills to the ultimate test...',
        fullDescription: 'Put your coding skills to the ultimate test in this intensive programming competition with real-world challenges.',
        eventDate: 'February 17, 2026',
        teamSize: '1-2 Members',
        venue: 'Computer Lab, IIIT Una',
        contact: 'tech@meraki.com'
    },
    'innovation-quest': {
        title: 'INNOVATION QUEST',
        price: '₹12000/-',
        tags: ['Innovation', 'Entrepreneurship', 'Pitch', 'Startup'],
        badge: 'SPECIAL EVENT',
        description: 'Showcase your innovative startup ideas...',
        fullDescription: 'Showcase your innovative startup ideas to industry experts and investors. Win funding and mentorship for your ventures.',
        eventDate: 'February 15-17, 2026',
        teamSize: '2-5 Members',
        venue: 'Auditorium, IIIT Una',
        contact: 'innovation@meraki.com'
    }
};
