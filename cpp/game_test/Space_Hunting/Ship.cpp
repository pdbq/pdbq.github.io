#include "Ship.h"
#include <iostream>

Ship::Ship()
{
	
}

Ship::Ship(sf::String str, float x, float y, int w, int h)
{
	this->str = str;
	this->x = x;
	this->y = y;
	this->w = w;
	this->h = h;
	img.loadFromFile(this->str);
	texture.loadFromImage(img);
	sprite.setTexture(texture);
	sprite.setTextureRect(sf::IntRect(0, 0, w, h));
	sprite.setPosition(this->x, this->y);
}


Ship::~Ship()
{
}

void Ship::animate(float time)
{
	CurrentFrame += 0.005*time; 
	
	if (CurrentFrame > kadrs) CurrentFrame -= kadrs;
	
	sprite.setTextureRect(sf::IntRect(32 * int(CurrentFrame), 0, 32, 32));
	if (kadrs == 5 && 32 * int(CurrentFrame) == 128)
	{
		stop = true;
	}
}

void Ship::draw(sf::RenderTarget & w)
{
	w.draw(sprite);
}

bool Ship::intersect(Ship enemy)
{
	if (this->x + this->w > enemy.x && this->x < enemy.x + enemy.w && this->y + this->h > enemy.y && this->y < enemy.y + enemy.h)
		return true;
	return false;
}

void Ship::bum()
{
	
	img.loadFromFile("img/bum.png");

	texture.loadFromImage(img);
	sprite.setTexture(texture);
	sprite.setTextureRect(sf::IntRect(0, 0, w, h));
	sprite.setPosition(this->x, this->y);
	kadrs = 5;
}

bool Ship::getAnimateStop()
{
	return stop;
}
