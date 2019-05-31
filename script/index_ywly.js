$(function(){
	var $yww=$("#ywly #yww");
	var len=$yww.length;
	var ywWidth=$yww.width();
	// var index=0;
	var $ywbj=$("#ywly #ywb");
	$("#ywly .left-arrow").click(function() {
		if(!$ywbj.is(":animated")){
			var yww=$ywbj.position().left;
			if (yww == -2000) {
				showyw(yww);
				setTimeout(function(){$ywbj.css('left','-5500px')},520);
			}else if(yww == -1000){
				showyw(yww);
				setTimeout(function(){$ywbj.css('left','-4500px')},520);
			}else{
				showyw(yww);
			}
		}
	})

	$("#ywly .right-arrow").click(function() {
		if(!$ywbj.is(":animated")){
			var yww=$ywbj.position().left;
			if (yww == -5500) {
				showyww(yww);
				setTimeout(function(){$ywbj.css('left','-2000px')},520);
			}else if(yww == -4500){
				showyww(yww);
				setTimeout(function(){$ywbj.css('left','-1000px')},520);
			}else{
				showyww(yww);
			}
		}
	})
})

//显示不同的模块
function showyw(yww){
	var $ywbj=$("#ywly #ywb");
	var ywWidth=$("#ywly #yww").outerWidth(true);
	// outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）
	// ywWidth=ywWidth+120;
	var len=yww+ywWidth;
	$ywbj.animate({left:len},500);
}

function showyww(yww){
	var $ywbj=$("#ywly #ywb");
	var ywWidth=$("#ywly #yww").outerWidth(true);
	// outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）
	// ywWidth=ywWidth+120;
	var len=yww-ywWidth;
	$ywbj.animate({left:len},500);
}