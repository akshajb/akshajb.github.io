
const $arrow = document.querySelector('.arrow');
$('.icon').hover(()=>{
    $arrow.animate([
        {left: '0'},
        {left: '10px'},
        {left: '0'}
      ],{
        duration: 700
      });
})
$('input').focus(()=>{
    $('.label-name span').animate({
       height : "40px",
       color : "#ff008d"
    });
    $('input').animate({
        borderBottomWidth : "2px",
        borderBottomColor : "#ff008d",
    })
})
$('.input input').focusout(()=>{

    if($('input').val().length!=0){
        $('.label-name span').animate({
            color : "white"
         });
    }else{
        $('.label-name span').animate({
           height : "10px",
           color : "white"
        });
    }

    $('input').animate({
        borderBottomWidth : "2px",
        borderBottomColor : "white",
    })
})