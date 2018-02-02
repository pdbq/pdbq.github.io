var imgList = {};
function loadImage(file)
{
	if(imgList[file]){return;}
	var image = new Image();
	imgList[file] = {
		loaded : false,
		image : image
	};
	var _image = imgList[file];
	image.onload = function(){
		_image.loaded = true;
	};
	image.src = file;
}

class Button
{
	constructor(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
    	this.h = param.h;
    	this.sx = param.sx;
    	this.sy = param.sy;
    	this.sw = param.sw;
    	this.sh = param.sh;
    	this.c = param.c;		//Цвет
    	this.strokeColor = false;
    	if(param.strokeColor)
    	{
    		this.strokeColor = param.strokeColor;
    	}
    	
    	//навигация
    	this.page = param.page;
    	this.displayElemInPage = param.displayElemInPage;

    	this.texture = false;
    	if(param.texture){
			this.texture = param.texture;
			loadImage(param.texture);
		}
		//Текст
		this.text = "";	
		if(param.text)
		{
			this.text = param.text;
			this.textColor = param.textColor;
			this.fontSize = param.fontSize;
		}
		this.desc = param.desc;
		this.price = param.price;
	}
	draw()
	{
		if(this.c)
		{
			Button.drawRect(this.x, this.y, this.w, this.h, this.c, this.strokeColor);
			Button.drawText(this.text, this.x+(this.w/2), this.y+(this.h/2), this.textColor, this.fontSize);
		}
		if(this.texture)
		{
			Button.drawImage(this.x, this.y, this.w, this.h, this.texture, this.sx, this.sy, this.sw, this.sh);
		}
	}
	static drawRect(x, y, w, h, c, strokeColor)
	{
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, h);
		if(strokeColor)
		{
			ctx.strokeStyle = strokeColor;
			ctx.strokeRect(x, y, w, h);
		}
	}
	static drawImage(x, y, w, h, file, sx, sy, sw, sh)
	{
		
		if(!imgList[file]) {return;}
		if(!imgList[file].loaded) {return;}
		//console.log(sy);
		ctx.drawImage(imgList[file].image, x, y);
	}
	static drawText(text, x, y, color, fontSize)
	{
		ctx.fillStyle = color;
		ctx.font = "italic " + fontSize + "px Arial";
		ctx.textAlign = "center";
	    ctx.textBaseline = "middle";
	    //ctx.strokeText(this.n, this.x+(this.w/2), this.y+(this.h/2));
		ctx.fillText(text, x, y);
	}
	isClick(pos = 0)
	{
		var clk = (this.x <= pos.x && this.x+this.w >= pos.x && this.y <= pos.y && this.y+this.h >= pos.y);
		if(clk)
			pMouse = 0;
		return clk;
	}
}