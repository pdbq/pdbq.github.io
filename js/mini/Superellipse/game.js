document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

var n = 4;
var a = 200;
var b = 200;

var speed = 0.01;

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	update();
	draw();
	requestAnimationFrame(start);
}
function update()
{
	n += speed;
	if(n>4)
		speed = -speed;
	else if(n<0.1)
		speed = -speed;
}
function draw()
{
	var x, y;
	var r = 200;
	var nm = 2/n;
	for(var i = 0.1; i < 2*Math.PI; i += 0.1)
	{

		x = Math.pow(Math.abs(Math.cos(i)), nm) * a*sng(Math.cos(i));
		y = Math.pow(Math.abs(Math.sin(i)), nm) * b*sng(Math.sin(i));
		rect(x, y);
	}
}

function sng(val)
{
	if(val < 0)
	{
		return -1;
	}
	else if(val > 0)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}


//Инициализация / INIT
createCanvas(800, 600, "#000");
ctx.translate(WIDTH/2, HEIGHT/2);

//console.log(Math.pow(Math.abs(-a+50)/a, 4));
start();
////////////////////////////////////////////////////////
});