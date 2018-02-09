class Player
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.c = 0;

		this.score = 0;
		this.speed = 3;
		this.gameOver = false;

		this.bonus = {
			x: 0,
			y: 0,
			ok: false
		};
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
		if(this.gameOver)
		{
			Player.text("Game Over", WIDTH/2, HEIGHT/2-20, 30);
			Player.text("You score: " + this.score, WIDTH/2, HEIGHT/2+20, 30);
		}
		else
		{
			Player.text("Score: " + this.score, WIDTH/2, 50, 30);
			//log(this.score);
		}
		if(this.bonus.ok)
		{
			Player.text("X2", this.bonus.x, this.bonus.y, 10);
		}
	}
	update(bridge, nowBlock)
	{
		this.x+=this.speed;
		if(bridge.x1 > nowBlock.x+nowBlock.w/2 - 5 && bridge.x1 < nowBlock.x+nowBlock.w/2 + 5)
		{
			this.bonus = {
				x: nowBlock.x+nowBlock.w/2,
				y: nowBlock.y - 10,
				ok: true
			};
		}
		if(this.x + this.w/2 >= bridge.x1)
		{
			if(bridge.x1 > nowBlock.x && bridge.x1 < nowBlock.x + nowBlock.w)
			{
				if(this.bonus.ok)
				{
					//log("ok");
					this.score++;
					this.bonus.ok = false;
				}
				this.score++;
				//log(this.score);
				return false;
			}
			else
			{
				this.y+=5;
				this.x-=this.speed;
				if(this.y > HEIGHT-50)
				{
					this.speed = 0;
					this.gameOver = true;		
				}
			}	
		}
		return true;
	}
	static text(text, x, y, size)
	{
		ctx.fillStyle = "#00F";
		ctx.textAlign = "center";
    	ctx.textBaseline = "middle";
	    ctx.font = "bold " + size + "pt sans-serif";
	    ctx.fillText(text, x, y);
	}
}