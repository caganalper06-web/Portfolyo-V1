document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.menu a');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        const icon = hamburger.querySelector('i');
        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    const revealElements = document.querySelectorAll('section, .skill-card, .cert-card, .timeline-item');

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
