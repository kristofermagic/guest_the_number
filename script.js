let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => { return Math.floor(Math.random() * 10) + 1 };

// Determines which player wins (human, computer)
// based on which guess is closest to the target. If both player are tied, the human user should win
// Return true: human player win, false: computer win
let compareGuesses = (human, computer, secret) => {
    if (human == computer) return true;

    const humanDistance = Math.abs(target-human);
    const computerDistance = Math.abs(target-computer);
    if (humanDistance < computerDistance) return true;

    return false;
}

// This function increase the winner's score after each round
const updateScore = ( winner ) => {
  if (winner=='human') {
    humanScore++;
  } 
    
  computerScore++;
}

// Update the round number after each round 
const advanceRound = () => {
  currentRoundNumber++;
}