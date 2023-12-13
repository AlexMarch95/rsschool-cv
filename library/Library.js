let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.dots.one').addEventListener('click', function () {
    offset = offset + 450 ; 
    if (offset > 1200) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
})     
document.querySelector('.dots.three').addEventListener('click', function () {
    offset = offset - 450 ; 
    if (offset < 0) {
        offset = 1350
    }
    sliderLine.style.left = -offset + 'px';
})                                                                                                                                                                                               