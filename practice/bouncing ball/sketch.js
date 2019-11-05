var ball= {
x: 300,
y: 200,
xspeed: 4,
yspeed: -3
}

function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);

  if(ball.x > width || ball.x < 0){
    ball.xspeed = ball.xspeed * -1;
  }
  if(ball.y > height || ball.y < 0){
    ball.yspeed = ball.yspeed * -1;
  }

  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;



}