var pacman;

function setup()
{
  createCanvas(windowWidth, windowHeight);

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

function mousePressed()
{
  pacman.xpos = 0;
  pacman.speed = 2;
}
