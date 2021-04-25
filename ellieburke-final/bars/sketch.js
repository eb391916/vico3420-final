var song;
var fft;
var button;

var volhistory = [];
var w;

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('Muriel-BobbyRichards.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);

  //button = createButton('Stop/Restart')
  //button.mousePressed(toggleSong);

  song.play();
  
  
  fft = new p5.FFT(0.7,64);
  w = width / 64;
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp,0,256,height,0);
    fill(255);
    rect(i*w, y, w - 2, height - y);
  }
  //console.log(spectrum.length);
  
  stroke(255);
  noFill();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}