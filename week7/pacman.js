/*
TODO:
5. awarness of other pacmen
framerate is time in p5
notes: random returns a float

The PacMan should never repeat the same direction it is already traveling.
"do while" loop

unit circle

random to do: open p5 sketch
  mess around with translate, rotate, and push pop

*/

// pacman construcor
function Pacman() {
    //this is the shape
    this.diam = 100;
    this.radius = this.diam / 2;
    this.combinedR = this.radius * 2;
    this.eyePos = this.diam / 2;
    this.eyeDiam = this.diam / 2;
    this.mouthAngle = (1 / 7);
    this.mouthChange = 1 / 128;

    // pos and movement
    this.xpos = random(width);
    this.ypos = random(height);
    this.direction = 0;
    this.change = 1;

    // i don't know what these are
    this.speedX = 0;
    this.speedY = 0;
    this.counter = 0;
    this.maxTime = 10;
    this.c = color("yellow");
}
//ends

// everything goes here
Pacman.prototype.update = function() {
    // call the other functions
    this.move();
    this.display();
    this.timer();
};
// ends update



// move function
Pacman.prototype.move = function() {

    // boundary check on walls
    if (this.xpos > width - this.radius) {
        this.speedX = 0;
        this.xpos = width - this.radius - 2;
    } else if (this.xpos < 0 + this.radius) {
        this.speedX = 0;
        this.xpos = 0 + this.radius + 2;
    } else if (this.ypos > height - this.radius) {
        this.speedY = 0;
        this.ypos = height - this.radius - 2;
    } else if (this.ypos < 0 + this.radius) {
        this.speedY = 0;
        this.ypos = 0 + this.radius + 2;
    }
    // text( this.xpos, 20, 10);
    // text( this.ypos, 20, 20);
    // text( this.speedX, 20, 30);
    // text( this.speedY, 20, 40);
    // end boundary check


    //mouth movement
    this.mouthAngle = this.mouthAngle + this.mouthChange;
    if (this.mouthAngle > (1 / 7)) {
        this.mouthChange = -this.mouthChange;
        this.mouthAngle = (1 / 7);
    }
    if (this.mouthAngle < 0.01) {
        this.mouthChange = -this.mouthChange;
        this.mouthAngle = 0.03;
    }
    //end mouth movement

    //update pacman position
    this.xpos = this.xpos + this.speedX;
    this.ypos = this.ypos + this.speedY;
    //end update position
};
// end movement


// display function
Pacman.prototype.display = function() {

    push();
    translate(this.xpos, this.ypos);

    if (this.direction === 0) {
      //do nothing
    } else if (this.direction === 1) {
      rotate(PI * 0.5);
    } else if (this.direction === 2) {
      scale(-1,1);
    } else if (this.direction === 3) {
      rotate(-PI * 0.5);
    }

    fill(this.c);
    noStroke();
    arc(0,0, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);

    fill("black");
    ellipse(0, -24, 15, 15);

    pop();


};
//end diplay function

//start timer function
Pacman.prototype.timer = function() {
    if (this.counter > this.maxTime) {
        this.counter = 0;
        this.changeDir();
        this.maxTime = random(4 * frameRate());
    } else {
        this.counter++;
    }
};
//end timer


//start change direction function — called from timer funciton
Pacman.prototype.changeDir = function() {
    var r;

    do {
      r = int(random(4));
    } while (r === this.direction);

    this.direction = r;
    //East
    if (this.direction === 0) {
        this.speedX = random(10);
        this.speedY = 0;
    } else if (this.direction === 1) {
        this.speedX = 0;
        this.speedY = random(10);
    } else if (this.direction === 2) {
        this.speedX = random(-10);
        this.speedY = 0;
    } else if (this.direction === 3) {
        this.speedX = 0;
        this.speedY = random(-10);
    }
};
//end changeDir
