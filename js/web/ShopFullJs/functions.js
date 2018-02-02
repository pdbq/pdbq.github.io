document.addEventListener('DOMContentLoaded', function(){ 
///////////////////////////////////////////////////////

function start()
{
	cls();
	mouseClick();
	//console.log(keyBoard());
//	b1.draw();
//	ctx.drawImage(image, 0, 0, 110, 43, 0, 0, 110, 43);
	draw();
	requestAnimationFrame(start);
}

function draw()
{

	for(var i = 0; i < displayElements.length; i++)
	{
		displayElements[i].draw();
	}
	for(var i = 0; i < helpMas.length; i++)
		helpMas[i].draw();
}


var sorting = 0; //Сортировка
var maxProducts = 0;
var startPos = false;

//СОРТИРОВКА ТОВАРОВ
function sortingProducts(page)
{
	var sizeBlockProduct = 250;
	var count = 0;
	
	//console.log(sorting);
	//var xBlockTemp = 50;

	var productBaseTemp = [];
	for (var i = 0; i < poductsBase.length; i++) 
	{
		if(poductsBase[i].displayElemInPage == page)
			productBaseTemp.push(poductsBase[i]);
	}
	//console.log(productBaseTemp.length);
	for (var i = sorting; i < productBaseTemp.length; i++) 
	{
		//console.log(poductsBase[i].displayElemInPage);	
		//if(productBaseTemp[i].displayElemInPage == page)
		//{

			maxProducts++;
			var xBlockTemp = productBaseTemp[i].x + productBaseTemp[i].x*(count%3) + sizeBlockProduct*(count%3);
			var yBlockTemp = productBaseTemp[i].y + productBaseTemp[i].x*parseInt(count/3) + sizeBlockProduct*parseInt(count/3);
			//console.log(parseInt(count/3));
			if(count == 0)
			{
				xBlockTemp = 63;
			}
			if(parseInt(count/3) == 0)
			{
				yBlockTemp = productBaseTemp[i].y;
			}
			if(!startPos)
			{
				countProductsPush.start = elements.length;
				startPos = true;	
			}
			elements.push(new Button({
				x: xBlockTemp,
				y: yBlockTemp,
				w: sizeBlockProduct,
				h: sizeBlockProduct,
				c: "#fff",
				strokeColor: "#d6d6d6",
				//page: SHOPNOW,
				displayElemInPage: productBaseTemp[i].displayElemInPage,
				price: productBaseTemp[i].price
			}));
			
			elements.push(new Button({
				x: xBlockTemp + (sizeBlockProduct/2 - productBaseTemp[i].size.w/2),
				y: yBlockTemp+20,
				w: productBaseTemp[i].size.w,
				h: productBaseTemp[i].size.h,
				texture: productBaseTemp[i].img,
				page: DESCPRODUCTS,
				displayElemInPage: productBaseTemp[i].displayElemInPage,
				desc: productBaseTemp[i].desc,
				price: productBaseTemp[i].price
			}));
			elements.push(new Text({
				text: productBaseTemp[i].name,
				x: xBlockTemp+sizeBlockProduct/2,
				y: yBlockTemp+160,
				c: "#afafaf",
				font: "italic 16px Arial",
				textAlign: "center",
				textBaseline: "middle",
				displayElemInPage: productBaseTemp[i].displayElemInPage
			}));
			elements.push(new Text({
				text: "$" + productBaseTemp[i].price,
				x: xBlockTemp+sizeBlockProduct/4,
				y: yBlockTemp+200,
				c: "#afafaf",
				font: "italic 20px Arial",
				textAlign: "center",
				textBaseline: "middle",
				displayElemInPage: productBaseTemp[i].displayElemInPage
			}));
			elements.push(new Button({
				x: xBlockTemp+sizeBlockProduct/2,
				y: yBlockTemp+182,
				w: 100,
				h: 35,
				c: "#3cc395",
				page: productBaseTemp[i].page,
				displayElemInPage: productBaseTemp[i].displayElemInPage,
				text: "BUY NOW",
				textColor: "#fff",
				fontSize: 14,
				price: productBaseTemp[i].price
			}));
			count++;
			if(count == 6)
			{
				countProductsPush.end = elements.length;
				break;
			}
		//}
	}
}

var inputUserData = {
	name: false,
	phone: false,
	email: false
};
var saveUserDate = {
	fullname: 0,
	phone: 0,
	email: 0,
	price: 0
};
function mouseClick()
{
	/*if(logo.isClick(posMouse()) || buttonHome.isClick(posMouse()))
	{
		navigation(HOME);
	}
	if(cart.isClick(posMouse()))
	{
		navigation(CART);
	}*/
	
	for(var i = 0; i < helpMas.length; i++)
	{

		//Work KEYBOARD
		var buttonTemp = helpMas[i].isClick(posMouse());
		if(helpMas[i].page == USERNAME && inputUserData.name)
		{
	//		console.log(1);
			helpMas[i].text = "Name: " + keyBoard().join('');
			saveUserDate.fullname = helpMas[i].text;
		}
		else if(helpMas[i].page == USERPHONE && inputUserData.phone)
		{
			helpMas[i].text = "Phone: " + keyBoard().join('');
			saveUserDate.phone= helpMas[i].text;
		}
		else if(helpMas[i].page == USERMAIL && inputUserData.email)
		{
			helpMas[i].text = "E-mail: " + keyBoard().join('');
			saveUserDate.email = helpMas[i].text;
		}


		if(helpMas[i].page != undefined && buttonTemp)
		{
			if(helpMas[i].page == CLOSE)
			{
				helpMas = [];
			}

			else if(helpMas[i].page == USERNAME)
			{
				key = [];
				inputUserData = {
					name: true,
					phone: false,
					email: false
				};
			}
			else if(helpMas[i].page == USERPHONE)
			{
				key = [];
				inputUserData = {
					name: false,
					phone: true,
					email: false
				};
			}
			else if(helpMas[i].page == USERMAIL)
			{
				key = [];
				inputUserData = {
					name: false,
					phone: false,
					email: true
				};
			}
			else if(helpMas[i].page == SENDFORM)
			{
				saveUserDate.price = user.update();
				if(user.dataUser(saveUserDate))
				{
					user.sendDate();	
				}
			}
		}
	}
	for(var i = 0; i < displayElements.length; i++)
	{
		if(displayElements[i].page != undefined && displayElements[i].isClick(posMouse()))
		{
			
			/*if(displayElements[i].page == DESCPRODUCTS)
			{
					//displayElements[i].texture = "";

			}
			else
			{
				console.log(displayElements[i].page);
				sortingProducts(displayElements[i].page);
				displayNavigationPush(displayElements[i].page);
			}*/
			switch(displayElements[i].page)
			{
				case DESCPRODUCTS:
					//console.log(displayElements[i]);
					var lTemp = displayElements[i].desc.length
					helpMas = [];
					var n = 0;
					for(var j = 0; j < lTemp*8/50; j++)
					{
						var str = [];
						
						for(var r = 0; r < 5; r++)
						{
							str[r] = displayElements[i].desc[n];
							n++;
						}
				
						helpMas.push(new Button({
							x: displayElements[i].x,
							y: displayElements[i].y + 20*j,
							w: 100,
							h: 20,
							c: "#000",
							textColor: "#fff",
							text: str.join(''),
							//text: displayElements[i].price,
							page: CLOSE
						}));
					}
					//console.log(displayElements[i].y);
					break;
				case BUYNOW:
					//console.log(displayElements[i].price);
					if(!user.update())
						userShop.x = WIDTH-WIDTH/4+52;
					else if(user.update() > 1000)
						userShop.x = WIDTH-WIDTH/4+63;
					userShop.text = "$" + user.update(displayElements[i].price);
					break;
				case CART:
					helpMas = [];

					inputUserData = {
						name: false,
						phone: false,
						email: false
					};

					//Button back
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "Back",
						//text: displayElements[i].price,
						page: CLOSE
					}));
					//Button name
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y + 20,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "Input name: ",
						//text: displayElements[i].price,
						page: USERNAME
					}));

					//Button phone
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y + 20*2,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "Input phone: ",
						//text: displayElements[i].price,
						page: USERPHONE
					}));

					//Button email
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y + 20*3,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "Input phone: ",
						//text: displayElements[i].price,
						page: USERMAIL
					}));

					//User price
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y + 20*4,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "Price: $" + user.update(),
						//text: displayElements[i].price,
						//page: USERMAIL
					}));
					
					//Button send
					helpMas.push(new Button({
						x: displayElements[i].x-200,
						y: displayElements[i].y + 5*20,
						w: 200,
						h: 20,
						c: "#000",
						textColor: "#fff",
						text: "SEND FORM",
						//text: displayElements[i].price,
						page: SENDFORM
					}));
					break;
				case CONTACTUS:
					var tempArrStr = ["Name company", "Phone: 111111111", "E-mail: name@name"];
					helpMas = [];
					for(var j = 0; j < tempArrStr.length; j++)
					{
						helpMas.push(new Button({
							x: displayElements[i].x-50,
							y: displayElements[i].y + 20*j,
							w: 200,
							h: 20,
							c: "#000",
							textColor: "#fff",
							text: tempArrStr[j],
							//text: displayElements[i].price,
							page: CLOSE
						}));
					}
					break;
				default:
					sorting = 0;
					startPos = false;
					helpMas = [];

					elements.splice(countProductsPush.start, countProductsPush.end-countProductsPush.start);
					maxProducts = 0;

					sortingProducts(displayElements[i].page);
					displayNavigationPush(displayElements[i].page);
					break;
			}
		}

		//////////////////////////////////////
		if(BUTTONNEXT.isClick(posMouse()))
		{
			startPos = false;
			helpMas = [];
			///console.log(countProductsPush.end-countProductsPush.start);	
			var tempPage = elements[countProductsPush.start].displayElemInPage;
			//console.log(tempPage);
			elements.splice(countProductsPush.start, countProductsPush.end-countProductsPush.start);
			//console.log(maxProducts);
			//console.log(elements[countProductsPush.start+1].price);
			sorting += 1;
			if(sorting > maxProducts)
				sorting = maxProducts;
			maxProducts = 0;
			sortingProducts(tempPage);
			displayNavigationPush(tempPage);
		}
		if(BUTTONBACK.isClick(posMouse()))
		{
			startPos = false;
			helpMas = [];
		//console.log(elements[countProductsPush.start].displayElemInPage);	
			var tempPage = elements[countProductsPush.start].displayElemInPage;
			elements.splice(countProductsPush.start, countProductsPush.end-countProductsPush.start);
			sorting -= 1;
			if(sorting < 0)
				sorting = 0;
			sortingProducts(tempPage);

			displayNavigationPush(tempPage);
		}

	}
}
/*function navigation(nav)
{
	page = nav;
	displayNavigation();
}
function displayNavigation()
{
	switch(page)
	{
		case HOME:
			displayNavigationPush(HOME);
			break;
		case CART:
			displayNavigationPush(CART);
			break;
	}

}*/
function displayNavigationPush(nav)
{
	displayElements = [];
	for(var i = 0; i < elements.length; i++)
	{
		if(elements[i].displayElemInPage == nav || elements[i].displayElemInPage == GLOB)
		{
			displayElements.push(elements[i]);
		}
	}
}


