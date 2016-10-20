function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    console.log($('.navbar').height());

    if($(window).scrollTop() > $('.navbar').height()){
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