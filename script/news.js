$(function(){


	$("#news_nav li").click(function(){
		$(this).addClass("news_xz")
			   .siblings().removeClass("news_xz");
		i=$("#news_nav li").index(this);
		$("#news_nr .news_nrss").eq(i).show().animate({opacity: 1},500)
			   .siblings().hide().animate({opacity: 0},500);
	}).eq(0).click();


})