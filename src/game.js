class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-start");
    this.gameContainer = document.querySelector("#game-container");
    this.gameLoseScreen = document.querySelector("#game-lose");
    this.gameWinScreen = document.querySelector("#game-win");

    this.width = 800;
    this.height = 600;
    this.player = new Player(this.gameContainer);
    this.projectiles = [new Projectile(this.gameContainer)];
    this.animateId;
    this.isGameLost = false;
    this.isGameWon = false;
    this.lives = 3;
    this.livesCounter = document.querySelector("#lives");
    this.score = 0;
    this.scoreCounter = document.querySelector("#score");
  }

  start() {
    console.log("Start button clicked");
    this.gameContainer.style.width = `${this.width}px`; // setting its width
    this.gameContainer.style.height = `${this.height}px`; //setting its height

    this.startScreen.setAttribute("class", "game-start-hidden");
    this.gameContainer.setAttribute("class", "game-container-visible");

    this.gameLoop();
  }

  gameLoop() {
    //updating what is on the screen
    this.update();

    if (this.animateId % 50 === 0) {
      this.projectiles.push(new Projectile(this.gameContainer));
    }
    if (this.isGameWon) {
      this.winGame();
    } else if (this.isGameLost) {
      this.loseGame();
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    this.player.move();
    // const projectilesToKeep = [];
    this.projectiles.forEach((projectile, index) => {
      projectile.move();
      if (this.player.didCollide(projectile)) { // deals with what happens when a projectile hits the player
        console.log(this.projectiles);
        projectile.element.remove();
        this.lives -= 1;
        this.livesCounter.innerText = `${this.lives}`;
      } else if (
        projectile.top > this.gameContainer.offsetHeight - projectile.height ||
        projectile.left > this.gameContainer.offsetWidth - projectile.width
      ) {
        projectile.element.remove(); //removing the sprite from the game container
        this.score += 1; // updating the score by 1
        this.scoreCounter.innerText = `${this.score}`; // updating the score shown with the current score
        this.projectiles.splice(index, 1); // removing the current projectile
      }
    });
    //this.projectiles = projectilesToKeep;
    if (this.score >= 20) {
      console.log(this.score);
      this.isGameWon = true;
    }
    if (this.lives <= 0) {
      this.isGameLost = true;
    }
  }

  loseGame() {
    this.player.element.remove();
    this.projectiles.forEach((projectile) => projectile.element.remove());
    this.gameContainer.setAttribute("class", "game-container-hidden");
    this.gameLoseScreen.setAttribute("class", "game-lose-visible");
  }

  winGame() {
    this.player.element.remove();
    this.projectiles.forEach((projectile) => projectile.element.remove());
    this.gameContainer.setAttribute("class", "game-container-hidden");
    this.gameWinScreen.setAttribute("class", "game-win-visible");
  }
}
