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
window.onclick = function(e)
{
	posMouse = {x: e.x, y:e.y};
}
function mouseClick()
{
	return posMouse;
}

////////////////////////////////////
//});