const container = document.getElementById("result-container");
const humanPoints = document.getElementById("human");
const computerPoints = document.getElementById("computer");
let pointsHuman = 0;
let pointsComputer = 0;
const humanImg = document.getElementById("human-pick");
const pcImg = document.getElementById("pc-pick");

const variants = ["scissors", "rock", "paper"];
const resultElement = document.getElementById("result");

function choice(variant) {
  let randomChoice = variants[Math.floor(Math.random() * variants.length)];

  humanImg.src = `./assets/${variant}.png`;
  pcImg.src = `./assets/${randomChoice}.png`;
  document.getElementById("grid-result").style.display = "grid";
  if (variant === randomChoice) {
    result("Draw", "cyan");
  } else if (
    (variant === "scissors" && randomChoice === "paper") ||
    (variant === "rock" && randomChoice === "scissors") ||
    (variant === "paper" && randomChoice === "rock")
  ) {
    result("You won", "lightgreen");
  } else {
    result("You lost", "red");
  }
}

function result(message, color) {
  resultElement.textContent = message;
  container.style.backgroundColor = color;
  container.style.display = "block";
  if (message === "You won") {
    humanPoints.textContent = pointsHuman += 1;
  } else if (message === "You lost") {
    computerPoints.textContent = pointsComputer += 1;
  }
}
