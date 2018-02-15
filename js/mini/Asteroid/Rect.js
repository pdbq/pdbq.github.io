
class Rect
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
		this.angle = 0;
		this.speed = 0;
		this.a = 0.05;
	}

	draw()
	{
		if(this.c)
		{
			drawRect(this.x, this.y, this.w, this.h, this.c);
		}
		if(this.texture)
		{
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle*Math.PI/180);
			drawImage(-this.w/2, -this.h/2, this.w, this.h, this.texture, this.sx, this.sy, this.sw, this.sh);
			ctx.restore();
		}
	}
	control(dir)
	{
		if(dir == 0)
		{
			this.sx = 0;
			this.sy = 0;
		}
		else if(dir == 1)
		{
			this.sx = 100;
			this.sy = 150;
			//ctx.rotate(this.angle);
			this.angle -= 3;
			//this.angle+=0.1;
		}
		else if(dir == 2)
		{
			this.sx = 300;
			this.sy = 150;
			//this.sy = 0;
			this.angle += 3;
			this.rot = 2;
			//log();
		}
		else if(dir == 3)
		{
			flight();
			this.sy = 150;
			this.speed += this.a;
			if(this.speed > 4)
			{
				this.speed = 4;
			}
			this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
			this.x += Math.sin(this.angle*Math.PI/180)*this.speed;
			
			if(this.x < this.w/2)
			{
				this.x = this.w/2;
			}
			else if(this.x + this.w/2 > WIDTH)
			{
				this.x = WIDTH - this.w/2; 
			}
			if(this.y < this.h/2-10)
			{
				this.y = this.h/2-10;
			}
			else if(this.y + this.h/2-10 > HEIGHT)
			{
				this.y = HEIGHT - this.h/2+10;
			}
		}
		else if(dir == 4)
		{
			flight(true);
			this.speed -= this.a;
			if(this.speed < 0)
			{
				this.speed = 0;
			}
			this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
			this.x += Math.sin(this.angle*Math.PI/180)*this.speed;

			if(this.x < this.w/2)
			{
				this.x = this.w/2;
			}
			else if(this.x + this.w/2 > WIDTH)
			{
				this.x = WIDTH - this.w/2; 
			}
			if(this.y < this.h/2-10)
			{
				this.y = this.h/2-10;
			}
			else if(this.y + this.h/2-10 > HEIGHT)
			{
				this.y = HEIGHT - this.h/2+10;
			}
		}
	}
	gameOver()
	{
		alert("Game Over!");
		return true;
	}
}