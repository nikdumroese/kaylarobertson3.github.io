
// pacman class

function Pacman() {
    this.xpos = 0;
    this.ypos = 0;
    this.speed = 2;
    this.c = color("yellow");
    this.radius = this.diam / 2;
    this.eyePos = this.diam / 7;
    this.eyeDiam = this.diam / 8;
    this.mouthAngle = (1 / 7);



    this.move = function() {
        if (this.xpos > width) {
            this.xpos = 0;
        }
        this.xpos = this.xpos + this.speed;

    };

    this.brake = function() {
      if(this.speed > 0)
      {
        this.speed = this.speed - 0.3;
      } else {
        this.speed = 0;
      }
    };

    this.display = function()
    {
        fill(this.c);
        ellipseMode(CENTER);
        arc(this.xpos, this.ypos, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);

        fill("black");
        ellipse(this.xpos, this.ypos, this.eyeDiam, this.eyeDiam);

    };
}
