let state = 0;

function setup() {
  createCanvas(800, 200);
  textAlign(CENTER, CENTER);
  //rectMode(CENTER);
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
  push();
  fill("purple");
  rect(50, 50, 100, 100);
  textSize(20)
  fill('white');
  text('Push Me!', 100, 100);
  pop();
}

function mouseReleased() {
  if ((mouseX > 50) && (mouseX < 150) && (mouseY > 50) && (mouseY < 150)) {
    state = (state + 1) % 2;
  }


}