//Инициализация / INIT
createCanvas(1000, 1685, "#fff");
var elements = new Array();
var displayElements = new Array();

//USER
var user = new User();

//createElements();

var page = 0;
var b1 = new Button({
	x: 500,
	y: 100,
	w: 50,
	h: 50,
	c: "#fff",
	page: HOME,
	displayElemInPage: CART,
	//text: "Привет",
	textColor: "red"
});
elements.push(b1);

//HELP BLOCK
var helpBlock;
var helpMas = new Array();

//TOP
var logo = new Button({
		x: 25,
		y: 20,
		w: 110,
		h: 43,
		sx: 0,
		sy: 0,
		sw: 110,
		sh: 43,
		//c: "#fff",
		texture: 'images/logo.png',
		page: HOME,
		displayElemInPage: GLOB,

		//text: "Привет",
		//textColor: "red"
	});
elements.push(logo);
var cart = new Button({
		x: WIDTH-WIDTH/4,
		y: 20,
		w: 41,
		h: 37,
		sx: 0,
		sy: 0,
		sw: 41,
		sh: 37,
		//c: "#fff",
		texture: 'images/cart.png',
		page: CART,							
		displayElemInPage: GLOB,
		//text: "Привет",
		//textColor: "red"
	});
elements.push(cart);

