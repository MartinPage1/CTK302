let state = 0;
let timer = 0;
let x = 0;
let velocity = 10;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background("white");
  fill("Yellow");
  rect(width / 2, height / 2, 200, 600);

  //car
  fill('green');
  rect(x, 750, 75, 30);
  fill('darkgreen');
  rect(x+15, 750, 15, 25)
  x = x + velocity;
  if (x > width) {
    x = 0;
  }

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) {
      state = 0;
    }
  }

  switch (state) {
    case 0:
      fill("red");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("gray");
      ellipse(width / 2, height / 2, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      if (x > 400) {
        velocity = 15;
      } else if (x > 200) {
        velocity = 0;
      } else {
        velocity = 10;
      }
      break;
    case 1:
      fill("gray");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2, 150, 150);
      fill("lightgreen");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10;
      break;
    case 2:
      fill("grey");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("yellow");
      ellipse(width / 2, height / 2, 150, 150);
      fill("gray");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 5;
      break;
  }

}
