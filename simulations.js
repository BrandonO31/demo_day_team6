// State Variable

let state = 1;



// Box oop

class box {
    constructor(x, y, w, h, r, g, b) {
    this.xBox = x
    this.yBox = y
    this.widthBox = w
    this.heightBox = h
    this.rVal = r
    this.gVal = g
    this.bVal = b
    }
}


// Images and Sounds

let bullyscene;
let bullylunch;

let stopbullying;
// Preload Function

function preload() {
  bullyscene = loadImage("https://cdn.glitch.com/d44056e2-d515-43b0-857a-dfd1d3f963a3%2Fbullyscene.png?v=1629296222845")
  bullylunch = loadImage("https://cdn.glitch.com/d44056e2-d515-43b0-857a-dfd1d3f963a3%2Flunchbully.jpg?v=1629341282783")
  
  stopbullying = loadImage("https://cdn.glitch.com/d44056e2-d515-43b0-857a-dfd1d3f963a3%2FstopBullying.png?v=1629377897332")
}



// Setup Function

function setup() {
createCanvas(windowWidth, windowHeight);
background(255, 225, 57);

// Object Alignments
  rectMode(CENTER);
  textAlign(CENTER);
  
start1 = new box(700, 570, 200, 100, 255, 255, 255);

  // Option Buttons
  
option1 = new box(220, 550, 350, 150, 255, 255, 255);
option2 = new box(750, 550, 350, 150, 255, 255, 255);
option3 = new box(1300, 550, 350, 150, 255, 255, 255);
  
  
  
next = new box(600, 500, 200, 100, 255, 255, 255);
goback =  new box(900, 500, 200, 100, 255, 255, 255);
  
}

// Dialogue Box

dialogue1 = new box(450, 230, 800, 400, 255, 255, 255);

// Draw Function

function draw() {

// Start Menu

if (state == 1) {
    background(255, 225, 57);
  
  //Menu Text
    textSize(35);
    textStyle(BOLD);
  
    text("Welcome to our Anti Bullying Simulation Demo", 450, 150);
    
  //Menu Images
  
  image(stopbullying, 1000, 150, 500, 400);
  
    //Instructions


    textSize(35);
  textStyle(ITALIC);
  fill(194, 90, 89);
    text("Click 'Start' To Begin!", 300, 210)

    //Start Button
    fill(start1.rVal, start1.gVal, start1.bVal);
    rect(start1.xBox, start1.yBox, start1.widthBox, start1.heightBox);

  // Start Text
  
    fill (0, 0, 0);
    textSize(50);
  textStyle(BOLD);
    text("Start", 700, 590)

}

// Simulation Page 1

if (state == 2) {
  background (255, 225, 57);
  image(bullylunch, 1000, 20, 450);

fill(option1.rVal, option1.gVal, option1.bVal);
rect(option1.xBox, option1.yBox, option1.widthBox, option1.heightBox);
  
fill(option2.rVal, option2.gVal, option2.bVal);
rect(option2.xBox, option2.yBox, option2.widthBox, option2.heightBox);
  
fill(option3.rVal, option3.gVal, option3.bVal);
rect(option3.xBox, option3.yBox, option3.widthBox, option3.heightBox);
  
fill(dialogue1.rVal, dialogue1.gVal, dialogue1.bVal);
rect(dialogue1.xBox, dialogue1.yBox, dialogue1.widthBox, dialogue1.heightBox);
  
  
// SIM PAGE 1 TEXT
  
  textSize(25);
  textStyle(BOLD);
  fill(150, 110, 250);
  text("Lunch Bully Scenario", 450, 75);
  
  textSize(20);
  textStyle(NORMAL);
  fill(65, 133, 219);
  text("One day after an exhausting math test, a classmate of yours walks up to you", 400, 125);
  text("during lunch. He is visibly upset, and has a reputation of getting into trouble", 400, 150);
  text("He begins to call you names, and taunt you and your friends. Lunch doesn't end", 410, 175);
  text("for another 30 minutes.", 200, 200);
  
  textStyle(ITALIC);
  fill(179, 60, 129);
  text("What do you do?", 390, 200);
  
  
  textSize(25)
  textStyle(NORMAL);
  fill(0)
  text("1)", 70, 500);
  textSize(20);
  text("Go to nearest adult for help", 220, 550);
  
  text("2)", 600, 500);
  
  text("3)", 1150, 500);
}

  // OPTION 1 Page
  if (state == 3) {
    background (255, 225, 57);
    
  
    
    
   
    
    fill(next.rVal, next.gVal, next.bVal);
rect(next.xBox, next.yBox, next.widthBox, next.heightBox);
    
    fill(goback.rVal, goback.gVal, goback.bVal);
rect(goback.xBox, goback.yBox, goback.widthBox, goback.heightBox);
    
    
    // OPTION 1 Page Text
    textSize(25);
    fill(0);
    text("This would be a correct choice. Getting up to go to the nearest adult is an advisable action", 800, 175);
    
     text("Next", 575, 500);
    text("Go Back", 875, 500);
  
  
    
    
    
  }
}

// Window Resized Function
function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

// MouseClicked Function

function mouseClicked() {
    if (mouseX > 580  && mouseX < 850 && mouseY < 800 && mouseY > 520) {
        state = 2;
        
        
        
      } 
      else if (state == 2 && mouseX > 50 && mouseX < 350 && mouseY < 750  && mouseY > 450) {
        state = 3;
        
      } 
//       else if (mouseX >  && mouseX <  && mouseY <  && mouseY > ) {
//         state = 4;
        
//         message = "Level 3";
//       }
}