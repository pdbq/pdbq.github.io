#pragma once
#include "Global.h"

class Ship
{
protected: 
	float x, y;			//���������� ������� �������
	int w, h; //������ � ������ �������
	sf::Sprite sprite;
private:
	sf::String str;
	sf::Image img;
	sf::Texture texture;
	int kadrs = 2;
	float CurrentFrame = 0;	//������ ������� ����
	bool stop = false;
public:
	Ship();
	Ship(sf::String str, float x, float y, int w = 32, int h = 32);
	~Ship();
	void animate(float time);
	void draw(sf::RenderTarget & w);
	bool intersect(Ship enemy);
	void bum();
	bool getAnimateStop();

};

