//var pacman;
var pacmans = [];
var numPacman = 12;

function setup()
{
  createCanvas(800, 600);

  // create the pacman
  pacmans = new Pacman();

  // create multiple pacman
  for(var i = 0; i < numPacman; i++)
 {
   pacmans[i] = new Pacman();
 }

}

function draw()
{
  background(140, 245, 246);

  // drive car
  pacmans.move();

  // display the pacman
  pacmans.display();
}
