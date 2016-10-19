var pacman;

function setup()
{
  createCanvas(800, 600);

  // create the pacman
  pacman = new Pacman();
}

function draw()
{
  background(140, 245, 246);


  // drive car
  pacman.move();

  // display the car
  pacman.display();
}
