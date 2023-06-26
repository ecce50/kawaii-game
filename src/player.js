class Player {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.width = 80; //the width and height of the player instance, not related to other this.width i.e. from gameContainer
        this.height = 80;
        this.element = document.createElement('img');
        this.element.src("../images/donut_temp.png");
    }
}