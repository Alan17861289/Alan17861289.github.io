//when scroll down to research area, the background-color changes
var $target = $('body');
var $address = $('#address');

$address.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        // $target.css('background', 'linear-gradient(to left bottom, #ff5b5b, #ff7d7b, #ff9c9a, #ffb9b8, #ffd6d6)' );
        $target.css('background', '#EDEBFF' )
        // $('#address h2').css('color', 'white')
    } else {
        console.log('leave');
        $target.css('background', 'rgb(255, 229, 229)');
        // $target.css('background-image', 'none' )
        // $('#address h2').css('color', 'rgba(0,0,0,0.7)')
    }
}, {offset: '30%'});