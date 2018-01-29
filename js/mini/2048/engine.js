//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL = 0;
var KEY_LEFT 	= 37,
	KEY_RIGHT 	= 39,
	KEY_UP 		= 38,
	KEY_DOWN  	= 40;



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
	ctx.clearRect(-WIDTH/2, -HEIGHT/2, WIDTH*2, HEIGHT*2);
}
function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}	


//Управление клавиатурой
var key = 0;
window.onkeydown = function(e)
{
	//console.log(e.keyCode);
	if(e.keyCode === KEY_LEFT)
	{
		key = KEY_LEFT;
		
	}
	else if(e.keyCode === KEY_RIGHT)
	{
		key = KEY_RIGHT;
	}
	else if(e.keyCode === KEY_UP)
	{
		key = KEY_UP;
	}
	else if(e.keyCode === KEY_DOWN)
	{
		key = KEY_DOWN
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

////////////////////////////////////
//});