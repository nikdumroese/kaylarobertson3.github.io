//var pacman;
var pacArray = [];
var numPacman = 10;

function setup()
{
  createCanvas(800, 600);

  // create multiple pacman
  for(var i = 0; i < numPacman; i++)
 {
   pacArray[i] = new Pacman();
 }

}

function draw()
{
  background(140, 245, 246);


for (var i = 0; i < pacArray.length; i++) {
  pacArray[i].move();
}

}
