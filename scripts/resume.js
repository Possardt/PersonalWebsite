$(document).ready(function(){
	var isScrollNavVisible = false;

	//scroll menu when 
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		var scrollNav = $('.scroll-nav');
		if(!isScrollNavVisible && scrollNav.position().top < 0 && scroll > $('.name').position().top){
			scrollNav.animate({top : 0}, 200);
			isScrollNavVisible = true;
		}else if(isScrollNavVisible && scroll < $('.name').position().top && scrollNav.position().top >= 0){
			scrollNav.animate({top : -90}, 200);
			isScrollNavVisible = false;
			console.log('hopefully don\'t call this a fuckton of times');
		}

	});

});