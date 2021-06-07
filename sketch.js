/*
The case of the Python Syndicate
Stage 4

Officer: 1680135
CaseNum: 301-3-48665298-1680135

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var anna_karpinski_img;
var lina_lovelace_img;
var robbie_kray_img;
var bones_karpinski_img;
var countess_hamilton_img;
var rocky_kray_img;

var countess_hamilton_obj;


//declare your new objects below


var anna_karpinski_obj;
var rocky_kray_obj;
var lina_lovelace_obj;
var robbie_kray_obj;
var bones_karpinski_obj;


var anna_karpinski_x_position = 115;
var anna_karpinski_y_position = 40;
var lina_lovelace_x_position = 408;
var lina_lovelace_y_position = 40;
var robbie_kray_x_position = 701;
var robbie_kray_y_position = 40;
var bones_karpinski_x_position = 115;
var bones_karpinski_y_position = 309;
var rocky_kray_x_position = 701;
var rocky_kray_y_position = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	lina_lovelace_img = loadImage("lina.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_obj = {
		x: 408,
		y: 309,
		image: countess_hamilton_img
	};



	//define your new objects below

	
    anna_karpinski_obj = {
		x: anna_karpinski_x_position,
		y: anna_karpinski_y_position,
		image: anna_karpinski_img
	};
    rocky_kray_obj = {
		x: rocky_kray_x_position,
		y: rocky_kray_y_position,
		image: rocky_kray_img
	};
    lina_lovelace_obj = {
		x: lina_lovelace_x_position,
		y: lina_lovelace_y_position,
		image: lina_lovelace_img
	};
	bones_karpinski_obj = {
		x : bones_karpinski_x_position,
		y : bones_karpinski_y_position,
		image : bones_karpinski_img
	};
	robbie_kray_obj ={
		x: robbie_kray_x_position,
		y: robbie_kray_y_position,
		image: robbie_kray_img
	};

	
}
function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	
	image(lina_lovelace_obj.image, lina_lovelace_obj.x, lina_lovelace_obj.y);
	
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);
	
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);
	
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	
	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);


}