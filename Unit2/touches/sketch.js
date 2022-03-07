let numberOfTouches ;
let pic1;
let pic2;
let pic3;
let pic4;

function setup() {
  createCanvas(400, 400);
  pic1 = loadImage('assets/cat.jpg');
  pic2 = loadImage('assets/cat2.jpg');
  pic3 = loadImage('assets/finger1.jpg');
  pic4 = loadImage('assets/Landscape.jpg');
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      image(pic4, 200, 200, 400, 400) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       image(pic3, 200, 200, 400, 400) ;
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      image(pic2, 200, 200, 400, 400) ;
            // put a picture here
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
     image(pic1, 200, 200, 400, 400) ;
            // put a picture here
      break ;


  }

}
