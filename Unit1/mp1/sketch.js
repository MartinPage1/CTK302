let font1, font2;
let cat;

function setup() {
  createCanvas(800, 800);
  font1 = loadFont("assets/quiteMagical.ttf");
  font2 = loadFont("assets/whoAsksSatan.ttf");
  //rectMode(CENTER);
  cat = new Jitter();
}

function draw() {
  textSize(80);
  if (mouseIsPressed) {
    background('darkblue');

    fill('White');
    textFont(font2);
    text("I am the cat lord, Gatsaban. My enemy is the ", 20, 100);

    // body
    ellipse(70, 60, 70, 50);
    // ears
    triangle(58, 25, 72, 34, 80, 10);
    triangle(42, 25, 28, 34, 20, 10);

    // head
    ellipse(50, 50, 60, 60);
    ellipse(60, 40, 10, 1);
    ellipse(40, 40, 10, 1);
    ellipse(50, 60, 15, 5);

    // right whiskers
    line(70, 50, 90, 50);
    line(70, 45, 90, 37);
    line(70, 55, 90, 63);
    // left whiskers
    line(30, 50, 10, 50);
    line(30, 45, 10, 37);
    line(30, 55, 10, 63);

  } else {
    background('#2D936C');

    fill('red');
    textFont(font1);
    text("How are ya?", width / 2, 200);
    fill('white');
    cat.move();
    cat.display();
    // body
    ellipse(70, 60, 70, 50);
    // ears
    triangle(58, 25, 72, 34, 80, 10);
    triangle(42, 25, 28, 34, 20, 10);

    // head
    ellipse(50, 50, 60, 60);
    ellipse(60, 40, 10, 10);
    ellipse(60, 40, 4, 10);
    ellipse(40, 40, 10, 10);
    ellipse(40, 40, 4, 10);
    ellipse(50, 60, 15, 5);

    // right whiskers
    line(70, 50, 90, 50);
    line(70, 45, 90, 37);
    line(70, 55, 90, 63);
    // left whiskers
    line(30, 50, 10, 50);
    line(30, 45, 10, 37);
    line(30, 55, 10, 63);
  }

  rect(width / 2, height / 2, 200, 100);

}
class Jitter() {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x + 70, this.y + 60, 70, 50);
    // ears
    triangle(this.x + 58, this.y + 25, this.x + 72, this.y + 34, this.x + 80, this.y + 10);
    triangle(this.x + 42, this.y + 25, this.x + 28, this.y + 34, this.x + 20, this.y + 10);

    // head
    ellipse(this.x + 50, this.y + 50, 60, 60);
    ellipse(this.x + 60, this.y + 40, 10, 10);
    ellipse(this.x + 60, this.y + 40, 4, 10);
    ellipse(this.x + 40, this.y + 40, 10, 10);
    ellipse(this.x + 40, this.y + 40, 4, 10);
    ellipse(this.x + 50, this.y + 60, 15, 5);

    // right whiskers
    line(this.x + 70, this.y + 50, this.x + 90, this.y + 50);
    line(this.x + 70, this.y + 45, this.x + 90, this.y + 37);
    line(this.x + 70, this.y + 55, this.x + 90, this.y + 63);
    // left whiskers
    line(this.x + 30, this.y + 50, this.x + 10, this.y + 50);
    line(this.x + 30, this.y + 45, this.x + 10, this.y + 37);
    line(this.x + 30, this.y + 55, this.x + 10, this.y + 63);
  }
}
