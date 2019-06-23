//box animation when hover

$("#main .item").each(function(e){
        $(this).on("mouseenter", function(){
            $("a", this).css("color", "white");
        }).on("mouseleave",function(){
            $("a", this).css("color", "black");
    })
})  


//when scroll down to research area, the background-color changes
var $body = $('body#main');
var $researchHeading = $('#research-areas-heading');

//////////////////////////////scrollmagic version//////////////////////////////////////
//int environment//
var controller = new ScrollMagic.Controller();

//scene 
var sceneChangeBg = new ScrollMagic.Scene({
		triggerElement: ('#research-areas-heading'),
	})
.on('enter', function(){
        $body.css('background-color', 'rgb(255, 229, 229)' )
})
.on('leave', function(){
        $body.css('background-color', '#F0EEEE' )
})
.setClassToggle('#research-areas-heading', 'changeTextColor')
// .addIndicators({
//     name: 'body color change'
// })
.addTo(controller);

