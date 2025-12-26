/**
 * @fileoverview Team member data for Team page.
 * 
 * Contains faculty coordinators, core team members, and department heads
 * displayed on the Team page.
 * 
 * @module constants/teamData
 */

// Import coordinator photos
import pranavImg from '../assets/coordinators/pranav.webp';
import rishavImg from '../assets/coordinators/Rishav.webp';
import tanishqImg from '../assets/coordinators/Tanishq.webp';
import awadhImg from '../assets/coordinators/Avadh.webp';
import sheenaImg from '../assets/coordinators/sheena.webp';
import adityaImg from '../assets/coordinators/AdityaPandey.webp';
import aryanImg from '../assets/coordinators/Aryan.webp';
import jayaniImg from '../assets/coordinators/Jayni.webp';
import ridhamImg from '../assets/coordinators/Ridham.webp';
import purusharthImg from '../assets/coordinators/Purusharth Rana.webp';
import vinitImg from '../assets/coordinators/Vinit.webp';
import DeepuImg from '../assets/coordinators/Deepu.jpg';

// Import faculty coordinator photos
import directorImg from '../assets/coordinators/Director-iiitu.jpeg';
import tanuImg from '../assets/coordinators/tanu.jpg';
import madanImg from '../assets/coordinators/madan.jpg';

/**
 * Faculty coordinators (COORDINATORS section)
 * Displayed prominently at the top of the Team page.
 * 
 * @constant
 * @type {Array<Object>}
 * 
 * @property {string} name - Full name
 * @property {string} role - Position/title
 * @property {string} [subtitle] - Additional descriptor
 * @property {boolean} [isDirector] - If true, styled as Director card
 * @property {string} [image] - Path to coordinator photo
 */
export const coordinators = [
    {
        name: 'Prof. Manish Gaur',
        role: 'Director',
        subtitle: 'IIIT UNA',
        isDirector: true,
        image: directorImg
    },
    {
        name: 'Dr. Tanu Wadhera',
        role: 'Technical Coordinator',
        subtitle: 'IIIT UNA',
        image: tanuImg
    },
    {
        name: 'Dr. Madan Verma',
        role: 'Technical Coordinator',
        subtitle: 'IIIT UNA',
        image: madanImg
    }
];

/**
 * Overall Core Coordinators (CONVENORS section)
 * Top-level student coordinators with contact information.
 * 
 * @constant
 * @type {Array<{name: string, role: string, phone?: string, image?: string}>}
 */
export const coreCoordinators = [
    { name: 'Pranav Garg', role: 'Overall Coordinator', phone: '+91 76968 97912', image: pranavImg },
    { name: 'Rishav Raj', role: 'Overall Coordinator', phone: '+91 85950 55375', image: rishavImg },
    { name: 'Tanishq Singh', role: 'Overall Coordinator', phone: '+91 70174 88532', image: tanishqImg },
];

/**
 * Day-wise coordinators.
 * Coordinators assigned to each day of the fest.
 * 
 * @constant
 * @type {Array<{name: string, role: string, image?: string}>}
 */
export const dayCoordinators = [
    { name: 'Awadh', role: 'Day 1 Coordinator', image: awadhImg },
    { name: 'Sheena', role: 'Day 1 Coordinator', image: sheenaImg },
    { name: 'Aditya Pandey', role: 'Day 1 Coordinator', image: adityaImg },
    { name: 'Aryan Raj', role: 'Day 2 Coordinator', image: aryanImg },
    { name: 'Jayani Srivastava', role: 'Day 2 Coordinator', image: jayaniImg },
    { name: 'Ridham', role: 'Day 3 Coordinator', image: ridhamImg },
    { name: 'Purusharth Rana', role: 'Day 3 Coordinator', image: purusharthImg },
];

/**
 * Department/team leads.
 * Heads of various departments for the fest.
 * 
 * @constant
 * @type {Array<{name: string, role: string, image?: string}>}
 */
export const departmentHeads = [
    { name: 'Deepu', role: 'Decorations Head', image: DeepuImg },
    { name: 'Vinit', role: 'Design Head', image: vinitImg },
];
