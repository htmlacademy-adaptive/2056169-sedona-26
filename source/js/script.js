let toggleClosed = document.querySelector('.header__button-closed');
let toggleOpened = document.querySelector('.header__button-opened');


toggleClosed.addEventListener('click', function () {
  if (navMain.classList.contains('header__button-closed')) {
    toggleClosed.classList.remove('header__button-closed');
    toggleOpened.classList.add('header__button-opened');

  } else {
    toggleClosed.classList.add('header__button-closed');
    toggleOpened.classList.remove('header__button-opened');
  }
});

// я тут пытался понять на примере 1й кнопочки как это работает но не получилось(
