document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////
var n = 0;
var c = 3;
//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	//cls();
	//update();
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
var angle = 0;
var countFlower = 0;

function draw()
{
	var a = n*137.3;
	var r = c*Math.sqrt(n);

	var x = r*Math.cos(a) + WIDTH/2;
	var y = r*Math.sin(a) + HEIGHT/2;
	arc(x, y, "rgb("+ n%256+",0,0)");

	n++;
}



//Инициализация / INIT
createCanvas(800, 600, "#000");
//ctx.translate(WIDTH/2, HEIGHT/2);

start();
////////////////////////////////////////////////////////
});