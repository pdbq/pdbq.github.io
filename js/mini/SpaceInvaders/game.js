document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	keyPress();
	plShip.draw();
	//console.log(plBullet);
	if(plBullet){
		okPlBul = plBullet.move(-2);
		plBullet.draw();
		for(let i = 0; i < bots.length; i++)
		{
			if(plBullet.intersect(bots[i]))
			{
				plBullet = 0;
				okPlBul = true;
				bots.splice(i,1);
				if(bots.length == 0)
				{
					GameOver();
				}
				break;
			}	
		}
	}
	for(let i = 0; i < bots.length; i++)
	{
		bots[i].botMove();
		bots[i].draw();
		if(okBotBul)
		{
			botsBullet.push(new Bullet(bots[i]));

		}
	}
	//console.log(botsBullet);
	for(let i = 0; i < botsBullet.length; i++)
	{
		okBotBul = botsBullet[i].move(2, true);
		botsBullet[i].draw();
		if(botsBullet[i].intersect(plShip)){
			GameOver();										//
		}
	}
	requestAnimationFrame(start);
};
//Управление / KeyBoard
function keyPress()
{
	if(keyBoard() == KEY_RIGHT)
	{
		plShip.move(1);
	}
	else if(keyBoard() == KEY_LEFT)
	{
		plShip.move(-1);
	}
	if(keyBoard() == NULL)
	{
		plShip.move(0);
	}
	if(keyBoard() == KEY_SPACE)
	{
		if(okPlBul){
			plBullet = new Bullet(plShip);	
		}
		
	}

}

//Инициализация / INIT
createCanvas(800, 600, "#ccc");

var plShip = new Ship({
	x: WIDTH/2 - 16,
	y: HEIGHT - 32*2,
	w: 32,
	h: 32, 
	c: "green"
});
var plBullet, okPlBul = true;

var bots = new Array();
var botsBullet = new Array();
var okBotBul = true;
for(let i = 0; i < 9; i++)
{
	bots[i] = new Ship({
		x: WIDTH/2+64*(i%3)-(64*3/2-16),
		y: 64+64*parseInt(i/3),
		w: 32,
		h: 32,
		c: "blue"
	});

}


start();
////////////////////////////////////////////////////////
});