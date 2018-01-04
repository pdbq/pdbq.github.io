document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
var start = function()
{
	var data = data
	game.cls();
	updateRain();
	requestAnimationFrame(start);
};
function updateRain(){
	for(let i = 0; i < N; i++){
		rect[i].update();
		rect[i].draw();	
	}
}

//###
let game = new Game(700, 600, '#00f');
var global = game.data();

var N = 500;
var rect = new Array();

for(let i = 0; i < N; i++){
	rect[i] = new Rect(global, "red");
}



start();

////////////////////////////////////////////////////////
});