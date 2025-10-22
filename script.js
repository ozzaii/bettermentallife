/**
 * BETTER MENTAL LIFE - Interactive Enhancements
 * Bold vision with refined micro-interactions
 */

// =============================================
// FADE-IN ANIMATION (Intersection Observer)
// =============================================

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Stagger child elements if they exist
      const childElements = entry.target.querySelectorAll('.credential-block, .expertise-list li, .services-list li');

      if (childElements.length > 0) {
        // Stagger delay for child elements
        childElements.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, index * 100); // 0.1s stagger
        });
      }

      // Add visible class to section
      entry.target.classList.add('is-visible');

      // Optionally unobserve after animation (performance)
      // fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '-50px 0px'
});

// Observe all fade-in sections
document.addEventListener('DOMContentLoaded', () => {
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
  });

  // Initialize child element initial states for stagger
  const childElements = document.querySelectorAll('.credential-block, .expertise-list li, .services-list li');
  childElements.forEach(child => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(20px)';
    child.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

// =============================================
// SMOOTH SCROLL (Skip Link)
// =============================================

const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus();
    }
  });
}

// =============================================
// PARALLAX-LITE EFFECT (Hero Elements)
// =============================================

let ticking = false;
let lastScrollY = window.scrollY;

function updateParallax() {
  const scrollY = window.scrollY;

  // Only apply on larger screens
  if (window.innerWidth >= 768) {
    const hero = document.querySelector('.hero');
    const heroName = document.querySelector('.hero-name');
    const heroAccentLine = document.querySelector('.hero-accent-vertical');

    if (hero && scrollY < window.innerHeight) {
      // Subtle parallax (different speeds for different elements)
      if (heroName) {
        heroName.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      if (heroAccentLine) {
        heroAccentLine.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
      }
    }
  }

  ticking = false;
}

function requestParallaxUpdate() {
  lastScrollY = window.scrollY;

  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

// Only add parallax on non-mobile
if (window.innerWidth >= 768) {
  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
}

// =============================================
// ANALYTICS TRACKING (Optional)
// =============================================

// Track WhatsApp CTA clicks
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
whatsappLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Optional: Add analytics tracking here
    console.log('WhatsApp CTA clicked:', link.href);

    // Example: Google Analytics event (if GA is loaded)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'whatsapp_button',
        'value': 1
      });
    }
  });
});

// Track research paper link clicks
const researchLink = document.querySelector('.credential-link');
if (researchLink) {
  researchLink.addEventListener('click', () => {
    console.log('Research paper link clicked');

    if (typeof gtag !== 'undefined') {
      gtag('event', 'outbound_click', {
        'event_category': 'engagement',
        'event_label': 'research_paper',
        'value': 1
      });
    }
  });
}

// =============================================
// PERFORMANCE: Reduce motion for accessibility
// =============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable parallax
  window.removeEventListener('scroll', requestParallaxUpdate);

  // Reduce animation durations
  document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}
