document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

var dA = 1;
var dB = 0.5;
var f = 0.055;
var k = 0.062;

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	draw();
	requestAnimationFrame(start);
}

function draw()
{
	for(var i = 1; i < WIDTH-1; i++)
	{
		for(var j = 1; j < HEIGHT-1; j++)
		{
			var a = prev[i][j].a;
			var b = prev[i][j].b;
			next[i][j].a = a + (dA * laplacianA(i, j)) - (a*b*b) + (f*(1-a));
			next[i][j].b = b + (dB * laplacianB(i, j)) + (a*b*b) - ((k+f)*b);

			next[i][j].a = constrain(next[i][j].a, 0, 1);
			next[i][j].b = constrain(next[i][j].b, 0, 1);

		//	console.log(next[i][j].a);
		}
	}

	for(var i = 0; i < WIDTH; i++)
	{
		for(var j = 0; j < HEIGHT; j++)
		{
			var a = next[i][j].a;
			var b = next[i][j].b;
			var c = Math.floor((a - b)*255);
			c = constrain(c, 0, 255);
			var color = {r: c, g: c, b: c, a: 255};
			pixel(color, i, j);	
		}
	}

	var temp = prev;
	prev = next;
	next = temp;
}
function laplacianA(i, j)
{
	var sumA = 0;
	sumA += prev[i][j].a * -1;
	sumA += prev[i+1][j].a * 0.2;
	sumA += prev[i-1][j].a * 0.2;
	sumA += prev[i][j+1].a * 0.2;
	sumA += prev[i][j-1].a * 0.2;
	sumA += prev[i-1][j+1].a * 0.05;
	sumA += prev[i-1][j-1].a * 0.05;
	sumA += prev[i+1][j-1].a * 0.05;
	sumA += prev[i+1][j+1].a * 0.05;
	return sumA;
}
function laplacianB(i, j)
{
	var sumB = 0;
	sumB += prev[i][j].b * -1;
	sumB += prev[i+1][j].b * 0.2;
	sumB += prev[i-1][j].b * 0.2;
	sumB += prev[i][j+1].b * 0.2;
	sumB += prev[i][j-1].b * 0.2;
	sumB += prev[i-1][j+1].b * 0.05;
	sumB += prev[i-1][j-1].b * 0.05;
	sumB += prev[i+1][j-1].b * 0.05;
	sumB += prev[i+1][j+1].b * 0.05;
	return sumB;
}

function constrain(x, a, b)
{
	if(x < a)
		return a;
	else if(x > b)
		return b;
	else
		return x;
}
//Инициализация / INIT
createCanvas(300, 300, "#555");

var prev = [];
var next = [];
for(var i = 0; i < WIDTH; i++)
{
	prev[i] = [];
	next[i] = [];
	for(var j = 0; j < HEIGHT; j++)
	{
		prev[i][j] = {a: 1, b: 0};
		next[i][j] = {a: 1, b: 0};
	}
}



 for(var i = 100; i < 110; i++)
{
	for(var j = 100; j < 110; j++)
	{
		prev[i][j].b = 1;
		//next[i][j] = {a: 1, b: 1};
	}
}

start();
////////////////////////////////////////////////////////
});