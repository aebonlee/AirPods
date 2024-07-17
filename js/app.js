document.addEventListener('DOMContentLoaded', function(){
    const scaleImg = document.querySelector('.people');
    const fadeIn = document.querySelector('.txt');
    scaleImg.classList.add('scaleImg');
    fadeIn.classList.add('fadeIn');
})

function fadeInImg() {
    const fadeInImg = document.querySelector('.vid img:nth-child(2)');
    fadeInImg.style.opacity=1;
}

function fadeOutImg() {
    const fadeInImg = document.querySelector('.vid img:nth-child(2)');
    fadeInImg.style.opacity=0;
}