//Emoji List = https://unicode.org/emoji/charts/emoji-style.txt

let acitivites, animals, colors, emotions, food, gestures, items, place, nature, people, sportsGames, techMedia, time, transportation

let value = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function preload() {
  
  animals = loadStrings('animals.txt');
  emotions = loadStrings('emotions.txt');
  activities = loadStrings('activities.txt');
  
  place = loadStrings('location.txt');
  colors = loadStrings('colors.txt');
  transportation = loadStrings('transportation.txt'); 
  
  items = loadStrings('items.txt');
  nature = loadStrings('nature.txt');
  food = loadStrings('food.txt');
  
  myFont = loadFont('IBMPlexMono-Light.otf');
  
}

function draw() {
  background(255);
  
  if(windowWidth>windowHeight){
    var mult = 1
  }else if(windowHeight>windowWidth){
    var mult = 3
  }else{
    var mult=1
  }
  
  
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  var ts = 60 * mult
  textSize(ts);
  textFont("Arial");
  
  
  //Emoji Alignment
  var x = width/2-5;
  var y = height/2-30;
  var hs = ts + ts/3;
  var vs = ts + ts/3;
  
  var vd1 = y-1.5*vs;
  var vd2 = y-.5*vs;
  var vd3 = y+.5*vs;
  var vd4 = y+1.5*vs;
  
  var xd1 = x-hs;
  var xd2 = x;
  var xd3 = x+hs;
  
  //Interface Alignment
  // rect(x, y-1.5*vs, 60, 60);
  // rect(x, y-.5*vs, 60, 60);
  // rect(x, y+.5*vs, 60, 60);
  // rect(x, y+1.5*vs, 60, 60);
  
  if(value == 0){
  
    //Random Emojis
    
    text(random(animals), xd1, vd1);
    text(random(emotions), xd2, vd1);
    text(random(activities), xd3, vd1);

    text(random(place), xd1, vd2);
    text(random(colors), xd2, vd2);
    text(random(transportation), xd3, vd2);
 
    text(random(items), xd1, vd3);
    text(random(nature), xd2, vd3);
    text(random(food), xd3, vd3);
  
    
    text("⏸️", x, vd4)
    
   } else {
    
    var myNums = [1,2,3,4,5,6,7,8,9];
    var myArray = [];
     
    for(i=0; i<5; i++){
      append(myArray, random(myNums));
    }
    
    // print(myArray)

    if (myArray.includes(1)){text(random(animals), xd1, vd1);}
    if (myArray.includes(2)){text(random(emotions), xd2, vd1);}
    if (myArray.includes(3)){text(random(activities), xd3, vd1);}

    if (myArray.includes(4)){text(random(place), xd1, vd2);}
    if (myArray.includes(5)){text(random(colors), xd2, vd2);}
    if (myArray.includes(6)){text(random(transportation), xd3, vd2);}
 
    if (myArray.includes(7)){text(random(items), xd1, vd3);}
    if (myArray.includes(8)){text(random(nature), xd2, vd3);}
    if (myArray.includes(9)){text(random(food), xd3, vd3);}
    
    text("▶️", x, vd4)
     
   }
  
  textSize(24);
  textFont(myFont);
  text("© D Josh Cook", x, y+vs*2.25)
  
}

function mouseClicked() {
  
  var x = width/2+8
  var y = height/2+42
  var hs = 80
  var vs = 80
  
  if (value == 0){
    value = 1;
    noLoop();
  } else if (value == 1){
    value = 0;
    loop();
  }
}

// function mouseClicked() {
  
//   var x = width/2+8
//   var y = height/2+42
//   var hs = 80
//   var vs = 80
  
//   if (value == 0 && mouseX >= x-8-40 && mouseX <= x-8+40 && mouseY >= y+80-4-30 && mouseY <= y+80-4+30){
//     value = 1;
//     noLoop();
//   } else if (value == 1 && mouseX >= x-8-40 && mouseX <= x-8+40 && mouseY >= y+80-4-30 && mouseY <= y+80-4+30){
//     value = 0;
//     loop();
//   }
// }

// function mousePressed() {
// var fs = fullscreen();
// if (!fs) {
// fullscreen(true);
// }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
