class Text
{
	constructor(text, pos)
	{
		this.text = text;
		this.x = pos.x;
		this.y = pos.y;
	}
	draw()
	{
		ctx.fillStyle = "#00F";
		ctx.textAlign = "left";
   	 	ctx.textBaseline = "bottom";
    	ctx.font = "italic 10pt Arial";
    	ctx.fillText(this.text, this.x, this.y);
	}
}