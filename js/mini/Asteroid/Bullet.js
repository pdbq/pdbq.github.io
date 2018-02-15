class Bullet
{
	constructor(pl)
	{
		this.x = pl.x;
		this.y = pl.y;
		this.r = 5;
    	//this.h = 10;
    	this.c = "red";
    	this.angle = pl.angle;
    	this.speed = 5;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.beginPath();      
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);            
		ctx.fill();
	}
	update()
	{
		this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
		this.x += Math.sin(this.angle*Math.PI/180)*this.speed;
		if(this.x < 0 || this.x + this.w > WIDTH || this.y < 0 || this.y + this.h > HEIGHT)
			return true;
		return false;
	}
}