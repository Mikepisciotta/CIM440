var circleY = 0;

var changeBackground = "pink";


function setup() {
  createCanvas(700,500);

}



function draw() {
background(changeBackground);



fill(250, 200, 200);
ellipse(50, circleY, 50, 50);

circleY = circleY + 3;


//this code will stop the circle at 300
//if(circleY == 300){
//circleY = circleY - 3;
//}//end of if statement

//this code will send value of circle y back to 0, putting it back at the top once it hits 300
if(circleY == 300){
  circleY = 0;
}//end of if statement

if(mouseX < 300){
  fill("red");
  rect(400,300,100,100);
}else if(mouseX > 300 && mouseX <400){
  fill("blue");
  rect(400,300,100,100);
}else{
    fill("green");
  rect(400,300,100,100)
}

if(mouseY < 50 || mouseY > 400){
  fill("yellow");
  ellipse(320,200,100,100);
}


}//end of draw


function mousePressed(){
changeBackground = "purple";
//ellipse(200,200,100,100);
}

function mouseReleased(){
changeBackground = "pink";

}
