let humanScore = 0;
let computerScore = 0;

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


function playRound(humanChoice, computerChoice) {
  const options = ['rock', 'paper', 'scissors'];

  humanMove = options[humanChoice];
  computerMove = options[computerChoice];

  if (humanChoice === computerChoice) {
    console.log(`Tie. ${humanMove} vs ${computerMove}`);
  } else if (
    humanChoice == 0 && computerChoice == 2 ||
    humanChoice == 1 && computerChoice == 0 ||
    humanChoice == 2 && computerChoice == 1
  ) {
    console.log(`You win!. ${humanMove} vs ${computerMove}`);
    humanScore++;
  } else {
    console.log(`You lose!. ${humanMove} vs ${computerMove}`);
    computerScore++;
  }
  console.log(`Scoreboard: [Player: ${humanScore}] [Computer: ${computerScore}]`);
}


function playGame() {
  for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  }
}

playGame();