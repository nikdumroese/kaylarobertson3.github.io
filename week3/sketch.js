var radius = 50;
var x = -radius;
var y;
var z;
var speed = 0.5;
var diameter = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  ellipseMode (CENTER);
  background (153, 255, 102);
}

function draw() {
  //moving thing
  x += speed;
  arc(x, 60, radius, radius, 0.52, 6.76);

  //moving thing2
  x += speed;
  arc(x, 300, radius, radius, 0.2, 4.35);


  //mouseresponse
  if (mouseIsPressed) {
    fill(255, 80, 80);
  }
  else {
    fill(255);
  }
  rect(mouseX, mouseY, 80, 80);

  //random element
  z += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);




}
