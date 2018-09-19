;(function($){
	function setwordlist(options,elment,index){
		var html='<span class="wordlist-group">';
		for(var i=0;i<options['word'][index].length;i++)
		{
			html+='<i>'+options['word'][index][i]+'</i>';
		}
		html+='</span>';
		elment.html(html);
	}
	function setwordanimate(options,elment,index){
		
		setTimeout(function(){
			$(elment.find('.wordlist-group i')[0]).addClass("in");
			elment.find(".wordlist-group").css("border-right","1px solid "+elment.css('color'));
		},500);
		var i;
		for(i=1;i<options['word'][index].length;i++)
		{
			setTimeout(function(i){
				$(elment.find(".wordlist-group i")[i]).addClass("in");
			},500+i*150,i);
		}
		if(options['recycle'])
		{
			setTimeout(function(){
				elment.find(".wordlist-group").css("border-right","none");
			},500+options['word'][index].length*150+500);
			setTimeout(function(){
				elment.find(".wordlist-group").css("background",options["covercolor"]);
			},500+options['word'][index].length*150+500);
			setTimeout(function(){
				elment.find(".wordlist-group i").removeClass("in");
				elment.find(".wordlist-group").css("background","transparent");
			},500+options['word'][index].length*150+1000);
		}
		else
			setTimeout(function(){
				elment.find(".wordlist-group").css("border-right","none");
			},500+options['word'][index].length*150);
	}
	$.fn.typelist=function(options){
		var that=this;
		var defaults={
			'covercolor':'#10adf2',
			'recycle':1,
			'word':[]
		};
		var defaultoptions=$.extend({},defaults,options);
		defaultoptions['word'][0]=that.text();
		setwordlist(defaultoptions,that,0);
		setwordanimate(defaultoptions,that,0);
		if(defaultoptions['recycle'])
			var t=setInterval(function(){setwordanimate(defaultoptions,that);},defaultoptions['word'].length*150+2000);
	}
	$.fn.wordslist=function(options){
		var that=this;
		var defaults={
			'covercolor':'#10adf2',
			'recycle':1,
			'word':[]
		};
		var defaultoptions=$.extend({},defaults,options);
		init(defaultoptions,that);
		var tm=setlisttype(defaultoptions,that);
		var t=setInterval(function(){setlisttype(defaultoptions,that);},tm);
	}
	function init(options,elment){
		var subelment=elment.find('.word-group');
		var option={
			'covercolor':options['covercolor'],
		};
		for(var i=0;i<subelment.length;i++)
		{
			options['word'][i]=$(subelment[i]).text();
			setwordlist(options,$(subelment[i]),i);
		}
	}
	function setlisttype(options,elment){
		var subelment=elment.find('.word-group');
		var option={
			'covercolor':options['covercolor'],
			'recycle':1,
		};
		var time=0;
		for(var i=0;i<subelment.length;i++)
		{
			options['word'][i]=$(subelment[i]).text();
			setTimeout(function(i){
				setwordanimate(options,$(subelment[i]),i);
			},time,i);
			time+=options['word'][i].length*150+1500;
		}
		return time;
	}
})(jQuery);