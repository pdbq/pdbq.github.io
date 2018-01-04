//document.addEventListener('DOMContentLoaded', function(){ 
/////////////////////////////////////////////////////////////
class Game 
{

	constructor(WIDTH, HEIGHT, COLOR, IMG = false)
	{

	   // this._Game = this;
	    var canvas = document.createElement("canvas");
		this.ctx = canvas.getContext("2d");
		this.WIDTH = WIDTH;
		this.HEIGHT = HEIGHT;
		canvas.width = this.WIDTH;
		canvas.height = this.HEIGHT;
		canvas.style.position = 'fixed';
		canvas.style.left = 0;
		canvas.style.top = 0;
		document.body.appendChild(canvas);
	    canvas.style.background = COLOR;
	    if(IMG)
	    {
	    	canvas.style.background = "url(" + IMG + ")";
	    }
	
	//???
	    this.global = 
	    {
	    	x: this.WIDTH,
	    	y: this.HEIGHT,
	    	ctx: this.ctx
	    };
	}
	data()
	{	
		return this;
	}
	cls()
	{
		//var ctx = this.global.ctx;
		//console.log(this.global.x);
		this.global.ctx.clearRect(0,0,this.global.x,this.global.y);
	}
}

class Rect
{
	constructor(global, color)
	{
		this.global = global;
		this.x = 50;
		this.y = global.HEIGHT + 100;
		this.w = 4;
		this.h = 20;
		this.c = color;
		this.speed = 0;
	}
	draw()
	{
		this.global.ctx.fillStyle = this.c;
		this.global.ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	update()
	{
		this.y += this.speed;
		//console.log(this.w);
		if(this.y > this.global.HEIGHT)
		{
			this.w = Rect.getRandomInt(1, 5);
			this.h = this.w * 5;
			this.x = Rect.getRandomInt(0, this.global.WIDTH - this.w);
			this.y = -Rect.getRandomInt(20, 100);
			this.speed = this.w * 1.5;
		}
	}
	static getRandomInt(min, max){
		return (Math.random() * (max - min + 1)) + min;
	}
}


	

////////////////////////////////////
//});