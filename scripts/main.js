$(document).ready(function(){

	if($(window).width() < 575){
		$('.codewars-badge').attr('src', 'https://www.codewars.com/users/possardt28/badges/small');
	}

	//scroll function listener for nav bar
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if($(window).width() <= 575){
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
		}else if($(window).width() <= 992){
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
			var $img = $('.parallax-img');
			$img.css('transform', 'translate3D(-50%, ' + Math.round(scroll * 0.5) +  'px,0');
		}
	});

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
		$('html, body').animate({scrollTop : top}, 500);
	};

	$('.home').on('click',function(){scrollTo(0); });
	$('.about').on('click',function(){ scrollTo($('#about').position().top); });
	$('.work').on('click',function(){ scrollTo($('#work').position().top); });
	$('.contact').on('click',function(){ scrollTo($('#contact').position().top); });

});
