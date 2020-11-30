import {
  animatedElements,
  markers,
  animations,
  sliders,
  hover,
} from './utils/base.js';
import AddAnimation from './utils/addAnimation.js';
import { swiperOptions, owlOptions } from './utils/sliders.js';

/* ------------------------------COUNTER------------------------------ */
// Fun Fact Section------------------------------
markers.$funFact.waypoint(
  (direction) => {
    if (direction === 'down') {
      $('.counter').countTo();
    }
  },
  { offset: '50%' }
);

/* ------------------------------SLIDERS------------------------------ */
// Our Customers Section------------------------------
const swiper = new Swiper(sliders.customers, swiperOptions);

// Our Team Section------------------------------
$('.owl-carousel').owlCarousel(owlOptions);

/* ------------------------------HOVER EFFECT------------------------------ */
// Our Offer Section------------------------------
const box = [
  hover.box_1,
  hover.box_2,
  hover.box_3,
  hover.box_4,
  hover.box_5,
  hover.box_6,
];

box.forEach((el) => {
  el.addEventListener('mouseover', () => {
    let box = el.className.split(' ')[0];
    let icon = document.querySelector(`.js-anim_${box.split('_')[1]}`);
    console.log(box);
    console.log(icon);

    icon.classList.remove('out');
    icon.classList.add('over');
  });
  el.addEventListener('mouseout', () => {
    let box = el.className.split(' ')[0];
    let icon = document.querySelector(`.js-anim_${box.split('_')[1]}`);
    icon.classList.add('out');
    icon.classList.remove('over');
  });
});

/* ------------------------------ANIMATIONS------------------------------ */
// Home Page------------------------------
new AddAnimation(
  markers.$homePage,
  animatedElements.$homePageTitle,
  animations.fadeInDown,
  0
).animation();
// About Us Section------------------------------
new AddAnimation(
  markers.$aboutUs,
  animatedElements.$aboutUsTitle,
  animations.swing,
  85
).animation();
new AddAnimation(
  markers.$aboutUs,
  animatedElements.$aboutUsDes,
  animations.lightSpeedLeft,
  45
).animation();
new AddAnimation(
  markers.$aboutUs,
  animatedElements.$bar_1,
  animations.fadeInUpBig,
  50
).animation();
new AddAnimation(
  markers.$aboutUs,
  animatedElements.$bar_2,
  animations.fadeInUpBig,
  50
).animation();
new AddAnimation(
  markers.$aboutUs,
  animatedElements.$bar_3,
  animations.fadeInUpBig,
  50
).animation();
// Our Offer Section------------------------------
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$offerTitle,
  animations.fadeIn,
  85
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_1,
  animations.fadeInLeftBig,
  60
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_2,
  animations.fadeInDownBig,
  60
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_3,
  animations.fadeInRightBig,
  60
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_4,
  animations.fadeInLeftBig,
  50
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_5,
  animations.fadeInUpBig,
  50
).animation();
new AddAnimation(
  markers.$ourOffer,
  animatedElements.$box_6,
  animations.fadeInRightBig,
  50
).animation();
// Our Team Section------------------------------
new AddAnimation(
  markers.$ourTeam,
  animatedElements.$ourTeamTitle,
  animations.bounce,
  75
).animation();
new AddAnimation(
  markers.$ourTeam,
  animatedElements.$ourTeamContent,
  animations.fadeIn,
  40
).animation();
// How It Works Section------------------------------
new AddAnimation(
  markers.$howItWorks,
  animatedElements.$howItWorksTitle,
  animations.flipInY,
  70
).animation();
new AddAnimation(
  markers.$howItWorks,
  animatedElements.$anim_1,
  animations.fadeInDown,
  50
).animation();
new AddAnimation(
  markers.$howItWorks,
  animatedElements.$anim_2,
  animations.fadeInDown,
  50
).animation();
new AddAnimation(
  markers.$howItWorks,
  animatedElements.$anim_3,
  animations.fadeInDown,
  50
).animation();
new AddAnimation(
  markers.$howItWorks,
  animatedElements.$anim_4,
  animations.fadeInDown,
  50
).animation();
// Fun Facts Section------------------------------
new AddAnimation(
  markers.$funFact,
  animatedElements.$facts,
  animations.fadeIn,
  50
).animation();
// Contact Section------------------------------
new AddAnimation(
  markers.$contact,
  animatedElements.$contactTitle,
  animations.fadeInDownBig,
  70
).animation();
new AddAnimation(
  markers.$contact,
  animatedElements.$data_1,
  animations.fadeInLeftBig,
  50
).animation();
new AddAnimation(
  markers.$contact,
  animatedElements.$data_2,
  animations.fadeInLeftBig,
  50
).animation();
new AddAnimation(
  markers.$contact,
  animatedElements.$data_3,
  animations.fadeInLeftBig,
  50
).animation();
new AddAnimation(
  markers.$contact,
  animatedElements.$contactForm,
  animations.swing,
  50
).animation();
// Footer------------------------------
new AddAnimation(
  markers.$footer,
  animatedElements.$footerText,
  animations.pulse,
  60
).animation();
