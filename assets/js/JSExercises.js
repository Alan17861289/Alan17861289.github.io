$(document).ready(() => {
    $('.JSExercise').on('mouseenter', (event) => {
     $(event.currentTarget).addClass('exerciseHover');
    });
    
    $('.JSExercise').on('mouseleave', (event) => {
     $(event.currentTarget).removeClass('exerciseHover');
    })
});