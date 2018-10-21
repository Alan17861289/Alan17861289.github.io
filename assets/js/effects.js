$(document).ready( ()=> { 
    $(".navigation").on("mouseenter", event =>{
        $(event.currentTarget).css("color","#f0f0f5")
    });

    $(".navigation").on("mouseleave", event =>{
        $(event.currentTarget).css("color","rgb(35,34,34)")
    });

        
    
    //scroll to videoAnd Stats, navbar appears
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 700;            

        if(y_scroll_pos > scroll_pos_test) {
            $("#nav2").slideDown(200);
        }
        else
        {
            $("#nav2").hide();;
        }
    });
    
    
    
});