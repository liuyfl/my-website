$(document).ready(function(){
	$('.wordlist').wordslist({
		'covercolor':'rgba(255,255,255,0.3)'
	});
	var myswiper=new Swiper('.swiper-container',{
		loop:true,
		pagination:'.swiper-pagination',
		paginationClickable:true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		autoplay:3000,
		speed:1000,
	});
})