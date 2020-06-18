document.querySelectorAll('.calculator-tabs-triggers__item').forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.calculator-tabs-triggers__item').forEach((child) => {
			child.classList.remove('calculator-tabs-triggers__item--active')
		});

		document.querySelectorAll('.calculator-tabs-content__item').forEach((child) => {
			child.classList.remove('calculator-tabs-content__item--active')
		});

		item.classList.add('calculator-tabs-triggers__item--active');
		document.getElementById(id).classList.add('calculator-tabs-content__item--active');
	});
});

document.querySelector('.calculator-tabs-triggers__item').click();
