// Sticky nav shadow on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 16) {
    navbar.style.boxShadow = "0 8px 30px rgba(173, 188, 255, 0.14)";
  } else {
    navbar.style.boxShadow = "0 4px 24px rgba(173, 188, 255, 0.10)";
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Collapse nav on mobile
      document.querySelector('.nav-links').classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', function() {
  let fromTop = window.scrollY + 80;
  sections.forEach(section => {
    if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Subtle contact form interaction
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  alert('Thank you for your message!');
});