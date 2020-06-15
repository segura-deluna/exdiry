
const nameText = document.querySelector('.name-text'),
	nameMenu = document.querySelector('.name-menu');

nameText.addEventListener('click', (e) => {
	nameMenu.classList.toggle('active');
});