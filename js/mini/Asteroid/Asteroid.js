class Asteroid
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
    	this.h = param.h;
    	this.c = param.c;

    	this.sx = param.sx;
    	this.sy = param.sy;
    	this.sw = param.sw;
    	this.sh = param.sh;
    	this.texture = false;
    	if(param.texture){
			this.texture = param.texture;
			loadImage(param.texture);
		}
	//	this.angle = 0;
		this.speed = param.speed;
		this.rotate = {t: 0, time: 5};
	//	this.a = 0.05;
	}
	draw()
	{
		if(this.c)
		{
			drawRect(this.x, this.y, this.w, this.h, this.c);
		}
		if(this.texture)
		{
			drawImage(this.x, this.y, this.w, this.h, this.texture, this.sx, this.sy, this.sw, this.sh);
		}
	}
	update()
	{
		this.x += this.speed.x;
		this.y += this.speed.y;
		if(this.x < -10 || this.x + this.w - 15 > WIDTH)
			this.speed.x = -this.speed.x;
		if(this.y < -10 || this.y + this.h - 15 > HEIGHT)
			this.speed.y = -this.speed.y
		
		this.rotate.t++;
		if(this.rotate.t > this.rotate.time)
		{
			this.sx += 70;
			if(this.sx >= 350)
				this.sx = 0;
			this.rotate.t = 0;
		}
	}
	intersect(obj, isBullet)
	{
		if(isBullet)
			return this.x+this.w-10 > obj.x+obj.r && this.x+10 < obj.x-obj.r && this.y+this.h-10 > obj.y+obj.r && this.y+10 < obj.y-obj.r;
		return this.x+this.w-30 > obj.x - obj.w/2 && this.x+30 < obj.x-obj.w/2+obj.w && this.y+this.h-20 > obj.y-obj.h/2 && this.y+20 < obj.y-obj.h/2+obj.h;
	}
}