class Player
{
	constructor(data)
	{
		this.x = data.x;
		this.y = data.y;
		this.w = data.w;
		this.h = data.h;
		this.c = data.c;
	}
	draw()
	{
		rect(this.x, this.y, this.w, this.h, this.c);
	}
	move(dir)
	{
		this.x += dir;
		if(this.x < 0)
			this.x = 0;
		else if(this.x + this.w > WIDTH)
			this.x = WIDTH - this.w;
	}
}