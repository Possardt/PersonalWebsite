$(document).ready(function(){

	//scroll menu when 
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		var scrollNav = $('.scroll-nav');
		if(scrollNav.position().top < 0 && scroll > $('.name').position().top){
			scrollNav.animate({top : 0}, 200);
		}else if(scroll < $('.name').position().top && scrollNav.position().top >= 0){
			scrollNav.animate({top : -90}, 200);
		}

	});

});