
var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=missoula,usa&cnt=10&mode=json&APPID=35cb08cad8871256be495532f117b1ff";


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  // createCanvas(windowWidth, windowHeight);
  loadJSON(url, handleData);
}


function handleData(data) {
  console.log(data.list);


  for (var i=0; i<data.list.length; i++) {

    var numClouds = data.list[i].clouds;
    var humidity = data.list[i].humidity;
    var degrees = data.list[i].deg;
    // var temp = data.list[i].temperature;

    fill(0, 102, 153);
    text("Day " + i, i*50+200, 470);


    numClouds = map(numClouds, 0, 100, 10, 200);
    fill(47, 118, 153, numClouds);
    ellipse(i*50+200, height/2, degrees/2, degrees/2);
  }
}
