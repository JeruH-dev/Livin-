document.addEventListener('DOMContentLoaded', () => {
    const box = document.createElement('div');
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.background = '#3498db';
    box.style.transition = 'transform 0.4s, opacity 0.4s';
    box.style.cursor = 'pointer';
    box.style.margin = '40px auto';
    document.body.appendChild(box);

    let toggled = false;

    box.addEventListener('click', () => {
        toggled = !toggled;
        if (toggled) {
            box.style.transform = 'scale(1.2) rotate(15deg)';
            box.style.opacity = '0.5';
        } else {
            box.style.transform = 'scale(1) rotate(0deg)';
            box.style.opacity = '1';
        }
    });

    // Navigation toggle for mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.navigation ul');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

    const menuToggleButton = document.querySelector('#menu-toggle');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
        console.log('Menu toggle button clicked!');
    
  });
}
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('main section');
    const revealSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.style.animationPlayState = 'running';
            }
        });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();
});