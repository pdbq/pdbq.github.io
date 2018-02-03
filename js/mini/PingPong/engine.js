//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL = 0;
var KEY_UP = 38,
	KEY_DOWN = 40,
	KEY_W = 87,
	KEY_S = 83;

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


var key = new Array();
window.onkeydown = function(e)
{
	//console.log(e.keyCode);
	/*if(e.keyCode === KEY_UP)
	{
		key = KEY_UP;
	}
	else if(e.keyCode === KEY_DOWN)
	{
		key = KEY_DOWN;
	}
	if(e.keyCode ===KEY_W)
	{
		key = KEY_W;
	}
	else if(e.keyCode ===KEY_S)
	{
		key = KEY_S;
	}*/
	for (var i = 0; i < key.length; i++) {
		if(key[i] == e.keyCode)
		{
			return;
		}
	}
	key.push(e.keyCode);
}
window.onkeyup = function(e)
{
	for (var i = 0; i < key.length; i++) {
		if(key[i] == e.keyCode)
			key.splice(i, 1);
	}
}
function keyBoard()
{
	return key;
}

////////////////////////////////////
//});