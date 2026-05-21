const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// menuToggle.addEventListener('click', () => {
//   mobileNav.classList.toggle('open');
//   menuToggle.classList.toggle('open');
// });

// // Smooth scrolling for navigation links
// const navLinks = document.querySelectorAll('a[href^="#"]');
// navLinks.forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     const target = document.querySelector(this.getAttribute('href'));
//     if (!target) return;
//     e.preventDefault();
//     target.scrollIntoView({ behavior: 'smooth' });
//     mobileNav.classList.remove('open');
//     menuToggle.classList.remove('open');
//   });
// });

// // Simple form alert
// const form = document.getElementById('contactForm');
// if (form) {
//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Message sent successfully!');
//     form.reset();
//   });
// }
const menu = document.querySelector('.menu');
const heroNav = document.querySelector('.hide');
menu.addEventListener('click', () => {
  heroNav.classList.toggle("hide");
});