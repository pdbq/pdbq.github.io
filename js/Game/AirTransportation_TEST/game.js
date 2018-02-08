document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	checkMouse();
	update();
	draw();
	requestAnimationFrame(start);
};

function draw()
{
	airport.draw();
	airport2.draw();
	airport3.draw();
	airplane.draw();
}
function update()
{
	airplane.intersect(airport3);
	airplane.intersect(airport2);
	airplane.intersect(airport);
	
	airplane.move();
}

function checkMouse()
{
	if(airport2.isClick(airplane, mouseClick()))
	{
		//console.log(1);
	}
	else if(airport.isClick(airplane, mouseClick()))
	{
		//console.log(2);
	}
	else if(airport3.isClick(airplane, mouseClick()))
	{

	}
}

//Инициализация / INIT
createCanvas(800, 600, "#aaa");

var airport = new Airport({
	x: 100,
	y: 100,
	w: 50,
	h: 50,
	c: "#0f0"
}, 1);
var airport2 = new Airport({
	x: 300,
	y: 400,
	w: 50,
	h: 50,
	c: "#0f0"
}, 2);

var airport3 = new Airport({
	x: 600,
	y: 400,
	w: 50,
	h: 50,
	c: "#0f0"
}, 3);

var airplane = new Airplane({
	x: 100+50/2-15/2,
	y: 100+50/2-15/2,
	w: 15,
	h: 15,
	c: "#f00"
},
	[{text: "Money", value: 200},
	{text: "Fuel", value: 50},
	{text: "Inventory", value: 0}]
);

start();
////////////////////////////////////////////////////////
});