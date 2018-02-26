//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL 		= 0,
	KEY_LEFT 	= 37,
	KEY_RIGHT 	= 39,
	KEY_SPACE 	= 32;

var gameGo = false;		

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

function arc(x, y, r, color)
{
	ctx.fillStyle = color;
	ctx.beginPath();      
	ctx.arc(x, y, r, 0, Math.PI*2, true);            
	ctx.fill();

}

function rect(x, y, w, h, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

var keyDown;
window.onkeydown = function(e)
{
	if(e.keyCode == KEY_LEFT || e.keyCode == KEY_RIGHT || e.keyCode == KEY_SPACE)
		keyDown = e.keyCode;
}
window.onkeyup = function(e)
{
	if(e.keyCode == KEY_LEFT || e.keyCode == KEY_RIGHT || e.keyCode == KEY_SPACE)
		keyDown = NULL;
}
function keyData()
{
	return keyDown;
}

