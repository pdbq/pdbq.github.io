#pragma once
#include "Ship.h"
#include <ctime>

class Enemy :
	public Ship
{
private: 
	
	float speed = 5.0f;
public:
	Enemy();
	Enemy(sf::String str, float x, float y);
	~Enemy();
	void move(float times);
	void setPos(float x, float y, float speed);
};

