
// car constructor
function Pacman()
{
  this.xpos = 0;
  this.ypos = 200;
  this.speed = 2;
  this.radius = this.diam / 2;
  this.eyePos = this.diam / 2;
  this.eyeDiam = this.diam / 2;
  this.mouthAngle = (1 / 7);
  this.mouthChange = 1/128;
  this.change = 0;
  this.diam = 100;
  this.c = color("yellow");

  // drive method
  this.move = function()
   {
     if(this.xpos > width)
     {
       this.xpos = 0;
     }
     this.xpos = this.xpos + this.speed;
   };


  // display method
  this.display = function()
  {
    fill(this.c);
    noStroke();
    arc(this.xpos, this.ypos, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);

    fill("black");
    ellipse(this.xpos, this.ypos - 24, 15, 15);

  };
}
