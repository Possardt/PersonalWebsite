$(document).ready(function(){

	//scroll function listener for nav bar
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if($(window).width() <= 575){
			var headerHeight = $('#nav-trigger').prop('checked') === true ?
								$('.navigation').height() - $('.full-name').height() :
								$('.headshot-container').height();
			if(scroll > headerHeight){
				$('#name').addClass('scrollBelowHeader');
				$('#name-placeholder').show();
			}else {
				$('#name').removeClass('scrollBelowHeader');
				$('#name-placeholder').hide();
			}
		}else{
			var nameContainer = $('#name').css !== "none" ? $('#name').height() : 0;
			var navHeight = $('.headshot-container').height() + nameContainer;
			if(scroll > navHeight){
				$('.nav-container-small').addClass('scrollBelowHeader');
				$('.nav-placeholder').show();
			}else {
				$('.nav-container-small').removeClass('scrollBelowHeader');
				$('.nav-placeholder').hide();
			}
		}
	});

	$('label[for=nav-trigger]').on('click',function(){
		if($('.nav-trigger').prop('checked') === true){
			$(this).css('position', 'fixed');
		}else{
			$(this).css('position', 'absolute');
		}
	});
});