class Player {
  constructor(gameContainer) {
    this.gameContainer = gameContainer; //needed because we need to reference the properties gameContainer object
    this.width = 80; //the width and height of the player instance, not related to other this.width i.e. from gameContainer
    this.height = 80;
    this.top = 200;
    this.left = 200;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img"); //the actual character
    this.element.src = "../images/donut_temp.png";

    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameContainer.appendChild(this.element); //???
  }

  move() {
    this.top += this.directionY;
    this.left += this.directionX;
    if (this.left < 10) {
      //left border
      this.left = 10; //bounceback to the center?
    }
    if (this.top < 10) {
      //top border
      this.top = 10;
    }
    if (this.left > this.gameContainer.offsetWidth - this.width) {
      //right border
      this.left = this.gameContainer.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameContainer.offsetHeight - this.height) {
      //right border
      this.top = this.gameContainer.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
