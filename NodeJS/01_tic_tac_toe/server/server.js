var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {serveClient: true});

app.use('/assets', express.static('./client'));

app.get('/', function(req, res)
{
	res.sendFile('index.html', {root: 'client'});
});

var count = 0;
var map = [];
for(var i = 0; i < 3; i++)
{
	map[i] = [];
	for (var j = 0; j < 3; j++)
	{
		map[i][j] = 0;
	}
}
/*
var pl1 = {
	id: null,
	step: true
};
var pl2 = {
	id: null,
	step: false
};
/**/
var users = [];
io.on('connection', function (socket) 
{
	console.log("User connection");
	count++;
	if(count == 1) 
	{
		users.push({
			id: socket.id,
			step: true,
			pl: 1
		});
	} 
	else if(count == 2) 
	{
		users.push({
			id: socket.id,
			step: false,
			pl: 2
		});
		io.emit('start', users);
	}

	socket.on('update', function (data) {

		//console.log(data.u[0].step);
		if(data.u[0].step == true)
		{
			users[0].step = false;
			users[1].step = true;
		}
		else
		{
			users[0].step = true;
			users[1].step = false;
		}

		for(var i = 0; i < 3; i++)
		{
			for (var j = 0; j < 3; j++) 
			{
				map[i][j] = data.m[i][j];
			}
		}
		//map = data.m;
	   	
	   	//console.log(map);
		io.emit('update', {u: users, m: map});
	   	if(map[0][0] == 1 && map[0][1] == 1 && map[0][2] == 1 ||
	   		map[1][0] == 1 && map[1][1] == 1 && map[1][2] == 1 ||
	   		map[2][0] == 1 && map[2][1] == 1 && map[2][2] == 1 ||

	   		map[0][0] == 1 && map[1][0] == 1 && map[2][0] == 1 ||
	   		map[0][1] == 1 && map[1][1] == 1 && map[2][1] == 1 ||
	   		map[0][2] == 1 && map[1][2] == 1 && map[2][2] == 1 ||

	   		map[0][0] == 1 && map[1][1] == 1 && map[2][2] == 1 ||
	   		map[0][2] == 1 && map[1][1] == 1 && map[2][0] == 1)
	   	{
	   		io.emit('gameOver', 1);
	   	}
	   	else if(map[0][0] == 2 && map[0][1] == 2 && map[0][2] == 2 ||
	   		map[1][0] == 2 && map[1][1] == 2 && map[1][2] == 2 ||
	   		map[2][0] == 2 && map[2][1] == 2 && map[2][2] == 2 ||

	   		map[0][0] == 2 && map[1][0] == 2 && map[2][0] == 2 ||
	   		map[0][1] == 2 && map[1][1] == 2 && map[2][1] == 2 ||
	   		map[0][2] == 2 && map[1][2] == 2 && map[2][2] == 2 ||

	   		map[0][0] == 2 && map[1][1] == 2 && map[2][2] == 2 ||
	   		map[0][2] == 2 && map[1][1] == 2 && map[2][0] == 2)
	   	{
	   		io.emit('gameOver', 2);
	   	}
	   		
	});

	socket.on('disconnect', function()
	{
		console.log("User disconnect");

  	});
});

server.listen(3000, function()
{
	console.log('Server started on port 3000');
});