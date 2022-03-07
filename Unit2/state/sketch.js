let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      for (let lineX = 3; lineX <= 400; lineX += 3) {
        line(lineX, 0, lineX, height);
      }
      text("0", 100, 100);
      break;

    case 1:
      background("blue");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 20, j * 20, 12, 12);
        }
      }
      text("1", 100, 100);
      break;

    case 2:
      background("green");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 21, j * 20, 12, 12);
        }
      }
      text("2", 100, 100);
      break;

    case 3:
      background("red");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 20, j * 20, 1, 2);
        }
      }
      text("3", 100, 100);
      break;

    case 4:
      background("purple");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 20, j * 20, 22, 22);
        }
      }
      text("4", 100, 100);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
