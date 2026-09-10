/**
 * JYOTI MUSIC — HOMEPAGE SCRIPT
 * Module: JM-WEB-01 (Homepage Interactivity)
 * Vanilla JavaScript only — No libraries or frameworks
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMobileNav();
    initHeroSlider();
    initScrollReveal();
    initTestimonialsSlider();
    initGalleryLightbox();
    initEnquiryForm();
    initSmoothScroll();
  });

  /* ==========================================================
     1. STICKY HEADER & SCROLL SPY
     ========================================================== */
  function initStickyHeader() {
    var header = document.getElementById('home-header');
    if (!header) return;

    var navLinks = document.querySelectorAll('.home-nav-link');
    var sections = document.querySelectorAll('section[id], main[id]');

    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add('home-header--scrolled');
      } else {
        header.classList.remove('home-header--scrolled');
      }

      // Update active nav link based on scroll position
      var scrollPos = window.scrollY + 120;
      sections.forEach(function (sec) {
        var top = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('home-nav-link--active');
            } else {
              link.classList.remove('home-nav-link--active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================== */
  function initMobileNav() {
    var toggle = document.getElementById('home-nav-toggle');
    var links = document.getElementById('home-nav-links');
    var overlay = document.getElementById('home-nav-overlay');

    if (!toggle || !links || !overlay) return;

    function openMenu() {
      toggle.classList.add('home-nav-toggle--active');
      links.classList.add('home-nav-links--open');
      overlay.classList.add('home-nav-overlay--visible');
      toggle.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.classList.remove('home-nav-toggle--active');
      links.classList.remove('home-nav-links--open');
      overlay.classList.remove('home-nav-overlay--visible');
      toggle.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.contains('home-nav-links--open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    // Close drawer when any nav link is tapped
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('home-nav-links--open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ==========================================================
     3. HERO SLIDER (IMAGE & CONTENT CAROUSEL)
     ========================================================== */
  function initHeroSlider() {
    var slider = document.getElementById('home-hero-slider');
    if (!slider) return;

    var slides = slider.querySelectorAll('.home-hero-slide');
    var dotsContainer = document.getElementById('home-hero-dots');
    var prevBtn = document.getElementById('home-hero-prev');
    var nextBtn = document.getElementById('home-hero-next');

    if (slides.length <= 1) return;

    var currentIndex = 0;
    var slideCount = slides.length;
    var autoPlayTimer = null;
    var autoPlayInterval = 6500; // 6.5 seconds
    var isPaused = false;

    var dots = dotsContainer ? dotsContainer.querySelectorAll('.home-hero-dot') : [];

    function showSlide(index) {
      if (index < 0) {
        index = slideCount - 1;
      } else if (index >= slideCount) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach(function (slide, idx) {
        if (idx === currentIndex) {
          slide.classList.add('home-hero-slide--active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('home-hero-slide--active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      dots.forEach(function (dot, idx) {
        if (idx === currentIndex) {
          dot.classList.add('home-hero-dot--active');
          dot.setAttribute('aria-pressed', 'true');
        } else {
          dot.classList.remove('home-hero-dot--active');
          dot.setAttribute('aria-pressed', 'false');
        }
      });
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(function () {
        if (!isPaused) {
          nextSlide();
        }
      }, autoPlayInterval);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    // Button controls
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoPlay();
      });
    }

    // Dot indicators
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var targetIndex = parseInt(this.getAttribute('data-slide-index'), 10);
        if (!isNaN(targetIndex)) {
          showSlide(targetIndex);
          startAutoPlay();
        }
      });
    });

    // Pause on hover & focus
    var heroSection = document.getElementById('home-hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', function () {
        isPaused = true;
      });
      heroSection.addEventListener('mouseleave', function () {
        isPaused = false;
      });
      heroSection.addEventListener('focusin', function () {
        isPaused = true;
      });
      heroSection.addEventListener('focusout', function () {
        isPaused = false;
      });
    }

    // Touch swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startAutoPlay();
      }
    }, { passive: true });

    // Keyboard navigation when focusing controls
    heroSection.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startAutoPlay();
      }
    });

    // Initialize first slide and start autoPlay
    showSlide(0);
    startAutoPlay();
  }

  /* ==========================================================
     4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     ========================================================== */
  function initScrollReveal() {
    var revealElements = document.querySelectorAll('.home-reveal');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('home-reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback for older browsers
      revealElements.forEach(function (el) {
        el.classList.add('home-reveal--visible');
      });
    }
  }

  /* ==========================================================
     5. TESTIMONIALS CAROUSEL
     ========================================================== */
  function initTestimonialsSlider() {
    var track = document.getElementById('home-testimonials-track');
    var prevBtn = document.getElementById('home-testimonials-prev');
    var nextBtn = document.getElementById('home-testimonials-next');
    var dotsContainer = document.getElementById('home-testimonials-dots');

    if (!track) return;

    var slides = track.querySelectorAll('.home-testimonial-slide');
    if (slides.length <= 1) return;

    var dots = dotsContainer ? dotsContainer.querySelectorAll('.home-testimonials-dot') : [];
    var currentIndex = 0;
    var count = slides.length;
    var intervalTimer = null;

    function updateSlide(index) {
      if (index < 0) index = count - 1;
      if (index >= count) index = 0;
      currentIndex = index;

      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

      dots.forEach(function (dot, i) {
        if (i === currentIndex) {
          dot.classList.add('home-testimonials-dot--active');
          dot.setAttribute('aria-pressed', 'true');
        } else {
          dot.classList.remove('home-testimonials-dot--active');
          dot.setAttribute('aria-pressed', 'false');
        }
      });
    }

    function next() {
      updateSlide(currentIndex + 1);
    }

    function prev() {
      updateSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      intervalTimer = setInterval(next, 7000);
    }

    function stopTimer() {
      if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        next();
        startTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prev();
        startTimer();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          updateSlide(idx);
          startTimer();
        }
      });
    });

    var container = track.closest('.home-testimonials-carousel');
    if (container) {
      container.addEventListener('mouseenter', stopTimer);
      container.addEventListener('mouseleave', startTimer);

      // Touch swipe
      var startX = 0;
      container.addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });

      container.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) next();
          else prev();
          startTimer();
        }
      }, { passive: true });
    }

    updateSlide(0);
    startTimer();
  }

  /* ==========================================================
     6. STUDIO GALLERY LIGHTBOX
     ========================================================== */
  function initGalleryLightbox() {
    var lightbox = document.getElementById('home-lightbox');
    var lightboxImg = document.getElementById('home-lightbox-img');
    var lightboxCaption = document.getElementById('home-lightbox-caption');
    var closeBtn = document.getElementById('home-lightbox-close');

    if (!lightbox || !lightboxImg || !lightboxCaption || !closeBtn) return;

    var galleryItems = document.querySelectorAll('.home-gallery-item');
    var lastFocusedElement = null;

    function openLightbox(src, label) {
      lastFocusedElement = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = label || 'Jyoti Music studio view';
      lightboxCaption.textContent = label || '';

      lightbox.classList.add('home-lightbox--active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('home-lightbox--active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      lightboxImg.src = '';
      lightboxCaption.textContent = '';

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var src = this.getAttribute('data-gallery-src');
        var label = this.getAttribute('data-gallery-label');
        if (src) {
          openLightbox(src, label);
        }
      });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('home-lightbox--active')) {
        closeLightbox();
      }
    });
  }

  /* ==========================================================
     7. ENQUIRY FORM REAL-TIME VALIDATION
     ========================================================== */
  function initEnquiryForm() {
    var form = document.getElementById('home-enquiry-form');
    var successBox = document.getElementById('home-form-success');
    var resetBtn = document.getElementById('home-form-reset-btn');

    if (!form || !successBox) return;

    var nameInput = document.getElementById('home-field-name');
    var emailInput = document.getElementById('home-field-email');
    var phoneInput = document.getElementById('home-field-phone');
    var messageInput = document.getElementById('home-field-message');
        // Sirf letters/space allow karo Name field mein
    if (nameInput) {
      nameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
      });
    }

    // Sirf number allow karo Phone field mein, max 10 digit
    if (phoneInput) {
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
      });
    }

    function showError(input, errorId, message) {
      input.classList.add('home-form-input--error');
      var errSpan = document.getElementById(errorId);
      if (errSpan) {
        errSpan.textContent = message;
        errSpan.classList.add('home-form-error--visible');
      }
    }

    function clearError(input, errorId) {
      input.classList.remove('home-form-input--error');
      var errSpan = document.getElementById(errorId);
      if (errSpan) {
        errSpan.textContent = '';
        errSpan.classList.remove('home-form-error--visible');
      }
    }

        function validateName() {
      if (!nameInput) return true;
      var val = nameInput.value.trim();
      if (!val) {
        showError(nameInput, 'home-field-name-error', 'Please enter your full name.');
        return false;
      }
      if (val.length < 2) {
        showError(nameInput, 'home-field-name-error', 'Name must contain at least 2 characters.');
        return false;
      }
      if (!/^[A-Za-z\s]+$/.test(val)) {
        showError(nameInput, 'home-field-name-error', 'Name should contain only letters.');
        return false;
      }
      clearError(nameInput, 'home-field-name-error');
      return true;
    }

    function validateEmail() {
      if (!emailInput) return true;
      var val = emailInput.value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        showError(emailInput, 'home-field-email-error', 'Please provide an email address.');
        return false;
      }
      if (!emailRegex.test(val)) {
        showError(emailInput, 'home-field-email-error', 'Please enter a valid email (e.g. name@domain.com).');
        return false;
      }
      clearError(emailInput, 'home-field-email-error');
      return true;
    }

        function validatePhone() {
      if (!phoneInput) return true;
      var val = phoneInput.value.trim();
      if (!val) {
        showError(phoneInput, 'home-field-phone-error', 'Please provide a contact phone number.');
        return false;
      }
      if (!/^\d{10}$/.test(val)) {
        showError(phoneInput, 'home-field-phone-error', 'Phone number must be exactly 10 digits.');
        return false;
      }
      clearError(phoneInput, 'home-field-phone-error');
      return true;
    }

    function validateMessage() {
      if (!messageInput) return true;
      var val = messageInput.value.trim();
      if (!val) {
        showError(messageInput, 'home-field-message-error', 'Please write a short note about what you are looking for.');
        return false;
      }
      if (val.length < 8) {
        showError(messageInput, 'home-field-message-error', 'Message should be at least 8 characters long.');
        return false;
      }
      clearError(messageInput, 'home-field-message-error');
      return true;
    }

    // Real-time events on blur & input
    if (nameInput) {
      nameInput.addEventListener('blur', validateName);
      nameInput.addEventListener('input', function () {
        if (nameInput.classList.contains('home-form-input--error')) validateName();
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', validateEmail);
      emailInput.addEventListener('input', function () {
        if (emailInput.classList.contains('home-form-input--error')) validateEmail();
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('blur', validatePhone);
      phoneInput.addEventListener('input', function () {
        if (phoneInput.classList.contains('home-form-input--error')) validatePhone();
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', validateMessage);
      messageInput.addEventListener('input', function () {
        if (messageInput.classList.contains('home-form-input--error')) validateMessage();
      });
    }

    // Form Submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var isNameValid = validateName();
      var isEmailValid = validateEmail();
      var isPhoneValid = validatePhone();
      var isMsgValid = validateMessage();

      if (isNameValid && isEmailValid && isPhoneValid && isMsgValid) {
        // Valid submission simulation
        form.style.display = 'none';
        successBox.classList.add('home-form-success--visible');

        // Smoothly scroll into view
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Focus first failing element
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isPhoneValid) phoneInput.focus();
        else if (!isMsgValid) messageInput.focus();
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        form.style.display = '';
        successBox.classList.remove('home-form-success--visible');
        if (nameInput) nameInput.focus();
      });
    }
  }

  /* ==========================================================
     8. SMOOTH SCROLLING FOR ON-PAGE ANCHORS
     ========================================================== */
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          var headerOffset = 76;
          var elementPosition = targetEl.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Set URL hash without jump
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

})();
