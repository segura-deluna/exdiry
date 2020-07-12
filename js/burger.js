
const nameText = document.querySelector('.personal-header__name'),
	nameMenu = document.querySelector('.name-menu'),
	personalMenu = document.querySelector('.personal__menu'),
	burger = document.querySelector('.menu-burger'),
	menuClose = document.querySelector('.personal__menu-header-close');

nameText.addEventListener('click', () => {
	nameMenu.classList.toggle('active');
});

burger.addEventListener('click', () => {
	personalMenu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
	personalMenu.classList.toggle('active');
});