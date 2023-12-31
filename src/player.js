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
    this.element.src = "./images/donut_character.png";
    this.element.className = "glow";

    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameContainer.appendChild(this.element); //passing this element (the sprite) to the game container
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

  didCollide(projectile) {
    const playerRect = this.element.getBoundingClientRect(); //find the outer edges of the player rectangle
    const projectileRect = projectile.element.getBoundingClientRect(); //finding the edges of the projectile

    if ( //checking for an overlap between the two elements
      playerRect.left < projectileRect.right &&
      playerRect.right > projectileRect.left &&
      playerRect.top < projectileRect.bottom &&
      playerRect.bottom > projectileRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
