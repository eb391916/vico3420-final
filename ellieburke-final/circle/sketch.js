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
    song = loadSound('MirrorMind-BobbyRichards.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  //button = createButton('Play/Pause')
  //button.mousePressed(toggleSong);
  
  amp = new p5.Amplitude();

  song.play();
}

function draw() {
  background(0);

  var vol = amp.getLevel();
  volhistory.push(vol);
  
  stroke(255);
  noFill();

  translate(width/2, height/2);
  beginShape();

  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10,100);
    var x = r * cos(i);
    var y = r * sin(i);
    
    //var y = map(volhistory[i],0,1,10,100);
    
    vertex(x,y);
  }
  
  endShape();
  
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}