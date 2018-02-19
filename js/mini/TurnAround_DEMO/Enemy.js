class Enemy
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		this.c = param.c;

		this.angle = getRandom(0, 361) - 180;
		this.speed = getRandom(2, 10);
		this.timeOut = {count: 0, maxTime: 20};
		//this.a = 0.01;
		//this.brake = 0.1;
		//this.maxSpeed = 4;
		this.newPos = function()
		{
			this.timeOut.count = 0;
			this.angle = getRandom(0, 361) - 180;
		}
	}
	draw()
	{
		arc(this.x, this.y, this.r, this.c);
	}
	update()
	{
		this.timeOut.count++;
		if(this.timeOut.count >= this.timeOut.maxTime)
		{
			this.newPos();
		}
		this.x += Math.sin(this.angle*Math.PI/180)*this.speed;				
		this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
		if(this.x - this.r < 0)
		{
			this.x = this.r;
			this.newPos();
		}
		else if(this.x + this.r > WIDTH)
		{
			this.x = WIDTH - this.r;
			this.newPos();
		}
		if(this.y - this.r < 0)
		{
			this.y = this.r;
			this.newPos();
		}
		else if(this.y + this.r > HEIGHT)
		{
			this.y = HEIGHT - this.r;
			this.newPos();
		}
	}
	
}