

function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  background(0);
  strokeWeight(4);
  stroke(255);

var x= 0;
while(x <= width) {
fill(0, 200, 255);
ellipse(x, 100, 25, 25);
x = x + 50;
}

for(var x = 0; x <= width; x = x + 50){
fill(255, 0, 200);
ellipse(x, 300, 25, 25);

}
}

//x+=50 is the same as x = x + 50
//x = x + 1 is the same as x++
