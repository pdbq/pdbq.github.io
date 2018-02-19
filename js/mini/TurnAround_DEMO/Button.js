class Button
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;
		this.text = param.text;
		this.font = param.font;
	}
	draw()
	{
		drawRect(this.x, this.y, this.w, this.h, this.c.fon);
		text(this.text, this.x + this.w/2, this.y + this.h/2, this.c.text, this.font);
	}
	isClick(M)
	{
		//log(this.x < M.x);
		if(this.x < M.x && this.x + this.w > M.x && this.y < M.y && this.y + this.h > M.y)
		{
			//log(1);	
			return true;
		}
		return false;
	}
}