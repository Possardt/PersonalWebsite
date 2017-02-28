$(document).ready(function(){
	
	//scroll function listener for nav bar
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		var headerHeight = $('.headshot-container').height();

		if(scroll > headerHeight){
			$('#name').addClass('scrollBelowHeader');
			$('#name-placeholder').show();
		}else {
			$('#name').removeClass('scrollBelowHeader');
			$('#name-placeholder').hide();
		}
	});
});