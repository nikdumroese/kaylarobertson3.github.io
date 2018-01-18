//constructor method
function Car() {
  this.x = random(width);
  this.y = random(height);
  this.t = 200;
  this.b = 200;
  this.diameter = 40;
  this.speedX = 100;
  this.speedY = 100;

  this.move = function() {
    this.x += this.speed;
    this.y += this.speed;

//    if (this.x >= windowWidth) {
  //    this.speedX = -this.speedX;
//    }
  };

  this.display = function() {
    noStroke();
    rect(this.x, this.y, this.t,this.b, 20);
    ellipse(this.x, this.y, this.diameter, this.diameter);

  };

}
