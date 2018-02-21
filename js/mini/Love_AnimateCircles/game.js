document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////
var fps = 0;
//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	setTimeout(function() {
		requestAnimationFrame(start);
		
		cls();
		update();
		draw();

	}, 1000 / fps);
};

function draw()
{
	//ctx.drawImage(img, 0, 0);
	for (var i = 0; i < circles.length; i++) 
	{
		if(circles[i].groving)
		{
			if(circles[i].edges())
			{
				circles[i].groving = false;
			}
			else
			{
				//var overlapping = false;
				for (var j = 0; j < circles.length; j++)
				{
					if(circles[i] != circles[j])
					{
						var d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
						if(d - 2 < circles[i].r + circles[j].r)
						{
							//overlapping = true;
							circles[i].groving = false;
							break;
						}
					}
				}
			}
		}
		circles[i].draw();
		circles[i].update();
	}

}
function update()
{
	var total = 10;
	var count = 0;
	var attemps = 0;
	while(count < total)
	{
		var c = newCircle();
		if(c != NULL)
		{
			circles.push(c);
			count++;
		}
		attemps++;
		if(attemps > 1000)
		{
			fps = 0;
			break;
		}
	}
}

function newCircle()
{
	var rand = getRandom(0, indexArr.length-1, true)
	var x = indexArr[rand].x;
	var y = indexArr[rand].y;
	//log(x);
	var valid = true;
	for (var i = 0; i < circles.length; i++) 
	{
		var d = dist(x, y, circles[i].x, circles[i].y);
		//log(d);

		if(d < circles[i].r+2)
		{
			//log(valid);
			valid = false;
			break;
		}
	}

	if(valid)
	{
		 
		return new Circle({x: x, y: y}, "rgb("+getRandom(0,256,true)+","+getRandom(0,256,true)+","+getRandom(0,256,true)+")");
	}
	else
	{
		return NULL;
	}
}
function dist(x1, y1, x2, y2)
{
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


//Инициализация / INIT
createCanvas(800, 600, "#000");

var indexArr = new Array();
var img = new Image();

img.onload = function()
{
	ctx.drawImage(img,0,0);
	imgData = ctx.getImageData(0, 0, 800, 600);

	for(var x = 0; x < imgData.width; x++)
	{
		for(var y = 0; y < imgData.height; y++)
		{
			var index = (x + y * imgData.width)*4;
			//var c = imgData.data[index];
			var R = imgData.data[index];

			if(R != 0)
			{
				indexArr.push({x: x, y: y});
			}
		}
	}
	log(indexArr[0]);
}
img.src = "data/img.png";

var imgData = ctx.getImageData(0, 0, 800, 600);

var circles = new Array();

start();
////////////////////////////////////////////////////////
});