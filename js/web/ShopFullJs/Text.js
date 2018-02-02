class Text
{
	constructor(param)
	{
		this.text = param.text;
		this.x = param.x;
		this.y = param.y;
		this.c = param.c;
		this.font = param.font;
		this.textAlign = param.textAlign;
		this.textBaseline = param.textBaseline;
		this.displayElemInPage = param.displayElemInPage;
	}
	draw()
	{
		ctx.fillStyle = this.c;
		ctx.font = this.font;
		ctx.textAlign = this.textAlign;
	    ctx.textBaseline = this.textBaseline;
		ctx.fillText(this.text, this.x, this.y);
	}
}