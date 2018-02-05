class Circle
{
	constructor(pos)
	{
		this.x = pos.x;
		this.y = pos.y;
		this.r = 10;
		this.c = 255;
		this.speed = 0.3;
	}
	draw()
	{
		ctx.strokeStyle = "rgba(0,255,0," + this.c/255 + ")";
		ctx.beginPath();      
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);            
		ctx.stroke();
	}
	update()
	{
		this.r += this.speed;
		this.c -= this.speed*7.5;
		if(this.r > 50)
			return true;
		return false;
	}
}