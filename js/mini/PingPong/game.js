document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	keyPress();
	ball.update();
	ball.intersect(player1);
	ball.intersect(player2);
	ball.gameOver();
	draw();
	requestAnimationFrame(start);
};
//Управление KeyBoard
function keyPress()
{
	var keys = keyBoard();
	for(var i = 0; i < keys.length; i++)
	{
		if(keys[i] == KEY_UP)
		{
			player1.update(-3);
			//keys.splice(i, 1);
		}
		else if(keys[i] == KEY_DOWN)
		{
			player1.update(3);
			//keys.splice(i, 1);
		}
		if(keys[i] == KEY_W)
		{
			player2.update(-3);
			//keys.splice(i, 1);
		}
		else if(keys[i] == KEY_S)
		{
			player2.update(3);
			//keys.splice(i, 1);
		}
	}
	
}
function draw()
{
	player1.draw();
	player2.draw();
	ball.draw();
}
function getRandomInt(min, max) {
	return (Math.floor(Math.random() * (max - min)) + min);
}
function getRandomIntNow(min, max)
{
	var r = getRandomInt(0, 100);
	if(r <= 50)
		return (-(getRandomInt(min, max)));
	else
		return (getRandomInt(min, max));
}


//Инициализация / INIT
createCanvas(800, 600, "#000");

var player1 = new Player({
	x: 50,
	y: HEIGHT/2-50/2,
	w: 10,
	h: 50,
	c: "#fff"
});
var player2 = new Player({
	x: WIDTH-50,
	y: HEIGHT/2-50/2,
	w: 10,
	h: 50,
	c: "#fff"
});
//console.log(getRandomInt(0, 10));
var ball = new Ball({
	x: WIDTH/2,
	y: HEIGHT/2,
	r: 5,
	speed: {x: getRandomIntNow(5, 6), y: getRandomIntNow(0, 5)},
	c: "#fff"
});
//getRandomIntNow();


start();
////////////////////////////////////////////////////////
});