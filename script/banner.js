$(function(){

	//自动轮播
	var $banner=$(".xlist li");
	var len=$banner.length;
	var index=0;
	var adTimer=null;
	$banner.mouseover(function(){
		index=$banner.index(this);
		showxList(index);
	}).eq(0).mouseover();
	//鼠标滑入停止动画，滑出开始动画
	$('#banner').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showxList(index);
			index++;
			if(index==len){index=0;}
		},2500);//定时器
	}).trigger("mouseleave");


})
//显示不同的模块
function showxList(index){
	var $rollobj=$(".bn");
	// $(".xlist li").eq(index).addClass("bxz")
	// 			  .siblings().removeClass("bxz");
	 $(".xlist li").eq(index).css("background","#fff")
				  .siblings().css("background","none");
	var rollWidth=$rollobj.find("li").outerWidth();
	 // rollWidth=rollWidth;//一个版面的宽度
	$rollobj.stop(true,false).animate({left:-rollWidth*index},500);
}