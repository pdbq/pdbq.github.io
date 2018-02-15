document.addEventListener('DOMContentLoaded', function(){ 

function start()
{
	cls();
	fon();
	update();
	draw();
	requestAnimationFrame(start);
}

function draw()
{
	
	for(var i = 0; i < bullets.length; i++)
	{
		bullets[i].draw();
	}
	player.draw();
	for (var i = 0; i < asteroid.length; i++) {
		asteroid[i].draw();
	}
	//asteroid.draw();
}
function update()
{
	keyBoard();
	for(var i = 0; i < bullets.length; i++)
	{
		if(bullets[i].update())
			bullets.splice(i, 1);
	}
	//log(bullets);
	for (var i = 0; i < asteroid.length; i++) 
	{
		asteroid[i].update();
		if(asteroid[i].intersect(player))
		{
			puf();
			flight(true);
			fon(true);
			if(player.gameOver())
			{
				player = 0;
			}
		}
		for (var j = 0; j < bullets.length; j++) 
		{
			if(asteroid[i].intersect(bullets[j], true))
			{
				puf();
				bullets.splice(j, 1);
				asteroid.push(new Asteroid({
					x: asteroid[i].x,
					y: asteroid[i].y,
					w: asteroid[i].w/1.1,
					h: asteroid[i].h/1.1,
					sx: 0,
					sy: 0,
					sw: 70,
					sh: 76,
					speed: {x: getRandom(0, 6)-3, y: getRandom(0,6)-3},
					//c: "#999",
					texture: "img/asteroid.png"
				}));
				asteroid.push(new Asteroid({
					x: asteroid[i].x,
					y: asteroid[i].y,
					w: asteroid[i].w/1.1,
					h: asteroid[i].h/1.1,
					sx: 0,
					sy: 0,
					sw: 70,
					sh: 76,
					speed: {x: getRandom(0, 6)-3, y: getRandom(0,6)-3},
					//c: "#999",
					texture: "img/asteroid.png"
				}));
				asteroid.splice(i, 1);
			}
		}
	}
}

var time = 5;
var t = 0;
function keyBoard()
{
	player.control(0);
	var keys = keyPress();
	for(var i = 0; i < keys.length; i++)
	{
		if(keys[i] == KEY_LEFT)
		{
			player.control(1);
		}
		else if(keys[i] == KEY_RIGHT)
		{
			player.control(2);
		}
		if(keys[i] == KEY_UP)
		{
			
			player.control(3);
		}
		if(keys[i] == NULL)
		{
			player.control(4);
		}
		if(keys[i] == KEY_SPACE)
		{
			t++;
			if(t >= time)
			{
				shoot();
				bullets.push(new Bullet(player));
				t = 0;
			}
		}
	}
}

//Инициализация / INIT
createCanvas(800, 600, "#000");

var player = new Rect({
	x: 400,
	y: 300,
	w: 50,
	h: 75,
	sx: 0,
	sy: 0,
	sw: 100,
	sh: 150,
	//c: "#999",
	texture: "img/ship.png"
});

var bullets = new Array();
var asteroid = new Array();

asteroid.push(new Asteroid({
	x: 100,
	y: 100,
	w: 100,
	h: 100,
	sx: 0,
	sy: 0,
	sw: 70,
	sh: 76,
	speed: {x: getRandom(0, 6)-3, y: getRandom(0,6)-3},
	//c: "#999",
	texture: "img/asteroid.png"
}));


fon();
start();
});