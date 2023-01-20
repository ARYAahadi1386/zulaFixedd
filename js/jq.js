$(document).ready(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>300) {
            $("#backtotop").show();
        } else {
            $("#backtotop").hide();
        }
    })
    $("#backtotop").click(function(e){
        $('html,body').animate({scrollTop: 0});
    })
    

    
    
        
        
    
    
        
      
        $(".btnToggleMenu").click(function(){
            if($("li").css("display")=="none"){
                $("li").first().fadeIn(15,function next(){
                    $(this).next("li").fadeIn(15,next)
                })
            }else{
                $("li:last-child").fadeOut(15,function prev(){
                    $(this).prev("li").fadeOut(15,prev)

                });
            }
        });

        
        
});


