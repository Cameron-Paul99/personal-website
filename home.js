// Handle scroll effect to reveal content sections
window.addEventListener('scroll', () => {
    const scrollProgress = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    const contentSections = document.querySelectorAll('.content section');
    contentSections.forEach((section, index) => {
        if (scrollProgress >= index / (contentSections.length - 1)) {
            section.style.opacity = 1;
        }
    });
});
