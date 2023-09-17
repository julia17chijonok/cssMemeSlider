const slidesWrapper = document.querySelector('.meme__wrapper'),
      slidesField = document.querySelector('.meme__inner'),
      width = window.getComputedStyle(slidesWrapper).width,
      slides = document.querySelectorAll('.meme__slide'),
      sliderDot = document.querySelectorAll('.meme__dot-wrapper'),
      dots = document.querySelectorAll('.meme__dot'),
      phrase = document.querySelector('.meme__phrase'),
      slide = slides[0];
let widthSlide = window.getComputedStyle(slide).width,
      slideIndex = 1,
      offset = 0;

      

function removeDotActive(){
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
}
    
function slideChangeActive(){
    removeDotActive();
    console.log((+slideIndex) - 1);
    dots[(+slideIndex) - 1].classList.add('active');
}
    
sliderDot.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        phrase.style.cssText = 'opacity: 0';
        const slideTo = e.target.getAttribute('slide-to');
        slideIndex = +slideTo;
        console.log(slideIndex);
        offset = (parseFloat(widthSlide)) * (slideIndex - 1);
        slideChangeActive();
        if (slideIndex == 1) {
            setTimeout(() => {
                phrase.style.cssText = 'opacity: 1';
                phrase.textContent = "Let's get started!";
            }, 300);  
        } else if (slideIndex == 2) {
            setTimeout(() => {
                phrase.style.cssText = 'opacity: 1';
                phrase.textContent = "Me when I got the highest score";
            }, 300); 
        } else if (slideIndex == 3) {
            setTimeout(() => {
                phrase.style.cssText = 'opacity: 1';
                phrase.textContent = "When I can't find a stupid error in the code";
            }, 300); 
        }  
        else if (slideIndex == 4) {
            setTimeout(() => {
                phrase.style.cssText = 'opacity: 1';
                phrase.textContent = "I hope you like my work ;)";
            }, 300);   
        }    
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
});         