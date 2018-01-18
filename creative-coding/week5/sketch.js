var face = {
  d: 60,
  posX: 600,
  posY: 400,
  move: function() {
    this.posX = this.posX + 1;
  },

   drawing: function() {
    translate(this.posX, this.posY);
    strokeWeight(3.0);
    ellipse(0, 0, this.d, this.d);
    fill(0);
    strokeWeight(1.0);
    arc(-10, -10, 15, 15, PI, TWO_PI);
    arc(10, -10, 15, 15, PI, TWO_PI);
    arc(0, 8, 25, 20, TWO_PI, PI);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204, 229, 255);
}

function draw() {
  fill(255);
  //stroke(0);
  face.drawing();
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255));
  face.move();

  //fill(random(255), random(255), random(255));
  //translate(mouseX, mouseY);
  //var scalar = mouseX / 100.0;
  //scale(scalar);
  //strokeWeight(0.1 / scalar);
//  rect(-15, -15, 10, 10);
if(mouseIsPressed) {
  fill(255);
}

}
