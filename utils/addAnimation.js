export class AddAnimation {
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

export class BarAnimation {
  constructor(barName, length) {
    this.barName = barName;
    this.length = length;
  }

  move() {
    let length, i, width, id;
    length = this.length;
    i = 0;
    if (i == 0) {
      i = 1;
      const elem = this.barName;
      width = 0;
      id = setInterval(frame, 35);
      function frame() {
        if (width <= length) {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  }
}
