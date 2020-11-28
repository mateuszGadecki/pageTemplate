export default class AddAnimation {
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
        }
      },
      { offset: `${this.offset}%` }
    );
  }
}
