let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temp = 0;
let humid = 0;
let description;
let cloud;

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,Japan,US&units=imperial&";

  let myIDString = "appid=14c36016267da25b642b3a4fda3cdbfe";

  let myTotalString = myCityString + myIDString;

  textFont("Georgia");
  clouds = loadImage('assets/cloud.png');

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humid = weather.main.humidity;
  description = weather.weather[0].description;
}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;
    case 1:
      if (temp < 60 && temp > 32) {
        state = 2;
      }
      if (temp < 32) {
        state = 3;
      }
      if (temp > 60 && temp < 80) {
        state = 4;
      }
      if (temp > 80) {
        state = 5;
      }
      break;
    case 2:
      background('blue');
      fill("white");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed + " mph", 20, 40);
      text("temp is " + temp + " degrees F", 20, 60);
      text("Humidity is " + humid, 20, 80);
      text(description, 20, 100);

      // cloud
      fill("white");
      noStroke();
      image(clouds, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = -200;

      break;
    case 3:
      background('white');
      fill("white");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed + " mph", 20, 40);
      text("temp is " + temp + " degrees F", 20, 60);
      text("Humidity is " + humid, 20, 80);
      text(description, 20, 100);


      // cloud
      fill("grey");
      noStroke();
      image(clouds, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width + 100) x = -100;

      break;
    case 4:
      background('orange');
      fill("white");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed + " mph", 20, 40);
      text("temp is " + temp + " degrees F", 20, 60);
      text("Humidity is " + humid, 20, 80);
      text(description, 20, 100);


      // cloud
      fill("white");
      noStroke();
      image(clouds, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width + 100) x = -100;

      break;
    case 5:
      background('red');
      fill("white");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed + " mph", 20, 40);
      text("temp is " + temp + " degrees F", 20, 60);
      text("Humidity is " + humid, 20, 80);
      text(description, 20, 100);


      // cloud
      fill("lightorange");
      noStroke();
      image(clouds, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width + 100) x = -100;

      break;
  }
}
