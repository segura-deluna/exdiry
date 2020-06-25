const burgerBody = document.querySelector('.menu-burger-body'),
	burger = document.querySelector('.menu-burger'),
	close = document.querySelector('.menu-burger-body__header-close');

// Burger-menu
burger.addEventListener('click', (e) => {
	burgerBody.classList.toggle('active');
});
close.addEventListener('click', (e) => {
	burgerBody.classList.toggle('active');
});