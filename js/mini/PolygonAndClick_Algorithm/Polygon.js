class Polygon
{
	constructor(param)
	{
		this.pos = param;
	}
	draw()
	{
		ctx.fillStyle = "#fff";
		ctx.beginPath();
		ctx.moveTo(this.pos[0].x, this.pos[0].y);
		for(var i = 1; i < this.pos.length; i++)
		{
			ctx.lineTo(this.pos[i].x , this.pos[i].y);
		}
		ctx.closePath();
		ctx.fill();
	}
	isClick(mousePos = 0)
	{
		var clk = false;
		var x = mousePos.x, y = mousePos.y;
		for(var i = 1; i < this.pos.length; i++)
		{
			var xp = this.pos[i].x;
			var yp = this.pos[i].y;
			var xp_prev = this.pos[i-1].x;
			var yp_prev = this.pos[i-1].y;
			if (((yp <= y && y < yp_prev) || (yp_prev <= y && y < yp)) && (x > (xp_prev - xp) * (y - yp) / (yp_prev - yp) + xp))
			{
				clk = !clk;
			}
		}
		return clk;
	}
}