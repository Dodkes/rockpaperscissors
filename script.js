const container = document.getElementById("result-container");
const humanPoints = document.getElementById("human");
const computerPoints = document.getElementById("computer");
var pointsHuman = 0;
var pointsComputer = 0;
const humanImg = document.getElementById("human-pick");
const pcImg = document.getElementById("pc-pick");

const variants = ["scissors", "rock", "paper"];
const result = document.getElementById("result");

function choice(variant) {
  let randomChoice = variants[Math.floor(Math.random() * variants.length)];

  humanImg.src = `${variant}.png`;
  pcImg.src = `${randomChoice}.png`;
  document.getElementById("grid-result").style.display = "grid";
  if (variant === randomChoice) {
    calculate("Draw", "cyan");
  } else if (
    (variant === "scissors" && randomChoice === "paper") ||
    (variant === "rock" && randomChoice === "scissors") ||
    (variant === "paper" && randomChoice === "rock")
  ) {
    calculate("You won", "lightgreen");
  } else {
    calculate("You lost", "red");
  }
}

function calculate(message, color) {
  result.textContent = message;
  container.style.backgroundColor = color;
  container.style.display = "block";
  if (message === "You won") {
    humanPoints.textContent = pointsHuman += 1;
  } else if (message === "You lost") {
    computerPoints.textContent = pointsComputer += 1;
  }
}
