const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.header__nav-toggle');

header.classList.remove('no-js');
toggleBtn.addEventListener('click', () => header.classList.toggle('is-open'));
