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

function arc(x, y, color)
{
	ctx.fillStyle = color;
	ctx.strokeStyle = "rgba(255,0,0,0.2)";
	ctx.beginPath();      
	ctx.arc(x, y, 5, 0, Math.PI*2, true);            
	ctx.fill();
	ctx.stroke();
}




////////////////////////////////////
//});