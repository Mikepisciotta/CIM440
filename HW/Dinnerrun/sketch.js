var predator= {
x: 300,
y: 200,
xspeed: 10,
yspeed: -8
}

//figure out how to add score and how to make touching predator and fake food reset game


var s;
var scl = 20;


var food;




function setup() {
createCanvas(700, 700);
s = new Snake
frameRate(12);
pickLocation();

}



function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

  fakefood1 = createVector(floor(random(cols)), floor(random(rows)));
  fakefood1.mult(scl);

  fakefood2 = createVector(floor(random(cols)), floor(random(rows)));
  fakefood2.mult(scl);

  fakefood3 = createVector(floor(random(cols)), floor(random(rows)));
  fakefood3.mult(scl);
}

function draw() {
background("purple");
if (s.eat(food)){
  pickLocation();
}
s.death();

s.update();
s.show();


fill("red");
rect(food.x, food.y, scl, scl);

fill("crimson");
rect(fakefood1.x, fakefood1.y, scl, scl);

fill("crimson");
rect(fakefood2.x, fakefood2.y, scl, scl);

fill("firebrick");
rect(fakefood3.x, fakefood3.y, scl, scl);


strokeWeight(4);
fill("blue");
ellipse(predator.x, predator.y, 30, 30);

if(predator.x > width || predator.x < 0){
  predator.xspeed = predator.xspeed * -1;
}
if(predator.y > height || predator.y < 0){
  predator.yspeed = predator.yspeed * -1;
}

predator.x = predator.x + predator.xspeed;
predator.y = predator.y + predator.yspeed;


fill("red");
textSize(15);
textFont('Georgia');
text("DINNER RUN", 290, 15);

fill("red");
textSize(10);
textFont('Georgia');
text("Find the real food, avoid becoming it!!", 250, 25);

}//end draw

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}//end keyPressed

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d< 1){
      this.total++;
      return true;
} else {
  return false;
}
  }

  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

this.death = function(){
  for (var i = 0; i < this.tail.length-1; i++){
    var pos = this.tail[i];
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      console.log('starting over');
    this.total = 0;
    this.tail = [];
    }
  }
}


  this.update = function (){
    if (this.total === this.tail.length){
      for (var i = 0; i < this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];

    }
  }
  this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function(){
    fill("green");
    for (var i = 0; i < this.tail.length-1; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
}
rect(this.x, this.y, scl, scl);
  }


}//end snake
