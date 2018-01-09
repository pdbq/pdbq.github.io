//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL = 0;
var KEY_LEFT = 37,
	KEY_RIGHT = 39
	KEY_SPACE = 32;

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



var key = 0;
window.onkeydown = function(e)
{
	if(e.keyCode === KEY_LEFT)
	{
		key = KEY_LEFT;
	}
	else if(e.keyCode === KEY_RIGHT)
	{
		key = KEY_RIGHT;
	}
	if(e.keyCode === KEY_SPACE){
		key = KEY_SPACE;
	}
}
window.onkeyup = function(e)
{
	key = NULL;
}
function keyBoard()
{
	return key;
}

function GameOver()
{ 
	location.reload();
}

////////////////////////////////////
//});