<<<<<<< HEAD
const SecurityUtils = {
=======
// Security: Content Security and Input Sanitization
const SecurityUtils = {
  // Sanitize HTML input to prevent XSS
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  sanitizeHTML: function(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  },
  
<<<<<<< HEAD
=======
  // Validate email format
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 100;
  },
  
<<<<<<< HEAD
=======
  // Validate name input
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  validateName: function(name) {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return nameRegex.test(name);
  },
  
<<<<<<< HEAD
=======
  // Rate limiting for form submissions
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  rateLimiter: {
    attempts: 0,
    lastAttempt: 0,
    maxAttempts: 3,
<<<<<<< HEAD
    cooldown: 60000,
=======
    cooldown: 60000, // 1 minute
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
    
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

<<<<<<< HEAD

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const body = document.body;
  
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    body.classList.remove('loading');
    body.classList.add('loaded');
  }, 1000);
});


=======
// Enhanced Custom Cursor
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

function updateCursor() {
<<<<<<< HEAD
  if (cursor && cursorFollower && window.innerWidth > 768) {
=======
  if (cursor && cursorFollower) {
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
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

<<<<<<< HEAD
updateCursor();


=======
// Enhanced Interactive Background
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
function createInteractiveBg() {
  const bg = document.getElementById('interactiveBg');
  if (!bg) return;
  
  const dotCount = Math.min(50, Math.floor(window.innerWidth / 30));
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'bg-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
<<<<<<< HEAD
=======
    dot.setAttribute('data-speed', Math.random() * 2 + 1);
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
    bg.appendChild(dot);
  }
}

<<<<<<< HEAD
=======
// Enhanced mouse interaction with background dots
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
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

<<<<<<< HEAD

const typewriterElement = document.getElementById('typewriter');
const texts = ['Developer', 'Creator', 'AI Enthusiast', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterDelay = 2000;

function typeWriter() {
  if (!typewriterElement) return;
  
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typewriterDelay = 50;
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typewriterDelay = 150;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    typewriterDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typewriterDelay = 500;
  }
  
  setTimeout(typeWriter, typewriterDelay);
}

setTimeout(typeWriter, 1000);


=======
// Enhanced Navigation with smooth scrolling and security
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    
<<<<<<< HEAD
=======
    // Security: Validate target ID to prevent potential issues
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
    if (!/^[a-zA-Z][a-zA-Z0-9-_]*$/.test(targetId)) return;
    
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
<<<<<<< HEAD
=======
      // Update URL without triggering page reload
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
      history.pushState(null, null, `#${targetId}`);
    }
  });
});

<<<<<<< HEAD

=======
// Enhanced scroll-based navigation updates
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      
<<<<<<< HEAD
      navItems.forEach(item => item.classList.remove('active'));
      
=======
      // Remove active from all nav items
      navItems.forEach(item => item.classList.remove('active'));
      
      // Add active to corresponding nav item
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
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

<<<<<<< HEAD
sections.forEach(section => {
  sectionObserver.observe(section);
});


const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current) + '+';
    }
  }, 40);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
  statsObserver.observe(statsContainer);
}


const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillOrbs = document.querySelectorAll('.skill-orb');
      skillOrbs.forEach((orb, index) => {
        setTimeout(() => {
          const progressBar = orb.querySelector('.skill-progress-bar');
          const skillLevel = orb.getAttribute('data-skill');
          if (progressBar) {
            progressBar.style.width = skillLevel + '%';
          }
        }, index * 150);
      });
      skillsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300);
      }
    });
  });
});


const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');

// Character counter
if (messageInput && charCount) {
  messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    charCount.textContent = length;
    
    if (length > 1000) {
      charCount.style.color = '#dc3545';
    } else if (document.body.classList.contains('light-theme')) {
      charCount.style.color = 'rgba(0, 0, 0, 0.5)';
    } else {
      charCount.style.color = 'rgba(255, 255, 255, 0.5)';
    }
  });
}

