let state = 0;
let timer = 0;
let font1, font2;
let angelBun, magicBun, kingBun, knightBun, heroDog, presDog, princessDog, soldierDog, priestessCat, mysticCat, suitCat, tankCat, mysticFox, oldFox, ninjaFox, princessFox;
let hearts, diamonds, clubs, spades;


function setup() {
  createCanvas(1000, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  //fonts
  font1 = loadFont("assets/quiteMagical.ttf");
  font2 = loadFont("assets/whoAsksSatan.ttf");
  //The Suits
  angelBun = loadImage('images/AngelBunny.png');
  magicBun = loadImage('images/MagicBunny.png');
  knightBun = loadImage('images/RabbitKnight.png');
  kingBun = loadImage('images/KingRabit.png');
  mysticCat = loadImage('images/MysticCat.png');
  suitCat = loadImage('images/SuitCat1.png');
  tankCat = loadImage('images/CatTank.png');
  priestessCat = loadImage('images/CatPriestess.png');
  princessDog = loadImage('images/PrincessDog.png');
  heroDog = loadImage('images/HeroDog.png');
  presDog = loadImage('images/PresidentDog.png');
  soldierDog = loadImage('images/SoldierDog.png');
  mysticFox = loadImage('images/MysticFox.png');
  princessFox = loadImage('images/PrincessFox.png');
  oldFox = loadImage('images/OldFox.png');
  ninjaFox = loadImage('images/NinjaFox.png');
  hearts = loadImage('images/hearts.png');
  diamonds = loadImage('images/diamond.png');

  textFont(font1);
  stroke('#222222');
  strokeWeight(10);
}

function draw() {
  textSize(40);
  timer++;
  if (timer > 10 * 60) {
    timer = 0;
    state = (state + 1) % 9;
  }
  switch (state) {
    case 0:
      background('orange');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          image(hearts, i * 80, j * 40, 100, 100);
        }
      }
      fill('white');
      image(angelBun, 100, 200, 200, 200);
      text("The first of the Kingdom of Hearts was Theodoras the Angel.", width / 2, 100);
      textSize(30);
      text("10 second timer, or mouse click to cycle through story.", width / 2, 50);
      break;
    case 1:
      background('orange');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          image(hearts, i * 80, j * 40, 100, 100);
        }
      }
      fill('white');
      image(angelBun, 70, 200, 200, 200);
      image(magicBun, 230, 200, 200, 200);
      text("Theodoras was found by Rue, who befriended him with magic.", width / 2, 100);
      break;
    case 2:
      background('orange');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          image(hearts, i * 80, j * 40, 100, 100);
        }
      }
      fill('white');
      image(angelBun, 70, 200, 200, 200);
      image(magicBun, 230, 200, 200, 200);
      image(kingBun, 380, 180, 200, 220);
      text("The king Barnabas came to them and suggested peace amongst them.", width / 2, 100);
      break;
    case 3:
      background('orange');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          image(hearts, i * 80, j * 40, 100, 100);
        }
      }
      fill('white');
      image(angelBun, 70, 200, 200, 200);
      image(magicBun, 230, 200, 200, 200);
      image(kingBun, 380, 180, 200, 220);
      image(knightBun, 530, 180, 200, 220);
      text("With Zacharias, they chose to stand against the tyranny of the Foxes.", width / 2, 100);
      break;
    case 4:
      background('grey');
      for (let j = 0; j < 40; j++) {
        for (let i = 0; i < 400; i++) {
          image(diamonds, i * 50, j * 60, 80, 80);
        }
      }
      fill('white');
      image(mysticCat, 100, 200, 200, 200);
      text("Kingdom of Hearts ally, the Guild of Diamonds. Laplace, Lord of dreams;", width / 2, 100);
      break;
    case 5:
      background('grey');
      for (let j = 0; j < 40; j++) {
        for (let i = 0; i < 400; i++) {
          image(diamonds, i * 50, j * 60, 80, 80);
        }
      }
      fill('white');
      image(mysticCat, 70, 200, 200, 200);
      image(priestessCat, 280, 200, 200, 200);
      text("Founded by the benevolent Priestess of Luminous, Soarla, who sees all.", width / 2, 100);
      break;
    case 6:
      background('grey');
      for (let j = 0; j < 40; j++) {
        for (let i = 0; i < 400; i++) {
          image(diamonds, i * 50, j * 60, 80, 80);
        }
      }
      fill('white');
      image(mysticCat, 70, 200, 200, 200);
      image(priestessCat, 280, 200, 200, 200);
      image(suitCat, 430, 250, 150, 150);
      text("They were bankrolled by none other then the Lord Suitcat.", width / 2, 100);
      break;
    case 7:
      background('grey');
      for (let j = 0; j < 40; j++) {
        for (let i = 0; i < 400; i++) {
          image(diamonds, i * 50, j * 60, 80, 80);
        }
      }
      fill('white');
      image(mysticCat, 70, 200, 200, 200);
      image(priestessCat, 280, 200, 200, 200);
      image(suitCat, 430, 250, 150, 150);
      image(tankCat, 580, 180, 300, 300);
      text("With Lord Suitcats money, they could afford heavy artillery.", width / 2, 100);
      break;

    case 8:
      background('grey');
      fill('white');
      textSize(40);
      text("To be continued. What will become of the allied nations?", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  state = (state + 1) % 9;
}
