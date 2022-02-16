// /////////CITY PIC VARIABLES//////////////////

// // const jsGallery = document.querySelector('.gallery');
// const jsGalleryItem = document.querySelectorAll('.carousel-item');
// console.log(jsGallery);
// console.log(jsGalleryItem);



// /////////TRANSITIONING THE SLIDES////////////

// const slideCount =jsGalleryItem.length;
// const slideWidth = jsGalleryItem[0].offsetWidth;
// console.log(slideCount);

// //////////////TIMER/////////////////////

// let currentSlide =1;
// function transitionSlide() {
//   console.log('Called');
//   if (currentSlide < slideCount){
//     jsGallery.style.transform = `translateX(-${1000*currentSlide}px)`;
//     currentSlide++
//   } else {
//     jsGallery.style.transform = 'translateX(0)';
//   }
// }
//  setInterval(transitionSlide, 5000);



// /////////////// CODE FROM YOUTUBE EX ///////////////

// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = './assets/images/san-franciso-landing.jpg';
// images[1] = './assets/images/london-landing.webp';
// images[2] = './assets/images/sydney-landing.jpg';
// images[3] = './assets/images/seattle-landing.jpg';

// function changeSlide(){
//     document.galleryItem.src = images[i];

//     if(i<images.length-1){
//         i++;
//     } else {
//         i=0;
//     }

//     setTimeout("changeSlide", time);
// }

// window.onload = changeSlide;