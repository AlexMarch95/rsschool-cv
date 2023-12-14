// working slider start
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.dots.one').addEventListener('click' , function () {
    offset = 470;
    
    sliderLine.style.left = -offset +'px';
})                
document.querySelector('.dots.two').addEventListener('click', function () {
    offset = 950;
    
    sliderLine.style.left = -offset + 'px'
} )             
document.querySelector('.dots.three').addEventListener('click', function () {
    offset = 1430
   
    sliderLine.style.left = -offset + 'px';
})      
// working slider end 
document.querySelector('.arrow.One').addEventListener('click' , function () {
    offset = offset - 470;
    if (offset < -40  ) {
        offset = 1900
    }
    sliderLine.style.left = -offset + 'px'
})
document.querySelector('.arrow.Two').addEventListener('click' , function () {
    offset = offset + 470;
    sliderLine.style.left = -offset + 'px'
})