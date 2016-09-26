var option = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(141, 223, 210);
  var density = map(mouseX, 0, width, 20, 50);

   if (option == 1) {
     noFill();
    // Option 4:  arcs
    var count = 500;
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y+=density) {
        var s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }


  else if (option == 2){
  // Option 5: colors

      for (var y = 0; y < height+10; y += 20) {
          for (var x = 0; x < width+10; x += 20) {
            fill(random(255), random(255), random(255));
            var d = 20;
            ellipse (x + y, y, d, d);
        }
      }
  }
}




function mousePressed() {
  option++;
  if (option > 2) option = 1;
}
