#pragma once
#include "Ship.h"
class Aim :
	public Ship
{
public:
	Aim();
	Aim(sf::String str, float x, float y, int w = 16, int h = 16);
	~Aim();
	void move(float dx, float dy);
};

