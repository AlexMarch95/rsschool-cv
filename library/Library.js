// working slider start
let offset = -470;
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