document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////



var plRun = false;
var rotate = {go: false, rot: false};

var clickOk = true;


//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	checkMouse();
	update();
	draw();
	requestAnimationFrame(start);
};

function draw()
{
	startBlock.draw();
	nowBlock.draw();
	bonus.draw();
	player.draw();
	bridge.draw();
}
function update()
{
	if(rotate.rot)
	{
		rotate.rot = bridge.update(rotate.rot);
		rotate.go = rotate.rot;
		if(!rotate.go)
		{
			plRun = true;
		}
	}
	if(plRun)
	{
		plRun = player.update(bridge, nowBlock);
		if(!plRun)
		{
			startInit();
			clickOk = true;
		}
	}
}


function checkMouse()
{
	if(clickOk && mouseClick())
	{
		rotate.go = bridge.update();
		//rotate.rot = false;
	}
	else if(!mouseClick() && rotate.go)
	{
		//log(bridge.y1 - bridge.y);
		clickOk = false;
		rotate.rot = true;
	}
}

function startInit()
{
	var H = 200;
	var W = 150;
	startBlock.init({
		x: 0,
		y: HEIGHT-H,
		w: W,
		h: H,
		c: "#000"
	});

	nowBlock.init({
		x: getRandom(W+50, WIDTH-W),
		y: HEIGHT-H,
		w: getRandom(25, W),
		h: H,
		c: "#000"
	});

	bonus.init({
		x: nowBlock.x+nowBlock.w/2 - 5,
		y: HEIGHT-H,
		w: 10,
		h: 5,
		c: "#00f"
	});

	player.init({
		x: W/2-50/2,
		y: HEIGHT-H-100,
		w: 50,
		h: 100,
		c: "#0f0"
	});

	bridge.init({
		x: W-10,
		y: HEIGHT-H,
		x1: W-10,
		y1: HEIGHT-H,
		c: "#f00"
	});
}

//Инициализация / INIT
createCanvas(800, 800, "#aaa");

var startBlock = new Block();
var nowBlock = new Block();
var bonus = new Block();
var player = new Player();
var bridge = new Bridge();

startInit();

start();
////////////////////////////////////////////////////////
});