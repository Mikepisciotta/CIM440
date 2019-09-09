var mouthX=80;
var mouthY=200;

var eyeSize = 40;

function setup() {
  // put setup code here
  //sets the size of the canvas
createCanvas(500,500);
//sets the color of the background
background("green");
background(0); //black
background(255); //white
background(200); //grayscale 0-255 grayish white
background(255,0,0); //full red
background(0,255,0); //full green
background(0,0,255); //full blue
background(127,255,0); //chartreuse
background("#fffffffff"); // hexidecimal white
background("#FFA07A"); //hexidecimal light salmon

//fill(0,255,0); //adjusts inner shape color
//stroke("red"); //adjusts outer edge color
//ellipse(50,50,100,100); // (x,y,width,height) ellipse A


//fill(255,0,0); //set ellipse B color
//stroke(255); //set ellipse B color
//ellipse(100,100,50,50); //ellipse B

}




function draw() {
  // put drawing code here
//default fill, stroke and strokeWeight
fill(255);
strokeWeight(1);
stroke("black");


  //left eye
  //ellipse(110,100,20,20);
  //right eye
 //ellipse(150,100,20,20);

//Every shape's X and Y location will always begin at 0,0 which is the top left corner of screen.



  //left eye
  fill(0,0,255);
  ellipse(110,100,eyeSize,eyeSize); // XY location is center of shape.
  //right eye
  ellipse(150,100,eyeSize,eyeSize);


  //mouth
fill("red"); // css color
rect(80,200,100,30); //Width and height grow out and down from starting point

fill("255");

//rect(mouthX,mouthY,100,30);

//mole
strokeWeight(5);
point(30,27);

//mouth line
strokeWeight(1);
line(80,215,180,215); //composed of an x and y location

//width/2 center point of width, height/2 center point of height
//console.log("width" + width);
//console.log("height" + height);

triangle(width/2,height/2,(width/2)+10,(height/2) + 20, (width/2) -10, (height/2) + 20);



triangle(10,10,20,20,0,20); //10,10 starting point, 20,20 second point, 0,20 third point

stroke(0,127,0); //green
arc(50,50,50,50,0,PI); //0-180
arc(300,300,50,50,0,TWO_PI); //0-360
arc(400,400,50,50, PI + HALF_PI,0); //this creates three halves, starting at 270 in a circle
}