var userShop = new Button({
	x: WIDTH-WIDTH/4+41,
	y: 20,
	w: 41,
	h: 37,
	c: "#fff",
	//texture: 'images/cart.png',
	page: CART,							
	displayElemInPage: GLOB,
	textColor: "#afafaf",
	text: "$" + user.update(),
	fontSize: 20
	//textColor: "red"
});
elements.push(userShop);

//NAVIGATION FON
var fonNav = new Button({
	x: 0,
	y: 80,
	w: WIDTH,
	h: 37,
	c: "#4ccfc1",
	displayElemInPage: GLOB
});
elements.push(fonNav);
//TOP NAV BUTTON
/*var buttonHome = new Button({
	x: 10,
	y: 80,
	w: 80,
	h: 37,
	c: "#4ccfc1",
	page: HOME,
	displayElemInPage: GLOB,
	text: "HOME",
	textColor: "#fff"
});
elements.push(buttonHome);
var buttonSale = new Button({
	x: 90,
	y: 80,
	w: 70,
	h: 37,
	c: "#4ccfc1",
	page: SALE,
	displayElemInPage: GLOB,
	text: "SALE",
	textColor: "#fff"
});
elements.push(buttonSale);
var buttonHandbags = new Button({
	x: 160,
	y: 80,
	w: 110,
	h: 37,
	c: "#4ccfc1",
	page: HANDBAGS,
	displayElemInPage: GLOB,
	text: "HANDBAGS",
	textColor: "#fff"
});
elements.push(buttonHandbags);
var buttonWallets = new Button({
	x: 270,
	y: 80,
	w: 100,
	h: 37,
	c: "#4ccfc1",
	page: WALLETS,
	displayElemInPage: GLOB,
	text: "WALLETS",
	textColor: "#fff"
});
elements.push(buttonWallets);
var buttonAccessories = new Button({
	x: 370,
	y: 80,
	w: 130,
	h: 37,
	c: "#4ccfc1",
	page: ACCESSORIES,
	displayElemInPage: GLOB,
	text: "ACCESSORIES",
	textColor: "#fff"
});
elements.push(buttonAccessories);
var buttonMentstore = new Button({
	x: 500,
	y: 80,
	w: 120,
	h: 37,
	c: "#4ccfc1",
	page: MENTSTORE,
	displayElemInPage: GLOB,
	text: "MENT STORE",
	textColor: "#fff"
});
elements.push(buttonMentstore);
var buttonShoes = new Button({
	x: 620,
	y: 80,
	w: 80,
	h: 37,
	c: "#4ccfc1",
	page: SHOES,
	displayElemInPage: GLOB,
	text: "SHOES",
	textColor: "#fff"
});
elements.push(buttonShoes);
var buttonShoes = new Button({
	x: 700,
	y: 80,
	w: 80,
	h: 37,
	c: "#4ccfc1",
	page: SHOES,
	displayElemInPage: GLOB,
	text: "SHOES",
	textColor: "#fff"
});
elements.push(buttonShoes);*/


