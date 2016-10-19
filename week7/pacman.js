
// car constructor
function Pacman()
{
  this.xpos = 10;
  this.ypos = 200;
  this.speed = 10;
  this.radius = this.diam / 2;
  this.eyePos = this.diam / 2;
  this.eyeDiam = this.diam / 2;
  this.mouthAngle = (1 / 7);
  this.mouthChange = 1/128;
  this.change = 2;
  this.diam = 100;
  this.c = color("yellow");

  //movement hopefully
  this.move = function()
   {
     if(this.xpos > width) {
       this.speed = -this.speed;
     }

     if(this.xpos < 10) {
       this.speed = 10;
     }
     this.xpos = this.xpos + this.speed;


     //mouth move
     this.mouthAngle = this.mouthAngle + ( this.mouthChange * this.change);
	if( this.mouthAngle > (1/7) ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = (1/7);
	}
	if( this.mouthAngle < 0.01 ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = 0.03;
	}

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
