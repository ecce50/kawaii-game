window.addEventListener("load", () => {
  //housekeeping

  let currentGame; //making a variable that will store the new game created when the user presses Start

  function startGame() {
    console.log("Invoking startGame");
    currentGame = new Game();
    currentGame.start(); //calling the start method in the newly created instance

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const movementSpeed = 3;
      const possibleKeyStrokes = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];
      if (possibleKeyStrokes.includes(key)) {
        switch (key) {
          case "ArrowLeft":
            currentGame.player.directionX = 0 - movementSpeed;
            break;
          case "ArrowRight":
            currentGame.player.directionX = movementSpeed;
            break;
          case "ArrowUp":
            currentGame.player.directionY = 0 - movementSpeed;
            break;
          case "ArrowDown":
            currentGame.player.directionY = movementSpeed;
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

  const startBtn = document.querySelector(".start-button");
  startBtn.addEventListener("click", function () {
    startGame();
  });

  const restartBtn = document.querySelectorAll(".restart-button");
  let clickEvent = () => {
    location.reload();
  }
  restartBtn.forEach((item) => {
    item.addEventListener("click", clickEvent);
  });
});

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const music = new Audio("path");
const muteButton = document.querySelector(".mute-button");

window.onload = () => {
  muteButton.innerText = "Unmute";
  muteButton.addEventListener("click", () => {
    const buttonText = muteButton.innerText;
    if (buttonText === "Unmute") {
      muteButton.innerText = "Mute";
      music.play();
    } else {
      muteButton.innerText = "Unmute";
      music.pause;
    }
  });
};
