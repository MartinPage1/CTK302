let state = 0;
let timer = 0;
let pic1;
let pic2;
let pic3;

function setup() {
  createCanvas(800, 800);
  pic1 = loadImage('images/AngelBunny.png');
  pic2 = loadImage('images/MysticCat.png');
  pic3 = loadImage('images/SuitCat1.png');
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      text("0", 100, 100);
      image(pic1, 200, 200, 400, 400);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      text("1", 100, 100);
      image(pic2, 200, 200, 400, 400);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("red");
      text("2", 100, 100);
      image(pic3, 200, 200, 400, 400);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
