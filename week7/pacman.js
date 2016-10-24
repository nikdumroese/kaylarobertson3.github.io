/*
TODO:

2. stop on boundary
3. random dir change
4. rotate pacman
5. awarness of other pacmen
6. timer


*/



// car constructor
function Pacman(xpos, ypos) //why xpos and y pos???
{
  this.xpos = random(width);
  this.ypos = random(height);
  this.speed = 10;
  this.direction = 'stopped';
  this.radius = this.diam / 2;
  this.eyePos = this.diam / 2;
  this.eyeDiam = this.diam / 2;
  this.mouthAngle = (1 / 7);
  this.mouthChange = 1/128;
  this.change = 2;
  this.diam = 100;
  this.c = color("yellow");
}


  //movement hopefully
  Pacman.prototype.move = function () {
    this.display();
    if(this.xpos > width) {
      this.speed = -this.speed;
    }
    if(this.xpos > width) {
      scale(-1,1);

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

  // display method
  Pacman.prototype.display = function()
  {
    fill(this.c);
    noStroke();
    arc(this.xpos, this.ypos, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);

    fill("black");
    ellipse(this.xpos, this.ypos - 24, 15, 15);

  };
