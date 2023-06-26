window.addEventListener("load", () => {
  //housekeeping

  let currentGame; //making a variable that will store the new game created when the user presses Start

  function startGame() {
    console.log("Something works"); //although it doesn't
    // currentGame = new Game();
    // currentGame.start() //calling the start method in the newly created instance
  }


  const startBtn = document.querySelector("#start-button"); // identifying the element with the class "start-button"
  //const restartBtn = document.getElementById("#restart-button"); // as above, restart

  // looks for the element stored in startBtn and when it's clicked, executes the function startGame()
  startBtn.addEventListener("click", function () {
    console.log("Am I even working?");
    startGame();
  });
});
