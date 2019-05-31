$(function(){
	// window.pageYOffset   滚动长度
  	$(window).scroll(function(){  
      if($(document).scrollTop() <= 100) {  
       $("#top").css("background","rgba(255,255,255,0)")
       $("#top a").css("color","#fff")
       $("#navtb img").css("filter","drop-shadow(17px 0 #fff)")
      } else {  
      $("#top").css("background","#fff")
      $("#top a").css("color","#000")
      $("#navtb img").css("filter","drop-shadow(17px 0 #000)")
    } 
  })

})