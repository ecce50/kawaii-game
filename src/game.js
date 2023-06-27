class Game {
  //this is where the gameLoop() goes. It's the class for each "game" that is played calling all the relevant functions
  constructor() {
    this.startScreen = document.querySelector("#game-start"); //needed so that we can hide the first screen when we start a game
    this.gameContainer = document.querySelector("#game-container"); // each querySelector is identifying a part of the HTML document and storing it in a variable so that it can be manipulated
    this.gameEndScreen = document.querySelector("#game-end"); //the end screen needs creating for when the game ends
    this.width = 800;
    this.height = 600;
    this.player = new Player(this.gameContainer);
    this.projectiles = [new Projectile(this.gameContainer)];
    this.animateId;
    this.isGameOver = false;
    this.lives = 3;
    this.livesCounter = document.querySelector('#lives');
    this.score = 0;
    this.scoreCounter = document.querySelector("#score");
  }

  start() {
    this.gameContainer.style.width = `${this.width}px`; // setting its width
    this.gameContainer.style.height = `${this.height}px`; //setting its height
    this.startScreen.style.display = "none"; //Hide the game intro screen by adding a style inline (not in the css)
    this.gameContainer.style.display = "flex"; //showing the game container
    this.gameLoop();
  }

  gameLoop() {
    //updating what is on the screen
    this.update();

    if (this.animateId % 30 === 0) {
      this.projectiles.push(new Projectile(this.gameContainer));
    }
    if (this.isGameOver) {
      this.endGame();
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop()); //why? 02:39.???
    }
  }

  update() {
    this.player.move();
   // const projectilesToKeep = []; 
    this.projectiles.forEach(projectile => {
      projectile.move(); //go through the projectile array and execute move() on each item
      if (this.player.didCollide(projectile)) {
        console.log(this.projectiles);
        projectile.element.remove();
        this.lives -= 1;
        this.livesCounter.innerText = `${this.lives}`
      } else if (projectile.top > this.gameContainer.offsetHeight - projectile.height) {
        this.score += 100;
        this.scoreCounter.innerText = `${this.score}`;

        projectile.element.remove();
      } else {
     //   projectilesToKeep.push(projectile);
      }
    });
    //this.projectiles = projectilesToKeep;

    if (this.lives <= 0) {
      this.isGameOver = true;
    }
  }

  endGame() {
    this.player.element.remove();
    this.projectiles.forEach(projectile => projectile.element.remove());
    this.gameContainer.style.display = "none";
    this.gameEndScreen.style.display = "flex";
  } 
}
