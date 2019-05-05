var $target = $('body');
var $research1 = $('#research1');
var $research2 = $('#research2');
var $research3 = $('#research3');

$research1.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        // $target.css('background', 'linear-gradient(to left bottom, #ff5b5b, #ff7d7b, #ff9c9a, #ffb9b8, #ffd6d6)' );
        $target.css('background-color', '#FFF2F2' )
    } else {
        console.log('leave');
        $target.css('background-color', '#F0EEEE' );
        // $target.css('background-image', 'none' )
    }
}, {offset: '20%'});


$research2.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        // $target.css('background', 'linear-gradient(to left bottom, #ff5b5b, #ff7d7b, #ff9c9a, #ffb9b8, #ffd6d6)' );
        $target.css('background-color', '#FCFBED' )
    } else {
        console.log('leave');
        $target.css('background-color', '#FFF2F2' );
        // $target.css('background-image', 'none' )
    }
}, {offset: '20%'});


$research3.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        // $target.css('background', 'linear-gradient(to left bottom, #ff5b5b, #ff7d7b, #ff9c9a, #ffb9b8, #ffd6d6)' );
        $target.css('background-color', '#F6F5FF')
    } else {
        console.log('leave');
        $target.css('background-color', '#F0EEEE' );
        // $target.css('background-image', 'none' )
    }
}, {offset: '20%'});