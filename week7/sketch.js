//var pacman;
var pacArray = [];
var numPacman = 15;

function setup()
{
  createCanvas(windowWidth, windowHeight);

  // create multiple pacman
  for(var i = 0; i < numPacman; i++)
 {
   pacArray[i] = new Pacman();
 }

}
function draw()
{
  background(11, 86, 98);


for (var i = 0; i < pacArray.length; i++) {
  pacArray[i].update();
}
}
