var paddle1_x, paddle_y;
var paddle2_x;
var ball_x, ball_y;
var bounces;
var isStart;
var goLeft;
var goUp;

function setup(){
  createCanvas(500,500);
  paddle1_x = 10;
  paddle_y = 230;
  paddle2_x = 480;
  ball_x = 240;
  ball_y = 250;
  bounces = 0;
  goLeft = false;
  goUp = false;
}

function draw(){
  background(0);
  makePaddles();
  ball();
  displayBounces();
  movePaddles();
  moveBall();
  hitPaddle();
  hitWalls();
  missPaddle();
  
}

function makePaddles(){
  fill(255);
  noStroke();
  rect(paddle1_x, paddle_y, 10, 75);
  rect(paddle2_x, paddle_y, 10, 75);
}

function ball(){
  ellipse(ball_x, ball_y, 15, 15);
  if(isStart)
    ball_x += 3;
}

function displayBounces(){
  textSize(25);
  text(bounces, 240, 35);
}

function movePaddles(){
  if(keyIsDown(DOWN_ARROW) && paddle_y < height - 75)
    paddle_y += 3;
  if(keyIsDown(UP_ARROW) && paddle_y > 0)
    paddle_y -=3;

}

function hitWalls(){
  if(ball_y <= 0)
    goUp = false;
  if(ball_y >= height)
    goUp = true;
}

function hitPaddle(){
  if(ball_y <= paddle_y + 75 && ball_y >= paddle_y){
    
    if(ball_x >= paddle2_x){
      bounces++;
      goLeft = true;
      goUp = !goUp;

    }
    if(ball_x <= paddle1_x + 10){
      bounces++;
      goLeft = false;
      goUp = !goUp;
    }
    
  }
}

function missPaddle(){
  if(ball_x > 500 || ball_x < 0){
    bounces = 0;
    ball_x = 510;
  }
}

function moveBall(){
  var amt = random(2) + 1;
  if(goLeft)
    ball_x -= amt;
  else
    ball_x += amt;
  
  amt = random(2) + 1;
  if(goUp)
    ball_y -= amt;
  else
    ball_y += amt;
}