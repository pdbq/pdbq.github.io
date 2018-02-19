document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

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
	var x, y;
	//x1 = Math.cos(0) * r*radius;
	//y1 = Math.sin(0) * r*radius;
	var radius = 30;
	//for (var i = 0; i < Math.PI*2; i+=0.005) 
	//{
	if(countFlower == 0)
	{
		
		var r = flower1(angle);	

		x = Math.cos(angle) * r*radius;
		y = Math.sin(angle) * r*radius;
		rect(x, y);
		angle += 0.005;
		if(angle >= Math.PI*2.3)
		{
			cls();
			countFlower++;
			x1 = 240;
			y1 = 0;
			angle = 0;
		}
	}
	else if(countFlower == 1)
	{
		
		var r = flower2(angle);	

		x = Math.cos(angle) * r*radius;
		y = Math.sin(angle) * r*radius;
		rect(x, y);
		angle += 0.005;
		if(angle >= Math.PI*2.3)
		{
			cls();
			countFlower++;
			x1 = 0;
			y1 = -90;
			angle = 0;
		}
	}
	else if(countFlower == 2)
	{
		x = 16*Math.pow(Math.sin(angle),3)*18;
		y = (13*Math.cos(angle) - 5*Math.cos(2*angle) - 2*Math.cos(3*angle)-Math.cos(4*angle))*18;
		///console.log((13*Math.cos(0) - 5*Math.cos(2*0) - 2*Math.cos(3*0)-Math.cos(4*0))*18)
		rect(x, -y);
		angle += 0.005;
		if(angle >= Math.PI*2.3)
		{
			
			countFlower = 0;
			x1 = 240;
			y1 = 0;
			angle = 0;
			cls();
		}
	}
	//}
	//console.log(Math.sin(0) * flower(0)*radius)
}
function flower1(angle)
{
	return 1 + 7*Math.cos(8*angle) + 4*Math.pow(Math.sin(8*angle), 2) + 3*Math.pow(Math.sin(8*angle), 4);
}
function flower2(angle)
{
	return 1 + 7*Math.cos(7*angle) + 4*Math.pow(Math.sin(7*angle), 2) + 3*Math.pow(Math.sin(7*angle), 4);
}


//Инициализация / INIT
createCanvas(800, 600, "#000");
ctx.translate(WIDTH/2, HEIGHT/2);

start();
////////////////////////////////////////////////////////
});