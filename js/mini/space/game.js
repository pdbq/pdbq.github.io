document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
var start = function()
{
	var data = data
	game.cls();
	updateStars(N);
	requestAnimationFrame(start);
};

//Инициализация звезд
function initStars(n){
	
	for(let i = 0; i < n; i++){
		arc[i] = new Ellipse(global, {
			x: Ellipse.getRandomInt(0, global.global.x),
			y: Ellipse.getRandomInt(0, global.global.y), 
			r: Ellipse.getRandomInt(0, 7),
			c: "#fff"
		});
	}
	//console.log(arc);
}

function updateStars(n){
	for(let i = 0; i < n; i++){
		
		arc[i].update();
		arc[i].drawLine();
		arc[i].draw();
		
	}
}
//###
let game = new Game(800, 600, '#000');
var global = game.data();

var N = 200;	//Количество звезд
var arc = new Array();
initStars(N);



start();

////////////////////////////////////////////////////////
});