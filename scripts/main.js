$(document).ready(function(){

	//scroll function listener for nav bar
	$(window).on('scroll', function(){
		if($(window).width() <= 575){
			var scroll = $(window).scrollTop();
			var headerHeight = $('.headshot-container').height();	

			if(scroll > headerHeight){
				$('#name').addClass('scrollBelowHeader');
				$('#name-placeholder').show();
			}else {
				$('#name').removeClass('scrollBelowHeader');
				$('#name-placeholder').hide();
			}
		}else{
			var scroll = $(window).scrollTop();
			var navHeight = $('.headshot-container').height() + 60;	

			if(scroll > navHeight){
				$('.nav-container-small').addClass('scrollBelowHeader');
				$('.nav-placeholder').show();
			}else {
				$('.nav-container-small').removeClass('scrollBelowHeader');
				$('.nav-placeholder').hide();
			}
		}
	});
});