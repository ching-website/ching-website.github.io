function checkScroll(){

    if($(window).scrollTop() > $('.navbar').height() * 2){
        $('.navbar').addClass("scrolled");
        $('.navbar-brand').addClass("scrolled");
    }else{
    	$('.navbar').removeClass("scrolled");
        $('.navbar-brand').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}