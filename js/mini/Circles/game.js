document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	init();
	update();
	draw();
	requestAnimationFrame(start);
};

function draw()
{
	for (var i = 0; i < circles.length; i++) {
		circles[i].draw();
	}
}
function update()
{
	for (var i = 0; i < circles.length; i++) {
		var check = circles[i].update();
		if(check)
		{
			circles.splice(i, 1);
		}
	}
}

function init()
{
	circles.push(new Circle({
		x: Mouse().x,
		y: Mouse().y
	}));
}

//Инициализация / INIT
createCanvas(800, 600, "#000");

var circles = new Array();

start();
////////////////////////////////////////////////////////
});