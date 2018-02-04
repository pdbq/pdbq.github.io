document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

var n1 = 1,
	n2 = 1,
	n3 = 1;
var m = 0;
var a = 1,
	b = 1;

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	update();
	draw();
	requestAnimationFrame(start);
}
var speed = 1;
function update()
{
	m += speed;
	if(m >= 100)
	{
		speed = -speed;
	}
	else if(m <= 0)
	{
		speed = -speed;
		if(n1 == 1)
		{
			n1 = n2 = n3 = 0.3;
		}
		else if(n1 == 0.3) 
		{
			n1 = n2 = n3 = 1;
		}
	}
	sleep(30);
}
function draw()
{
	var x, y;
	var radius = 200;
	for (var i = 0; i < Math.PI*12; i+=0.005) 
	{
		var r = superShapes(i);	
	
		x = Math.cos(i) * r*radius;
		y = Math.sin(i) * r*radius;
		rect(x, y);
	}
}
function superShapes(angle)
{
	var part1 = (1/a)*Math.cos(angle * m/4);
	part1 = Math.abs(part1);
	part1 = Math.pow(part1, n2);

	var part2 = (1/b)*Math.sin(angle * m/4);
	part2 = Math.abs(part2);
	part2 = Math.pow(part2, n3); 

	var part3 = Math.pow(part1 + part2, 1/n1);
	if(part3 == 0)
		return 0;
	return (1/part3);
}


//Инициализация / INIT
createCanvas(800, 600, "#000");
ctx.translate(WIDTH/2, HEIGHT/2);

start();
////////////////////////////////////////////////////////
});