/**
 * EDITORIAL PSYCHOLOGY
 * Minimal interactions, smooth experience
 */

// =============================================
// SMOOTH SCROLL FOR TIMELINE
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline-scroll');

  if (timeline) {
    // Smooth scroll behavior
    timeline.style.scrollBehavior = 'smooth';

    // Optional: Auto-scroll hint on first visit
    setTimeout(() => {
      if (timeline.scrollLeft === 0) {
        timeline.scrollLeft = 50;
        setTimeout(() => {
          timeline.scrollLeft = 0;
        }, 800);
      }
    }, 1500);
  }
});

// =============================================
// FADE IN ON SCROLL (Optional Enhancement)
// =============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Hero should be visible immediately
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.opacity = '1';
  hero.style.transform = 'translateY(0)';
}

// =============================================
// ANALYTICS (Optional)
// =============================================

// Track important link clicks
const trackLinks = document.querySelectorAll('[href*="wa.me"], [href*="sciencedirect.com"]');
trackLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Important link clicked:', link.href);
  });
});
