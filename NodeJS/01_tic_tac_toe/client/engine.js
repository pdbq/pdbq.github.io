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

function log(text){
	console.log(text);
}

var mousePos = {x: null, y: null};
var isClick = false;
window.onclick = function(e)
{
	mousePos.x = e.pageX;
	mousePos.y = e.pageY;
	isClick = true;
}
function getMouse()
{
	if(isClick)
		return mousePos;
}

function drawMap()
{
	ctx.strokeStyle = "#fff";
	ctx.beginPath();
	
	ctx.moveTo(WIDTH/3, 0);
	ctx.lineTo(WIDTH/3, HEIGHT);

	ctx.moveTo(WIDTH/(3/2), 0);
	ctx.lineTo(WIDTH/(3/2), HEIGHT);

	ctx.moveTo(0, HEIGHT/3);
	ctx.lineTo(WIDTH, HEIGHT/3);

	ctx.moveTo(0, HEIGHT/(3/2));
	ctx.lineTo(WIDTH, HEIGHT/(3/2));

	ctx.stroke();
}

function drawPl1(x, y)
{
	ctx.strokeStyle = "#0f0";
	ctx.beginPath();

	var w = WIDTH/3, 
		h = HEIGHT/3;

	ctx.moveTo(x*w + 30, y*h+30);
	ctx.lineTo(x*w + w-30, y*h+h-30);

	ctx.moveTo(x*w + w - 30, y*h+30);
	ctx.lineTo(x*w + 30, y*h+h-30);

	ctx.stroke();
}

function drawPl2(x, y)
{

	var w = WIDTH/3, 
		h = HEIGHT/3;

	ctx.strokeStyle = '#f00';
	ctx.beginPath();      
	ctx.arc(x*w+w/2, y*h+h/2, w/2-60, 0, Math.PI*2, true);            
	ctx.stroke();
}

function textStart()
{
	ctx.fillStyle = "#f00";
    ctx.font = "italic 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Ждем...", WIDTH/2, HEIGHT/2);
}

function stop(pl)
{
	ctx.fillStyle = "#00f";
    ctx.font = "italic 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Победил игрок id = " + pl, WIDTH/2, HEIGHT/2);
}

////////////////////////////////////
//});