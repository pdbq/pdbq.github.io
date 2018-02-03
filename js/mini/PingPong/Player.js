class Player
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	update(dir)
	{
		this.y += dir;
		if(this.y < 0)
			this.y = 0;
		else if(this.y > HEIGHT-this.h)
			this.y = HEIGHT-this.h;
	}
		
}