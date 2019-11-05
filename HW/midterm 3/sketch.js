
var currentImage = 0;
var currentImage = 1;



var imageArray = [];

var hitX=[100,200];
var hitY=[300,300];

var hitSize=50;

function preload(){
//load media
imageArray[0] = loadImage("images/puppy.jpg");
imageArray[1] = loadImage("images/dinosaur.jpg");
imageArray[2] = loadImage("images/sloth.jpg");
imageArray[3] = loadImage("images/snake.jpg");
imageArray[4] = loadImage("images/wolf.jpg");

}






function setup() {
  // put setup code here
createCanvas(400,400);

}





function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4 );

  rect(hitX[0],hitY[0],hitSize,hitSize);

  rect(hitX[1],hitY[1],hitSize,hitSize);


}//end of draw

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0]+ hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("button 0");
    currentImage = currentImage + 1;

    if(currentImage == 5){
      currentImage = 0;
    }//end of currentImage == 3 statement

  }//button 0 end of hitzone

  if(mouseX > hitX[1] && mouseX < hitX[1]+ hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    console.log("button 1");
    currentImage = currentImage - 1;

    if(currentImage == -1){
      currentImage = 4;
    }//end of currentImage == 3 statement

}
}//end of mousePressed
