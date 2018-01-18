var xPos = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  ellipseMode (CENTER);
  frameRate(5);
  noStroke(0);
  smooth();
}

//circles with random color
function draw() {
  background(255);
  for (var y = 0; y < height+10; y += 20) {
      for (var x = 0; x < width+10; x += 20) {
        fill(random(255), random(255), random(255));
        var d = 20;
        ellipse (x + y, y, d, d);
    }
  }






  //mouseIsPressed
  if (mouseIsPressed) {
    background(0);

  }
}
