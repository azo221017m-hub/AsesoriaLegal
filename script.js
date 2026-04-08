// =============================================
// ASESORIA LEGAL – Landing Page JavaScript
// =============================================

(function () {
  'use strict';

  /* ---- Navbar scroll behaviour ---- */
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scroll-top');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    scrollTop.classList.toggle('visible', y > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Scroll-to-top button ---- */
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  /* ---- Intersection Observer – fade-up elements ---- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ---- Contact form handling ---- */
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn     = form.querySelector('.form-submit');
    const name    = form.querySelector('[name="nombre"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const phone   = form.querySelector('[name="telefono"]').value.trim();
    const area    = form.querySelector('[name="area"]').value;
    const message = form.querySelector('[name="mensaje"]').value.trim();

    // Simple validation
    if (!name || !email || !area || !message) {
      showAlert('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showAlert('Ingresa un correo electrónico válido.', 'error');
      return;
    }

    // Simulate sending (replace with actual endpoint / EmailJS / Formspree)
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
      showAlert('¡Mensaje enviado! Me pondré en contacto contigo a la brevedad.', 'success');
      form.reset();
      btn.textContent = 'Enviar Consulta';
      btn.disabled = false;
    }, 1600);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showAlert(msg, type) {
    const existing = document.querySelector('.form-alert');
    if (existing) existing.remove();

    const alert = document.createElement('div');
    alert.className = `form-alert form-alert--${type}`;
    alert.textContent = msg;

    Object.assign(alert.style, {
      padding:      '.85rem 1.25rem',
      borderRadius: '2px',
      fontSize:     '.88rem',
      fontWeight:   '500',
      marginBottom: '.5rem',
      background:   type === 'success' ? 'rgba(37,211,102,.12)' : 'rgba(211,37,37,.1)',
      border:       `1px solid ${type === 'success' ? '#25d366' : '#d32525'}`,
      color:        type === 'success' ? '#1a7d45' : '#8b0000',
    });

    form.prepend(alert);

    setTimeout(() => alert.remove(), 5000);
  }
})();
