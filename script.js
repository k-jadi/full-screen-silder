const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling) {
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else {
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // check for prev slide
    if(current.previousElementSibling) {
        // add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }else {
        //Add current to start
        slides[slides.length].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//button event
next.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
} );
prev.addEventListener('click', prevSlide);


// Auto Slide
if(auto) {
    //Run next  slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}