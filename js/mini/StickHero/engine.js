//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

function createCanvas(WIDTH_, HEIGHT_, COLOR, IMG = false)
{
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
    	canvas.style.background = "url(" + IMG + ")";
    }
}
function cls()
{
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function log(text)
{
	console.log(text);
}


var clickMouse = false;
window.onmousedown = function(e)
{
	clickMouse = true;
}
window.onmouseup = function(e)
{
	clickMouse = false;
}
function mouseClick()
{
	return clickMouse;
}

function rect(param)
{
	ctx.fillStyle = param.c;
	ctx.fillRect(param.x, param.y, param.w, param.h);
}

function getRandom(min, max, INT)
{
	if(INT)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	return Math.random() * (max - min) + min;
}

////////////////////////////////////
//});