const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // triggers when 10% of element is visible

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));