#include "Player.h"
#include <cmath>


Player::Player(sf::String str, float x, float y) : Ship(str, x, y)
{

}


Player::~Player()
{
}

void Player::rotate(float dx, float dy, float time)
{
	sprite.setOrigin(w/2, h/2);
	sprite.setScale(2.0f, 2.0f);
	float tempX = this->x - dx;
	float tempY = this->y - dy;
	float t = tempX / tempY;
	t = atan(t) * 180.0f / 3.14159265f;
	if (dy > y)
	{
		t = 180 + t;
	}
	sprite.setRotation(-t);
}
