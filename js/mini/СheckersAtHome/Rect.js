class Rect {
	constructor(param) {
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
  	this.h = param.h;
  	this.c = param.c;
  	this.texture = false;
  	if(param.texture){
			this.texture = param.texture;
			loadImage(param.texture);
		}

		this.sx = false;
		this.sy = false;
		this.sw = false;
  	this.sh = false;
  	if(param.sw && param.sh) {
  		this.sx = param.sx;
			this.sy = param.sy;
			this.sw = param.sw;
	  	this.sh = param.sh;
  	}

		this.dad = false;
		this.zindex = 0;
		this.dam = false;

	}
	draw() {
		if(this.c) {
			drawRect(this.x, this.y, this.w, this.h, this.c);
		}
		if(this.texture) {
			drawImage(this.x, this.y, this.w, this.h, this.texture, this.sx, this.sy, this.sw, this.sh);
		}
	}
	update(newPos) {
		if(newPos.click && this.x < newPos.x && this.x + this.w > newPos.x && this.y < newPos.y && this.y + this.h > newPos.y) {
			this.dad = true;
		} 
		if(this.dad && newPos.x !== undefined && newPos.y !== undefined) {	
			this.x = newPos.x - this.w/2;
			this.y = newPos.y - this.h/2;
			this.zindex = 1;
		} else {
			this.dad = false;
			//this.zindex = 0;
		}
		if(newPos.dam && this.x < newPos.x && this.x + this.w > newPos.x && this.y < newPos.y && this.y + this.h > newPos.y) {
			this.dam = !this.dam;
			if(this.dam) {
				this.sx = this.sw;
			} else {
				this.sx = 0;
			}
			newPos.dam = false;
		} 
	}
	
}