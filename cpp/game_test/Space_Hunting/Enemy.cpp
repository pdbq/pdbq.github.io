#include "Enemy.h"
#include <iostream>

using std::cout;


Enemy::Enemy()
{
}

Enemy::Enemy(sf::String str, float x, float y) : Ship(str, x, y)
{

}


Enemy::~Enemy()
{
}

void Enemy::move(float times)
{
	//sprite.setOrigin(1.2f, 1.2f);
	//cout << speed/1000 << std::endl;
	this->y += speed / 1000.0f * times;
	sprite.setPosition(this->x, this->y);

	if (this->y > HEIGHT - 50)
		this->bum();
}
void Enemy::setPos(float x, float y, float speed)
{
	this->x = x;
	this->y = y;
	this->speed = speed;
}