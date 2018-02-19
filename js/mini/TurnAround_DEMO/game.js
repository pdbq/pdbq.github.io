document.addEventListener('DOMContentLoaded', function(){ 

var fps = 60;

// Навигация
var MENU 		= 1,
	GAME 		= 2,
	GAMEOVER 	= 3,
	SHOPUPGRADE = 4;

var stateGame = 1;
	
//var numberStateGame = 1;
/*
	1  - Menu,
	?2 - Game,
	?3 - GameOver,
	?4 - Skills,
	?5 - Record
*/



function start()
{
	setTimeout(function() {
		requestAnimationFrame(start);
		cls();
		update();
		draw();
	}, 1000 / fps);
}

function draw()
{
	switch(stateGame)
	{
		case MENU:
			buttonStart.draw();
			buttonShopUpgrade.draw();
			break;
		case GAME:
			player.draw();
			for (var i = 0; i < enemy.length; i++) 
			{
				enemy[i].draw();
			}
			break;
		case GAMEOVER:
			player.draw();
			buttonOkGameOver.draw(); 
			break;
		case SHOPUPGRADE:
			buttonOkUpgrade.draw();
			break; 
		default:
			break;
	}
}
function update()
{
	switch(stateGame)
	{
		case MENU:
			mouse();
			break;
		case GAME:
			keyBoard();	
			for (var i = 0; i < enemy.length; i++) 
			{
				enemy[i].update();
				if(player.intersect(enemy[i]))
				{
					stateGame = 3;
				}
			}
			if(newEnemy)
			{
				enemy.push(new Enemy({
					x: getRandom(20, WIDTH - 20), 
					y: getRandom(20, HEIGHT/2 - 20),
					r: 10,
					c: "#f00"
				}));
				newEnemy = false;
			}
			
			break;
		case GAMEOVER:
			mouse();
			break;
		case SHOPUPGRADE:
			player.skills();
			mouse();
			//mousePosition = 0;

			break;
		default:
			stateGame = 1;
			break;
	}
}

function keyBoard()
{
	var keys = keyPress();
	for(var i = 0; i < keys.length; i++)
	{
		if(keys[i] == KEY_LEFT)
		{
			player.update(KEY_LEFT);
		}
		else if(keys[i] == KEY_RIGHT)
		{
			player.update(KEY_RIGHT);
		}
		if(keys[i] == KEY_UP)
		{
			player.update(KEY_UP);
		}
		if(keys[i] == NULL)
		{
			var brake = false;
			for(var j = 0; j < keys.length; j++)
			{
				if(keys[j] == KEY_DOWN)
				{
					brake = true;
					player.update(KEY_DOWN);
				}
			}
			if(brake)
				break;
			player.update(NULL);
		}
	}
}

function mouse()
{
	switch(stateGame)
	{
		case MENU:
			if(buttonStart.isClick(mouseClick()))
			{
				stateGame = 2;
				init();
			}
			if(buttonShopUpgrade.isClick(mouseClick()))
			{
				stateGame = 4;
			}
			break;
		case GAMEOVER:
			if(buttonOkGameOver.isClick(mouseClick()))
			{
				stateGame = 1;
				enemy = [];
			}
			break;
		case SHOPUPGRADE:
			if(buttonOkUpgrade.isClick(mouseClick()))
			{
				stateGame = 1;
			}
			break;
	}
	mousePosition = 0;
}

function init()
{
	player.startPosition({
		x: WIDTH/2, 
		y: HEIGHT-50,
		r: 10,
		c: "#0f0"
	});
	for(var i = 0; i < N; i++)
	{
		enemy.push(new Enemy({
			x: getRandom(20, WIDTH - 20), 
			y: getRandom(20, HEIGHT/2 - 20),
			r: 10,
			c: "#f00"
		}));
	}
}
//Инициализация / INIT
//var size = {w: window.innerWidth, h: window.innerHeight};
var size = {w: 800, h: 600};
createCanvas(size.w, size.h, "#333");

var player = new Player();
var enemy = new Array();
var N = 10;

var buttonStart = new Button({
	x: WIDTH/2 - 100,
	y: HEIGHT/2 - 50,
	w: 200,
	h: 100,
	c: {fon: "rgba(255,0,0,0.2)", text: "green"},
	text: "START"
});

var buttonOkGameOver = new Button({
	x: WIDTH/2 - 100,
	y: HEIGHT/2 + 20,
	w: 200,
	h: 100,
	c: {fon: "rgba(255,0,0,0.2)", text: "green"},
	text: "OK"
});

var buttonShopUpgrade = new Button({
	x: WIDTH/2 - 100,
	y: 10,
	w: 200,
	h: 100,
	c: {fon: "#00f", text: "#fff"},
	font: "20px sans-serif",
	text: "SHOP UPGRADE"
});

var buttonOkUpgrade = new Button({
	x: WIDTH/2 - 100,
	y: HEIGHT-150,
	w: 200,
	h: 100,
	c: {fon: "rgba(255,0,0,0.2)", text: "green"},
	//font: "20px sans-serif",
	text: "OK"
});

player.startPosition({			/// !!!!!!?????????
	x: WIDTH/2, 
	y: HEIGHT-50,
	r: 10,
	c: "#0f0"
});

start();
});