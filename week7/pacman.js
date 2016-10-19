
// car constructor
function Pacman()
{
  this.xpos = 0;
  this.ypos = 200;
  this.speed = 10;
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
     if(this.xpos > width) {

       this.speed = -this.speed;
     }
     this.xpos = this.xpos + this.speed;
   };

/* //edge check - not working :(
   if( this.xpos+this.radius >= width ){
 		this.xpos = width-this.radius;
 		this.xChange = 0;
 	} else if ( this.xpos-this.radius <= 0 ){
 		this.xpos = 0+this.radius;
 		this.xChange = 0;
 	}
  if ( this.ypos+this.radius >= height ){
		this.ypos = height-this.radius;
		this.yChange = 0;
	} else if ( this.ypos-this.radius <= 0 ){
		this.ypos = 0+this.radius;
		this.yChange = 0;
	} */

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
