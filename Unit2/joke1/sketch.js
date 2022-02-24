let state = 0;

function setup() {
  createCanvas(500, 300);
  textAlign(CENTER);
  rectMode(CENTER);
  textFont("Georgia")
}

function draw() {
  textSize(28);
  switch (state) {
    case 0:
      background('grey');
      fill('white');
      text("Why did the chicken cross the road?", width / 2, height / 2);
      break;
    case 1:
      background('red');
      text("I don't know, I'm asking you!", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  state = (state + 1) % 2;
}
