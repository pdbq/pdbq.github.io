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


class Ellipse
{
	constructor(data, param)
	{
		this.global = data;
		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		this.startAngle = 0;
		this.endAngle = 2*Math.PI;
		this.anticlockwise = false;
		this.c = param.c;
		this.lineX = 0;
		this.lineY = 0;
	}
	draw()
	{
		var ctx = this.global.ctx;
		ctx.fillStyle = this.c; 
		ctx.beginPath();  
		ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.anticlockwise); 
		ctx.closePath();  
		ctx.fill();  
	}
	drawLine()
	{
		var ctx = this.global.ctx;
		ctx.strokeStyle = "#f90"; 
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
    	ctx.lineTo(this.lineX, this.lineY);  
		ctx.closePath();  
		ctx.stroke(); 
	}
	update()
	{
	
		this.lineY = this.y;
		this.lineX = this.x; 
		this.x += (this.x - this.global.WIDTH/2)*0.08;
		this.y += (this.y - this.global.HEIGHT/2)*0.08;
		
		this.r += 0.4;
		if(this.r > 10)
		{
			//console.log(this.global.WIDTH);
			this.x = Ellipse.getRandomInt(0, this.global.WIDTH);
			this.y = Ellipse.getRandomInt(0, this.global.HEIGHT);
			this.r = 1;
			this.lineY = this.y;
			this.lineX = this.x; 
		}
	}
	//Рандом
	static getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
}





////////////////////////////////////
//});