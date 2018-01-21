document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

var len = 100;
var angle = Math.PI/4;

//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	cls();
	draw(len);
	//requestAnimationFrame(start);
}

function draw(len)
{
	//console.log(len);
	line(0, 0, 0, -len);
	ctx.translate(0, -len);
	if (len > 4) {
	    ctx.save();
	    ctx.rotate(angle);
	    draw(len * 0.67);
	    ctx.restore();
	    ctx.save();
	   	ctx.rotate(-angle);
	    draw(len * 0.67);
	    ctx.restore();
	}
}

createCanvas(600, 600, "#aaa");

ctx.translate(WIDTH/2, HEIGHT);

start();
////////////////////////////////////////////////////////
});