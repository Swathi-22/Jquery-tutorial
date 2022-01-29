$(document).ready(function(){
    
    
})
$('.active').mouseenter(function(){
    $(this).addClass('Nav')
    
})
$('.active').mouseleave(function(){
    $(this).removeClass('Nav')
})
$('.enlarge').mouseenter(function(){
    $(this).addClass('en')
})
$('.enlarge').mouseleave(function(){
    $(this).removeClass('en')
})
$('[id=animation]').mouseenter(function(){
    $(this).addClass('ani')
    $('#para').html('nioj00eiajrleepkjp')
   
})
$('[id=animation]').mouseleave(function(){
    $(this).removeClass('ani')
    $('#para').html('loremmmmmmmmmmmmmmm')
})
// $('[id=para').mouseenter(function(){
//     $(this).html('jfbdksjfjlkbf m bl')
// })
// $('[id=para').mouseleave(function(){
//     $(this).html('loremmmmm')
// })
