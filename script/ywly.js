$(function(){
	$(".ywyd").click(function(){
		if(!$(".ywy").is(":animated")){
			$(this).addClass('ydxz')
				   .siblings().removeClass('ydxz');
			index=$(this).index();
			showyw(index);
		}
	}).eq(0).click();
})
//显示不同的模块
function showyw(index){
	var $ywyw=$("#ywyw");
	var ywWidth=$ywyw.width();
	var $ywy=$(".ywy");
	$ywy.animate({left:-(ywWidth*index)},1000);
	}