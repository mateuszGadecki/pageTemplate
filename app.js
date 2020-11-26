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
        const className = this.className;
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
