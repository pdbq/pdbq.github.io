document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	
	for(let i = 0; i < cell.length; i++)
	{
		if(cell[i].isClick(mouseClick()))
		{
			cell.push(new Cell(cell[i]));
		}
		cell[i].update();
		cell[i].draw();
	}
	requestAnimationFrame(start);
};


//Инициализация / INIT
createCanvas(800, 600, "#555");

var cell = new Array();
var N = 1;
for(let i = 0; i <  N; i++)
{
	cell[i] = new Cell({
		x: WIDTH/2,
		y: HEIGHT/2, 
		r: 20,
		c: "rgba(0, 200, 200, 0.5)"
	});
}

start();
////////////////////////////////////////////////////////
});