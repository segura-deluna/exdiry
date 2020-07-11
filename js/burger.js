
const nameText = document.querySelector('.name-text'),
	nameMenu = document.querySelector('.name-menu'),
	personalMenu = document.querySelector('.personal__menu'),
	burger = document.querySelector('.menu-burger');

nameText.addEventListener('click', () => {
	nameMenu.classList.toggle('active');
});

burger.addEventListener('click', () => {
	personalMenu.classList.toggle('active');
});