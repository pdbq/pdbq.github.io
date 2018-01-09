class Ship
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;

		this.botDir = -1;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	move(dir = 0)
	{
		this.x += dir;
		if(this.x < 0)
			this.x = 0;
		else if(this.x + this.w > WIDTH)
			this.x = WIDTH - this.w;

	}
	botMove()
	{
		this.x += this.botDir;
		if(this.x < 10){
			this.botDir = -this.botDir;
			this.y += 32;
			if(this.y > HEIGHT){
				GameOver();
			}
		}
		else if(this.x + this.w > WIDTH-10){
			this.botDir = -this.botDir;
			this.y += 32;
			if(this.y > HEIGHT){
				GameOver();
			}
		}
	}
}