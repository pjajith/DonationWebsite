
var currentIndex = $('div.active').index() + 1;
$('#mainSlide').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;
    switch(currentIndex){
        case 1:
            $(".slide-button").css("cssText", "background-color: darkblue!important;");
            $(".slidehover").css("cssText", "color: darkblue!important;");
            $(".title").css("cssText", "color: peachpuff!important;");
            $(".about").css("cssText", "color: white!important;");
            $(".faq, .social").css("cssText", "color: black;");
            $(".faq , .social").mouseover(function() {
                $(this).css("color","white");
            }).mouseout(function() {
                $(this).css("color","black");
            });

            break;
        case 2:
            $(".slide-button").css("cssText", "background-color: red!important;");
            $(".slidehover").css("cssText", "color: red!important;");
            $(".title").css("cssText", "color: #342ead!important;");
            $(".about").css("cssText", "color: #2b580c!important;");
            $(".faq, .social").css("cssText", "color: black;");
            $(".faq , .social").mouseover(function() {
                $(this).css("color","white");
            }).mouseout(function() {
                $(this).css("color","black");
            });
            break;
        case 3:
            $(".slide-button").css("cssText", "background-color: yellow!important;");
            $(".slidehover").css("cssText", "color: yellow!important;");
            $(".title").css("cssText", "color: peachpuff!important;");
            $(".about").css("cssText", "color: white!important;");
            $(".faq, .social").css("cssText", "color: white;");
            $(".faq , .social").mouseover(function() {
                $(this).css("color","#40bad5");
            }).mouseout(function() {
                $(this).css("color","white");
            });
            break;
    }
});