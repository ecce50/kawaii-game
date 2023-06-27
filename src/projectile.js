class Projectile {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;

    this.verticalOrientation;

    if (Math.floor(Math.random() * 100) % 2 === 0) {
      this.verticalOrientation = true;
      //   console.log("vertical");
      this.left = Math.floor(Math.random() * 800 + 50);
      this.top = 0;
      console.log(`V top: ${this.top} / left: ${this.left}`);
    } else {
      this.verticalOrientation = false;

      this.top = Math.floor(Math.random() * 800);
      this.left = 0;
      console.log(`H top: ${this.top} / left: ${this.left}`);
    }

    this.width = 36;
    this.height = 36;

    this.element = document.createElement("img");
    this.element.src = "../images/bad_donut_temp.png";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameContainer.appendChild(this.element); //When a new projectile is created, this adds it to the game container
  }

  move() {
    if (this.verticalOrientation === true) {
      this.top += 3;
      this.updatePosition();
      console.log("update top" + this.top);
    } else {
      this.left += 3;
      this.updatePosition();
      console.log("update left" + this.left);
    }
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
