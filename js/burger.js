
const nameText = document.querySelector('.name-text'),
	nameMenu = document.querySelector('.name-menu');

nameText.addEventListener('click', function () {
	nameMenu.classList.toggle('active');
});