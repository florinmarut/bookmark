$(".hamburger-button").click(function(){
    $(".navbar-mobile").toggleClass("navbar-slide");
    $("#mobile-wrapper").css("overflowY", "hidden");
});

$(".fas").click(function(){
    $(".navbar-mobile").toggleClass("navbar-slide");
    $("#mobile-wrapper").css("overflowY", "auto");
});