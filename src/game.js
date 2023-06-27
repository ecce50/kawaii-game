class Game {
  //this is where the gameLoop() goes. It's the class for each "game" that is played calling all the relevant functions
  constructor() {
    this.startScreen = document.querySelector("#game-start"); //needed so that we can hide the first screen when we start a game
    this.gameContainer = document.querySelector("#game-container"); // each querySelector is identifying a part of the HTML document and storing it in a variable so that it can be manipulated
    this.endScreen = document.querySelector("#game-end"); //the end screen needs creating for when the game ends
    this.width = 600;
    this.height = 500;
    this.player = new Player(this.gameContainer);
    this.projectiles = [new Projectile(this.gameContainer)];
  }

  start() {
    this.gameContainer.style.width = `${this.width}px`; // setting its width
    this.gameContainer.style.height = `${this.height}px`; //setting its height
    this.startScreen.style.display = "none"; //Hide the game intro screen by adding a style inline (not in the css)
    this.gameContainer.style.display = "block"; //showing the game container
    this.gameLoop();
  }

  gameLoop() {
    //updating what is on the screen
    this.update();

    if (Math.random() > 0.98) {
      this.projectiles.push(new Projectile(this.gameScreen));
    }

    requestAnimationFrame(() => this.gameLoop()); //why? 02:39.
  }

  update() {
    this.player.move();
    this.projectiles.forEach((projectile) => {
      projectile.move();
    });
  }
}
