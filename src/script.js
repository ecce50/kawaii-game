window.addEventListener("load", () => {
  //housekeeping

  let currentGame; //making a variable that will store the new game created when the user presses Start

  function startGame() {
    console.log("Invoking startGame");
    currentGame = new Game();
    currentGame.start(); //calling the start method in the newly created instance

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeyStrokes = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];
      if (possibleKeyStrokes.includes(key)) {
        switch (key) {
          case "ArrowLeft":
          
            currentGame.player.directionX = -1;
            break;
          case "ArrowRight":
          
            currentGame.player.directionX = +1;
            break;
          case "ArrowUp":
           
            currentGame.player.directionY = -1;
            break;
          case "ArrowDown":
       
            currentGame.player.directionY = +1;
            break;
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeyStrokes = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];
      if (possibleKeyStrokes.includes(key)) {
        switch (key) {
          case "ArrowLeft":
          case "ArrowRight":
            currentGame.player.directionX = 0;
            break;

          case "ArrowUp":
          case "ArrowDown":
            currentGame.player.directionY = 0;
            break;
        }
      }
    });
  }

  const startBtn = document.querySelector("#start-button"); // identifying the element with the class "start-button"
  //const restartBtn = document.getElementById("#restart-button"); // as above, restart

  // looks for the element stored in startBtn and when it's clicked, executes the function startGame()
  startBtn.addEventListener("click", function () {
    startGame();
  });
});
