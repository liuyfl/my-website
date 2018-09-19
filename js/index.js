var resize=function(){
	if($(window).width()<=768)
		$('.l-content-content').height('auto');
	else
	{
		$('.page-content-1 .l-content-content').height($('.page-content-1 .l-content-img').height()+'px');
		$('.page-content-2 .l-content-content').height($('.page-content-2 .l-content-img').height()+'px');
	}	
		
}
$(document).ready(function(){
	resize();
	$(window).resize(function(){
		resize();
	})
	$('.slider-img').height(window.innerHeight+'px');
	var myswiper=new Swiper('.swiper-container',{
		loop:true,
		pagination:'.swiper-pagination',
		paginationClickable:true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		autoplay:3000,
		speed:1000,
	});
	$('.swiper-container').hover(function(){
		myswiper.stopAutoplay();
	},function(){
		myswiper.startAutoplay();
	})
})