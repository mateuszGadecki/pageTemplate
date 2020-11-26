import { animatedElements, markers, animations } from './utils/base.js';

class AddAnimation {
  constructor(waypoint, className, animClassName, offset) {
    this.waypoint = waypoint;
    this.className = className;
    this.animClassName = animClassName;
    this.offset = offset;
  }

  animation() {
    this.waypoint.waypoint(
      (direction) => {
        if (direction === 'down') {
          this.className.attr('style', 'visibility: visible');
          this.className.addClass(`${this.animClassName}`);
          console.log('dziala');
        }
      },
      { offset: `${this.offset}%` }
    );
  }
}

// Home Page
new AddAnimation(
  markers.$homePage,
  animatedElements.$homePageTitle,
  animations.fadeInDown,
  0
).animation();
// About Us Section
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
// Our Offer Section
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
