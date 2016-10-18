var bugs = [];
var cnv;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    // Create objects
    for (var i = 0; i < 5; i++) {
        bugs.push(new Pacman());
    }
}

function setup() {
    cnv = createCanvas(1050, 600);
    centerCanvas();
    background(140, 245, 246);
    
}

function windowResized() {
    centerCanvas();
}

function draw() {
    fill("Yellow");
    for (var i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
    }
}
