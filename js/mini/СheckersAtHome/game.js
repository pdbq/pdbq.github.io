document.addEventListener('DOMContentLoaded', function(){ 

function start() {
	cls();
	update();
	draw();
	requestAnimationFrame(start);
}

function draw() {
	fon.draw();
	test.sort(function (a, b) {
	  if (a.zindex > b.zindex) {
	    return 1;
	  }
	  if (a.zindex < b.zindex) {
	    return -1;
	  }
	  // a должно быть равным b
	  return 0;
	});
	for(let i = 0; i < test.length; i++) {

		test[i].draw();
	}
	
}
function update() {
	for(let i = 0; i < test.length; i++) {
		test[i].update(mc.isDragAndDrop());
		//test[i].intersect(test, i);
	}
	for(let i = 0; i < test.length; i++) {
		if(test[i].zindex == 1) {
			for(let j = 0; j < test.length; j++) {
				if(i != j) {
			//		log(i);
					intersect(test[i], test[j]);

				}
			}
			
			//break;
		}
		test[i].zindex == 0;
	}
}


//Инициализация / INIT
const WIDTH = 1000;
const HEIGHT = 650;
createCanvas(WIDTH, HEIGHT, "#444");
var mc = MouseControl();
//var kb = KeyBoard();

let fon = new Rect({
	x: 0,
	y: 0,
	w: WIDTH,
	h: HEIGHT,

	texture: 'img/fon.png'
});

let test = [];
const N = 24;

for(let i = 0; i < N; i++) {
	if(i >= 12) {
		test.push(new Rect({
			x: 50,
			y: (i%12)*50+25,
			w: 50,
			h: 50,
			sx: 0,
			sy: 0,
			sw: 202,
			sh: 199,
			texture: 'img/pl2.png'
		}));
	} else {
		test.push(new Rect({
			x: WIDTH-100,
			y: i*50+25,
			w: 50,
			h: 50,
			sx: 0,
			sy: 0,
			sw: 192,
			sh: 196,
			texture: 'img/pl1.png'
		}));
	}
}

start();
});