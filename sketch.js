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
  
}

function draw() {
  background(255);
  
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(60);
  
  
  //Emoji Alignment
  var x = windowWidth/2+8
  var y = windowHeight/2+42
  var hs = 80
  var vs = 80
  
  //Interface Alignment
  //rect(x-8, y+vs-4, 60, 60)
  
  if(value == 0){
  
    //Random Emojis
    
    text(random(animals), x-hs, y-2*vs, 80, 80);
    text(random(emotions), x, y-2*hs, 80, 80);
    text(random(activities), x+hs, y-2*vs, 80, 80);
    

    text(random(place), x-hs, y-vs, 80, 80);
    text(random(colors), x, y-vs, 80, 80);
    text(random(transportation), x+hs, y-vs, 80, 80);
 

    text(random(items), x-hs, y, 80, 80);
    text(random(nature), x, y, 80, 80);
    text(random(food), x+hs, y, 80, 80);
  
    
    text("⏸️", x-8, y+1*vs)
    
   } else {
    
    var myNums = [1,2,3,4,5,6,7,8,9];
    var myArray = [];
     
    for(i=0; i<5; i++){
      append(myArray, random(myNums));
    }
    
    // print(myArray)

    if (myArray.includes(1)){text(random(animals), x-hs, y-2*vs, 80, 80);}
    if (myArray.includes(2)){text(random(emotions), x, y-2*hs, 80, 80);}
    if (myArray.includes(3)){text(random(activities), x+hs, y-2*vs, 80, 80);}
    
    if (myArray.includes(4)){text(random(place), x-hs, y-vs, 80, 80);}
    if (myArray.includes(5)){text(random(colors), x, y-vs, 80, 80);}
    if (myArray.includes(6)){text(random(transportation), x+hs, y-vs, 80, 80);}
 
    if (myArray.includes(7)){text(random(items), x-hs, y, 80, 80);}
    if (myArray.includes(8)){text(random(nature), x, y, 80, 80);}
    if (myArray.includes(9)){text(random(food), x+hs, y, 80, 80);}
    
    text("▶️", x-8, y+1*vs)
     
   }
  
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
