
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const handleHashNavigation = () => {
    const hash = window.location.hash;
    if (hash) {
        
        const sectionId = hash.substring(1);
        
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);
    }
};
