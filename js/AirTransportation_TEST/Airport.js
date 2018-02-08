class Airport
{
	constructor(param, id)
	{
		this.x = param.x;
		this.y = param.y;
		this.w = param.w;
		this.h = param.h;
		this.c = param.c;
		
		this.id = id;

		this.inAirport = false;
		this.dataInAiroport = [
			{text: "Refueling", pos: {x: this.x+this.w/2, y: this.y+this.h+15}},
			{text: "Loaded", pos: {x: this.x+this.w/2, y: this.y+this.h+30}}
		];
		this.airport = false;
		this.dataAiroport = [
			{text: "Fly", pos: {x: this.x+this.w/2, y: this.y+this.h+15}}
		];
		//this.loaded = true;
	}
	draw()
	{
		rect({
			x: this.x,
			y: this.y,
			w: this.w,
			h: this.h,
			c: this.c
		});
		if(this.inAirport)
		{
			//console.log(5);
			for(var i = 0; i < this.dataInAiroport.length; i++)
			{
				Airport.text(this.dataInAiroport[i].text, this.dataInAiroport[i].pos);
			}
		}
		if(this.airport)
		{
			for(var i = 0; i < this.dataAiroport.length; i++)
			{
				Airport.text(this.dataAiroport[i].text, this.dataAiroport[i].pos);
			}
		}

	}
	isClick(airplane, posM)
	{
		if(!airplane.start)
		{
			if(this.x <= posM.x && this.x+this.w >= posM.x && this.y <= posM.y && this.y+this.h >= posM.y)
			{
				posMouse = 0;
				if(this.id == airplane.inAirport)
				{
					this.inAirport = true;
				}
				else
				{
					console.log(1);
					this.airport = true;
				}	
			}
			if(this.inAirport)
			{
				var priceFuel = 1;
				var maxLoad = 50;
				for(var i = 0; i < this.dataInAiroport.length; i++)
				{
					if(this.dataInAiroport[i].pos.x-this.dataInAiroport[i].text.length/2*8 <= posM.x 
						&& this.dataInAiroport[i].pos.x+this.dataInAiroport[i].text.length/2*8 >= posM.x 
						&& this.dataInAiroport[i].pos.y-4 <= posM.y 
						&& this.dataInAiroport[i].pos.y+4 >= posM.y)
					{
						posMouse = 0;
						switch(i)
						{
							//Заправится
							case 0: 
								airplane.id[0].value -= (100-airplane.id[1].value)*1;
								airplane.id[1].value = 100;
								break;
							//Покупка товара
							case 1: 
								airplane.id[2].value = maxLoad;
								airplane.id[0].value -= getRandomInt(1, 3)*maxLoad;
								break;
						}
					}
				}
			}

			if(this.airport)
			{
				for(var i = 0; i < this.dataAiroport.length; i++)
				{
					if(this.dataInAiroport[i].pos.x-this.dataInAiroport[i].text.length/2*8 <= posM.x 
						&& this.dataInAiroport[i].pos.x+this.dataInAiroport[i].text.length/2*8 >= posM.x 
						&& this.dataInAiroport[i].pos.y-4 <= posM.y 
						&& this.dataInAiroport[i].pos.y+4 >= posM.y)
					{
						airplane.start = true;
						var len = Math.sqrt(Math.pow(this.x+this.w/2-airplane.x-airplane.w/2, 2) + Math.pow(this.y+this.h/2-airplane.y-airplane.h/2, 2))
						airplane.dir = {x: (this.x+this.w/2-airplane.x-airplane.w/2)/len*2, 
										y: (this.y+this.h/2-airplane.y-airplane.h/2)/len*2};
					}
				}
			}

			if(!(this.x <= posM.x && this.x+this.w >= posM.x && this.y <= posM.y && this.y+this.h >= posM.y) && posM != 0)
			{
				this.inAirport = false;
				this.airport = false;
			}
		}
		
		return false;
	}
	static text(text, pos)
	{
		ctx.fillStyle = "#00F";
		ctx.textAlign = "center";
   	 	ctx.textBaseline = "middle";
    	ctx.font = "italic 10pt Arial";
    	ctx.fillText(text, pos.x, pos.y);
	}
}