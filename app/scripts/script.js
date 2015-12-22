var jumboHeight = $('.paralax').outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.paralax').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
	parallax();
});