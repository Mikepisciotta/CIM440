var pointx = 0;
var pointy = 0;

function setup() {
  // put setup code here
createCanvas(500,500);
pointx=width/2 // these two set the starting point in the center of the canvas
pointy=height/2 //Set all x and y points to the value of width/2 and height/2

console.log("pointx" + pointx + "pointy" + pointy); // prints out variables

}



function draw() {
  // put drawing code here
background(255);

//pointx = 100; //moves entire image to top left
//pointy = 100;

pointx = mouseX;
pointy = mouseY;


rect(pointx - 100,pointy - 100,200,200);
ellipse(pointx,pointy,10,10)
ellipse(pointx + 20,pointy - 20,30,30); //20 to the right of pointx and 20 up from point y
ellipse(pointx - 20,pointy - 20,30,30);

//x,y,width,height,start,end
arc(pointx,pointy + 10,50,50,0,PI);




}
//anything related to p5 will always go in the set up or in the draw otherwise it will not know what you are talking about.
