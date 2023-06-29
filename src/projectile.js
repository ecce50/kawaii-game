class Projectile {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;

    this.verticalOrientation;

    if (randomNumber(1, 2) === 1) {
      this.verticalOrientation = true;
      this.left = randomNumber(0, 800);
      this.top = 0;
    } else {
      this.verticalOrientation = false;

      this.top = randomNumber(0, 600);
      this.left = 0;
    }

   

    this.element = document.createElement("img");
    const imgNumber = randomNumber(1, 3);
    
    switch (imgNumber) {
      case 1:
        this.element.src = "./images/drink_enemy.png";
        const drinkSizeMultiplier = 8;
         this.width = 240 / drinkSizeMultiplier;
         this.height = 426 / drinkSizeMultiplier;
        break;
      case 2:
        this.element.src = "./images/eclair_enemy.png";
        const eclairSizeMultiplier = 8;
         this.width = 640 / eclairSizeMultiplier;
         this.height = 240 / eclairSizeMultiplier;
        break;
      case 3:
        this.element.src = "./images/lolly_enemy.png";
        const lollySizeMultiplier = 8;
         this.width = 240 / lollySizeMultiplier;
         this.height = 612 / lollySizeMultiplier;
        break;
    }

    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameContainer.appendChild(this.element); //When a new projectile is created, this adds it to the game container
  }

  move() {
    if (this.verticalOrientation === true) {
      this.top += randomNumber(1, 10);
      this.updatePosition();
      console.log("update top" + this.top);
    } else {
      this.left += randomNumber(1, 10);
      this.updatePosition();
      console.log("update left" + this.left);
    }
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
