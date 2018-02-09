class Bridge
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.x1 = 0;
		this.y1 = 0;
		this.c = 0;

		this.speed = 1;
		this.a = 0.2;
	}
	init(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.x1 = param.x1;
		this.y1 = param.y1;
		this.c = param.c;
	}
	draw()
	{
		ctx.strokeStyle = this.c;
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x1,this.y1);
		ctx.stroke();
	}
	update(rotate)
	{
		if(rotate)
		{
			this.y1+=this.speed;
			this.x1+=this.speed;
			this.speed -= this.a;
			if(this.y1 >= this.y)
			{
				//log(this.x1 - this.x);
				return false;
			}
			return true;
		}
		else
		{
			this.y1 -= this.speed;
			this.speed += this.a;
			if(this.y1 < 0)
			{
				this.y1 = 0;
				this.speed -= this.a;
			}
			if(this.h == 0)
				return false;
			return true;
		}
		
	}
}