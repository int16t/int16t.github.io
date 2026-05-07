const btn = document.getElementById('backToTop');
const footer = document.querySelector('.footer');

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
  ([entry]) => {
    btn.classList.toggle('hidden', entry.isIntersecting);
  },
  { threshold: 0 }
);
observer.observe(footer);