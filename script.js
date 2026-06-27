const calendar = document.getElementById('calendar');
const pattern = [0,1,2,1,0,2,3,1,2,0,1,2,3,2,1,0,2,3,2,1,3,2,1,0,1,0,2,3,2,1,0,1,2,1,3,2,2,1,0,1,3,2,1,0,2,3,2,1,1,2,3,2,0,1,2,3,2,1,0,2,1,3,2,0,1,2,3,1,0,2,3,2,1,0,2,1,2,3,2,0,1,2,3,2,1,0,1,2,3,2,1,0,2,3,1,0,2,1,3,2,1,0,2,3,2,1,0,1,2,3,2,1,0,2,3,2,1,0,1,2,3,2,1,0,2,3,1,0,2,1,3,2,1,0,1,2,3,2,1,0,2,3,2,1,0,1,2,3,2,1,0,2,3,1,0,2,1,3,2,1,0,1,2,3,2,1,0,2,3,2,1,0];
pattern.slice(0, 168).forEach(level => {
  const cell = document.createElement('span');
  cell.className = `day ${level ? 'l' + level : ''}`;
  calendar.appendChild(cell);
});

const links = document.querySelectorAll('.side-link');
const sections = [...document.querySelectorAll('section[id]')];
const syncActive = () => {
  const current = sections.findLast(sec => window.scrollY + 160 >= sec.offsetTop);
  links.forEach(a => a.classList.toggle('active', current && a.getAttribute('href') === `#${current.id}`));
};
window.addEventListener('scroll', syncActive, { passive: true });
syncActive();

// Animated calendar timing + smooth reveal
[...document.querySelectorAll('.day')].forEach((cell, index) => cell.style.setProperty('--i', index));
const revealItems = document.querySelectorAll('.panel,.metric-card,.project-card,.profile-panel,.hero-content');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));
