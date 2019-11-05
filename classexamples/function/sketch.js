var hitzone3 = false;



function setup() {                   //FUNCTION SET UP
  // put setup code here

  createCanvas(400,400);

  hello();
  goodbye("mike");
  goodbye("bella");
  goodbye("james");

}//end of set up



function draw() {                      //FUNCTION DRAW
  // put drawing code here
  background(255);

  //frameRate(8);

if(circleHitzone(100,100) == true){
  //circleColor(xpos, ypos, r,g,b) order coresponds to perameter order.
  circleColor(random(width), random(height), random(255), random(255), random(255), random(0,200) );

  // var i = 0; is start, i<500; is how many times, i++ is the counter which in this case means i = i + 1
  for(var i = 0; i < 500; i++){
    circleColor(random(width), random(height), random(255), random(255), random(255), random(0,200) );
}

  }


fill("black");
ellipse(mouseX, mouseY, 10, 10);

console.log(circleHitzone(100,100));

if(circleHitzone(300,300) == true){
  rect(100,100,100,100)
}

circleHitzone(200,200);

if(hitzone3 == true){
  ellipse(30, 30, 30, 30);
}

}// end of draw




function mousePressed(){ //             FUNCTION MOUSEPRESSED
  if(circleHitzone(200,200 == true)){
    console.log("mousePressed");
    hitzone3 = true;
  }else{
    hitzone3 = false;
  }
}




function hello(){
console.log("hello");

}//end of hello


function goodbye(message){//                FUNCTION GOODBYE
  console.log("goodbye " + message);
}//end of goodbye


function circleColor(xpos, ypos, r, g, b, cSize){
fill(r,g,b);
stroke(0);
ellipse(xpos, ypos, cSize, cSize);
}//end of circleColor


function circleHitzone(distX, distY){
  var curDist = dist(mouseX, mouseY, distX, distY);
  //console.log("curDist" + curDist);
  fill(127);
  ellipse(distX, distY, 40, 40);

  //return curDist
  
if(curDist < 10){
  return true;
}else{
  return false;
}
  //return curDist;

}//end of hitzone
