class Circle
{
	constructor(param, puf)
	{

		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		//this.nowR = 0;
		this.c = param.c;
		this.speed = param.speed;
		this.gravity = 0.03;
		this.puf = puf;
		//this.posStart = {x: this.x, y: this.y};
		this.speedNow = param.speedNow;

	}
	draw()
	{
		ctx.fillStyle = "rgb("+this.c.r+","+this.c.g+","+this.c.b+")";
		ctx.beginPath();      
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);            
		ctx.fill();
	}
	update()
	{
		
		if(!this.puf)
		{
			this.y -= this.speed;
			this.speed -= this.gravity;
			if(this.speed < 0)
			{
				//this.puf = true;
				return true;
			}
			return false;
		}
		else
		{		
			this.x += this.speedNow.x;
			this.y += this.speedNow.y;
			this.speedNow.y += this.y * 0.0006;
			this.r -= 0.1;
			if(this.r <= 0)
				return true;
			return false;
		}
	}
}