function validateField(input, errorElement, validationFn, errorMessage) {
  const value = input.value.trim();
  const isValid = validationFn(value);
  
  if (value && !isValid) {
    input.classList.add('error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('show');
  } else {
    input.classList.remove('error');
    errorElement.classList.remove('show');
  }
  
  return isValid || !value;
}

if (nameInput) {
  nameInput.addEventListener('blur', () => {
    validateField(
      nameInput,
      document.getElementById('nameError'),
      SecurityUtils.validateName,
      'Please enter a valid name (2-50 characters, letters only)'
    );
  });
}

if (emailInput) {
  emailInput.addEventListener('blur', () => {
    validateField(
      emailInput,
      document.getElementById('emailError'),
      SecurityUtils.validateEmail,
      'Please enter a valid email address'
    );
  });
}

if (messageInput) {
  messageInput.addEventListener('blur', () => {
    const value = messageInput.value.trim();
    const errorElement = document.getElementById('messageError');
    
    if (value && (value.length < 10 || value.length > 1000)) {
      messageInput.classList.add('error');
      errorElement.textContent = 'Message must be between 10 and 1000 characters';
      errorElement.classList.add('show');
    } else {
      messageInput.classList.remove('error');
      errorElement.classList.remove('show');
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    if (!SecurityUtils.rateLimiter.canSubmit()) {
      showMessage('Too many attempts. Please wait before trying again.', 'error');
      return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
   
    if (!name || !email || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }
    
    if (!SecurityUtils.validateName(name)) {
      showMessage('Please enter a valid name.', 'error');
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
    
    SecurityUtils.rateLimiter.recordAttempt();
    
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
  
      
      showMessage('Thank you for your message! I will get back to you soon.', 'success');
      contactForm.reset();
      charCount.textContent = '0';
      
    } catch (error) {
      showMessage('Something went wrong. Please try again later.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Send Message</span>';
    }
  });
}

function showMessage(text, type) {
  const successMessage = document.getElementById('successMessage');
  const messageText = document.getElementById('messageText');
  
  messageText.textContent = text;
=======
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
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  successMessage.className = `success-message ${type === 'error' ? 'error' : ''}`;
  successMessage.classList.add('show');
  
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 4000);
}

<<<<<<< HEAD
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.querySelector('i').className = 'fas fa-sun';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const icon = themeToggle.querySelector('i');
    
    if (isLight) {
      icon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'light');
    } else {
      icon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'dark');
    }
    
    if (charCount && messageInput) {
      const length = messageInput.value.length;
      if (length > 1000) {
        charCount.style.color = '#dc3545';
      } else if (isLight) {
        charCount.style.color = 'rgba(0, 0, 0, 0.5)';
      } else {
        charCount.style.color = 'rgba(255, 255, 255, 0.5)';
      }
    }
  });
}

function addHoverEffects() {
  const interactiveElements = document.querySelectorAll('.skill-orb, .project-card, .cta-button, .social-link, .about-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      if (cursor && window.innerWidth > 768) {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      }
      if (cursorFollower && window.innerWidth > 768) {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    });
    
    element.addEventListener('mouseleave', () => {
      if (cursor && window.innerWidth > 768) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (cursorFollower && window.innerWidth > 768) {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      }
=======
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
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
    });
  });
}

<<<<<<< HEAD
function initializeAnimations() {
=======
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
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
<<<<<<< HEAD
  document.querySelectorAll('.skill-orb, .project-card, .education-item, .about-card').forEach(element => {
=======
  // Add scroll animations to cards
  document.querySelectorAll('.skill-orb, .project-card, .education-item').forEach(element => {
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(element);
  });
}

<<<<<<< HEAD
document.addEventListener('keydown', (e) => {
  if (e.target.classList.contains('nav-item') && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    e.target.click();
  }
});


const ariaAnnouncer = document.createElement('div');
ariaAnnouncer.setAttribute('aria-live', 'polite');
ariaAnnouncer.setAttribute('aria-atomic', 'true');
ariaAnnouncer.className = 'sr-only';
ariaAnnouncer.style.position = 'absolute';
ariaAnnouncer.style.left = '-10000px';
ariaAnnouncer.style.width = '1px';
ariaAnnouncer.style.height = '1px';
ariaAnnouncer.style.overflow = 'hidden';
document.body.appendChild(ariaAnnouncer);


document.addEventListener('DOMContentLoaded', () => {
  try {
    createInteractiveBg();
    addHoverEffects();
    initializeAnimations();
    
    
=======
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
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
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
<<<<<<< HEAD
  }
});


window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.error);
});


if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==================== CLEANUP ====================
window.addEventListener('beforeunload', () => {
  if (sectionObserver) sectionObserver.disconnect();
  if (statsObserver) statsObserver.disconnect();
  if (skillsObserver) skillsObserver.disconnect();
=======
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
>>>>>>> 92f33833f481e7c8101071006783f2e724da4d0c
});