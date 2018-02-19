class Player
{
	constructor(param)
	{
		
		this.a = 0.01;
		this.brake = 0;
		this.maxSpeed = 2;
		this.angleSpeed = 1;

		this.money = 0;
		this.upgare = [
			{id: 0, text: "Upgrade speed", price: 100},
			{id: 1, text: "Upgrade boost", price: 100},
			{id: 2, text: "Upgrade brake", price: 100},
			{id: 3, text: "Upgrade angle", price: 100}
		];
		
		this.funcUpgrade = function(i)
		{
			if(this.money >= this.upgare[i].price)
			{
				this.money -= this.upgare[i].price;
				this.upgare[i].price *= 2;
				this.buttonUpgradeArr[i].text = this.upgare[i].text + " - price: " + this.upgare[i].price;
				if(i == 0)
					this.maxSpeed++;
				else if(i == 1)
					this.a += 0.01;
				else if(i == 2)
					this.brake += 0.1;
				else if(i == 3)
					this.angleSpeed += 0.5;
			}
			else
			{
				this.buttonUpgradeArr[i].c.fon = "red";
			}
		}
		this.newPos = function()
		{
			this.x += Math.sin(this.angle*Math.PI/180)*this.speed;
			this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
			if(this.x - this.r < 0 || this.x + this.r > WIDTH)
			{
				this.x = getRandom(50, WIDTH - 50);
			}
			if(this.y - this.r < 0 || this.y + this.r > HEIGHT)
			{
				this.y = getRandom(50, HEIGHT - 50);
			}
		}
	}
	startPosition(param)
	{
		this.x = param.x;
		this.y = param.y;
		this.r = param.r;
		this.c = param.c;

		this.angle = 0;
		this.speed = 0;

		this.gameOver = false;
		this.timeOut = {count: 0, maxTime: 50};	

		this.buttonUpgradeArr = new Array();
		for (var i = 0; i < this.upgare.length; i++) {
			this.buttonUpgradeArr.push(new Button({
				x: WIDTH/2-150,
				y: 100+50*i,
				w: 300,
				h: 30,
				c: {fon: "#0f0", text: "#00f"},
				font: "18px sans-serif",
				text: this.upgare[i].text + " - price: " + this.upgare[i].price
			}));
		}
	}
	draw()
	{
		if(this.gameOver)
		{
			text("GAME OVER", WIDTH/2, HEIGHT/2 - 25, "yellow");
			//this.buttonOkGM.draw();
		}
		else
		{
			arc(this.x, this.y, this.r, this.c);
		}
		text("Money: " + this.money, WIDTH/2, 20, "#fff", "15px sans-serif");
	}
	update(dir)
	{
		switch(dir)
		{
			case KEY_LEFT:
				this.angle -= this.angleSpeed;
				break;
			case KEY_RIGHT:
				this.angle += this.angleSpeed;
				break;
			case KEY_UP:
				this.speed += this.a;
				if(this.speed > this.maxSpeed)
				{
					this.speed = this.maxSpeed;
				}
				this.newPos();
				break;
			case KEY_DOWN:
				
				//log(this.speed);
				this.speed -= this.brake;

				if(this.speed < 0)
				{
					this.speed = 0;
				}
				this.newPos();
				break;
			case NULL:
				//log("1");
				//log(this.speed);
				this.speed -= this.a;
				if(this.speed < 0)
				{
					this.speed = 0;
				}
				this.newPos();	
				break;
		}
		this.timeOut.count++;
		if(this.timeOut.count >= this.timeOut.maxTime)
		{
			this.timeOut.count = 0;
			this.money += 10;
			newEnemy = true;
		}
		
		/*if(dir == KEY_LEFT)
		{
			this.angle--;
		}
		else if(dir == KEY_RIGHT)
		{
			this.angle++;
		}
		if(dir == KEY_UP)
		{	
			this.speed += this.a;
			if(this.speed > this.maxSpeed)
			{
				this.speed = this.maxSpeed;
			}
			this.x += Math.sin(this.angle*Math.PI/180)*this.speed;
			this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;
		}
		if(dir == NULL)
		{
			this.speed -= this.a;
			if(this.speed < 0)
			{
				this.speed = 0;
			}
			this.x += Math.sin(this.angle*Math.PI/180)*this.speed;
			this.y -= Math.cos(this.angle*Math.PI/180)*this.speed;		
		}*/
	}
	skills()
	{
		text("Money: " + this.money, WIDTH/2, 20, "#fff", "15px sans-serif");

		for (var i = 0; i < this.buttonUpgradeArr.length; i++) 
		{
			this.buttonUpgradeArr[i].draw();
			if(this.buttonUpgradeArr[i].isClick(mouseClick()))
			{
				switch(this.upgare[i].id)
				{
					case 0:
						this.funcUpgrade(i);
						break;
					case 1:
						this.funcUpgrade(i);
						break;
					case 2:
						this.funcUpgrade(i);
						break;
					case 3:
						this.funcUpgrade(i);
						break;
				}
			}
		}
		
		
	}
	intersect(obj)
	{
		var r = Math.sqrt(Math.pow(this.x - obj.x, 2) + Math.pow(this.y - obj.y, 2));
		if(this.r + obj.r >= r && this.r + r >= obj.r && obj.r + r >= this.r)
		{
			this.gameOver = true;
			return true;
		}
		return false;
		/*if(this.x - this.r < obj.x + this.r && this.x + this.r > obj.x - this.r && this.y - this.r < obj.y + this.r && this.y + this.r > obj.y - this.r)
			return true;
		return false;*/
	}
}