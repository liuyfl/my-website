var header=function(){
	'use strict';
	var handleheader=function(){
		if($('.header-banner').offset().top>15)
			$('.header-banner').addClass('is-sticky');
	}
	$(window).on('scroll',function(){
		if($('.header-banner').offset().top>15)
			$('.header-banner').addClass('is-sticky');
		else
			$('.header-banner').removeClass('is-sticky');
	})
	return{
		init:function(){
			handleheader();
		}
	}
}();
$(document).ready(function(){
	header.init();
	$('.menu-item-link').click(function(){
		var target=$(this).attr('target');
		if(target)
		{
			window.location.href='/'+target+'.html';
		}
	})
})