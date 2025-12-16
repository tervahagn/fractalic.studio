/**
 * Fractalic Studio — Main JavaScript
 * Mobile menu, FAQ accordion, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Toggle aria-expanded for accessibility
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links (enhancement over CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Account for fixed header height
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // FAQ Accordion - already handled by native <details> element
  // Adding smooth animation for opening/closing
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const answer = item.querySelector('.faq__answer');

    item.addEventListener('toggle', () => {
      if (item.open) {
        answer.style.animation = 'fadeIn 0.3s ease';
      }
    });
  });
});

// Fade in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply to sections on load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Trigger hero immediately
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }
});

// Video Modal Functions
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  video.play();
}

function closeVideoModal(event) {
  // Only close if clicking backdrop or close button, not the video
  if (event && event.target.classList.contains('video-modal__content')) return;
  if (event && event.target.tagName === 'VIDEO') return;

  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  video.pause();
  video.currentTime = 0;
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
  }
});

// Logo Video Loop with 60-second delay
document.addEventListener('DOMContentLoaded', () => {
  const logoVideo = document.getElementById('logoVideo');

  if (logoVideo) {
    logoVideo.addEventListener('ended', () => {
      // Wait 30 seconds before playing again
      setTimeout(() => {
        logoVideo.currentTime = 0;
        logoVideo.play();
      }, 30000); // 30 seconds = 30000ms
    });
  }
});


