//функции
//Рандом
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Глобальные переменные
var BLOCK_PX = 16, 
	ROW = 25, 
	COL = 25;
var WIDTH = BLOCK_PX*COL, HEIGHT = BLOCK_PX*ROW; //Ширина и высота игрового поля
var COLOR = "#555555"; //Цвет фона
var IMG = 'img/fon.png';


var game = new Game(WIDTH, HEIGHT, COLOR, IMG); 
var kb = game.KeyBoard();

/*var map = [];
for(var i = 0; i < WIDTH; i++){
	map[i] = [];
	for(var j = 0; j < HEIGHT; j++){
		map[i][j] = 0;
	}
}*/

//инициализация 
var player = [];
var player2 = [];
var startLen = 4;
var fruit;
var block;
var init = function(){
	for(var i = 0; i < startLen; i++){
		if(i == 0){
			player[i] = new game.Rect({
				x: BLOCK_PX*4, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/head.png'
			});
			player2[i] = new game.Rect({
				x: BLOCK_PX*15, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/head2.png'
			});
		}
		else if(i == startLen-1){
			player[i] = new game.Rect({
				x: BLOCK_PX*4, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/tail.png'
			});
			player2[i] = new game.Rect({
				x: BLOCK_PX*15, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/tail2.png'
			});
		}
		else{
			player[i] = new game.Rect({
				x: BLOCK_PX*4, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/body.png'
			});
			player2[i] = new game.Rect({
				x: BLOCK_PX*15, 
				y: i*BLOCK_PX+BLOCK_PX*15,
				w: BLOCK_PX, 
				h: BLOCK_PX,
				sx: 0, 
				sy: 0,
				sw: BLOCK_PX, 
				sh: BLOCK_PX,
				rot: 0,
				//c: 'blue'
				texture: 'img/body2.png'
			});
		}
	}
	fruit = new game.Rect({
		x: BLOCK_PX*4, 
		y: i*BLOCK_PX+BLOCK_PX*5,
		w: BLOCK_PX, 
		h: BLOCK_PX,
		sx: 0, 
		sy: 0,
		sw: BLOCK_PX, 
		sh: BLOCK_PX,
		rot: 0,
		//c: 'red'
		texture: 'img/fruit.png'
	});
	block = [];
};
init();


var fruitRand = function(){
	do{
		var ok = true;
		fruit.x = parseInt(getRandomInt(0, WIDTH - BLOCK_PX) / BLOCK_PX) * BLOCK_PX;
		fruit.y = parseInt(getRandomInt(0, HEIGHT - BLOCK_PX) / BLOCK_PX) * BLOCK_PX;

		for(var i = 0; i < player.length; i++){
			if(fruit.intersect(player[i])){
				var ok = false;
			}
		}
		for(var i = 0; i < block.length; i++){
			if(fruit.intersect(block[i])){
				var ok = false;
			}
		}
		for(var i = 0; i < player2.length; i++){
			if(fruit.intersect(player2[i])){
				var ok = false;
			}
		}
	}while(!ok);
};
fruitRand();

