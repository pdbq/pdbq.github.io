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

function log(text)
{
	console.log(text);
}


var mouseInited = false;
var checkMouseDown = false;
function MouseControl() {

	if (mouseInited) {return;}
	mouseInited = true;


	var mousePositions = {x: undefined, y: undefined, click: false, dam: false};

	window.addEventListener('contextmenu', function(e){
		e.preventDefault();
	});

	window.addEventListener('mousedown', function(e){
		if(e.button === 0) {
			
			mousePositions = {x: e.pageX, y: e.pageY, click: true};
			checkMouseDown = true;
		} else if(e.button === 2){
			//log(1)
			mousePositions = {x: e.pageX, y: e.pageY, click: false, dam: true};
		}
	});

	window.addEventListener('mouseup', function(e){
		checkMouseDown = false;
		mousePositions = {x: undefined, y: undefined, click: false, dam: false};
	});

	window.addEventListener('mousemove', function(e){
		if(checkMouseDown) {
			mousePositions = {x: e.pageX, y: e.pageY};
			//console.log(mousePositions);
		}
	});

	var mc = {
		isDragAndDrop: function(){
			return mousePositions;
		}
	};
	return mc;
}

function intersect(obj1, obj2) {
	if(!obj1.dad && obj1.x < obj2.x+obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y+obj2.h && obj1.y + obj1.h > obj2.y) {
		//log(1);
		obj1.x = obj2.x + obj2.w;
		obj1.zindex = 0;
	} 
	if(!obj1.dad)
		obj1.zindex = 0;
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
	if(!sw && !sh) {
		ctx.drawImage(imgList[file].image, x, y, w, h);
	} else {
		ctx.drawImage(imgList[file].image, sx, sy, sw, sh, x, y, w, h);
	}
}
////////////////////////////////////
//});