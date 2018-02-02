//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL = 0;

//Навигация
var HOME 			= 0,
	SALE 			= 1,
	HANDBAGS 		= 2,
	WALLETS 		= 3,
	ACCESSORIES 	= 4,
	MENTSTORE 		= 5,
	SHOES 			= 6,
	VINTAGE 		= 7,
	SERVICES 		= 8,
	CONTACTUS 		= 9,
	CART 			= 10,
	SHOPNOW			= 11,
	TSHIRT	 		= 12,
	SHORTS			= 13,
	DESCPRODUCTS	= 14,
	BUYNOW			= 100,
	SENDFORM		= 101,
	USERNAME		= 102,
	USERPHONE		= 103,
	USERMAIL		= 104
	NEXT 			= 900,
	BACK 			= 901,
	CLOSE 			= 999,
	GLOB 			= 1000;


function createCanvas(WIDTH_, HEIGHT_, COLOR, IMG = false)
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	WIDTH = WIDTH_;
	HEIGHT = HEIGHT_;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.position = 'absolute';
	//canvas.style.maxWidth = '100%';
	//canvas.style.display = 'block';

	canvas.style.left = (window.innerWidth/2-WIDTH/2) + 'px';
	if(window.innerWidth < 1000)
	{
		canvas.style.left = 0;
	}
	canvas.style.top = 0;
	//canvas.style.right = 0;
	//canvas.style.bottom = 0;	
	document.body.appendChild(canvas);
    canvas.style.background = COLOR;
    if(IMG)
    {
    	canvas.style.background = "url(" + IMG + ")";
    }
    //ctx.translate(window.innerWidth/2-WIDTH/2, 0);

}
function cls()
{
	ctx.clearRect(-WIDTH/2, -HEIGHT/2, WIDTH*2, HEIGHT*2);
}

//Управление мышкой
var pMouse = {};
window.onclick = function(e)
{
	//console.log(e.pageX + " : " + e.pageY);
	pMouse = {x: e.pageX-(window.innerWidth/2-WIDTH/2), y: e.pageY};
	if(window.innerWidth < 1000)
	{
		pMouse = {x: e.pageX, y: e.pageY};
	}
	//posMouse();
}
function posMouse()
{
	//console.log(pMouse);
	return pMouse;
}


//Управление клавиатурой
var key = [];
var keyUp;
window.onkeydown = function(e)
{
	//console.log(e.keyCode);
	if(e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 20 || e.keyCode == 27 || e.keyCode == 9 || e.keyCode == 18 || e.keyCode == 46)
	{
		keyUp = false;
		return false;
	}
	else if(e.keyCode == 8)
	{
		key.pop();
		keyUp = false;
		return false;
	}
	else if(e.keyCode==32)
	{
		key.push(e.key);
		keyUp = false;
		return false;
	}
	else
	{
		key.push(e.key);
	}
	keyUp = false;
}
window.onkeyup = function(e)
{
	keyUp = true;
}
function keyBoard()
{
	return key;
}

////////////////////////////////////
//});