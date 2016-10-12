var bugs = [];

function setup() {
  createCanvas( windowWidth, windowHeight);
  background(140, 245, 246);
  // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  fill(random(255));
  noStroke();
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}
