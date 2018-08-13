document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//Цикл игры / game loop
function start()
{
	setTimeout(function() 
	{
		requestAnimationFrame(start);
		
		if(!gameOver)
		{
			cls();
			update();
		}
		draw();
		sock();
		//log(users);
		
	//requestAnimationFrame(start);
	}, 1000 / 10);
}

function update()
{
	for (var i = 0; i < users.length; i++) 
	{
		if(getMouse() && users[i].id == socket.id && users[i].step == true)
		{
			
			log(1);
			if(map[parseInt(mousePos.x / (WIDTH/3))][parseInt(mousePos.y / (HEIGHT/3))] == 0)
			{
				map[parseInt(mousePos.x / (WIDTH/3))][parseInt(mousePos.y / (HEIGHT/3))] = users[i].pl
				isClick = false;
				mousePos = {x: null, y: null};
				socket.emit('update', {u: users, m: map});
			}		
		}
	}
}

function draw() 
{
	drawMap();

	for (var i = 0; i < 3; i++) 
	{
		for (var j = 0; j < 3; j++)
		{
			if(map[i][j] == 1)
			{
				drawPl1(i, j);
			}
			else if(map[i][j] == 2)
			{
				drawPl2(i, j);
			}
		}
	}
}

function sock() 
{
	
	socket.on('update', function(data)
	{
		for (var i = 0; i < data.u.length; i++) 
		{
			users[i].step = data.u[i].step;
		}
		for(var i = 0; i < 3; i++)
		{
			for (var j = 0; j < 3; j++) 
			{
				map[i][j] = data.m[i][j];
			}
		}
		//map = data.m;
	});
	socket.on('gameOver', function(data)
	{
		gameOver = true;
		if(data == 1)
		{
			win('X');
		}
		else
		{
			win('O');
		}
	});
}

function win(pl)
{
	stop(pl);
}

//Инициализация / INIT
var socket = io.connect('http://localhost:3000');

createCanvas(800, 600, "#000");

var gameOver = false;

var users = [];

var map = [];
for(var i = 0; i < 3; i++)
{
	map[i] = [];
	for (var j = 0; j < 3; j++) 
	{
		map[i][j] = 0;
	}
}
//log(map);
textStart();

socket.on('start', function(data)
{
	for (var i = 0; i < data.length; i++)
	{
		users.push(new Player(data[i]));
	}
	start();
});

////////////////////////////////////////////////////////
});