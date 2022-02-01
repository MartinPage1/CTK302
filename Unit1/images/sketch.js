  let axe, crossbow, shield;

function setup() {
  createCanvas(500, 500);
  axe = loadImage(“assets/Axe.png”) ;
  crossbow = loadImage(“assets/Crossbow.png”) ;
  shield = loadImage(“assets/Shield.png”) ;

}

function draw() {
  image(axe, width / 2, 100, 400, 400) ;
  image(crossbow, width / 2, 200, 400, 400) ;
  image(shield, width / 2, 300, 400, 400) ;
}
