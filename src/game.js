class Game { //this is where the gameLoop() goes. It's the class for each "game" that is played calling all the relevant functions
    constructor() {
        this.startScreen = document.querySelector('#game-start'); //needed so that we can hide the first screen when we start a game
        this.gameContainer = document.querySelector('#game-container'); // each querySelector is identifying a part of the HTML document and storing it in a variable so that it can be manipulated
        this.endScreen = document.querySelector('#game-end');
        this.height = 600;
        this.width = 800;

    }

    start() {
      this.gameContainer.style.width = `${this.width}px`;
      this.gameContainer.style.height = `${this.height}px`;
      this.startScreen.style.display = "none"; //Hide the game intro screen by adding a style inline (not in the css)
    }
}
