let resultDiv = document.createElement("div");
let currentRound = document.createElement("div");
let scoreResult = document.createElement("div")
resultDiv.className = "result-div";

currentRound.textContent = "Click a button to play";

resultDiv.appendChild(currentRound);
resultDiv.appendChild(scoreResult);

document.body.append(resultDiv);

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomInt(3);
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter a choice, [1: Rock, 2: Paper, 3: Scissors]");
  return choice.toLowerCase();
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    currentRound.textContent = humanScore === 5 ? "Human Wins!" : "Computer Wins!";
    gameOver = true;

    for (const button of btns) {
      button.disabled = true;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  const options = ['rock', 'paper', 'scissors'];

  humanMove = options[humanChoice];
  computerMove = options[computerChoice];

  if (humanChoice === computerChoice) {
    currentRound.textContent = `Tie. ${humanMove} vs ${computerMove}`;
  } else if (
    humanChoice == 0 && computerChoice == 2 ||
    humanChoice == 1 && computerChoice == 0 ||
    humanChoice == 2 && computerChoice == 1
  ) {
    currentRound.textContent = `You win. ${humanMove} vs ${computerMove}`;
    humanScore++;
  } else {
    currentRound.textContent = `You lose. ${humanMove} vs ${computerMove}`;
    computerScore++;
  }
  scoreResult.textContent = `Scoreboard: [Player: ${humanScore}] [Computer: ${computerScore}]`;
  checkWinner();
}

let humanSelection;

function playGame(e) {
  if (gameOver) {
    return;
  }

  let choice = e.currentTarget.dataset.choice;
  if (choice === "rock") {
    humanSelection = 0;
  } else if (choice === "paper") {
    humanSelection = 1;
  } else if (choice === "scissors") {
    humanSelection = 2;
  } else {
    console.log("Error getting button info");
    return;
  }

  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

const btns = document.querySelectorAll(".btn");

for (const button of btns) {
  button.addEventListener("click", playGame)
}

