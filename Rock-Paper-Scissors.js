//computer randomly picks R/P/S, store in variable computerSelection
function computerPlay(){
	let compChoice = Math.floor(Math.random()*3) + 1;
	if(compChoice == 1){
		return 'Rock';
	} else if(compChoice == 2){
		return 'Paper';
	}
	return 'Scissors';
}
//compare playerSelection with computerSelection using rules of R,P,S
function playRound(playerSelection, computerSelection){
	switch(computerSelection){
		case "Rock":
			if(playerSelection == 'rock'){
				return "tie";
			}
			else if(playerSelection == 'paper'){
				return false;
			}
			return true;
			break;
		case "Paper":
			if(playerSelection == 'paper'){
				return "tie";
			}
			else if(playerSelection == 'scissors') {
				return false;
			}
			return true;
			break;
		case "Scissors":
			if(playerSelection == 'scissors'){
				return "tie";
			}
			else if(playerSelection == 'rock'){
				return false;
			}
			return true;
			break;
	}
}

function game(){
	let playerScore = 0;
	let computerScore = 0;
	let numberOfTies = 0;
	
	for(i = 1; i < 6; i++){
	//store computer's RPS choice
	let computerSelection = computerPlay();

	//player selects R/P/S, store in variable playerSelection
	let playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors: ");

	//display player & computer choices
	console.log("Computer Selection: " + computerSelection);	
	console.log("Player Choice: " + playerSelection); 

	//
	playerSelection = playerSelection.toLowerCase();
	((playerSelection == 'rock') || (playerSelection == 'paper') || (playerSelection == 'scissors')) ? true : alert("Please enter Rock, Paper, or scissors");	

	//Determine winner and output result to user
	switch(playRound(playerSelection, computerSelection)){
		case "tie":
			console.log("It's a tie!");
			numberOfTies++;
			break;
		case true:
			console.log("You lose");
			computerScore++;
			break;
		case false:
			console.log("You win!")
			playerScore++;
	}
	}
	console.log("Your score: " + playerScore);
	console.log("Computer's score: " + computerScore);
	console.log("Number of Ties: " + numberOfTies);
	if(playerScore > computerScore){
		console.log("You win!");
	}
	else if (playerScore < computerScore){
		console.log("You lose!")
	}
	else {
		console.log("It's a tie!");
	}
}