//box animation when hover

$(".item").each(function(e){
        $(this).on("mouseenter", function(){
            $("a", this).css("color", "white");
        }).on("mouseleave",function(){
            $("a", this).css("color", "black");
    })
})  


//when scroll down to research area, the background-color changes
var $target = $('body');
var $research = $('#research-areas');

$research.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        // $target.css('background', 'linear-gradient(to left bottom, #ff5b5b, #ff7d7b, #ff9c9a, #ffb9b8, #ffd6d6)' );
        $target.css('background-color', '#FF9494' )
        $('#research-areas h2').css('color', 'white')
    } else {
        console.log('leave');
        $target.css('background-color', '#F0EEEE' );
        // $target.css('background-image', 'none' )
        $('#research-areas h2').css('color', 'rgba(0,0,0,0.7)')
    }
}, {offset: '23%'});


