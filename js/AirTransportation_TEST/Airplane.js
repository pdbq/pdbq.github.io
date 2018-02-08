class Airplane
{
	constructor(param, id)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;

		this.id = id;
		this.inAirport = 0;
		this.start = false;

		this.dir = 0;

		this.gameOver = false;

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
		for(var i = 0; i < this.id.length; i++)
		{
			Airplane.text(this.id[i].text + ": " + this.id[i].value, {x: 10, y: 20+15*i});
		}
		if(this.gameOver)
		{
			Airplane.text("Game Over!", {x: WIDTH/2-20, y: HEIGHT/2-20});
		}
	}
	static text(text, pos)
	{
		ctx.fillStyle = "#00F";
		ctx.textAlign = "left";
   	 	ctx.textBaseline = "bottom";
    	ctx.font = "italic 10pt Arial";
    	ctx.fillText(text, pos.x, pos.y);
	}
	intersect(aiport)
	{
		//console.log(this.inAirport);
		if(this.x+this.w >= aiport.x && this.x <= aiport.x+aiport.w && this.y+this.h >= aiport.y && this.y <= aiport.y+aiport.h && aiport.id != this.inAirport)
		{
			this.start = false;
			this.inAirport = aiport.id;
			//console.log(this.inAirport);
			this.x = aiport.x+aiport.w/2-this.w/2;
			this.y = aiport.y+aiport.h/2-this.h/2;

			//Продажа тавара
			if(this.id[2].value)
			{
				this.id[0].value = this.id[2].value*getRandomInt(1,4)
				this.id[2].value = 0;
			}
		}
	}
	move()
	{
		if(this.start && !this.gameOver)
		{
			this.x += this.dir.x;
			this.y += this.dir.y;
			this.id[1].value -= 0.25;
			if(this.id[1].value < 0)
			{
				//console.log(1);
				this.gameOver = true;
			}
		}
		else 
		{
			this.dir = 0;
		}
	}
}