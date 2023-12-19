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
document.querySelector('.arrow.One').addEventListener('click' , function () {
    offset = offset + 470;
    if (offset > 0) {
        offset = -1900
    }
    sliderLine.style.left = offset + 'px'
})
document.querySelector('.arrow.Two').addEventListener('click' , function () {
    offset = offset - 470;
    if (offset < -1901) {
        offset = 0
    }
    sliderLine.style.left = offset + 'px'
})
// working slider end

// burger start
document.addEventListener ("DOMContentLoaded" , function () {
   document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open')
   })
})
// burger end
