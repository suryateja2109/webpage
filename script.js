/**
 * Frontend Portfolio Script
 * Handles Theme Toggle, Contact Interactivity, Mobile Nav, and Toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Elements Selection
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const greetingEl = document.getElementById('dynamic-greeting');
  const currentYearEl = document.getElementById('current-year');
  const previewButtons = document.querySelectorAll('.preview-project-btn');

  // 2. Set Current Year in Footer
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 3. Dynamic Greeting Based on Time of Day
  if (greetingEl) {
    const hours = new Date().getHours();
    let greeting = 'Hello';
    if (hours < 12) {
      greeting = 'Good morning';
    } else if (hours < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    greetingEl.textContent = `${greeting}, welcome to my space`;
  }

  // 4. Dark / Light Theme Toggle & Persistence
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      showToast(`Switched to ${nextTheme} theme`);
    });
  }

  // 5. Mobile Navigation Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // 6. Toast Notification Helper
  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 7. Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = document.getElementById('contact-email').textContent;
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('Email address copied to clipboard!');
        })
        .catch(() => {
          showToast(`Email: ${email}`);
        });
    });
  }

  // 8. Contact Form Handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      // Simulate network request
      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('Thank you! Your message has been sent successfully.');
      }, 1200);
    });
  }

  // 9. Project Preview Action
  previewButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectName = btn.getAttribute('data-project');
      showToast(`Opening preview for ${projectName}...`);
    });
  });
});
