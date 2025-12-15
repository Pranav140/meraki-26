
import minecraftImg from '../assets/MinecraftDungeons_S2AdventurePass_1280x768.webp';
import aboutImg1 from '../assets/about_image1.webp';
import aboutImg2 from '../assets/about_image2.webp';
import aboutImg3 from '../assets/about_section_bg.webp';
import faqImg from '../assets/faq_section_bg.webp';
import contactImg from '../assets/gallery.webp';

export const galleryCollections = [
    {
        id: 1,
        title: 'Event Highlights',
        count: 3,
        images: [minecraftImg, aboutImg1, aboutImg2]
    },
    {
        id: 2,
        title: 'Workshop 1',
        count: 2,
        images: [aboutImg3, faqImg]
    },
    {
        id: 3,
        title: 'Workshop 2',
        count: 2,
        images: [contactImg, minecraftImg]
    },
    {
        id: 4,
        title: 'Competition Day',
        count: 3,
        images: [aboutImg1, aboutImg3, faqImg]
    },
    {
        id: 5,
        title: 'Team Activities',
        count: 2,
        images: [contactImg, aboutImg2]
    },
    {
        id: 6,
        title: 'Closing Ceremony',
        count: 3,
        images: [minecraftImg, faqImg, aboutImg1]
    },
];
