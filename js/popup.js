const btn = document.querySelector('.close-btn');

btn.addEventListener('click', () => {
  // fade out effect
  document.body.style.transition = 'opacity 250ms ease';
  document.body.style.opacity = '0';

  // after fade, redirect to dashboard.html
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 300);
});
