var b1;
var b2;

function Bubble(x,y){
  this.x =x;
  this.y =y;
  this.r =48;
this.col =color(255);

this.changeColor= function() {
  this.col=color(random(255),random(255), random(255));
}

  this.display= function(){
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }//end display

    this.update = function(){
      this.x = this.x + random(-1,1);
      this.x = this.x + random(-1,1);
    }//end update

  }//end bubble


function setup(){
  createCanvas(600,400);
  b1= new Bubble(250,200);
  b2= new Bubble(350,200);
}

function draw(){
  background(0);

  b1.update();
  b2.update();
  b1.display();
  b2.display();

//var d= dist(b1.x, b1.y, b2.x, b2.y);

//if (d< b1.r + b2.r){
  b1.changeColor();
  b2.changeColor();
//}

}
