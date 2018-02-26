document.addEventListener('DOMContentLoaded', function(){ 

var fps = 60;

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
	player.draw();
	ball.draw();
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].draw();
	}
}
function update()
{
	keyBoard();
	if(gameGo)
	{
		ball.move();
		ball.intersect(player, true);
		for (var i = 0; i < blocks.length; i++) {
			if(ball.intersect(blocks[i]))
			{
				blocks.splice(i, 1);
			}
		}	
	}
}
function keyBoard()
{
	if(keyData() == KEY_LEFT)
	{
		player.move(-4);
	}
	else if(keyData() == KEY_RIGHT)
	{
		player.move(4);
	}
	else if(keyData() == KEY_SPACE)
	{
		gameGo = true;
	}
}


//Инициализация / INIT
createCanvas(800, 600, "#000");

var player = new Player({
	x: WIDTH/2-50,
	y: HEIGHT-50,
	w: 100,
	h: 15,
	c: "#fff"
});

var ball = new Ball(WIDTH/2, HEIGHT/2, 5, "red");

var blocks = new Array();

var N = 54;
for(var i = 0; i < N; i++)
{
	blocks.push(new Player({
		x: WIDTH/5-15 + (i%9)*60,
		y: 30 + parseInt(i/9)*30,
		w: 30,
		h: 10,
		c: "#0f0"
	}));
}

start();
});