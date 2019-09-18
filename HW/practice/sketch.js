


function setup() {
createCanvas(500,500);
strokeWeight(30);


}

function draw() {
//background(204);
//stroke(102);
//line(40, 0, 70, height);
//if (mouseIsPressed == true){
//  stroke(0);
//} else{
//  stroke(255);
//}
//line(0,70, width, 50);


background(204);
stroke(102);
line(40,0,70,height);
if (mouseIsPressed) {
  if (mouseIsPressed == LEFT){
    stroke(255);
  } else{
    stroke(0);
  }
  line(0,70,width,50)
}
}





//beginShape();
//background(204);
//vertex(150,150);
//vertex(200,200);
//vertex(300,200);
//vertex(350,150);
//vertex(350,100);
//vertex(300,50);
//vertex(200,50);
//vertex(150,100);
//endShape(CLOSE);

//for (var i = 20; i < 400; i += 8) {
//  line(i, 40, i + 60, 80)
