var pacman;

function setup() {
    createCanvas(800, 400);
    background(140, 245, 246);

    pacman = new Pacman;
  //  for (var i = 0; i < 5; i++) {
        //pacman[i] = new Pacman();
    //}
}

function draw() {
    for (var i = 0; i < pacman.length; i++) {
        pacman[i].move();
        pacman[i].display();

    }
}
