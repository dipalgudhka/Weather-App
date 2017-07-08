var weather;
var celc;
var faren;
var alter;
var img;
var destination;

var x = 0;


function setup(){
    createCanvas(displayWidth, displayHeight);
    loadJSON('https://api.apixu.com/v1/current.json?key=f66834c01234456281983544170801&q=auto:ip', gotData);
    // imageMode(CORNER);
    // image(img, 10, 10, 50, 50);

}

function gotData (data) {
  weather = data;
  celc = weather.current.temp_c;
  faren = weather.current.temp_f;
  alter = celc + ' \xB0C';
  img = loadImage('assets/' + weather.current.condition.text + '.svg');
  //print(faren);
}


function draw() {
  
  background(255);
  
  if (weather) {
    
    image(img, 70, 70);
    
    textSize(30)
    text(weather.location.name + ', ' + weather.location.country, 10, 30)
    
    textSize(40)
    text(alter, 30, 70)
    
    textSize(20)
    text(weather.current.condition.text, 180, 70)
    
    textSize(15)
    text('made with p5.js', 70, 400)

  }
  
  noLoop();
  
}

function mousePressed() {
  if (alter == celc + ' \xB0C') {
    alter = faren + ' \xB0F';
  }
  else {
    alter = celc + ' \xB0C';
  }
}
