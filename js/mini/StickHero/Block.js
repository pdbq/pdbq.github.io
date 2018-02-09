class Block //??
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.c = 0;
	}
	init(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;
	}
	draw()
	{
		rect({
			x: this.x,
			y: this.y,
			w: this.w,
			h: this.h,
			c: this.c
		});
	}
}