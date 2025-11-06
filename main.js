// Security: Content Security and Input Sanitization
const SecurityUtils = {
  // Sanitize HTML input to prevent XSS
  sanitizeHTML: function(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  },
  
  // Validate email format
  validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 100;
  },
  
  // Validate name input
  validateName: function(name) {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return nameRegex.test(name);
  },
  
  // Rate limiting for form submissions
  rateLimiter: {
    attempts: 0,
    lastAttempt: 0,
    maxAttempts: 3,
    cooldown: 60000, // 1 minute
    
    canSubmit: function() {
      const now = Date.now();
      if (now - this.lastAttempt > this.cooldown) {
        this.attempts = 0;
      }
      return this.attempts < this.maxAttempts;
    },
    
    recordAttempt: function() {
      this.attempts++;
      this.lastAttempt = Date.now();
    }
  }
};

// Enhanced Custom Cursor
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

function updateCursor() {
  if (cursor && cursorFollower) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
  }
  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Enhanced Interactive Background
function createInteractiveBg() {
  const bg = document.getElementById('interactiveBg');
  if (!bg) return;
  
  const dotCount = Math.min(50, Math.floor(window.innerWidth / 30));
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'bg-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.setAttribute('data-speed', Math.random() * 2 + 1);
    bg.appendChild(dot);
  }
}

// Enhanced mouse interaction with background dots
document.addEventListener('mousemove', (e) => {
  const dots = document.querySelectorAll('.bg-dot');
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  dots.forEach(dot => {
    const rect = dot.getBoundingClientRect();
    const dotX = rect.left + rect.width / 2;
    const dotY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2)
    );
    
    if (distance < 120) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
});

// Enhanced Navigation with smooth scrolling and security
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    
    // Security: Validate target ID to prevent potential issues
    if (!/^[a-zA-Z][a-zA-Z0-9-_]*$/.test(targetId)) return;
    
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without triggering page reload
      history.pushState(null, null, `#${targetId}`);
    }
  });
});

// Enhanced scroll-based navigation updates
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      
      // Remove active from all nav items
      navItems.forEach(item => item.classList.remove('active'));
      
      // Add active to corresponding nav item
      const activeNav = document.querySelector(`[href="#${sectionId}"]`);
      if (activeNav) {
        activeNav.classList.add('active');
      }
    }
  });
}, { 
  threshold: 0.6,
  rootMargin: '-80px 0px -50px 0px'
});

// Enhanced form handling with security measures
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');
  
  // Rate limiting check
  if (!SecurityUtils.rateLimiter.canSubmit()) {
    showMessage('Too many attempts. Please wait before trying again.', 'error');
    return;
  }
  
  const formData = new FormData(e.target);
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const message = formData.get('message')?.trim();
  
  // Enhanced validation
  if (!name || !email || !message) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }
  
  if (!SecurityUtils.validateName(name)) {
    showMessage('Please enter a valid name (2-50 characters, letters only).', 'error');
    return;
  }
  
  if (!SecurityUtils.validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }
  
  if (message.length < 10 || message.length > 1000) {
    showMessage('Message must be between 10 and 1000 characters.', 'error');
    return;
  }
  
  // Record attempt
  SecurityUtils.rateLimiter.recordAttempt();
  
  // Show loading state
  submitBtn.style.opacity = '0.7';
  submitBtn.style.pointerEvents = 'none';
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  try {
    // Simulate form submission (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    showMessage('Thank you for your message! I will get back to you soon.', 'success');
    e.target.reset();
    
  } catch (error) {
    showMessage('Something went wrong. Please try again later.', 'error');
  } finally {
    // Reset button state
    submitBtn.style.opacity = '1';
    submitBtn.style.pointerEvents = 'auto';
    submitBtn.innerHTML = '<span>Send Message</span>';
  }
});

// Enhanced message display function
function showMessage(text, type) {
  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = text;
  successMessage.className = `success-message ${type === 'error' ? 'error' : ''}`;
  successMessage.classList.add('show');
  
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 4000);
}

// Enhanced hover effects for interactive elements
function addHoverEffects() {
  const interactiveElements = document.querySelectorAll('.skill-orb, .project-card, .cta-button, .social-link');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      if (cursor) cursor.style.transform = 'scale(2)';
      if (cursorFollower) cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
      if (cursor) cursor.style.transform = 'scale(1)';
      if (cursorFollower) cursorFollower.style.transform = 'scale(1)';
    });
  });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced page load animations
function initializeAnimations() {
  const body = document.body;
  
  // Fade in content after page load
  setTimeout(() => {
    body.classList.add('loaded');
  }, 100);
  
  // Animate elements on scroll
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // Add scroll animations to cards
  document.querySelectorAll('.skill-orb, .project-card, .education-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(element);
  });
}

// Error handling and fallbacks
window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.error);
  // Graceful degradation - ensure basic functionality works
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    createInteractiveBg();
    updateCursor();
    addHoverEffects();
    initializeAnimations();
    
    // Observe sections for scroll-based animations
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    // Handle initial hash in URL
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
    
  } catch (error) {
    console.error('Initialization error:', error);
    // Fallback: Still show content even if animations fail
    document.body.classList.add('loaded');
  }
});

// Accessibility improvements
document.addEventListener('keydown', (e) => {
  // Enable keyboard navigation for nav items
  if (e.target.classList.contains('nav-item') && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    e.target.click();
  }
});

// Security: Prevent right-click context menu on sensitive elements (optional)
document.querySelectorAll('img, .profile-image').forEach(img => {
  img.addEventListener('contextmenu', (e) => e.preventDefault());
});

// Memory cleanup on page unload
window.addEventListener('beforeunload', () => {
  // Clean up any intervals or timeouts
  if (sectionObserver) sectionObserver.disconnect();
});