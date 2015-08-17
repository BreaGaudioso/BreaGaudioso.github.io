
var body = document.querySelector('body');
body.style.backgroundColor = "black";
var board = [];
var click1 = false;
var click2 = false;
var game = false;
var welcome= "ANI_MATCH"
var divTop = document.createElement('div');
body.appendChild(divTop);
divTop.style.paddingLeft = '10%';
divTop.style.paddingRight = '10%';
divTop.style.marginLeft = '10%';
divTop.style.marginRight = '10%';
divTop.style.paddingTop= '3%';
divTop.style.color='#0BE651';
divTop.style.backgroundColor='black';
divTop.style.fontSize="40px";
divTop.style.textAlign='center';

divTop.innerText = welcome;
var divCenter = document.createElement('div');
body.appendChild(divCenter);
divCenter.style.paddingLeft = '12%';
divCenter.style.paddingTop= '2%';
var randomList = [0, 1, 2, 3 ,4 ,5 ,6 , 7, 0, 1, 2, 3 ,4 ,5 ,6 , 7];
var divBottom = document.createElement('div');
body.appendChild(divBottom);
divBottom.style.paddingLeft = '35%';
divBottom.style.paddingTop= '1%';
divBottom.style.marginLeft = '10%';
divBottom.style.marginRight = '10%';
divBottom.style.marginTop = '37%';
divTop.style.textAlign='center';
divBottom.style.backgroundColor='black';
button = document.createElement('button');
button2 = document.createElement('button');
divBottom.appendChild(button2);
divBottom.appendChild(button);
button2.innerText = "Directions";
button.style.color = "black";
button2.style.color = "black";
button2.style.padding='10px 10px 10px';
button.style.padding='10px 10px 10px';
button.style.fontSize='16px';
button2.style.fontSize='16px';
button.style.backgroundColor = "#0BE651";
button2.style.backgroundColor = "#0BE651";
button.innerText = "Reset";
button.addEventListener("click", function (){
	document.location.reload(true);
});
button2.addEventListener("click", function (){
	alert("Oh no! The animals have lost their pair! Only you can help. Match them all and you will be the king of the jungle!");
});




for (var i=0; i<16; i++){
	board[i]= document.createElement('div');
	var random = Math.floor(Math.random() * randomList.length);
 	board[i].randnum = randomList[random];
 	randomList.splice(random, 1);
	board[i].matched = false;
	board[i].style.width = "20%";
	board[i].style.height = "120px";
	board[i].style.paddingBottom = "0";
	board[i].style.float = 'left';
	board[i].style.backgroundColor = '#0BE651';
	board[i].style.border = 'black solid 5px';
	board[i].pos = i;
	divCenter.appendChild(board[i]);
}

function resetboard() {
	game = true;
	for (var i=0; i < 16; i++){
		if (board[i].matched === false) {
			board[i].style.backgroundColor = "#0BE651";
			board[i].innerHTML = "";
			game = false;
		}
	}
	if (game === true) {
		alert("Yay! You have saved the day. ");
	}

}

for (var i=0; i<16; i++){
	board[i].addEventListener("click", function (){
		console.log(this.randnum);
		if (click1 === false) {
			click1 = this;
			this.innerHTML = "<img src='img/" + this.randnum + ".jpg'  width='100%' height = '120px'>";
		} else {
			click2 = this;
			this.innerHTML = "<img src='img/" + this.randnum + ".jpg'  width='100%' height = '120px'>";
			if (click1.randnum === click2.randnum && click1 !== click2) {
				click1.matched = true;
				click2.matched = true;
			}
			click1 = false;
			click2 = false;
			setTimeout(resetboard, 500);
		}
	});
}



