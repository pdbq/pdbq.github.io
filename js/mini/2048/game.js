document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

var click = false;				//Возможность клика

var SCORE = 0;
//Цикл игры / game loop
function start()
{
	cls();
	SCORE = 0;
	//score();
	if(!click){					//Проверка возможности клика
		keyPress();
	}
	if(keyBoard() == NULL) 		//Разрешение клика при отпускании клавиши
		click = false;
	draw();
	requestAnimationFrame(start);
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Процентный рандом
function randomPercent()
{
	var r = getRandomInt(0, 100);
	if( r >= 0 && r <= 91)
		return 2;
	else
		return 4;
}
//Генерация нового блока (числа)
function newBlock()
{
	while(true)
	{
		var i = getRandomInt(0,2),
			j = getRandomInt(0,2);

		if(block[i][j].check == true)
			continue;
		block[i][j].n = randomPercent();
		block[i][j].check = true;
		break;
	} 
}

//Проверка на возможность хода и GameOver
function update(blockTemp)
{
	var ok = false;
	var count = 0;
	for(var i = 0; i < 3; i++)
	{
		for(var j = 0; j < 3; j++)
		{
			if(blockTemp[i][j].n != block[i][j].n && block[i][j].check)		//Проверка: изменение игрового поля после хода (нажатии на клавишу)
				ok = true;
			if(block[i][j].n)												//Проверка: полное поле
				count++;
		}
	}
	if(ok)																
	{
		return true;
		//console.log(block);
		/*
		for(var i = 0; i < 2; i++)
		{
			for(var j = 0; j < 2; j++)
			{
				if(block[i][j].n == block[i+1][j].n && count != 9)
				{
						return true;
				}
				else if(block[i][j].n == block[i][j+1].n && count != 9)
				{
					//if(ok)
						return true;
				}
				else if(!block[i][j].n && count != 9)
				{
					//if(ok)
						return true;
				}
			}
		}
		*/
	}
	else if(count == 9)	
	{
		var GO = true;  	//Game Over
		//Проверка на равность соседних блоков (чисел)	
		for(var i = 0; i < 2; i++)												//???? Дает сбой крайний правый столбец и (?последняя строка) 
		{
			for(var j = 0; j < 2; j++)
			{
				if(block[i][j].n == block[i+1][j].n)					
				{
					GO = false;
				}
				else if(block[i][j].n == block[i][j+1].n)
				{
					GO = false;
				}
			}
		}
		for(var i = 1; i < 3; i++)												//???? Дает сбой первый левый столбец и (?первая строка) 
		{
			for(var j = 1; j < 3; j++)
			{
				if(block[i][j].n == block[i-1][j].n)
				{
					GO = false;
				}
				else if(block[i][j].n == block[i][j-1].n)
				{
					GO = false;
				}
			}
		}
		gameOver(GO);
	}
	

}

function gameOver(go)
{
	if(go)
	{
		GG = "Game Over!";
	}
}
//Управление (Работа с клавиатурой) 
function keyPress()
{
	var blockTemp = new Array();	//Создание нового массива для сравнения нового после хода
	for(var i = 0; i < 3; i++)
	{
		blockTemp[i] = new Array();
		for(var j = 0; j < 3; j++)
		{
			blockTemp[i][j] = new Rect({
				x: block[i][j].x,
				y: block[i][j].y,
				w: block[i][j].w,
				h: block[i][j].h,
				n: block[i][j].n,
				c: block[i][j].c,
				check: block[i][j].check
			});
		}
	}
	
	if(keyBoard() == KEY_RIGHT)
	{

		for(t = 0; t < 3; t++)										//Поле 3х3: проверка 3 раза 
		{
			for(var i = 1; i >= 0; i--)
			{
				for(var j = 0; j < 3; j++)
				{
					if(block[i][j].n && !block[i+1][j].n)			
					{
						block[i+1][j].n = block[i][j].n;
						block[i+1][j].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
					else if(block[i][j].n == block[i+1][j].n)
					{
						block[i+1][j].n += block[i][j].n;
						block[i+1][j].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;		
					}
				}
			}
		}
		if(update(blockTemp))										
			newBlock();
		click = true;												//Запрещаем нажатие клавиши
	}
	else if(keyBoard() == KEY_LEFT)
	{
		for(t = 0; t < 3; t++)
		{
			for(var i = 1; i < 3; i++)
			{
				for(var j = 0; j < 3; j++)
				{
					if(block[i][j].n && !block[i-1][j].n)
					{
						block[i-1][j].n = block[i][j].n;
						block[i-1][j].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
					else if(block[i][j].n == block[i-1][j].n)
					{
						block[i-1][j].n += block[i][j].n;
						block[i-1][j].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
				}
			}
		}
		if(update(blockTemp))
			newBlock();
		click = true;
	}
	else if(keyBoard() == KEY_DOWN)
	{
		for(t = 0; t < 3; t++)
		{
			for(var i = 0; i < 3; i++)
			{
				for(var j = 1; j >= 0; j--)
				{
					if(block[i][j].n && !block[i][j+1].n)
					{
						block[i][j+1].n = block[i][j].n;
						block[i][j+1].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
					else if(block[i][j].n == block[i][j+1].n)
					{
						block[i][j+1].n += block[i][j].n;
						block[i][j+1].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;		
					}
				}
			}
		}
		if(update(blockTemp))
			newBlock();
		click = true;
	}
	else if(keyBoard() == KEY_UP)
	{
		for(t = 0; t < 3; t++)
		{
			for(var i = 0; i < 3; i++)
			{
				for(var j = 1; j < 3; j++)
				{
					if(block[i][j].n && !block[i][j-1].n)
					{
						block[i][j-1].n = block[i][j].n;
						block[i][j-1].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
					else if(block[i][j].n == block[i][j-1].n)
					{
						block[i][j-1].n += block[i][j].n;
						block[i][j-1].check = true;
						block[i][j].n = NULL;
						block[i][j].check = false;
					}
				}
			}
		}
		if(update(blockTemp))
			newBlock();
		click = true;
	}
}

//Рисование 
function draw()
{
	for(var i = 0; i < 3; i++)
	{
		for(var j = 0; j < 3; j++)
		{
			SCORE += block[i][j].n;			//Подсчет очков
			block[i][j].draw();
		}
	}
	sc.draw("Score: " + SCORE);
	gameover.draw(GG);
}



//Инициализация / INIT
createCanvas(800, 600, "#000");

var block = new Array();			//Создание массива с элементами
for(var i = 0; i < 3; i++)
{
	block[i] = new Array();
	for(var j = 0; j < 3; j++)
	{
		block[i][j] = new Rect({
			x: WIDTH/2-100*3/2+i*110,
			y: HEIGHT/2-100*3/2+j*110,
			w: 100,
			h: 100,
			n: NULL,
			c: "#095",
			check: false
		});
	}
}
newBlock();
newBlock();

//Текст счета
var sc = new Text({
	x: WIDTH/2,
	y: 75,
	c: "#0ff"
});

//Текст Game over
var GG = ""; 
var gameover = new Text({
			x: WIDTH/2,
			y: HEIGHT-75,
			c: "#0ff"
		});

start();
////////////////////////////////////////////////////////
});