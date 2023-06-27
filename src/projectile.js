class Projectile {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = 80;
    this.height = 80;

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
    this.top += 3;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
