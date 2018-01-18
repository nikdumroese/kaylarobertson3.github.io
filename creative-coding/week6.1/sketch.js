// define an object
var carArray = [];
// var car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create object

  for (var i = 0; i < 10; i++) {
    carArray.push(new Car(random(256),random(256),random(256)));
  }

  // car = new Car(random(256),random(256),random(256));


}

function draw() {
  background(145, 240, 149);

  // car.move();
  // car.display();

  for (var i = 0; i < carArray.length; i++) {
    carArray[i].display();
    carArray[i].move();
  }
}
