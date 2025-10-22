// BETTER MENTAL LIFE - Base interactions
// Simple, smooth, bulletproof

document.addEventListener('DOMContentLoaded', () => {
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

    console.log('Better Mental Life - Base layer loaded ✓');
});
