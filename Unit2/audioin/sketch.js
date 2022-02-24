var mic;
var vol = 0;
var approachingVol = 0;

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("blue");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // make a "gradual" easing variable that approaches the original vol
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(18);
  fill('white');
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3) +
      "\nApproaching Vol = " +
      approachingVol.toFixed(3),
    10,
    60
  );

  // this moves that first box
//  x = map(vol, 0, theLoudestItGets, 0, width);
//  ellipse(x+25, 200, 50, 50);

  // use y for your "gradual" variable!
//  y = map(approachingVol, 0, theLoudestItGets, 0, width);
//  ellipse(y+25, 270, 50, 50);


  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      text("Quiet", 100, 350);
      // this moves that first box
      fill("white");
      x = map(vol, 0, theLoudestItGets, 0, width);
      ellipse(x+25, 200, 50, 50);

      // use y for your "gradual" variable!
      y = map(approachingVol, 0, theLoudestItGets, 0, width);
      ellipse(y+25, 270, 50, 50);
      break;
    case 1:
      text("Getting loud", 100, 350);
      //background("yellow");
      // this moves that first box
      fill("pink");
      x = map(vol, 0, theLoudestItGets, 0, width);
      ellipse(x+25, 200, 50, 50);

      // use y for your "gradual" variable!
      y = map(approachingVol, 0, theLoudestItGets, 0, width);
      ellipse(y+25, 270, 50, 50);
      break;
    case 2:
      text("Yelling", 100, 350);
      //background("gray");
      // this moves that first box
      fill("red");
      x = map(vol, 0, theLoudestItGets, 0, width);
      ellipse(x+25, 200, 50, 50);

      // use y for your "gradual" variable!
      y = map(approachingVol, 0, theLoudestItGets, 0, width);
      ellipse(y+25, 270, 50, 50);
      break;
    default:
      text("Explosion", 100, 350);
      //background("purple");
      fill("darkred");
      x = map(vol, 0, theLoudestItGets, 0, width);
      ellipse(x+25, 200, 50, 50);

      // use y for your "gradual" variable!
      y = map(approachingVol, 0, theLoudestItGets, 0, width);
      ellipse(y+25, 270, 50, 50);
      break;
  }
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
