//global
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

var NULL 		= 0,
	KEY_LEFT 	= 37,
	KEY_RIGHT 	= 39,
	//KEY_DOWN 	= 40,
	KEY_UP 		= 38,
	KEY_SPACE 	= 32;

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

function getRandom(min, max, INT)
{
	if(INT)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	return Math.random() * (max - min) + min;
}

var key = [];

window.onkeydown = function(e)
{
	//log(e.keyCode);
	for (var i = 0; i < key.length; i++) {
		if(e.keyCode == KEY_UP && key[i] == NULL)
			key.splice(i, 1);
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
	if(e.keyCode == KEY_UP)
		key.push(NULL);
}
function keyPress()
{
	//log(key);
	return key;
}


var imgList = {};
function loadImage(file)
{
	if(imgList[file]){return;}
	var image = new Image();
	imgList[file] = {
		loaded : false,
		image : image
	};
	var _image = imgList[file];
	image.onload = function(){
		_image.loaded = true;
	};
	image.src = file;
}

function drawRect(x, y, w, h, c)
{
	ctx.fillStyle = c;
	ctx.fillRect(x, y, w, h);
}

function drawImage(x, y, w, h, file, sx, sy, sw, sh)
{
	
	if(!imgList[file]) {return;}
	if(!imgList[file].loaded) {return;}
	ctx.drawImage(imgList[file].image, sx, sy, sw, sh, x, y, w, h);
}
////////////////////////////////////
//});