var time = 3, t = 0;
var lastX, lastY;
var lastBlock = new game.Rect({
	x: 0, 
	y: 0,
	w: 0, 
	h: 0,
	sx: 0, 
	sy: 0,
	sw: 0, 
	sh: 0,
	rot: 0,
	//c: 'red'
	texture: 'img/block.png'
});
var func1 = function(objPl){

	objPl[0].sx = objPl[0].rot * BLOCK_PX;
	lastX = objPl[objPl.length-1].x;
	lastY = objPl[objPl.length-1].y;
	for(var i = objPl.length-1; i > 0; i--){
		objPl[i].x = objPl[i-1].x;
		objPl[i].y = objPl[i-1].y;
		objPl[i].rot = objPl[i-1].rot;
		objPl[i].sx = objPl[i].rot * BLOCK_PX;	
	}
};
var func2 = function(objPl){
	for(var i = 0; i < objPl.length-1; i++){
		objPl[i].x = objPl[i+1].x;
		objPl[i].y = objPl[i+1].y;
		objPl[i].rot = objPl[i+1].rot;
		objPl[i].sx = objPl[i].rot * BLOCK_PX;
	}
	objPl[objPl.length-1].x = lastX;
	objPl[objPl.length-1].y = lastY;
	lastBlock = objPl.pop();
	if(objPl.length == 1){
		menu = 4;
	}
	if(objPl == player2){
		objPl[objPl.length-1].texture = 'img/tail2.png';
	}
	else{
		objPl[objPl.length-1].texture = 'img/tail.png';
	}
	
	lastBlock.texture = 'img/block.png';
	block.push(lastBlock);
	//block[block.length-1].texture = 'img/block.png';
}; 

var func3 = function(objPl){
	switch(objPl[0].rot){
			case 0:
				func1(objPl); 
				objPl[0].y -= BLOCK_PX;
				if(objPl[0].y < 0){
					func2(objPl);
				}
				break;
			case 1:
				func1(objPl); 
				objPl[0].y += BLOCK_PX;
				if(objPl[0].y > HEIGHT - BLOCK_PX){
					func2(objPl);
				}
				break;
			case 2:
				func1(objPl); 
				objPl[0].x -= BLOCK_PX;
				if(objPl[0].x < 0){
					func2(objPl);
				}
				break;
			case 3:
				func1(objPl); 
				objPl[0].x += BLOCK_PX;
				if(objPl[0].x > WIDTH - BLOCK_PX){
					func2(objPl);
				}
				break;
		}
		/*if(player[0].x < 0 || player[0].x > WIDTH || player[0].y < 0 || player[0].y > HEIGHT){
			//console.log("Вышел за граници канваса");
			player[player.length-1].c = 'green';
			block.push(player.pop());
			console.log(block);
		}
		for(var i = 1; i < player.length; i++){
			if(player[0].intersect(player[i])){
				console.log("Врезался в себя");		
			}
		}*/
		for(var i = 1; i < objPl.length; i++){
			if(objPl[0].intersect(objPl[i])){
				func2(objPl);		
			}
		}
		for(var i = 0; i < block.length; i++){
			if(objPl[0].intersect(block[i])){
				func2(objPl);		
			}
		}

		if(mode == 2 || mode == 3){
			for(var i = 1; i < player.length; i++){
				if(player2[0].intersect(player[i])){
					func2(player2);
				}
			}
			for(var i = 1; i < player2.length; i++){
				if(player[0].intersect(player2[i])){
					func2(player);
				}
			}
		}
		
		

		if(objPl[0].intersect(fruit)){
			//console.log("Ok");
			if(objPl == player2){
				objPl[objPl.length-1].texture = 'img/body2.png';
				objPl.push(new game.Rect({
					x: objPl[objPl.length-1].x, 
					y: objPl[objPl.length-1].y,
					w: BLOCK_PX, 
					h: BLOCK_PX,
					sx: 0, 
					sy: 0,
					sw: BLOCK_PX, 
					sh: BLOCK_PX,
					rot: objPl[objPl.length-1].rot,
					//c: 'blue'
					texture: 'img/tail2.png'
				}));
			}
			else{
				objPl[objPl.length-1].texture = 'img/body.png';
				objPl.push(new game.Rect({
					x: objPl[objPl.length-1].x, 
					y: objPl[objPl.length-1].y,
					w: BLOCK_PX, 
					h: BLOCK_PX,
					sx: 0, 
					sy: 0,
					sw: BLOCK_PX, 
					sh: BLOCK_PX,
					rot: objPl[objPl.length-1].rot,
					//c: 'blue'
					texture: 'img/tail.png'
				}));
			}
			fruitRand();
		}
}
//Управление игрок 1
var controlPl1 = function(){
	if(kb.isDown('UP')){
		player[0].rot = 0;
	}		
	else if(kb.isDown('DOWN')){
		player[0].rot = 1;
	}
	else if(kb.isDown('LEFT')){
		player[0].rot = 2;
	}
	else if(kb.isDown('RIGHT')){
		player[0].rot = 3;
	}
};
//Управление игрок 2
var controlPl2 = function(){
	if(kb.isDown('W')){
		player2[0].rot = 0;
	}		
	else if(kb.isDown('S')){
		player2[0].rot = 1;
	}
	else if(kb.isDown('A')){
		player2[0].rot = 2;
	}
	else if(kb.isDown('D')){
		player2[0].rot = 3;
	}
};

