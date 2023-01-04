function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  if (i == 0) {
    return "ROCK";
  } else if (i == 1) {
    return "PAPER";
  } else if (i == 2) {
    return "SCISSORS";
  }
}

function getPlayerChoice() {
  let playerSelection = prompt(
    "Choose your weapon!",
    "Rock, Paper, or scissors"
  ).toUpperCase();
    if (playerSelection == "ROCK"){
        return playerSelection
    } 
    else if (playerSelection == "SCISSORS"){
        return playerSelection
    }
    else if (playerSelection == "PAPER"){
        return playerSelection
    } else {
        return "You have failed to choose"
    }
}

let playerScore = 0
let computerScore = 0

function playRound() {
   
    let selection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log({selection, computerSelection});
  if (selection == computerSelection) {
    console.log("Tie");
  }
  else if (selection == "You have failed to choose"){
    computerScore ++ 
    console.log("You lost the round, you failed to choose a weapon")
  }
  else if (selection == "ROCK" && computerSelection == "SCISSORS"){
    playerScore ++
    console.log("You won the round")
  }
  else if (selection == "PAPER" && computerSelection == "ROCK"){
    playerScore ++
    console.log("You won the round")
  }
  else if (selection == "SCISSORS" && computerSelection == "PAPER"){
    playerScore ++
    console.log("You won the round")
  } else {
    computerScore ++
    console.log("You lost the round")
  }
 return playerScore && computerScore

}



function game(){
    for (let i = 0; ; ) {
        if (playerScore === 3) { break; }
        else if (computerScore === 3 ) { break; }
    playRound()      
}
if (computerScore == 3){
    console.log ("You have lost the battle")
} else if (playerScore == 3){
    console.log("Nice work! You have won the battle")
}
}


console.log(game())

console.log("Refresh page to play again")