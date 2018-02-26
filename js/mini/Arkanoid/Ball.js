class Ball
{
	constructor(x, y, r, c)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.c = c;
		this.speed = {x: 0, y: 4};
	}
	draw()
	{
		arc(this.x, this.y, this.r, this.c);
	}
	move()
	{
		this.x += this.speed.x;
		this.y += this.speed.y;
		if(this.x - this.r < 0 || this.x + this.r > WIDTH)
			this.speed.x = -this.speed.x;
		if(this.y - this.r < 0)
			this.speed.y = -this.speed.y;
		if(this.y > HEIGHT-10)
		{
			log("Game Over");
			gameGo = false;
		}	
	}
	intersect(obj, pl)
	{
		if(pl)
		{
			if(this.x - this.r <= obj.x + obj.w && this.x + this.r >= obj.x && this.y - this.r <= obj.y + obj.h && this.y + this.r >= obj.y)
			{
				this.speed.y = -this.speed.y;
				this.speed.x = (this.x - (obj.x + obj.w/2))/10;
			}
		}
		else
		{
			if(this.x - this.r <= obj.x + obj.w && this.x + this.r >= obj.x && this.y - this.r <= obj.y + obj.h && this.y + this.r >= obj.y)
			{
				if(this.x - this.r <= obj.x + obj.w && this.x + this.r >= obj.x)
				{
					this.speed.y = -this.speed.y;
				}
				else if(this.y - this.r <= obj.y + obj.h && this.y + this.r >= obj.y)
				{
					this.speed.x = -this.speed.x;
				}
				return true;
			}
			return false;
		}
	}	
}