var legY=285;

var pointx = 0;
var pointy = 0;

var locationx = 300;
var locationy = 400;

function setup() {
  // put setup code here

createCanvas(800,500);
pointx=width/2 // these two set the starting point in the center of the canvas
pointy=height/2 //Set all x and y points to the value of width/2 and height/2
background(255); //

}




function draw() {
  // put drawing code here

stroke(0,127,0); //green


rect(200, 200,50,80); //body

rect(255,120,5,80); //right arm
rect(190,200,5,80); //left arm
rect(220,194,10,6); //neck

ellipse(225,178,35,35);

rect(200,legY,5,80); //left leg
rect(245,legY,5,80); //right leg

ellipse(220,173,5,5); //left eye
ellipse(229,173,5,5); //right eye



arc(225,185,15,15,0,PI); //smile


ellipse(pointx - 100, pointy - 100, 40, 40);

rect(locationx + 320, locationy, 150, 20);
rect(locationx + 385, locationy - 350, 20, 350);
rect(locationx + 385, locationy - 350, 20, 350);
rect(locationx + 385, locationy - 350, 20, 350);

rect(locationx + 325, locationy - 350, 140, 80);


ellipse(locationx + 395, locationy - 275, 90, 10);






}
