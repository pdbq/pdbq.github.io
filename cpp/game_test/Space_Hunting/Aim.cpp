#include "Aim.h"



Aim::Aim()
{
}

Aim::Aim(sf::String str, float x, float y, int w, int h) : Ship(str, x, y, w, h)
{
}


Aim::~Aim()
{
}

void Aim::move(float dx, float dy)
{
	this->x = dx - this->w / 2;
	this->y = dy - this->h / 2;
	sprite.setPosition(this->x, this->y);
}