var menu = 1;
var mode;

//1
var buttonStart = new game.Rect({
				x: 50, 
				y: 270,
				w: 138, 
				h: 127,
				sx: 0, 
				sy: 0,
				sw: 138, 
				sh: 127,
				rot: 0,
				//c: 'blue'
				texture: 'img/start.png'
			});

//2
var buttonPl = new game.Rect({
				x: 50, 
				y: 50,
				w: 300, 
				h: 100,
				sx: 0, 
				sy: 0,
				sw: 300, 
				sh: 100,
				rot: 0,
				//c: 'blue'
				texture: 'img/pl1.png'
			});
var buttonPlvsPl = new game.Rect({
				x: 50, 
				y: 150,
				w: 300, 
				h: 100,
				sx: 0, 
				sy: 0,
				sw: 300, 
				sh: 100,
				rot: 0,
				//c: 'blue'
				texture: 'img/pl2.png'
			});

//fon
var fon1 = new game.Rect({
				x: 0, 
				y: 0,
				w: WIDTH, 
				h: HEIGHT,
				sx: 0, 
				sy: 0,
				sw: WIDTH, 
				sh: HEIGHT,
				rot: 0,
				//c: 'blue'
				texture: 'img/fon1.png'
			});



game.update = function(){
	switch(menu){
		case 1:
			fon1.draw();
			buttonStart.draw();

			if(buttonStart.isClick()){
				menu = 2;
				IMG = 'img/head.png';
			}
			break;
		case 2:
			
			buttonPl.draw();
			if(buttonPl.isClick()){
				menu = 3;
				mode = 1;
			}
			buttonPlvsPl.draw();
			if(buttonPlvsPl.isClick()){
				console.log('ok');
				menu = 3;
				mode = 2;
			}
			break;
		case 3:
			switch(mode){
				case 1:
					controlPl1();
					if(t > time){
						///
						func3(player);
						t = 0;
					}
					t += 0.5;
					for(var i = 0; i < player.length; i++){
							player[i].draw();
						}
						fruit.draw();
						for(var i = 0; i < block.length; i++){
							//block[].texture = 'img/block.png';
							block[i].draw();
						}
					break;
				case 2:
					if(t > time){
						///
						controlPl1();
						controlPl2();

						func3(player);
						if(player2[0].intersect(player[0])){
							func2(player);
						}
						func3(player2);
						if(player2[0].intersect(player[0])){
							func2(player2);
						}

						t = 0;
					}
					t += 0.5;

					for(var i = 0; i < player.length; i++){
						player[i].draw();
					}
					for(var i = 0; i < player2.length; i++){
						player2[i].draw();
					}
					fruit.draw();
					for(var i = 0; i < block.length; i++){
						//block[].texture = 'img/block.png';
						block[i].draw();
					}
					break;
			}
			break;
		case 4:
			fon1.draw();
			//winPl.draw();
			buttonStart.draw();
			if(buttonStart.isClick()){
				menu = 2;
				player.splice(0, player.length-1);
				player2.splice(0, player2.length-1);
				init();
				fruitRand();
			}
			break;
	}



};
game.start();