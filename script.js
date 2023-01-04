// There will be a list of possible choices, ranging from 0 to 2, where:
// 0 - "Rock"
// 1 - "Paper"
// 2 - "Scissors"
const options = ["rock", "paper", "scissors"];

// Computer will select a number from 1 to 3, simulating possible choices
function getComputerPlay(){
    let selection = Math.round(Math.random() * 2);
    return options[selection];
}

function getFinalDecision(computerSelection, playerSelection){
    /*** 
     * getFinalDecision is a function to compare both choices and make a conclusion out of it.
     * Inputs: Computer Selection; User Selection;
     * Outputs: Result of the decision (0: Draw; True: Win; False: Loose)
     */

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // What happens to draws
    if (computerSelection === playerSelection) {
        console.log(`That was a draw! ${computerSelection} = ${playerSelection}`);
        return 0;
    }

    // Logic for different options
    // For Scissors
    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`You won! ${computerSelection} loses to ${playerSelection}.`);
        return true;
    }

    //For Rock
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log(`You won! ${computerSelection} loses to ${playerSelection}`);
        return true;
    }

    // For Paper
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log(`You won! ${computerSelection} loses to ${playerSelection}`);
        return true;
    }

    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return false;
}

function getWinner(pc_count, player_count){
    /***
     * getWinner is a function to get which player has more points and set it as the winner
     * 
     * Input: 
     *  pc_count: points made by the PC; 
     *  player_count: points made by the player;
     * 
     * Output:
     *  True: When the player is the winner
     *  False: When the PC is the winner
     *  0: When there is a draw.
     */

    if (player_count > pc_count){
        console.log("You are the winner.");
        return true;
    }
    else if (player_count == pc_count){
        console.log("There has been a draw.")
        return 0;
    }
    console.log("You have lost.")
    return false;
}

function game (){

    let pc_count = 0;
    let player_count = 0;
    
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerPlay();
        // Ask for user input
        let playerSelection = parseInt(
            prompt(`Type the number of your selection:
            1. Rock 
            2. Paper
            3. Scissors`)
            ) - 1;

        // 
        let result = getFinalDecision(computerSelection, options[playerSelection]);

        if (result === true){
            player_count++;
        } 
        else if (result === false){
            pc_count++;
        }

        console.log(`Player: ${player_count} | PC: ${pc_count}`);
    }

    getWinner(pc_count, player_count);

}
 

game();

// console.log(`Computer Selection: ${computerSelection}`);
// console.log(`Player Selection: ${playerSelection}`);
// console.log(getFinalDecision(computerSelection, playerSelection))