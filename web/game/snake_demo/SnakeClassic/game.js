//функции
//Рандом
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Глобальные переменные
var WIDTH = 8*30, HEIGHT = 8*30; //Ширина и высота игрового поля
var COLOR = "#2d384a"; //Цвет фона


var game = new Game(WIDTH, HEIGHT, COLOR); 
var kb = game.KeyBoard();
var mouse = game.Mouse();

var player = [];
var fruits = new game.Rect({
	x: 8*10, y: 8*10,
	w: 8, h: 8,
	sx: 0, sy: 0,
	sw: 8, sh: 8,
	rot: 1,
	//c: 'red' 
	texture: 'img/fruits.png'
});

var score = 0;
var text;
var checkDir;
var time, t = 0;

var snakeInit = function(){
	checkDir = {
		d1: false,
		d2: true,
		d3: true,
		d4: true
	};
	score = 0;
	time = 0.5;
	text = new game.Text({
		x: 85, y: 20,
		text: "Score = " + score,
		pt: 12,
		c: '#cccccc'
	});
	for(var i = 0; i < 6; i++){
		if(i == 0){		
			player[i] = new game.Rect({
				x: 8, y: 8*i+8*20,
				w: 8, h: 8,
				sx: 0, sy: 0,
				sw: 8, sh: 8,
				rot: 1,
				//c: 'blue'
				texture: 'img/head_snake.png'	
			});		
		}
		else if(i == 5){
			player[i] = new game.Rect({
				x: 8, y: 8*i+8*20,
				w: 8, h: 8,
				sx: 0, sy: 0,
				sw: 8, sh: 8,
				rot: 1,
			//	c: 'blue',
				texture: 'img/tail_snake.png'	
			});	
		}
		else{
			player[i] = new game.Rect({
				x: 8, y: 8*i+8*20,
				w: 8, h: 8,
				sx: 0, sy: 0,
				sw: 8, sh: 8,
				rot: 1,
			//	c: 'blue',
				texture: 'img/body_snake.png'	
			});	
		}
	}
}
snakeInit();
var button = new game.Rect({
	x: 40, y: 40,
	w: 160, h: 160,
	sx: 0, sy: 0,
	sw: 160, sh: 160,
	rot: 1,
	//c: 'green'
	texture: 'img/start.png'
});
var buttonGameOver = new game.Rect({
	x: 20, y: 60,
	w: 200, h: 120,
	sx: 0, sy: 0,
	sw: 200, sh: 120,
	rot: 1,
	//c: 'green'
	texture: 'img/game_over.png'
});





var lastX, lastY;

var menu = 1;

var click = {};

var func1 = function(){
	lastY = player[player.length-1].y;
	lastX = player[player.length-1].x;
	for(var i = player.length-1; i > 0; i--){		// oK
		player[i].y = player[i-1].y;
		player[i].x = player[i-1].x;
		player[i].rot = player[i-1].rot;
	}

};
var func2 = function(){
	player[player.length-1].c = "red";
	block.push(player[player.length-1]);
	player.pop();
};


game.update = function(){
//click = kb.isClick();
//console.log(player[1].rot);
	switch(menu){
		case 1:
			button.draw();	
			if(mouse.isClick().click && mouse.isClick().x > button.x && mouse.isClick().x < button.x+button.w && mouse.isClick().y > button.y && mouse.isClick().y < button.y+button.h){
				mouse.isClick().click = false;
				menu = 2;
			}		 
			break;
		case 2: 
			if(kb.isDown('UP')){
				if(checkDir.d2){
					player[0].rot = 1;


					checkDir = {
						d1: false,
						d2: true,
						d3: true,
						d4: true
					};
					
				}
			}		
			else if(kb.isDown('DOWN')){
				if(checkDir.d1){
					player[0].rot = 2;
					checkDir = {
						d1: true,
						d2: false,
						d3: true,
						d4: true
					};
				}
			}
			else if(kb.isDown('LEFT')){
				
				if(checkDir.d4){
					player[0].rot = 3;
					checkDir = {
						d1: true,
						d2: true,
						d3: false,
						d4: true
					};
				}

			}
			else if(kb.isDown('RIGHT')){
				if(checkDir.d3){
					player[0].rot = 4;
					checkDir = {
						d1: true,
						d2: true,
						d3: true,
						d4: false
					};
				}
				
			}

			

			
			if(t >= time){
				
				//console.log(player[1]);

				switch(player[0].rot){
					case 1:
						player[0].sx = 0;
						
						func1();
						player[0].y -= 8;
						break;
					case 2:
						player[0].sx = 8;
		//				player[length-1].sx = 8;
						func1();
						player[0].y += 8;
						break;			
					case 3:
						player[0].sx = 16;
		//				player[length-1].sx = 16;
						func1();
						player[0].x -= 8;
						break;
					case 4:
						player[0].sx = 24;
		//				player[length-1].sx = 24;
						func1();
						player[0].x += 8;
						break;
				}
				for(var i = 1; i < player.length; i++){
					if(player[i].rot == 1 || player[i].rot == 2){
						player[i].sx = 0;
					}
					else if(player[i].rot == 3 || player[i].rot == 4){
						player[i].sx = 8;
					}
					if(i == player.length-1){
						if(player[i].rot == 1){
							player[player.length-1].sx = 0;
						}
						else if(player[i].rot == 2){
							player[player.length-1].sx = 8;
						}
						else if(player[i].rot == 3){
							player[player.length-1].sx = 16;
						}
						else if(player[i].rot == 4){
							player[player.length-1].sx = 24;
						}
					}
				}
				//last = 
		//		console.log(player[player.length-1]);
		//		console.log(last);
		//		console.log("dsfgds")
				
				
				if(player[0].x < 0 || player[0].x > WIDTH-8 || player[0].y < 0 || player[0].y > HEIGHT-8){
					menu = 3;
					console.log("You lose!");
				}
				if(player[0].intersect(fruits)){
					score++;
					text.text = "Score = " + score;
					fruits.x = getRandomInt(0, WIDTH-8);
					fruits.x = parseInt(fruits.x / 8);
					fruits.x *= 8; 
					fruits.y = parseInt(getRandomInt(0, HEIGHT-8)/8)*8;

					//last.x = lastX;
					//last.y = lastY;
					player[player.length-1].texture = 'img/body_snake.png';
					player.push(new game.Rect({
						x: lastX, y: lastY,
						w: 8, h: 8,
						sx: 0, sy: 0,
						sw: 8, sh: 8,
						rot: 1,
						//c: 'green'
						texture: 'img/tail_snake.png'
					}));
					time -=0.005;
					//console.log(lastX);
				}
				for (var i = 1; i < player.length; i++) {
					if(player[0].intersect(player[i])){
						menu = 3;
						console.log("Lose");
					}
				}
				
				t=0;
			}
			t+=0.1;


			text.draw();
			fruits.draw();

			for(var i = 0; i < player.length; i++){
				player[i].draw();
			}
			break;
		case 3:

			buttonGameOver.draw();
			text = new game.Text({
				x: 108, y: 142,
				text: score,
				pt: 24,
				c: '#000000'
			});	
			text.draw();
			if(mouse.isClick().click && mouse.isClick().x > buttonGameOver.x && mouse.isClick().x < buttonGameOver.x+buttonGameOver.w && mouse.isClick().y > buttonGameOver.y && mouse.isClick().y < buttonGameOver.y+buttonGameOver.h){
				mouse.isClick().click = false;
				menu = 2;
				player.splice(0,player.length);
				//player = [];
				snakeInit();
			}	
			break;
		}
		

};
game.start();