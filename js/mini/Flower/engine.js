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
	ctx.clearRect(-WIDTH/2, -HEIGHT/2, WIDTH*2, HEIGHT*2);
}


var x1 = 240, y1 = 0;
function rect(x, y)
{

	ctx.strokeStyle = "#f00";

	ctx.beginPath();
	ctx.moveTo(x1, y1);
	x1 = x;
	y1 = y;
	ctx.lineTo(x, y);
	ctx.stroke();
}


////////////////////////////////////
//});