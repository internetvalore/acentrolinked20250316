// Function to handle scroll animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimations();
});

// Re-initialize animations when navigating between pages (for Astro's view transitions)
document.addEventListener('astro:page-load', () => {
  handleScrollAnimations();
});
