document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	checkMouse();
	poli.draw();
	requestAnimationFrame(start);
};


function checkMouse()
{
	//console.log(4)
	if(poli.isClick(mouseClick()))
	{
		console.log(1);
	}
}

/*for(let i = 0; i < cell.length; i++)
	{
		if(cell[i].isClick(mouseClick()))
		{
			cell.push(new Cell(cell[i]));
		}
		cell[i].update();
		cell[i].draw();
	}
*/
//Инициализация / INIT
createCanvas(800, 600, "#000");

var poli = new Polygon([
	{x: 5, y: 5},
	{x: 100, y: 50},
	{x: 50, y: 100},
	{x: 10, y: 90},
	{x: 5, y: 5}
]);//5,5, 100,50, 50,100, 10,90]);

/*

var poli = new Polygon([
	{x: 200, y: 50},
	{x: 415, y: 80},
	{x: 550, y: 200},
	{x: 700, y: 200},
	{x: 300, y: 400},
	{x: 750, y: 580},
	{x: 150, y: 530},
	{x: 100, y: 150},
	{x: 300, y: 250},
	{x: 200, y: 50}
]);

	[200, 50],
        [415, 80],
        [550, 200],
        [700, 200],
        [300, 400],
        [750, 580],
        [150, 530],
        [100, 150],
        [300, 250],
        [200, 50]
*/

start();
////////////////////////////////////////////////////////
});