//TOP NAVIGATION BUTTON
var backW = 0;
var nameTopNavButton = ["HOME", "SALE", "HANDBAGS", "WALLETS", "ACCESSORIES", "MENT STORE", "SHOES", "VINTAGE", "SERVICES", "CONTACT US"];
for (var i = 0; i < nameTopNavButton.length; i++) {
	//console.log(nameTopNavButton[3].length);
	elements.push(new Button({
		x: backW + 5,
		y: 80,
		w: nameTopNavButton[i].length * 12,
		h: 37,
		c: "#4ccfc1",
		page: i,
		displayElemInPage: GLOB,
		text: nameTopNavButton[i],
		textColor: "#fff",
		fontSize: 14
	}));
	backW += nameTopNavButton[i].length*12;
}




//BANNER
elements.push(new Button({
	x: 0,
	y: 117,
	w: WIDTH,
	h: 450,
	c: "#3ac1ac",
	displayElemInPage: GLOB
}));

elements.push(new Button({
	x: 80,
	y: 185,
	w: 278,
	h: 325,
	sx: 0,
	sy: 0,
	sw: 278,
	sh: 325,
	//c: "#fff",
	texture: 'images/shirt.png',
	displayElemInPage: GLOB
}));

var banerText = ["COWHIDE", 
				"STANDART CREW", 
				"White coloured, short-sleeved, printed T-shirt for men by", 
				"Levi's. This crew-neck T-shirt is made of organic cotton and", 
				"comes in a regular fit."];
