$(document).ready(function(){

	if($(window).width() < 575){
		$('.codewars-badge').attr('src', 'https://www.codewars.com/users/possardt28/badges/small');
	}

	var scrollLargeScreen = function(){
		var scroll = $(window).scrollTop();
		$('.parallax-img').css('transform', 'translate3D(-50%, ' + Math.round(scroll * 0.6) +  'px,0');
	};

	//scroll function listener for nav bar
	$(window).on('scroll', _.throttle(function(){
		var scroll = $(window).scrollTop();
		var width = $(window).width();
		if(width <= 575){
			var headerHeight = $('#nav-trigger').prop('checked') === true ?
								$('.navigation').height() + $('.headshot-container').height() :
								$('.headshot-container').height();
			if(scroll > headerHeight){
				$('#name').addClass('scrollBelowHeader');
				$('.name-placeholder').show();
			}else {
				$('#name').removeClass('scrollBelowHeader');
				$('.name-placeholder').hide();
			}
		}else if(width <= 992){
			var nameContainer = $('#name').css !== "none" ? $('#name').height() : 0;
			var navHeight = $('.headshot-container').height() + nameContainer;
			if(scroll > navHeight){
				$('.nav-container-small').addClass('scrollBelowHeader');
				$('.nav-placeholder').show();
			}else {
				$('.nav-container-small').removeClass('scrollBelowHeader');
				$('.nav-placeholder').hide();
			}
		}else{
			window.requestAnimationFrame(scrollLargeScreen);
		}
	}, 10));

	$(window).on('resize',function(){
		if($(window).width() > 575){
			$('#name').removeClass('scrollBelowHeader');
			$('.name-placeholder').hide();
			$('.codewars-badge').attr('src', 'https://www.codewars.com/users/possardt28/badges/large');
		}else {
			$('.codewars-badge').attr('src', 'https://www.codewars.com/users/possardt28/badges/small');
		}


	});


	$('label[for=nav-trigger]').on('click',function(){
		if($('.nav-trigger').prop('checked') === true){
			$(this).css('position', 'fixed');
		}else{
			$(this).css('position', 'absolute');
		}
	});

	var scrollTo = function (top) {
		var scrollHeaderHeight = $('.nav-container-small').height() === undefined ? 0 : $('.nav-container-small').height();
		$('html, body').animate({scrollTop : (top - scrollHeaderHeight)}, 500);
	};

	$('.about').on('click',function(){ scrollTo($('#about').position().top); });
	$('.work').on('click',function(){ scrollTo($('#work').position().top); });
	$('.contact').on('click',function(){ scrollTo($('#contact').position().top); });

});
