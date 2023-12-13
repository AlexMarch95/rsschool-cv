// working slider start
let offset = -470;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.dots.one').addEventListener('click' , function () {
    offset = offset + 470;
    if( offset > 0) {
        offset = 0 
    }
    sliderLine.style.left = -offset +'px';
})                
document.querySelector('.dots.two').addEventListener('click', function () {
    offset = 470;
    if(offset > 470 ) {
        offset = 470
    }
    sliderLine.style.left = -offset + 'px'
} )             
document.querySelector('.dots.three').addEventListener('click', function () {
    offset = 940
    if (offset > 940) {
        offset = 940
    }
    sliderLine.style.left = -offset + 'px';
})      
// working slider end 