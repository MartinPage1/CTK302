let font1, font2;

function setup() {
  createCanvas(500, 500);

  font1 = loadFont("assets/quiteMagical.ttf");
  font2 = loadFont("assets/whoAsksSatan.ttf");
  textAlign(CENTER);

}

function draw() {
  background (100);
  textSize(80);
  fill('White');
  textFont(font1);
  text("Hello.", width/2, 100);

  fill('red');
  textFont(font2);
  text("How are ya?", width/2, 200);

}
