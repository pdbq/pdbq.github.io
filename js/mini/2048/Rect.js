class Rect
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.n = param.n;
		this.c = param.c;					//Не используется
		this.check = param.check;
	}
	draw()
	{
		ctx.fillStyle = "rgba(255, 0, 179, " + this.n/500 + ")";
		ctx.strokeStyle = "#090";
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.strokeRect(this.x, this.y, this.w, this.h);
		if(this.n != 0)
		{
			ctx.fillStyle = "#ff6a00";
			ctx.font = "italic 30px Arial";
			ctx.textAlign = "center";
	    	ctx.textBaseline = "middle";
			ctx.strokeText(this.n, this.x+(this.w/2), this.y+(this.h/2));
			ctx.fillText(this.n, this.x+(this.w/2), this.y+(this.h/2));
		}
	}
}