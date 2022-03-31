//https://editor.p5js.org/nyxtom/sketches/PdfVfmohi basis for background tiles
let cash = [];
let catPos;
let state = 0;
let timer = 0;
let maxcash = 15;
let maxTimer = 60;
let score = 0;
let suitCat;
let rishSuitCat;
let diamonds;
let song;
let song2;

const tileSize = 16;
const noiseScale = 0.1;
const speed = 5;
const buffer = 10;
const images = [];

var x = 0;
var y = 0;
var w = 0;
var h = 0;
var xRO = 0;
var yRO = 0;
var xTO = 0;
var yTO = 0;

const tiles = [];

function preload() {

  song = loadSound('assets/cyberSong.mp3');
  song2 = loadSound('assets/deflector.mp3');

  images.push(loadImage('assets/water.png'));
  images.push(loadImage('assets/sand.png'));
  images.push(loadImage('assets/grass.png'));
  images.push(loadImage('assets/forest.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects
  for (let i = 0; i < maxcash; i++) {
    cash.push(new Cash());
  }
  suitCat = createImg('assets/SuitCat.gif');
  diamonds = loadImage('assets/diamond.png');
  richSuitCat = loadImage('assets/SuitCatRich.png');
  song.play();
  song.setVolume(0.1);
  catPos = createVector(width / 2, height - 100);
  w = width / tileSize + buffer;
  h = height / tileSize + buffer;

  noStroke();
  colorMode(HSB);
  drawTerrain();
}

function draw() {
  switch (state) {
    case 0:
      song2.stop();
      background("grey");
      drawTerrain();
      update();
      stroke('rgb(0,255,0)');
      strokeWeight(4);
      text("Help Suitcat collect funds for his Country's operation!", 100, 100);
      suitCat.position(180, 180);
      suitCat.play;
      break;
    case 1:
      song.stop();
      song2.play();
      song2.setVolume(0.1);
      state = 2;
      break;
    case 2:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 5;
      }
      break;

    case 3:
      song2.stop();
      song.play();
      song.setVolume(0.1);

      for (let i = 0; i < maxcash+50; i++) {
        cash.push(new Cash());
      }
      state = 4;
      break;
    case 4: // win!
      background("darkblue");
      image(richSuitCat, 110, 100, 660, 500);
      //drawTerrain();
      //update();
      for (let i = 0; i < cash.length; i++) {
        cash[i].display();
        cash[i].move();

        if (cash[i].pos.dist(catPos) < 50) {
          cash.splice(i, 1);
          score++;
        }
      }
      text("You did it! He can now afford some things!", 100, 100);
      break;

    case 5: // lose
      background("darkred");
      //drawTerrain();
      //update();
      text("Uh oh, he didn't meet his deadline.", 100, 100);
      break;
  }

  fill("black");
  textSize(24);
  text("Cash = $" + score + "00.00!", 30, 30);
}

function update() {
  if (keyIsPressed) {
    checkKey(key);
  }
}

function game() {
  background("white");

  drawTerrain();
  update();
  for (let i = 0; i < cash.length; i++) {
    cash[i].display();
    cash[i].move();

    if (cash[i].pos.dist(catPos) < 50) {
      cash.splice(i, 1);
      score++;
    }
  }

  if (cash.length == 0) {
    state = 3;
  }
  suitCat.position(catPos.x, catPos.y);
  checkForKeys();

}

class Cash {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector(random(-6, 6), random(-6, 6));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  // methods

  display() {
    fill("Lightgreen");
    rect(this.pos.x, this.pos.y, 75, 25);
    fill("black");
    text("$", this.pos.x + 5, this.pos.y + 20);
    text("$", this.pos.x + 55, this.pos.y + 20);
    image(diamonds, this.pos.x + 28, this.pos.y + 5, 15, 15);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(65)) {
    catPos.x -= 5;
    if (catPos.x < 0) catPos.x = width;
  }
  if (keyIsDown(68)) {
    catPos.x += 5;
    if (catPos.x > width) catPos.x = 0;
  }
  if (keyIsDown(87)) {
    catPos.y -= 5;
    if (catPos.y < 0) catPos.y = height;
  }
  if (keyIsDown(83)){
     catPos.y += 5;
    if (catPos.y > height) catPos.y = 0;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 4: // win state
      resetTheGame();
      state = 0;

      break;

    case 5: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cash = [];

  // Spawn objects
  for (let i = 0; i < maxcash; i++) {
    cash.push(new Cash());
  }
}

function checkKey(key) {
  if (key == ' ') {
    noiseSeed(millis());
    drawTerrain();
  }
  if (key === 'w') {
    y -= speed;
  }
  if (key === 's') {
    y += speed;
  }
  if (key === 'a') {
    x -= speed;
  }
  if (key === 'd') {
    x += speed;
  }
}

function drawTerrain() {
  xRO = x % tileSize;
  yRO = y % tileSize;
  xTO = parseInt(x / tileSize);
  yTO = parseInt(y / tileSize);
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      tiles[i + j * w] = getTile(i, j);
    }
  }

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      image(tiles[i + j * w], (i - buffer / 2) * tileSize - xRO, (j - buffer / 2) * tileSize - yRO, tileSize, tileSize);
    }
  }
}

function getTile(x, y, terrainScales) {
  let v = noise((xTO + x) * noiseScale, (yTO + y) * noiseScale);
  let scales = [0.4, 0.5, 0.7, 1];
  for (let i = 0; i < scales.length; i++) {
    let terrainScale = scales[i];
    if (v <= terrainScale) {
      return images[i];
    }
  }
}
