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

// Setup Function

function setup() {
createCanvas(1900, 750);
background(128,128,128);

start1 = new box(850, 550, 200, 100, 255, 255, 255);


}

// Draw Function

function draw() {

// Start Menu

if (state == 1) {
    background(128, 128, 128);
    //Menu Text
    textSize(35);
    text("Welcome to our Anti Bullying Simulation Demo", 200, 150);
    
    //Instructions


    textSize(35);
    text("Click 'Start' To Begin!", 200, 210)

    //Start Button
    fill(start1.rVal, start1.gVal, start1.bVal);
    rect(start1.xBox, start1.yBox, start1.widthBox, start1.heightBox);

    fill (0, 0, 0);
    textSize(50);
    text("Start", 890, 610)

}

// Simulation Page 1

if (state == 2) {
    background (128, 128, 128);

}

}



// MouseClicked Function

function mouseClicked() {
    if (mouseX > 800  && mouseX < 1000 && mouseY < 700 && mouseY > 400) {
        state = 2;
        
        message = "Level 1";
        console.log("Start Button");
      } 
    //   else if (mouseX >  && mouseX <  && mouseY <  && mouseY > ) {
    //     state = 3;
    //     ;
    //     message = "Level 2";
    //   } 
    //   else if (mouseX >  && mouseX <  && mouseY <  && mouseY > ) {
    //     state = 4;
        
    //     message = "Level 3";
    //   }
}