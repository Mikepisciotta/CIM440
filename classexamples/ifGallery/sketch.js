// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22




var puppy, dinosaur, sloth;


function preload(){
//load media
puppy = loadImage("images/puppy.jpg");
dinosaur = loadImage("images/dinosaur.jpg");
sloth = loadImage("images/sloth.jpg");

}

function setup() {
  // put setup code here
createCanvas(400,400);
}





function draw() {
  // put drawing code here
  image(puppy, 0,0, puppy.width/4, puppy.height/4);
}
