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
  background (102, 204, 255, 100);
}

function draw() {
  //mouseresponse
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

  //random element
  z += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);




  //moving thing
  x += speed;
  arc(x, 60, radius, radius, 0.52, 6.76);
}
