$(function () {

	$('.header-slider').slick({
		dots:true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
		fade: true,
		responsive: [{
				breakpoint: 371,
				settings:{
				dots: false,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000, 
				}	
			}]
	});

	
	$('.product__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.product__content',
		vertical: true,
		prevArrow: '<button type="button" class="product-prev"><img src="img/product-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="product-next"><img src="img/product-next.svg" alt=""></button>',
		responsive: [{
			breakpoint: 891,
			settings:{
				arrows: false,
				vertical: false,
				slidesToShow: 3,
				dots: true,
			},
			breakpoint: 461,
			settings:{
				arrows: false,
				vertical: false,
				slidesToShow: 1,
				dots: true,
			}	
		}]
	});
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	});

	//При клике на элемент с каким то классном, добавляет элементту с каким то классом какой то клас
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

});