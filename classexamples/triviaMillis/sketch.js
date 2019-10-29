var questions = ["Is iceland always covered in ice?","What ocean lies east of the U.S.?","Is water wet?"];
var options = ["1)true 2)false","1)pacific, 2)eastern, 3)Indian, 4)atlantic","1)True 2)False"];
var answers = [1,3,1]; //button is 1 higher than actual current option, which is why answers are 1,3,1




var buttons = [];

var currentOption = -1; //refers to what button the user has pressed, when program starts we are at -1

var currentQuestion = 0;


var answerText = "";

var startTimer = false;

var interval = 5000;
var prevMillis = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);


buttons[0]= createButton("1");
buttons[0].position(10,300);
buttons[0].mousePressed(function(){
 currentOption = 0;
}); //end of mousePressed

buttons[1]= createButton("2");
buttons[1].position(50,300);
buttons[1].mousePressed(function(){
 currentOption = 1;
}); //end of mousePressed

buttons[2]= createButton("3");
buttons[2].position(90,300);
buttons[2].mousePressed(function(){
 currentOption = 2;
}); //end of mousePressed

buttons[3]= createButton("4");
buttons[3].position(130,300);
buttons[3].mousePressed(function(){
 currentOption = 3;
}); //end of mousePressed

} //end of set up




function draw() {
  // put drawing code here
background(255);
text(questions[currentQuestion], 20,100);
text(options[currentQuestion], 20,150);



if(startTimer == true){
  text(answerText, 20, 200);
  if(millis()-prevMillis > interval){
    prevMillis = millis();
    startTimer = false;
    console.log("Timer ended");
  }//end of timer
}//end of startTimer=true


//if currentOption is not equal to -1
if(currentOption != -1){
  //do something if currentOption is not equal to -1
console.log("currentOption" + currentOption);
if(currentOption == answers [currentQuestion]){
console.log("correct");
answerText ="Correct";
currentQuestion = currentQuestion + 1;
//array.length counts how many items are in the array, questions.length has two items
//if currentQuestion == 2
if(currentQuestion == questions.length ){
currentQuestion = 0;

}



}else{
  console.log("incorrect");
  answerText = "Incorrect";
} //end of checking if answer correct or incorrect

//reset to inactive state
currentOption = -1;
startTimer = true;
prevMillis = millis();

} //end of first if statement under text






} //end of draw loop
