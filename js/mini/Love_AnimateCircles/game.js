document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////
var fps = 60;
//### Функции / Functions ###\\
//Цикл игры / game loop
function start()
{
	setTimeout(function() {
		requestAnimationFrame(start);
		
		//cls();
		//update();
		//draw();
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
	var x = getRandom(0, WIDTH);
	var y = getRandom(0, HEIGHT);
	var valid = true;
	for (var i = 0; i < circles.length; i++) 
	{
		var d = dist(x, y, circles[i].x, circles[i].y);
		//log(d);

		if(d < circles[i].r)
		{
			//log(valid);
			valid = false;
			break;
		}
	}

	if(valid)
	{
		 
		return new Circle({x: x, y: y});
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
//log(ctx.getImageData(0, 0, 800, 600));
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
		var G = imgData.data[index+1];
		var B = imgData.data[index+2];
		var A = imgData.data[index+3];

		if(R != 0 || G != 0 || B != 0 || A != 0)
		{
			log(1);
		}
	}
}
}
img.src = "data/img.png";

var imgData = ctx.getImageData(0, 0, 800, 600);
//log(imgData.data);


var circles = new Array();


start();
////////////////////////////////////////////////////////
});