var tTemp = 0;
for(var i = 0; i < banerText.length; i++)
{

	if(i < 2)
	{
		elements.push(new Text({
			text: banerText[i],
			x: 460,
			y: 200+tTemp,
			c: "#fff",
			font: "italic 50px Arial",
			textAlign: "left",
			textBaseline: "middle",
			displayElemInPage: GLOB
		}));
		tTemp += 50;
	}	
	else
	{
		elements.push(new Text({
			text: banerText[i],
			x: 460,
			y: 200+tTemp,
			c: "#fff",
			font: "italic 14px Arial",
			textAlign: "left",
			textBaseline: "middle",
			displayElemInPage: GLOB
		}));
		tTemp += 20;
	}			
}
elements.push(new Button({
	x: 460,
	y: 425,
	w: 135,
	h: 45,
	c: "#3ac1ac",
	strokeColor: "#fff",
	page: SHOPNOW,
	displayElemInPage: GLOB,
	text: "SHOP NOW",
	textColor: "#fff",
	fontSize: 20
}));

//CATEGORIES
var categoriesBrandButtons = [
	{
		img: "images/shoesCat.png",
		w: 170,
		h: 139,
		name: "SHOES",
		displayElemInPage: GLOB,
		page: SHOES
	},
	{
		img: "images/shirtCat.png",
		w: 113,
		h: 132,
		name: "TSHIDRTS",
		displayElemInPage: GLOB,
		page: TSHIRT
	},
	{
		img: "images/shortsCat.png",
		w: 71,
		h: 127,
		name: "SHORTS",
		displayElemInPage: GLOB,
		page: SHORTS
	}
];

