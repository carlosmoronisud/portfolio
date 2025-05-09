
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('open');
  });


