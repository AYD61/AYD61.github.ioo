$(function(){
	var $nfli=$(".nf ul li");
	var len=$nfli.length-1;
	var index=0;
	$(".fzms").eq(0).addClass('msxz').animate({opacity: 1},500)
				        .siblings(".fzms").removeClass('msxz').animate({opacity: 0},500);
	$(".jtx").click(function(){
		if(!$(".nf ul").is(":animated")){
			if(index<len){
				index++;
				$($nfli).eq(index).addClass('nfxz')
				        .siblings().removeClass('nfxz');
				showyw(index);
			}else{
				index=0;
				$($nfli).eq(index).addClass('nfxz')
				        .siblings().removeClass('nfxz');
				showyw(index);
			}
		}
	})
	$(".jts").click(function(){
		if(!$(".nf ul").is(":animated")){
			if(index==0){
				index=len;
				$($nfli).eq(index).addClass('nfxz')
				        .siblings().removeClass('nfxz');
				showyw(index);
			}else{
				index--;
				$($nfli).eq(index).addClass('nfxz')
				        .siblings().removeClass('nfxz');
				showyw(index);
			}
		}
	})

	$($nfli).click(function() {
		if(!$(".nf ul").is(":animated")){
			index=$($nfli).index(this);
			$($nfli).eq(index).addClass('nfxz')
					       	  .siblings().removeClass('nfxz');
			showyw(index);
		}
	});
})
//显示不同的模块
function showyw(index){
	var $nfli=$(".nf ul li");
	var len=$nfli.length-1;
	var $nful=$(".nf ul");
	$(".fzms").eq(index).addClass('msxz').animate({opacity: 1},250)
				        .siblings(".fzms").removeClass('msxz').animate({opacity: 0},250);
	if(index<3){
		$nful.animate({top:-(100*index)},500);
	}else if(index==len){
		$nful.animate({top:-(100*(index-3))},500);
	}else{}
}