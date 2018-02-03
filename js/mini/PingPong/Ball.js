class Ball
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		this.c = param.c;
		this.speed = param.speed;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.beginPath();      
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);            
		ctx.fill();
	}
	update()
	{
		this.x += this.speed.x;
		this.y += this.speed.y;
		if(this.y-this.r < 0)
			this.speed.y = -this.speed.y;
		else if(this.y+this.r > HEIGHT)
			this.speed.y = -this.speed.y;
	}
	intersect(obj)
	{
		if(obj.x <= this.x+this.r && obj.x+obj.w >= this.x-this.r && obj.y <= this.y+this.r && obj.y+obj.h >= this.y-this.r)
		{
			this.speed.x = -this.speed.x;
			this.speed.y = ((this.y - (obj.y+obj.h/2))/4);
		}
		//изменение this.y
		
	}
	gameOver()
	{

		if(this.x < 50)
			console.log("Win 2");
		else if(this.x > WIDTH-50)
			console.log("Win 1");
	}
}