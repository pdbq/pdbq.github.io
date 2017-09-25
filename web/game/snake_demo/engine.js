var Game = function(WIDTH, HEIGHT, COLOR){
    //Инициализация
    var _Game = this;
    var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.position = 'fixed';
	canvas.style.left = 0;
	canvas.style.top = 0;
	document.body.appendChild(canvas);
    canvas.style.background = COLOR;

    //Игровой цикл
    this.update = function(){
		console.log("Функция апдате не определенна");
	};


	var engine = function(){

		ctx.clearRect(0,0,WIDTH,HEIGHT);
		_Game.update();
		requestAnimationFrame(engine);
		
	};
	this.start = function(){
		engine();
	};


	//Класс рисования прямоугольника
	var drawRect = function(x, y, w, h, c){
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, h);
	};

	var imgList = {};

	var loadImage = function(file){
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
	};
	var drawImage = function(x, y, w, h, file, sx, sy, sw, sh){
		if(!imgList[file]) {return;}
		if(!imgList[file].loaded) {return;}
		//ctx.save();
		//ctx.translate(WIDTH/2-10,0);
		//ctx.rotate(180*Math.PI/180);
		//console.log(x);
		ctx.drawImage(imgList[file].image, sx, sy, sw, sh, x, y, w, h);
		//ctx.restore();
	};

    this.Rect = function(param){
    	this.x = param.x;
    	this.y = param.y;
    	this.w = param.w;
    	this.h = param.h;
    	this.sx = param.sx;
    	this.sy = param.sy;
    	this.sw = param.sw;
    	this.sh = param.sh;
    	this.rot = param.rot;
    	this.c = param.c;
    	//console.log(param.texture);
    	this.texture = false;
    	if(param.texture){
			this.texture = param.texture;
			loadImage(param.texture);
		}
	};
	this.Rect.prototype = {
		draw: function(){
			if(this.c){
				drawRect(this.x, this.y, this.w, this.h, this.c);
			}
			if(this.texture){
				drawImage(this.x, this.y, this.w, this.h, this.texture, this.sx, this.sy, this.sw, this.sh);
			}
		},	
		intersect: function(obj){
			return !(this.x+this.w <= obj.x || this.y+this.h <= obj.y || this.x >= obj.x+obj.w || this.y >= obj.y+obj.h);
		}
    };
    this.Text = function(param){
    	this.x = param.x;
    	this.y = param.y;
    	this.text = param.text;
    	this.pt = param.pt;
    	this.c = param.c;

    };
    this.Text.prototype = {
    	draw: function(){

    		//console.log(this.text);
    		ctx.fillStyle = this.c;
    		ctx.font = "bold " + this.pt + "px sans-serif";
    		ctx.fillText(this.text, this.x, this.y);
    	}
    };
//Клавиатура
	var kbInited = false;
	this.KeyBoard = function(){
		if (kbInited) {return;}
		kbInited = true;
		
		var keys = {
			'UP' : 38,
			'DOWN' : 40,
			'LEFT' : 37,
			'RIGHT' : 39,
			'SPACE' : 32
		};

		var pressedKeys = {};

		
		window.addEventListener('keydown', function(e){
			pressedKeys[e.keyCode] = true;

		});
		window.addEventListener('keyup', function(e){
			pressedKeys[e.keyCode] = false;
		});

		var kb = {
			isDown : function(keyName){
				return !!pressedKeys[keys[keyName]];
			}
		};

		return kb;
	};
	this.Mouse = function(){
		var mouse = {
			click: false
		};
		window.addEventListener('click', function(e){
			mouse = {
				x: e.pageX,
				y: e.pageY,
				click: true
			};
			console.log('function');
		});
		var m = {
			isClick : function(){
				return mouse;
			}
		}
		return m;

	};

};