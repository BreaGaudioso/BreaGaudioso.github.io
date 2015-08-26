var playerScore = 0
var compScore = 0
var tieScore = 0
var counter = 0
var winCounter = 0
var lossCounter = 0
var	tieCounter = 0


$(function() {
    console.log( "ready!" );

var compare = function (choice1, choice2) {
	if(choice1 === choice2) {
		tieCounter ++
		return "Tie!";
	}
	else if(choice1 === "rock") 
    if (choice2 === "scissors") {
    	winCounter ++
    	$('#answer').prepend("Computer chose scissors. <br> You win");
    } else {
    	lossCounter ++
    	$('#answer').prepend("Computer chose paper. <br> Computer wins");
    }
	else if (choice1 === "paper")
    if (choice2 === "rock"){
    	winCounter ++
    	$('#answer').prepend("Computer chose rock. <br> You win");
    } else {
    	lossCounter ++
    	$('#answer').prepend("Computer chose scissors. <br> Computer wins");
    }
	else if (choice1 === "scissors")
    if (choice2 === "rock"){
    		lossCounter ++
    	$('#answer').prepend("Computer chose rock. <br> Computer wins");
    } else {
    	winCounter ++
    	$('#answer').prepend("Computer chose paper. <br> You win");
    }
 };
var counterLog= "Games played: " + counter + '!<br>' ; 
var winLog= "Games won: " + winCounter + '!<br>' ; 
var lossLog= "Games loss: " + lossCounter + '!<br>' ; 
var tieLog= "Games tied: " + tieCounter+ '!<br>'; 
var items= ['Rock', 'Paper' , 'Scissors']
var playerChoice


	$('body').on('click', '.game', function(e){
			playerChoice = this.innerText
			console.log(playerChoice);
			items= ['Rock', 'Paper' , 'Scissors'];
			randomChoice =items [Math.floor(Math.random()*items.length)];
	$('#answer').html(compare(playerChoice,randomChoice)+ counterLog + winLog + lossLog + tieLog);
	});

});

