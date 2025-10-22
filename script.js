// BETTER MENTAL LIFE - Layer 2: Motion & Polish
// Intersection Observer animations, smooth interactions

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('language') || 'tr';

    // Set initial active state
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Language switch handler
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.dataset.lang;

            // Update active states
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Store preference
            localStorage.setItem('language', selectedLang);

            // Future: Content swapping will go here
            console.log(`Language switched to: ${selectedLang}`);
        });
    });

    // Hero entrance animation
    setTimeout(() => {
        document.querySelector('.hero').classList.add('hero-loaded');
    }, 100);

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Observe timeline and experience items individually
    document.querySelectorAll('.timeline-item, .experience-item, .cert-item, .location-item').forEach((item, index) => {
        item.classList.add('fade-in-item');
        item.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(item);
    });

    // Parallax effect on section numbers (subtle)
    const sectionNumbers = document.querySelectorAll('.section-number');
    if (window.innerWidth >= 768) { // Only on tablet+
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            sectionNumbers.forEach((num, index) => {
                const speed = 0.3;
                const yPos = -(scrolled * speed);
                num.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    console.log('Better Mental Life - Layer 2 loaded ✨');
});
