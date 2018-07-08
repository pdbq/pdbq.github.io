#pragma once
#include "Ship.h"
class Player :
	public Ship
{
public:
	Player(sf::String str, float x, float y);
	~Player();
	void rotate(float dx, float dy, float);
};

