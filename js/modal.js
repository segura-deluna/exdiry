let popupsToggle = document.querySelectorAll('.open-popup');

let popupClose = document.querySelectorAll('.close');


popupsToggle.forEach(function (item) {
	item.addEventListener('click', function () {
		let popupName = item.getAttribute('data-popup');
		document.getElementById(popupName).style.display = 'block';
	})
});

popupClose.forEach(function (item) {
	item.addEventListener('click', function () {
		let popup = item.closest('.modal');
		popup.style.display = 'none';
	})
});

window.onclick = function (e) {
	if (e.target.classList.contains('modal')) {
		e.target.style.display = 'none';
	}
};
