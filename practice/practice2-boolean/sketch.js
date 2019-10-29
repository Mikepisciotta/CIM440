var on = false;

function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  if (on) {       //if on is true
    background("green");
  } else {        //if on is false
  background("black");
  }
  stroke(255);
  strokeWeight(4);
  fill("pink");
  rectMode(CENTER);
  rect(300,200,100,100);
}//end drawing



//function mousePressed(){
//  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
//    if (on) {
//      on = false;
//    }else {
//      on = true;
//    }//end of else
//  }//end of first if statement
// }//end mousePressed



//^that is the long version of this
function mousePressed(){
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
    on = ! on; //set the value of "on", which is false, to not itself, which would be true.
  }//end of if statement
}//end mousePressed





//!= the not operator
//"on= ! on" means "on" equals not "on", it is essentially setting the variable "on", which we have defined to be false, to be not itself or in other words true. So if the original value is false, then not false (on= !) is true.

//we defined "on" as false
//we said if "on" is true then the screen will go green and if it is false it will go black
//we set up mousePressed within the perimeter of a rectangle button so the function will only respond if pressed within rectangle
//we then used if statement to set value of "on" to not itself when the rectangle is pressed, meaning that whenever the rectangle is pressed the value of the variable "on", which began at false and made the screen black, will go to true and make it green.
