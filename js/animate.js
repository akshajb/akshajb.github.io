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