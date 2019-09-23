// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

// lion image "DSC_8448" by bobosh_t is licensed under CC BY-NC 2.0
// eagle image "Eagle from Kerala - closeup view" by Rameshng is licensed under CC BY-SA 2.0


var puppy, dinosaur, sloth, lion, eagle;
var pButton, dButton, sButton, lButton, eButton

var currentImage = 0;




function preload(){
//load media
puppy = loadImage("images/puppy.jpg");
dinosaur = loadImage("images/dinosaur.jpg");
sloth = loadImage("images/sloth.jpg");
lion = loadImage("images/lion.jpg");
eagle = loadImage("images/eagle.jpg");
}






function setup() {
  // put setup code here
createCanvas(400,400);

pButton = createButton("Puppy");
pButton.mousePressed(function(){
  currentImage = 0;
});

dButton = createButton("Dinosaur");
dButton.mousePressed(function(){
  currentImage = 1;
});

sButton = createButton("Sloth");
sButton.mousePressed(function(){
  currentImage = 2;
});

//my add ons
lButton = createButton("lion");
lButton.mousePressed(function(){
  currentImage = 3 ;
});

eButton = createButton("eagle");
eButton.mousePressed(function(){
  currentImage = 4 ;
});

}





function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);

if (currentImage == 0){
  //show puppy
  image(puppy, 0,0, puppy.width/4, puppy.height/4);

}else if(currentImage == 1){
  //show dino
  image(dinosaur, 0,0, dinosaur.width/4, dinosaur.height/4);

}else if(currentImage == 2){
  //show sloth
  image(sloth, 0,0, sloth.width/4, sloth.height/4);

}else if(currentImage == 3){
  //show lion
  image(lion, 0,0, lion.width/4, lion.height/4 );

}else if(currentImage == 4){
  //show eagle
  image(eagle, 0,0, eagle.width/4, eagle.height/4);
}


}
