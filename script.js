/**
 * BETTER MENTAL LIFE - Interactive Enhancements
 * Intersection Observer for scroll animations (60fps)
 */

// Fade-in on scroll (Intersection Observer)
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: Unobserve after animation to save resources
      // fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observe all fade-in sections
document.addEventListener('DOMContentLoaded', () => {
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
  });
});

// Smooth scroll for skip link (if needed)
document.querySelector('.skip-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// WhatsApp link tracking (optional analytics)
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
whatsappLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Optional: Add analytics tracking here
    console.log('WhatsApp CTA clicked');
  });
});
