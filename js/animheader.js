$(function(){
    $('header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 350)
    {
        if($('header').data('size') == 'big')
        {
            $('header').data('size','small');
            $('header').stop().animate({
                height:'100px'
            },300);
        }
    }
    else
    {
        if($('header').data('size') == 'small')
        {
            $('header').data('size','big');
            $('header').stop().animate({
                height:'150px'
            },300);
        }  
    }
    
});
