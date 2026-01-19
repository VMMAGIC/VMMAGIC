document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHref = link.getAttribute('href');

            // Only play nice with anchor links
            if (targetHref.startsWith('#')) {
                e.preventDefault();
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });

                    // Update active state
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Mobile Menu Toggle (Placeholder logic)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // For a simple toggle, we can just toggle display or a class
            // But since the CSS sets display:none on mobile, 
            // we'd need a class that overrides it.
            // Let's assume we add a 'mobile-active' class in CSS or just alert for now since CSS wasn't specifically setup for mobile menu drawer
            // Adding a simple workaround for demo:
            if (navList.style.display === 'flex') {
                navList.style.display = '';
                navList.style.position = '';
                navList.style.top = '';
                navList.style.left = '';
                navList.style.width = '';
                navList.style.height = '';
                navList.style.background = '';
                navList.style.flexDirection = '';
                navList.style.padding = '';
            } else {
                navList.style.display = 'flex';
                navList.style.position = 'absolute';
                navList.style.top = '70px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.height = 'auto';
                navList.style.background = '#0a0a0f';
                navList.style.flexDirection = 'column';
                navList.style.padding = '2rem';
                navList.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden-section'); // Add this class in CSS if needed, or JS will just handle it logic-wise
        observer.observe(section);
    });

    // Add dynamic glowing effect to mouse position on hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = Math.round((clientX / window.innerWidth) * 100);
            const y = Math.round((clientY / window.innerHeight) * 100);

            // Subtle parallax or glow shift
            // target.style.background = `radial-gradient(circle at ${x}% ${y}%, ...)`
        });
    }
});
