$(document).ready(function(){var a=!1;$(window).on("scroll",function(){var b=$(window).scrollTop(),c=$(".scroll-nav");!a&&c.position().top<0&&b>$(".name").position().top?(c.animate({top:0},200),a=!0):a&&b<$(".name").position().top&&c.position().top>=0&&(c.animate({top:-90},200),a=!1)})});