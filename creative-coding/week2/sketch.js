var y = 400;
var z = 400;
var c = color(255, 204, 0);


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  ellipseMode (CENTER);
  background (102, 204, 255, 100);
}

function draw() {
  //the 4th value means opacity.

  //baseline
  strokeWeight(0);
  line(0, 500, 800, 500);

  //circles//
  strokeWeight(1);
  fill(255, 153, 51);
  ellipse(500, 200, 600, 600);

  noStroke();
  fill(255, 204, 0);
  ellipse(500, 200, 500, 500);

  strokeWeight(0);
  fill(255, 204, 153);
  ellipse(500, 200, 400, 400);

  strokeWeight(0);
  fill(255, 102, 0);
  ellipse(500, 200, 300, 300);

  strokeWeight(1);
  fill(255, 133, 51);
  ellipse(500, 200, 200, 200);

  strokeWeight(1);
  fill(255, 102, 0);
  ellipse(500, 200, 100, 100);









  //mountains
  fill(132, 147, 124);
  triangle(100, 500, 200, 300, 300, 500);

  fill(132, 100, 124);
  triangle(200, 500, 300, 250, 400, 500);

  fill(15, 147, 124);
  triangle(300, 500, 450, 180, 600, 500);

  //text
  textSize(60);
  fill(0, 102, 153);
  textFont("Raleway");
  text("hello", 12, 40);
  text("hello", 12, 80);
  text("hello", 12, 120);

}
