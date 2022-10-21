"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const bodyBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    showMessage("❌ No Number!");
  } else if (guess > 20 || guess < 1) {
    showMessage("⚠ Between 1 and 20");
  } else if (guess === secretNumber) {
    showMessage("🎁 Correct Number!");

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;

    document.querySelector(".number").textContent = secretNumber;

    bodyBackground("#60b347");

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".check").textContent = "Matched!";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("😭 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage("Start guessing...");

  bodyBackground("#222");

  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".check").textContent = "Check!";

  document.querySelector(".score").textContent = score;
});
