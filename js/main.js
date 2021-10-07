$(window).on("load",function(){

	setNavi();

});


$(document).ready(function(){ 

	var $mainNavi = $(".main-navi ul li");
	$mainNavi.on("click", function(){

		var index = $mainNavi.index(this);

		var top = $(".section").eq(index).offset().top;
		$("html, body").animate({scrollTop : top}, 800);
	});
    $(window).scroll(function(){
		setNavi();
	});


});



function setNavi(){

	var $section = $(".section");
	var margin = $section.css('margin-top').replace(/[^0-9]/g, "") * -1;
	var $navi = $(".main-navi ul li");

	$section.each(function(index){
		var start = $(this).offset().top - margin;
		if(start < 0) start = 0;
		var end = 0;

		if($(this).next().length){
			end = $(this).next().offset().top - margin - 1;
		}else{
			var h = $(this).outerHeight();
			end = start + h;
		}

		var naviPosition = $(".main-navi").offset().top;

		if((naviPosition >= start) && (naviPosition <= end)){
			$navi.removeClass("on");
			$navi.eq(index).addClass("on");
			if(($section.eq(index).find(".scroll").length) && (!$section.eq(index).find(".scroll").hasClass("active"))){
				$(".scroll").removeClass("active");
				$section.eq(index).find(".scroll").addClass("active");
			}
		}
	});

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".main-navi > ul").children(".on").each(function(idx,item) {
            item.classList.remove("on");
        })
        $(".main-navi > ul").children("li").last().addClass("on")
    }
 

}