$(window).on('load', function () {
	$('.faq__tabs').on('click', '.faq-tab__item', function () {
		$('.faq__tabs').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.faq-tab__content').eq($(this).index()).addClass('active');
	});
});