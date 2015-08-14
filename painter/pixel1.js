body = document.querySelectorAll('body')[0];

function divMaker(num) {
	for(var i = 0; i <num; i++) {
		var box= document.createElement('div');
		box.style.backgroundColor= 'white';
		box.style.border= 'solid 1px black';
		box.style.width = '2.1%';
		box.style.float ='left';
		box.style.paddingBottom= '2.1%';
		body.appendChild(box);
	}
}
divMaker(1722)

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i <6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function palletMaker() {
	for(var i = 0; i <23; i++) {
		var boxy= document.createElement('div');
		boxy.style.backgroundColor=getRandomColor();
		boxy.style.width = '4%';
		boxy.style.float ='left';
		boxy.style.border= 'solid 1px black';
		boxy.style.paddingBottom= '4%';
		body.appendChild(boxy);
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



