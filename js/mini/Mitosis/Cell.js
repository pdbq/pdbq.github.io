class Cell
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		this.c = param.c;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.beginPath();  
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);  
		ctx.closePath();  
		ctx.fill();  
	}
	update()
	{
		this.x += Cell.random();
		this.y += Cell.random();
	}
	isClick(pos = 0)
	{
		let clk = this.x-this.r <= pos.x && this.x+this.r >= pos.x && 
				this.y-this.r <= pos.y && this.y+this.r >= pos.y;
		if(clk)
			posMouse = 0;
		return clk;
	}
	static random()
	{
		return (Math.random() * 3) - 1.5;
	}
}