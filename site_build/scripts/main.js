$(document).ready(function(){$(window).width()<575&&$(".codewars-badge").attr("src","https://www.codewars.com/users/possardt28/badges/small");var a=function(){var a=$(window).scrollTop();$(".parallax-img").css("transform","translate3D(-50%, "+Math.round(.5*a)+"px,0")};$(window).on("scroll",_.throttle(function(){var b=$(window).scrollTop(),c=$(window).width();if(c<=575){b>(!0===$("#nav-trigger").prop("checked")?$(".navigation").height()+$(".headshot-container").height():$(".headshot-container").height())?($("#name").addClass("scrollBelowHeader"),$(".name-placeholder").show()):($("#name").removeClass("scrollBelowHeader"),$(".name-placeholder").hide())}else if(c<=992){var d="none"!==$("#name").css?$("#name").height():0,e=$(".headshot-container").height()+d;b>e?($(".nav-container-small").addClass("scrollBelowHeader"),$(".nav-placeholder").show()):($(".nav-container-small").removeClass("scrollBelowHeader"),$(".nav-placeholder").hide())}else window.requestAnimationFrame(a)},10)),$(window).on("resize",function(){$(window).width()>575?($("#name").removeClass("scrollBelowHeader"),$(".name-placeholder").hide(),$(".codewars-badge").attr("src","https://www.codewars.com/users/possardt28/badges/large")):$(".codewars-badge").attr("src","https://www.codewars.com/users/possardt28/badges/small")}),$("label[for=nav-trigger]").on("click",function(){!0===$(".nav-trigger").prop("checked")?$(this).css("position","fixed"):$(this).css("position","absolute")});var b=function(a){$("html, body").animate({scrollTop:a},500)};$(".home").on("click",function(){b(0)}),$(".about").on("click",function(){b($("#about").position().top)}),$(".work").on("click",function(){b($("#work").position().top)}),$(".contact").on("click",function(){b($("#contact").position().top)})});