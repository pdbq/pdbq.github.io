class Circle
{
	constructor(pos, color)
	{
		this.x = pos.x;
		this.y = pos.y;
		this.r = 1;
		this.c = color;
		this.speed = 0.2;
//console.log(this.c);
		this.groving = true;
	}
	draw()
	{
		
		ctx.strokeStyle = this.c;
		ctx.beginPath();      
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);            
		ctx.stroke();
	}
	update()
	{
		if(this.groving)
		{
			this.r = this.r + 0.5;
		}
	}
	edges()
	{
		return this.x + this.r > WIDTH || this.x - this.r < 0 || this.y + this.r > HEIGHT || this.y - this.r < 0;
	}
}