var fishX;
var fishY;
var bodyColor;

function setup() {
  //could have just set up noStroke() here
  createCanvas(1000,800);
  background(30,144,255);
  fishX = 50;
  fishY = 550;
  bodyColor = color(138, 43, 266);
}

function draw() {
  body();
  mouth();
  toEyes();
  legs();
  eyes();
  fish();
  moveFish();
  
  if(keyCode == ENTER){
      sleepyEyes();
  }

}


function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){
    changeColor();
  }
}

function changeColor(){
  var redVal = random(256);
  var greenVal = random(256);
  var blueVal = random(256);
  
  bodyColor = color(redVal, greenVal, blueVal);
}

function body(){
  fill(bodyColor);
  noStroke();
  rotate(PI);
  arc(-500, -400, 400, 300, 0, PI);
  toEyes();
}

function mouth(){
  fill(255, 20, 147);
  noStroke();
  arc(-500, -375, 250, 200, 0, PI);
 
  rotate(PI);
  fill(255, 240, 245);
  noStroke();
  
  for(var i = 0; i < 5; i++){
    var x1 = 375 + (i*50);
    var y1 = 375;
    var x2 = 400 + (i*50);
    var y2 = 350;
    var x3 = 425 + (i*50);
    var y3 = y1;
    triangle(x1, y1, x2, y2, x3, y3);
  }
}

function toEyes(){
  stroke(bodyColor);
  line(180, 320, 335, 355);
  line(315, 160, 400, 300);
  line(500, 140, 500, 250);
  line(800, 320, 680, 355);
  line(715, 165, 615, 300);
}

function eyes(){
  fill(248, 248, 255);
  ellipse(180, 320, 50, 50);
  ellipse(315, 160, 50, 50);
  ellipse(500, 140, 50, 50);
  ellipse(800, 320, 50, 50);
  ellipse(715, 165, 50, 50);
  
  fill(0, 0, 0);
  ellipse(180, 320, 20, 20);
  ellipse(315, 160, 20, 20);
  ellipse(500, 140, 20, 20);
  ellipse(800, 320, 20, 20);
  ellipse(715, 165, 20, 20);
}

function legs(){
  fill(bodyColor);
  for(var i = 0; i < 2; i++){
    rect(300 + (i*360), 400, 40, 65);
    rect(360 + (i*245), 400, 35, 45);
  }
}

function sleepyEyes(){
  fill(138, 43, 266);
  arc(180, 320, 50, 50, PI, 0);
  arc(315, 160, 50, 50, PI, 0);
  arc(500, 140, 50, 50, PI, 0);
  arc(800, 320, 50, 50, PI, 0);
  arc(715, 165, 50, 50, PI, 0);

  /*
    In order to create blinking need to find a way to delay so ellipse can be
    added after arc, then back to arc, then no arc - literally use angles
  */

}

function fish(){
  translate(fishX, fishY);
  fill(255, 246, 143);
  noStroke();
  triangle(0, 0, 0, 70, 70, 35)
  ellipse(85, 35, 100, 75);
}

function moveFish(){
  if( mouseY > fishY && mouseY < fishY + 75){
    if(mouseX < fishX && fishX < 780){
        fishX += 5;
    }
    else if(mouseX > fishX && fishX > 50){
      fishX -= 5;
    } 
  }
}



