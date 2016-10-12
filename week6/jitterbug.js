// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 5);
  this.speed = 100;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);

  };
}
