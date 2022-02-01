let axe;
let crossbow;
let shield;

function setup() {
  createCanvas(1000, 1000);

  axe = loadImage('assets/axe.png');
  crossbow = loadImage('assets/crossbow.png');
  shield = loadImage('assets/shield.png');
}

function draw() {
  image(crossbow, 200, 200, 400, 400) ;
  image(axe, 100, 100, 400, 400) ;
  image(shield, 400, 200, 200, 200) ;
}
