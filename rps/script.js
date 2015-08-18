
var bigD= document.querySelectorAll('div')[0];
var choice
var playerScore = 0
var compScore = 0
var tieScore = 0
var counter = 0
var winCounter = 0
var lossCounter = 0
var	tieCounter = 0


'paper' > 'rock';
'rock' > 'scissors';
'scissors' > 'paper';


bigD.addEventListener("click", function(e){
	choice = e.target.innerText;
	console.log(e.target.innerText);
	items= ['Rock', 'Paper' , 'Scissors']
	random = items[Math.floor(Math.random()*items.length)]
	answer = document.querySelectorAll('div')[4];
	humanChoice= 'You chose ' + choice  +'!<br>';
	compChoice='   Computer chose ' + random + '!<br><Br>'; 
	counter ++
if (choice > random){
		winCounter ++
	} else if (choice < random){
		lossCounter ++
	} else {
		tieCounter ++
	}
	counterLog= "Games played: " + counter + '!<br>' ; 
	winLog= "Games won: " + winCounter + '!<br>' ; 
 	lossLog= "Games loss: " + lossCounter + '!<br>' ; 
	tieLog= "Games tied: " + tieCounter+ '!<br>'; 
	answer.innerHTML= humanChoice + compChoice + counterLog + winLog + lossLog + tieLog;

});





