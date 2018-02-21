//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL = 0;

function createCanvas(WIDTH_, HEIGHT_, COLOR, IMG = false)
{
	//log(IMG);
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	WIDTH = WIDTH_;
	HEIGHT = HEIGHT_;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.position = 'fixed';
	canvas.style.left = 0;
	canvas.style.top = 0;
	document.body.appendChild(canvas);
    canvas.style.background = COLOR;
    if(IMG)
    {
    	log(IMG);
    	canvas.style.background = "url(" + IMG + ")";
    }
}
function cls()
{
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function log(t)
{
	console.log(t);
}

function getRandom(min, max, INT)
{
	if(INT)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	return Math.random() * (max - min) + min;
}

var posMouse = {};
var checkDown = false;
window.onmousedown = function(e)
{
	checkDown = true;
	posMouse = {x: e.x, y: e.y};
}
window.onmouseup = function(e)
{
	checkDown = false;
}
window.onmousemove = function(e)
{
	posMouse = 0;
	if(checkDown)
	{
		posMouse = {x: e.x, y: e.y};
		//console.log(posMouse);
	}
}
function Mouse()
{
	return posMouse;
}

////////////////////////////////////
//});