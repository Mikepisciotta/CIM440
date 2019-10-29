function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  background(50);

//call function:
lollipop(100,100,50);
lollipop(300,200,150);


}
//define function:
function lollipop(x, y, diameter){
  fill(0,200,255);
  rect(x-10,y,20,150);

  fill(255, 0, 200);
  ellipse(x,y,diameter,diameter);

}