var hCatTemp = 40; //345
for(var i = 0; i < categoriesBrandButtons.length; i++)
{
	elements.push(new Button({
		x: hCatTemp,
		y: 590,
		w: categoriesBrandButtons[i].w,
		h: categoriesBrandButtons[i].h,
		sx: 0,
		sy: 0,
		sw: categoriesBrandButtons[i].w,
		sh: categoriesBrandButtons[i].h,
		//c: "#fff",
		texture: categoriesBrandButtons[i].img,
		displayElemInPage: categoriesBrandButtons[i].displayElemInPage
	}));
	elements.push(new Text({
		text: "BRANDED",
		x: hCatTemp+categoriesBrandButtons[i].w+25,
		y: 630,
		c: "#afafaf",
		font: "italic 20px Arial",
		textAlign: "left",
		textBaseline: "middle",
		displayElemInPage: categoriesBrandButtons[i].displayElemInPage
	}));
	elements.push(new Text({
		text: categoriesBrandButtons[i].name,
		x: hCatTemp+categoriesBrandButtons[i].w+25,
		y: 650,
		c: "#afafaf",
		font: "italic 20px Arial",
		textAlign: "left",
		textBaseline: "middle",
		displayElemInPage: categoriesBrandButtons[i].displayElemInPage
	}));
	elements.push(new Button({
		x: hCatTemp+categoriesBrandButtons[i].w+25,
		y: 680,
		w: 60,
		h: 37,
		c: "#3cc395",
		page: categoriesBrandButtons[i].page,
		displayElemInPage: categoriesBrandButtons[i].displayElemInPage,
		text: "SHOP",
		textColor: "#fff",
		fontSize: 14
	}));
	hCatTemp += 345;
}

//LINE NAME PRODUCTS
elements.push(new Button({
	x: 0,
	y: 750,
	w: WIDTH,
	h: 37,
	c: "#3ac1ac",
	displayElemInPage: GLOB
}));
elements.push(new Text({
	text: "FEATURED PRODUCTS",
	x: 60,
	y: 750+37/2,
	c: "#fff",
	font: "italic 20px Arial",
	textAlign: "left",
	textBaseline: "middle",
	displayElemInPage: GLOB
}));


//PRODUCTS
var poductsBase = window.dataStore;
var sizeBlockProduct = 250;
var countProductsPush = {start: 0, end: 0};
var count = 0;
//var xBlockTemp = 50;
/*for (var i = 0; i < poductsBase.length; i++) 
{
	//console.log(poductsBase[i].displayElemInPage);	
	if(poductsBase[i].displayElemInPage == HOME)
	{
		var xBlockTemp = poductsBase[i].x + poductsBase[i].x*(count%3) + sizeBlockProduct*(count%3);
		var yBlockTemp = poductsBase[i].y + poductsBase[i].x*parseInt(count/3) + sizeBlockProduct*parseInt(count/3);
		//console.log(parseInt(count/3));
		if(count == 0)
		{
			xBlockTemp = 50;
		}
		if(parseInt(count/3) == 0)
		{
			yBlockTemp = poductsBase[i].y;
		}

		elements.push(new Button({
			x: xBlockTemp,
			y: yBlockTemp,
			w: sizeBlockProduct,
			h: sizeBlockProduct,
			c: "#fff",
			strokeColor: "#d6d6d6",
			//page: SHOPNOW,
			displayElemInPage: poductsBase[i].displayElemInPage,
			text: "SHOP NOW",
			textColor: "#fff",
			fontSize: 20
		}));
		//Начало записи продуктов
		if(!countProductsPush.start)
			countProductsPush.start = elements.length;

		elements.push(new Button({
			x: xBlockTemp + (sizeBlockProduct/2 - poductsBase[i].size.w/2),
			y: yBlockTemp+20,
			texture: poductsBase[i].img,
			displayElemInPage: poductsBase[i].displayElemInPage
		}));
		elements.push(new Text({
			text: poductsBase[i].name,
			x: xBlockTemp+sizeBlockProduct/2,
			y: yBlockTemp+160,
			c: "#afafaf",
			font: "italic 16px Arial",
			textAlign: "center",
			textBaseline: "middle",
			displayElemInPage: poductsBase[i].displayElemInPage
		}));
		elements.push(new Text({
			text: "$" + poductsBase[i].price,
			x: xBlockTemp+sizeBlockProduct/4,
			y: yBlockTemp+200,
			c: "#afafaf",
			font: "italic 20px Arial",
			textAlign: "center",
			textBaseline: "middle",
			displayElemInPage: poductsBase[i].displayElemInPage
		}));
		elements.push(new Button({
			x: xBlockTemp+sizeBlockProduct/2,
			y: yBlockTemp+182,
			w: 100,
			h: 35,
			c: "#3cc395",
			page: poductsBase[i].page,
			displayElemInPage: poductsBase[i].displayElemInPage,
			text: "BUY NOW",
			textColor: "#fff",
			fontSize: 14
		}));
		count++;
		if(count == 6)
		{
			countProductsPush.end = elements.length;
			break;
		}
	}
}*/
sortingProducts(HOME);
//console.log(countProductsPush);
//BODY BUTTON NEXT/BACK
var BUTTONNEXT = new Button({
	x: 1000-42,
	y: 1066,
	w: 42,
	h: 66,
	//c: "rgba(60, 195, 149, 0.5)",
	texture: "images/next.png",
//	page: NEXT,
	displayElemInPage: GLOB
});
elements.push(BUTTONNEXT);
var BUTTONBACK = new Button({
	x: 0,
	y: 1066,
	w: 42,
	h: 66,
	//c: "rgba(60, 195, 149, 0.5)",
	texture: "images/back.png",
//	page: BACK,
	displayElemInPage: GLOB
});
elements.push(BUTTONBACK);

