//Emoji List = https://unicode.org/emoji/charts/emoji-style.txt

let acitivites, animals, colors, emotions, food, gestures, items, place, nature, people, sportsGames, techMedia, time, transportation
let value = 0

function setup() {

  createCanvas(windowWidth, windowHeight); // sets canvas width and height to the window's width and height
  
}

function preload() { // preload all emoji and text font files //
  
  animals = loadStrings('animals.txt'); // load animals bucket
  emotions = loadStrings('emotions.txt'); // load emotinos bucket
  activities = loadStrings('activities.txt'); // load activities bucket
  
  place = loadStrings('location.txt'); // load location bucket
  colors = loadStrings('colors.txt'); // load colors bucket
  transportation = loadStrings('transportation.txt'); // load transportation bucket
  
  items = loadStrings('items.txt'); // load items bucket
  nature = loadStrings('nature.txt'); // load nature bucket
  food = loadStrings('food.txt'); // load food bucket
  
  myFont = loadFont('IBMPlexMono-Light.otf'); // load font for copyright
  
}

function draw() {
  background(255);
  
// SCALING //
  
  if(width>height){ // desktop scaling
    var mult = .5
  }else if(height>width){ // mobile scaling
    var mult = 3
  }else{ // default
    var mult = .5
  }
  
// EMOJI FONT SETTINGS //
  
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  var ts = 60 * mult // scaling font size
  textSize(ts);
  textFont("Arial"); // default unicode emoji font
  
  
// ALIGNMENT //
  
  var x = width/2-5; // set x-axis origin point
  var y = height/2-30; // set y-axis origin point
  var hs = ts + ts/3; // set horizontal scaling/placement based on font size
  var vs = ts + ts/3; // set vertical scaling/placement based on font size
  
  var vd1 = y-1.5*vs; // set vertical displacement of first row
  var vd2 = y-.5*vs; // set vertical displacement of second row
  var vd3 = y+.5*vs; // set vertical displacement of third row
  var vd4 = y+1.5*vs; // set vertical displacement of fourth row
  
  var xd1 = x-hs; // set horizontal displacement of first column
  var xd2 = x; // set horizontal displacement of second column
  var xd3 = x+hs; // set horizontal displacement of third column
  
  if(value == 0){ 
  
// ROLLING EMOJIS //
    
    // first row
    text(random(animals), xd1, vd1); //first column
    text(random(emotions), xd2, vd1); //second column
    text(random(activities), xd3, vd1); //third column

    // second row
    text(random(place), xd1, vd2); //first column
    text(random(colors), xd2, vd2); //second column
    text(random(transportation), xd3, vd2); //third column
 
    // third row
    text(random(items), xd1, vd3); //first column
    text(random(nature), xd2, vd3); //second column
    text(random(food), xd3, vd3); //third column
  
    text("⏸️", x, vd4) // pause button
    
   } else {
     
// RANDOM EMOJI SELECTION //
    
    var myNums = [1,2,3,4,5,6,7,8,9]; //array of numbers, one for each emoji bucket
    var myArray = []; //empty array for a random selection of numbers to be tossed into
    
     for(i=0; i<5; i++){ //loop that selects 5 numbers from myNums to drop inot myArray
      append(myArray, random(myNums));
    }
    
    // first row
    if (myArray.includes(1)){text(random(animals), xd1, vd1);} //first column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(2)){text(random(emotions), xd2, vd1);} //second column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(3)){text(random(activities), xd3, vd1);} //third column, if statment checks to see if the number for this emoji bucket is in myArray

    // second row
    if (myArray.includes(4)){text(random(place), xd1, vd2);} //first column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(5)){text(random(colors), xd2, vd2);} //second column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(6)){text(random(transportation), xd3, vd2);} //third column, if statment checks to see if the number for this emoji bucket is in myArray
 
    // third row
    if (myArray.includes(7)){text(random(items), xd1, vd3);} //first column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(8)){text(random(nature), xd2, vd3);} //second column, if statment checks to see if the number for this emoji bucket is in myArray
    if (myArray.includes(9)){text(random(food), xd3, vd3);} //third column, if statment checks to see if the number for this emoji bucket is in myArray
    
    text("▶️", x, vd4) // play button
     
   }
  
// COPYRIGHT SCALING //
  
  if(width>height){ // font styling for desktop
    textSize(10);
    textFont(myFont);
    text("© D Josh Cook", x, y+vs*2.25)
  }else if(height>width){ // font styling for mobile
    textSize(24);
    textFont(myFont);
    text("© D Josh Cook", x, y+vs*2.25)
  }else{ // defaut to desktop
    textSize(10);
    textFont(myFont);
    text("© D Josh Cook", x, y+vs*2.25)
  }
  
}// end draw

function mouseClicked() {
  
  if (value == 0){ // if clicked while rolling it will stop and trigger random emoji selection
    value = 1;
    noLoop();
  } else if (value == 1){ // if clicked while static it will trigger to begin rolling
    value = 0;
    loop();
  }
  
}

function windowResized() { // will update canvase size when window is resized
  
  resizeCanvas(windowWidth, windowHeight);
  
}
