$(document).ready(function(){

$('.ir-arriba').click(function(){
$('body, html').animate({
    scrollTop: '0'
},250);

});

$(window).scroll (function (){
    if ( $(this).scrollTop() > 400 ){ $('.ir-arriba').slideDown(250);

    } 
    else { $('.ir-arriba').slideUp(250);}
});


});