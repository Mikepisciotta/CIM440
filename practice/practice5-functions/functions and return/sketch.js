function setup() {
  // put setup code here
  var km = milesToKm(26.3);
  println(km);
  var km2= milesToKm(100);
  println(km2);

}


function milesToKm(miles){
var km = miles * 1.6;
return km;
}

function draw() {
  // put drawing code here
}
