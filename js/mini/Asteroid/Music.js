function shoot() {
  	var audio = new Audio(); // Создаём новый элемент Audio
  	audio.src = 'music/shoot.wav'; // Указываем путь к звуку "клика"
  	audio.autoplay = true; // Автоматически запускаем
}
function puf() {
  	var audio = new Audio(); // Создаём новый элемент Audio
  	audio.src = 'music/puf.wav'; // Указываем путь к звуку "клика"
  	audio.autoplay = true; // Автоматически запускаем
}
var fonMusic = new Audio(); // Создаём новый элемент Audio
	fonMusic.src = 'music/fon.m4a'; // Указываем путь к звуку "клика"
	fonMusic.autoplay = true;
function fon(stop) {
  	if(fonMusic.duration <= fonMusic.currentTime)
  		fonMusic.currentTime = 0;
  	if(stop)
  		fonMusic.pause();
}


var flightMusic = new Audio(); // Создаём новый элемент Audio
	flightMusic.src = 'music/flight.mp3';
var play = true;

function flight(stop)
{
	flightMusic.play();
	if(stop)
	{
		flightMusic.pause();
		flightMusic.currentTime = 0;
	}
	if(flightMusic.duration <= flightMusic.currentTime)
	{
		flightMusic.currentTime = 0;
	}
	
	//play = false;
}