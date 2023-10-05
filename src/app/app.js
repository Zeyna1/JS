'use strict';

const imgArr = [
    {
        name: 'img1',
        src: './../src/assets/img/carousel/img1.jpg',
    },
    {
        name: 'img2',
        src: './../src/assets/img/carousel/img2.jpg',
    },
    {
        name: 'img3',
        src: './../src/assets/img/carousel/img3.jpg',
    },
    {
        name: 'img4',
        src: './../src/assets/img/carousel/img4.jpg',
    },
    {
        name: 'img5',
        src: './../src/assets/img/carousel/img5.jpg',
    },
];

const buttons = document.querySelectorAll('[data-carousel-button]');

let index = 0;
let slideCount = imgArr.length;

const settings = {
    duration: '1000',
    random: false, // * Make it randomly working or not
};

let interval;

function showSlide(i) {
    index = i;

    if (i < 0) index = slideCount - 1;
    else if (i >= slideCount) index = 0;
    const img = document
        .querySelector('.slider__images__img')
        .firstElementChild.setAttribute('src', imgArr[index].src);
}

function init(settings) {
    let prev;
    interval = setInterval(() => {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev);
            prev = index;
        } else {
            if (slideCount == index + 1) index = -1;

            index++;
            showSlide(index);
        }
        console.log(index);
        showSlide(index);
    }, settings.duration);
}

init(settings);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton;
        if (offset === 'prev') {
            index--;
            showSlide(index);

            console.log(index);
        } else {
            index++;
            showSlide(index);
            console.log(index);
        }
    });
    button.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    button.addEventListener('mouseleave', () => {
        init(settings);
    });
});
