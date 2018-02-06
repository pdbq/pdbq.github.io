document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	update();
	draw();
	requestAnimationFrame(start);
};

function startFireworks() {
  	var audio = new Audio(); // Создаём новый элемент Audio
  	audio.src = 'Sound/start.mp3'; // Указываем путь к звуку "клика"
  	audio.autoplay = true; // Автоматически запускаем
}
function pufFireworks() {
  	var audio = new Audio(); // Создаём новый элемент Audio
  	audio.src = 'Sound/puf.mp3'; // Указываем путь к звуку "клика"
  	audio.autoplay = true; // Автоматически запускаем
}

function draw()
{
	for (var i = 0; i < circle.length; i++) {
		circle[i].draw();
	}
	for (var i = 0; i < arrCircle.length; i++) {
		arrCircle[i].draw();
	}
}

var posPuf = {};
var generaation = getRandomInt(50, 100);
var time = 0;
function update()
{
	
	for (var i = 0; i < circle.length; i++) 
	{
		if(circle[i].update())
		{
			pufFireworks();
			
			for(var j = 0; j < getRandomInt(40,100); j++)
			{
				arrCircle.push(new Circle({
					x: circle[i].x,
					y: circle[i].y,
					r: circle[i].r/2,
					speed: 0,
					c: circle[i].c,
					speedNow: {x: (getRandomInt(0,360)-180)/72, y: (getRandomInt(0,360)-180)/72}
				}, true));
			}
			posPuf = {x: circle[i].x, y: circle[i].y};
			//console.log(arrCircle);
			circle.splice(i, 1);
		}
	}
	
	for(var i = 0; i < arrCircle.length; i++)
	{
		if(arrCircle[i].update())
		{
			arrCircle.splice(i, 1);
		}
	}

	time++;
	if(time > generaation)
	{
		startFireworks();
		generaation = getRandomInt(50, 100);
		time = 0;
		circle.push(new Circle({
			x: getRandomInt(0, WIDTH),
			y: HEIGHT,
			r: 5,
			c: {r: getRandomInt(0, 255), g: getRandomInt(0, 255), b: getRandomInt(0, 255)},
			speed: getRandomInt(3, 6, true)
		}));
	}
}

function getRandomInt(min, max, noINT)
{
	if(!noINT)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	else
		return Math.random() * (max - min) + min;
}


//Инициализация / INIT
createCanvas(800, 600, "#000");

var circle = new Array();
circle.push(new Circle({
	x: getRandomInt(0, WIDTH),
	y: HEIGHT,
	r: 5,
	c: {r: getRandomInt(0, 255), g: getRandomInt(0, 255), b: getRandomInt(0, 255)},
	speed: getRandomInt(3, 6, true)
}));
startFireworks();
var arrCircle = new Array();

start();
////////////////////////////////////////////////////////
});