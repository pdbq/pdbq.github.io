class Bullet
{
	constructor(obj)
	{
		this.x = obj.x + 16-4;
		this.y = obj.y + 16-4;
		this.w = 8;
		this.h = 8;
		this.c = "red";

	
		this.dirW = Bullet.getRandom();
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	move(dir, bot = false)
	{
		this.y += dir;
		if(bot)
			this.x += this.dirW;
		if(this.y < 0 || this.y > HEIGHT)
			return true;
		else
			return false;
	}
	intersect(obj){
		return !(this.x+this.w <= obj.x || this.y+this.h <= obj.y || this.x >= obj.x+obj.w || this.y >= obj.y+obj.h);
	}
	static getRandom(){
		return (Math.random() * 5) - 2.5;
	}
}