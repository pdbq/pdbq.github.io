class Text
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.c = param.c;
	}
	draw(text)
	{
		ctx.fillStyle = this.c;
		//ctx.strokeStyle = "#F00";
		ctx.font = "italic 40px Arial";
		ctx.textAlign = "center";
		ctx.fillText(text, this.x, this.y);
	}
}