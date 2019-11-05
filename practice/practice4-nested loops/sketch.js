

function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  background(0);
  strokeWeight(4);
  stroke(255);


//for(var x = 0; x <= width; x = x + 50){
for(var x = 0; x <= mouseX; x = x + 50){
for(var y = 0; y <= height; y = y + 50){
fill(random(255), random(0), random(255));
ellipse(x, y, 25, 25);

}
}
}//end of draw
