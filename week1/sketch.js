var y = 60;
var z = 100;


function setup() {
  createCanvas(1070, 500)
  rectMode (CENTER);
  ellipseMode (CENTER);
  background (255,255,255);
}

function draw() {
  //the 4th value means opacity.

  stroke(10);
  fill(255);
  ellipse(500, 250, 100, 100);

  stroke(10);
  fill(255);
  ellipse(500, y, z, 100);

  stroke(3);
  fill(0, 126, 255, 102)
  ellipse(500, 250, 200, 200);

  stroke(5);
  fill(0, 300, 255, 102)
  ellipse(500, 250, 300, 300);

//Head
  fill (255);
  ellipse(340, 130, 160, 160);

  //eyes
  fill(0);
  ellipse(321, 115, 20, 16);
  ellipse(359, 115, 20, 16);

  textSize(60);
  fill(0, 102, 153);
  textFont("Raleway");
  text("hello", 12, 40);
  text("hello", 12, 80);
  text("hello", 12, 120);

  ellipseMode(CENTER);
  fill(0);
  stroke(255);
  arc(300, 100, 200, 200, HALF_PI,0);

}
