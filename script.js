// Smooth section reveal & progress bars
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.style.width = value;
  });
}

const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showProgress();
      observer.unobserve(skillsSection);
    }
  });
}, { threshold: 0.35 });
observer.observe(skillsSection);

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
  const active = menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
}
menuToggle.addEventListener('click', toggleMenu);
menuToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); });

// Close menu when link clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded','false');
  });
});
