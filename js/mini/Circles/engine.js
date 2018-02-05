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