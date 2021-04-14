var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('19thFloor-BobbyRichards.mp3');
}

function setup() {
  createCanvas(200,200);

  button = createButton('toggle')
  button.mousePressed(toggleSong);
  
  amp = new p5.Amplitude();

  song.play();
}

function draw() {
  background(0);

  var vol = amp.getLevel();
  volhistory.pushState(vol);

  ellipse(100,100,200,vol*200);
  fill(255);
  console.log(vol);
}