//1374
//footer links
elements.push(new Button({
	x: 0,
	y: 1420,
	w: WIDTH,
	h: 230,
	c: "#3cc3b5",
	displayElemInPage: GLOB
}));

var footerNameTemp = ["FEATURED SALE", "MENS STORE", "WOMEN STORE", "QUICK LINKS"];
var footerButtonLinks = [
	{
		text: "Alexis Hudson",
		page: NULL
	},
	{
		text: "American Apparel",
		page: NULL
	},
	{
		text: "Ben Sherman",
		page: NULL
	},
	{
		text: "Big Buddha",
		page: NULL
	},
	{
		text: "Chanel",
		page: NULL
	},
	{
		text: "Christian Audigier",
		page: NULL
	},
	{
		text: "Choah",
		page: NULL
	},
	{
		text: "Cole Haan",
		page: NULL
	}
];
var backW = 1000/4/4;

for (var i = 0; i < footerNameTemp.length; i++) 
{
	var backH = 1480;
	elements.push(new Text({
		text: footerNameTemp[i],
		x: backW,
		y: 1450,
		c: "#fff",
		font: "italic 16px Arial",
		textAlign: "left",
		textBaseline: "middle",
		displayElemInPage: GLOB
	}));
	for(var j = 0; j < footerButtonLinks.length; j++)
	{
		//console.log(footerButtonLinks[i].length);
		
		elements.push(new Button({
			x: backW,
			y: backH-6,
			w: footerButtonLinks[j].text.length*8,
			h: 13,
			c: "#3cc3b5",
			page: footerButtonLinks[j].page,
			displayElemInPage: GLOB,
		}));
		elements.push(new Text({
			text: footerButtonLinks[j].text,
			x: backW,
			y: backH,
			//w: 0,
			//h: 0,
			c: "#fff",
			font: "italic 12px Arial",
			textAlign: "left",
			textBaseline: "middle",
			displayElemInPage: GLOB
		}));
		backH += 20;
	}
	backW += 250;
}

//1650
//footer cop
elements.push(new Button({
	x: 0,
	y: 1650,
	w: WIDTH,
	h: 35,
	c: "#2da89b",
	displayElemInPage: GLOB
}));
elements.push(new Text({
	text: "Copyright © 2018 Andrii (pdbq)",
	x: WIDTH/2,
	y: 1650+35/2,
	c: "#fff",
	font: "italic 12px Arial",
	textAlign: "center",
	textBaseline: "middle",
	displayElemInPage: GLOB
}));



for(var i = 0; i < elements.length; i++)
{
	if(elements[i].displayElemInPage == HOME || elements[i].displayElemInPage == GLOB)
	{
		displayElements.push(elements[i]);
	}
}

start();
////////////////////////////////////////////////////////
});