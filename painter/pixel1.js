
body = document.querySelectorAll('body')[0];
var divCenter = document.createElement('div');
body.appendChild(divCenter);
divCenter.style.paddingLeft = '12%';
divCenter.style.paddingTop= '2%';
divCenter.style.paddingRight = '12%';


function divMaker(num) {
	for(var i = 0; i <num; i++) {
		var box= document.createElement('div');
		box.style.backgroundColor= 'white';
		box.style.border= 'solid 1px black';
		box.style.width = '2%';
		box.style.float ='left';
		box.style.paddingBottom= '2%';
		divCenter.appendChild(box);
	}
}
divMaker(1035)

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i <6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function palletMaker() {
	for(var i = 0; i <45; i++) {
		var boxy= document.createElement('div');
		boxy.style.backgroundColor=getRandomColor();
		boxy.style.width = '2%';
		boxy.style.float ='left';
		boxy.style.border= 'solid 1px black';
		boxy.style.paddingBottom= '2%';
		divCenter.appendChild(boxy);
		boxy.addEventListener('click', function(){
			paintbrush(this);
});
	}
}
palletMaker()


var color = "pink";
function paintbrush(boxy){
color= boxy.style.backgroundColor;
}

function colorChange (box){
	box.style.backgroundColor = color;
}


var divFind = document.querySelectorAll('div');
for(var i = 0; i < divFind.length-10; i++){
	divFind[i].addEventListener("click", function(){
	colorChange(this)
	});
}



