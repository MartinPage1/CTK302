var bubbles = [];
let url = '';
let sunny, cloudy, rainy, snowy;

function setup() {
//https://www.google.com/url?q=https://forms.gle/jMPcNYRbVmEoyeqr7&sa=D&source=editors&ust=1649353177610819&usg=AOvVaw3tOvRCtThom-H5dboED50M
  let key = '1Gi_cxbKmyjmMPyO1EaBVyXxIetF8lgV_lWAYxxy8fZ0'; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(1000, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  textFont("Georgia");

  sunny = loadImage('assets/sunny.jpg');
  cloudy = loadImage('assets/cloudy.png');
  rainy = loadImage('assets/rainy.png');
  snowy = loadImage('assets/snowy.png');
}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(
      data[i]["Name"],
      data[i]["What is your preferred weather from this list?"],
      data[i]["What is your preferred season from this list?"])); // THESE Name and Shape MUST match column names in your spreadsheet!
  }

}


function draw() {
  background('lightblue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    //bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myShape, mySeason) {
    this.name = myName;
    this.shape = myShape;
    this.season = mySeason;
    this.pos = createVector(random(width), random(height));
    if (this.shape == "Sunny") {
      this.vel = createVector(random(2, 5), 0);
    } else if (this.shape == "Cloudy") {
      this.vel = createVector(random(2, 5), 0);
    } else if (this.shape == "Rainy") {
      this.vel = createVector(0, random(2, 5));
    } else if (this.shape == "Snowy") {
      this.vel = createVector(0, random(2, 5));
    }
  }


  display() {
    if (this.shape == "Sunny") {
      image(sunny, this.pos.x, this.pos.y, 100, 100);
    } else if (this.shape == "Cloudy") {
      image(cloudy, this.pos.x, this.pos.y, 120, 100);
    } else if (this.shape == "Rainy") {
      image(rainy, this.pos.x, this.pos.y, 100, 100);
    } else if (this.shape == "Snowy") {
      image(snowy, this.pos.x, this.pos.y, 100, 100);
    }

    text(this.name, this.pos.x + 50, this.pos.y + 50);
    text(this.season, this.pos.x + 50, this.pos.y + 65);
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y > height) this.pos.y = 0;
  }


}
