#include "Global.h"
//#include "Ship.h"
#include "Enemy.h"
#include "Player.h"
#include "Aim.h"
#include <vector>
#include <ctime>
#include <sstream>

#include <iostream>



int main()
{
	bool isClick = false;
	srand(time(0));
	sf::RenderWindow window(sf::VideoMode(WIDTH, HEIGHT), "Space Hunting");
	window.setFramerateLimit(60);
	window.setMouseCursorVisible(false);
	
	sf::Clock clock;

	Enemy e("img/enemy.png", WIDTH / 2 - 16, 0);
	int countEnemy = 1;
	std::vector <Enemy> enemy;
	enemy.push_back(e);

	Player player("img/player.png", WIDTH / 2+16, HEIGHT - 50);
	Aim aim("img/aim.png", 0.0f, 0.0f);


	//Текст
	sf::Font font;
	font.loadFromFile("CyrilicOld.TTF");
	sf::Text text;
	text.setFont(font);
	text.setCharacterSize(24);
	text.setPosition(10, 10);
	text.setColor(sf::Color(200, 0, 0));
	int score = 0;

	//Музыка
	sf::SoundBuffer sbuf;
	sbuf.loadFromFile("puf.wav");
	sf::Sound puf;
	puf.setBuffer(sbuf);

	while (window.isOpen())
	{

		float times = clock.getElapsedTime().asMicroseconds();
		clock.restart();
		times = times / 800.0f;

		sf::Event event;
		while (window.pollEvent(event))
		{
			if (event.type == sf::Event::Closed)
				window.close();
			if ((event.type == sf::Event::KeyPressed) && (event.key.code == sf::Keyboard::Escape))
		        window.close();
		}

		if (event.type == sf::Event::MouseMoved)
		{
			aim.move(event.mouseMove.x, event.mouseMove.y);
			player.rotate(event.mouseMove.x, event.mouseMove.y, times);
		}

		window.clear();

		player.animate(times);
		player.draw(window);

		

		if (enemy.size() != 0)
		{
			//isClick = false;
			for (int i = 0; i < enemy.size(); i++)
			{
				
				if (sf::Mouse::isButtonPressed(sf::Mouse::Left) && aim.intersect(enemy[i]) && !isClick)
				{
					isClick = true;
					enemy[i].bum();
					score++;
					puf.play();
					//break;
					
				}
				 	
			}
		}
		else
		{
			countEnemy++;
			for (int i = 0; i < countEnemy; i++)
			{
				
				enemy.push_back(e);
				enemy[i].setPos(rand()%(WIDTH-32), -32-rand()%64, 50+rand()%80);
			}
			
		}
		if (event.type == sf::Event::MouseButtonReleased)
		{
			isClick = false;
		}
		
		for (int i = 0; i < enemy.size(); i++)
		{
			enemy[i].move(times);
			enemy[i].draw(window);
			if (!enemy[i].getAnimateStop())
				enemy[i].animate(times);
			else
				enemy.erase(enemy.begin() + (i));
		}
		

		aim.draw(window);

		std::ostringstream playerScoreString;
		playerScoreString << score;
		text.setString("Score: " + playerScoreString.str());
		
		window.draw(text);
		window.display();
	}

	return 0;
}
