let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textFont("Georgia")
}

function draw() {
  textSize(28);
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state = (state + 1) % 2;
  }
  switch (state) {
    case 0:
      background('blue');
      fill('white');
      text("What did the shark say when he ate the clownfish?", width / 2, height / 2);
      break;
    case 1:
      background('darkorange');
    //  fill("");
      text("This tastes a little funny.", width / 2, height / 2);
      break;
  }
}
