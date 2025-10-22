// BETTER MENTAL LIFE - Layer 2: Motion & Polish
// Intersection Observer animations, smooth interactions

document.addEventListener('DOMContentLoaded', () => {
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
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
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Focus state on scroll (mobile/desktop) - sophisticated in-view highlighting
    const focusObserverOptions = {
        threshold: 0.6,
        rootMargin: '-10% 0px -10% 0px'
    };

    const focusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Remove in-view when scrolled away (subtle)
                entry.target.classList.remove('in-view');
            }
        });
    }, focusObserverOptions);

    // Apply focus observer to timeline, experience, and location items
    document.querySelectorAll('.timeline-item, .experience-item, .location-item').forEach(item => {
        focusObserver.observe(item);
    });

    // List items focus (expertise and services) - more subtle, higher threshold
    const listFocusOptions = {
        threshold: 0.8,
        rootMargin: '-5% 0px -5% 0px'
    };

    const listFocusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, listFocusOptions);

    // Apply to list items
    document.querySelectorAll('.expertise li, .services li').forEach(item => {
        listFocusObserver.observe(item);
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
