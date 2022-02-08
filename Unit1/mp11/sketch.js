let cat, cat2; // Declare object
let font1, font2;

function setup() {
  createCanvas(1000, 400);
  font1 = loadFont("assets/quiteMagical.ttf");
  font2 = loadFont("assets/whoAsksSatan.ttf");
  // Create object
  cat = new Jitter();
  cat2 = new Jitter2();
}

function draw() {
  textSize(42);
  background(50, 89, 100);
  if (mouseIsPressed) {
    background('darkblue');
    cat2.move();
    cat2.display();
    fill('White');
    textFont(font1);
    //  textWrap(WORD);
    text("When I sleep the world also sleeps, I can regain my full power.", 50, 50);
    text("I await the next day the Ratspawn come.", 200, 80);
    // draw ground
    //noStroke();
    fill(0, 10, 20);
    rect(0, height * 0.6, width, height);
    fill('White');

    // draw lake
    //noStroke();
    fill(0, 20, 60);
    ellipse(0, height, width * 2.5, height * 0.75);
    fill('White');

  } else {
    background('darkred');
    cat.move();
    cat.display();
    fill('White');
    textFont(font2);
    //textWrap();
    text("I am the cat lord, Gatsaban. My enemy are the evil Ratspawn.", 20, 50);
    text("I have the power to summon the will of my kind to fight them back.", 20, 80);
    // Grass
    fill(35, 184, 36);
    rect(0, 320, 1000, 80);
//https://editor.p5js.org/vrironman0009/sketches/p5-zdH8Wl Castle found here
    // Front
    //stroke(0);
    fill(175); // gray
    rect(125,260,20,20);
    rect(155,260,20,20);
    rect(185,260,20,20);
    rect(217,260,20,20);
    rect(250,260,20,20);
    rect(100,270,200,10);
    rect(100, 280, 200, 90);

    //front bricks
    rect(120,280,25,10);
    rect(145,280,25,10);
    rect(170,280,25,10);
    rect(195,280,25,10);
    rect(220,280,25,10);
    rect(245,280,25,10);
    rect(270,280,10,10);
    rect(130,290,25,10);
    rect(155,290,25,10);
    rect(180,290,25,10);
    rect(205,290,25,10);
    rect(230,290,25,10);
    rect(255,290,25,10);
    rect(120,290,10,10);
    rect(120,300,25,10);
    rect(145,300,25,10);
    rect(170,300,25,10);
    rect(195,300,25,10);
    rect(220,300,25,10);
    rect(245,300,25,10);
    rect(270,300,10,10);
    rect(130,310,25,10);
    rect(155,310,25,10);
    rect(180,310,25,10);
    rect(205,310,25,10);
    rect(230,310,25,10);
    rect(255,310,25,10);
    rect(120,310,10,10);
    rect(120,320,25,10);
    rect(145,320,25,10);
    rect(170,320,25,10);
    rect(195,320,25,10);
    rect(220,320,25,10);
    rect(245,320,25,10);
    rect(270,320,10,10);
    rect(130,330,25,10);
    rect(155,330,25,10);
    rect(180,330,25,10);
    rect(205,330,25,10);
    rect(230,330,25,10);
    rect(255,330,25,10);
    rect(120,330,10,10);
    rect(120,340,25,10);
    rect(145,340,25,10);
    rect(170,340,25,10);
    rect(195,340,25,10);
    rect(220,340,25,10);
    rect(245,340,25,10);
    rect(270,340,10,10);
    rect(130,350,25,10);
    rect(155,350,25,10);
    rect(180,350,25,10);
    rect(205,350,25,10);
    rect(230,350,25,10);
    rect(255,350,25,10);
    rect(120,350,10,10);
    rect(120,360,25,9);
    rect(145,360,25,9);
    rect(170,360,25,9);
    rect(195,360,25,9);
    rect(220,360,25,9);
    rect(245,360,25,9);
    rect(270,360,10,9);




    //castle tower bumps
    rect(20,275,15,15);
    rect(40,275,15,15);
    rect(60,275,15,15);
    rect(323,275,15,15);
    rect(343,275,15,15);
    rect(362,275,15,15);

    // Towers
    rect(20, 280, 50, 90);
    rect(330, 280, 50,90);

    //tower brick
    rect(20,280,25,10);
    rect(45,280,25,10);
    rect(20,290,12.5,10);
    rect(32.5,290,25,10);
    rect(56,290,12.5,10);
    rect(20,300,25,10);
    rect(45,300,25,10);
    rect(20,310,12.5,10);
    rect(32.5,310,25,10);
    rect(56,310,12.5,10);
    rect(20,320,25,10);
    rect(45,320,25,10);
    rect(20,330,12.5,10);
    rect(32.5,330,25,10);
    rect(56,330,12.5,10);
    rect(20,340,25,10);
    rect(45,340,25,10);
    rect(20,350,12.5,10);
    rect(32.5,350,25,10);
    rect(56,350,12.5,10);
    rect(20,360,25,10);
    rect(45,360,25,10);

    rect(330,280,25,10);
    rect(355,280,25,10);
    rect(330,290,12.5,10);
    rect(342.5,290,25,10);
    rect(367.5,290,12.5,10);
    rect(330,300,25,10);
    rect(355,300,25,10);
    rect(330,310,12.5,10);
    rect(342.5,310,25,10);
    rect(367.5,310,12.5,10);
    rect(330,320,25,10);
    rect(355,320,25,10);
    rect(330,330,12.5,10);
    rect(342.5,330,25,10);
    rect(367.5,330,12.5,10);
    rect(330,340,25,10);
    rect(355,340,25,10);
    rect(330,350,12.5,10);
    rect(342.5,350,25,10);
    rect(367.5,350,12.5,10);
    rect(330,360,25,10);
    rect(355,360,25,10);



    //Tower2
    rect(70,270,50,100);
    rect(280,270,50,100);

    //bricks of towers
    rect(70,270,25,15);
    rect(95,270,25,15);
    rect(70,285,12.5,10);
    rect(82,285,25,10);
    rect(106.5,285,12.5,10);
    rect(70,295,25,10);
    rect(95,295,25,10);
    rect(70,305,12.5,10);
    rect(82,305,25,10);
    rect(106.5,305,12.5,10);
    rect(70,315,25,10);
    rect(95,315,25,10);
    rect(70,325,12.5,10);
    rect(82,325,25,10);
    rect(106.5,325,12.5,10);
    rect(70,335,25,10);
    rect(95,335,25,10);
    rect(70,345,12.5,10);
    rect(82,345,25,10);
    rect(106.5,345,12.5,10);
    rect(70,355,25,10);
    rect(95,355,25,10);
    rect(70,365,12.5,5)
    rect(82,365,25,5);
    rect(106.5,365,12.5,5)
    rect(280,270,25,15);
    rect(305,270,25,15);
    rect(280,285,12.5,10);
    rect(292.5,285,25,10);
    rect(317.5,285,12.5,10);
    rect(280,295,25,10);
    rect(305,295,25,10);
    rect(280,305,12.5,10);
    rect(292.5,305,25,10);
    rect(317.5,305,12.5,10);
    rect(280,315,25,10);
    rect(305,315,25,10);
    rect(280,325,12.5,10);
    rect(292.5,325,25,10);
    rect(317.5,325,12.5,10);
    rect(280,335,25,10);
    rect(305,335,25,10);
    rect(280,345,12.5,10);
    rect(292.5,345,25,10);
    rect(317.5,345,12.5,10);
    rect(280,355,25,10);
    rect(305,355,25,10);
    rect(280,365,12.5,5)
    rect(292.5,365,25,5);
    rect(317.5,365,12.5,5);






    //castle rooms
    rect(75,210,40,60);
    rect(285,210,40,60);
    triangle(285,210,305,160,325,210);
    triangle(75,210,95,160,115,210);


    //room bricks
    //stroke(0);
    fill(175);
    rect(75,210,20,10);
    rect(95,210,20,10);
    rect(75,220,10,10);
    rect(85,220,20,10);
    rect(105,220,10,10);
    rect(75,230,20,10);
    rect(95,230,20,10);
    rect(75,240,10,10);
    rect(85,240,20,10);
    rect(105,240,10,10);
    rect(75,250,20,10);
    rect(95,250,20,10);
    rect(75,260,10,10);
    rect(85,260,20,10);
    rect(105,260,10,10);

    rect(285,210,20,10);
    rect(305,210,20,10);
    rect(285,220,10,10);
    rect(295,220,20,10);
    rect(315,220,10,10);
    rect(285,230,20,10);
    rect(305,230,20,10);
    rect(285,240,10,10);
    rect(295,240,20,10);
    rect(315,240,10,10);
    rect(285,250,20,10);
    rect(305,250,20,10);
    rect(285,260,10,10);
    rect(295,260,20,10);
    rect(315,260,10,10);

    //room windows
    //noStroke();
    fill("black");
    arc(95, 235,12,30, PI, 0);
    arc(305,235,12,30,PI,0);
    arc(32,305,12,30,PI,0);
    arc(57,305,12,30,PI,0);
    arc(45.5,345,12,30,PI,0);
    arc(342,305,12,30,PI,0);
    arc(367,305,12,30,PI,0);
    arc(355.5,345,12,30,PI,0);
    arc(95,320,20,50,PI,0);
    arc(305,320,20,50,PI,0);
    arc(155,307,19,40,PI,0);
    arc(245,307,19,40,PI,0);

    //flags
    fill(207, 21, 67);
    //stroke(0);
    rect(95,144,10,15);
    rect(105,148,9,13);
    triangle(115,153,125,156.5,115,160);
    rect(305,144,10,15);
    rect(315,148,9,13);
    triangle(325,153,335,156.5,325,160);


    // Platforms
    fill("red");
    rect(70, 265, 50, 10);
    rect(280,265, 50, 10);

    // Door
    //noStroke();
    fill(140, 80, 0);
    ellipse(200, 335, 36);
    rect(182, 335, 36, 35);
    fill(51, 39, 6);
  //  stroke(0);
    ellipse(190,345,10);

    // Sun
    fill(255, 255, 0);
    ellipse(720, 200, 80);
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = 450;
    this.y = 100;
    this.diameter = random(10, 15);
    this.speed = .3;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill('white');
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
class Jitter2 {
  constructor() {
    this.x = 500;
    this.y = 180;
    this.diameter = random(10, 15);
    this.speed = .3;
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
    ellipse(this.x + 60, this.y + 40, 10, 1);
    ellipse(this.x + 40, this.y + 40, 10, 1);
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
