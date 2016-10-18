// pacman class
function Pacman(xpos, ypos) {
    this.xpos = 0;
    this.ypos = 0;
    this.speed = 2;
    this.diam = 100;
    this.radius = this.diam / 2;
    this.eyePos = this.diam / 7;
    this.eyeDiam = this.diam / 8;
    this.mouthAngle = (1 / 7);
    this.mouthChange = 1 / 100;
    this.direction = 0;
    this.change = 0;



    this.move = function() {
        if (this.xpos > width) {
            this.xpos = 0;
        }
        this.xpos = this.xpos + this.speed;

    };

    this.display = function() {
        arc(this.xpos, this.ypos, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);

        ellipse(this.xpos, this.ypos, this.eyeDiam, this.eyeDiam);

    };

    this.brake = function() {
        if (this.speed > 0) {
            this.speed = this.speed - 0.3;
        } else {
            this.speed = 0;
        }

    };
}
