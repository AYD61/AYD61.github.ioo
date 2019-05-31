$(function(){


	$("#jsnav li").click(function(){
		$(this).addClass("jsnavxz")
			   .siblings().removeClass("jsnavxz");
		i=$("#jsnav li").index(this);
		$("#kujsss .kyjss").eq(i).show().animate({opacity: 1},500)
			   .siblings().hide().animate({opacity: 0},500);
	}).eq(0).click();


})