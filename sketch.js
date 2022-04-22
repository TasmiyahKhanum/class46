var player1, player2;
var fire;
var shipImg;
var enemy,enemyImg;
var backgroundImg;
var fireImg;
var treasure;
var backg;
var crystalImg, moneyImg;
var treasure1;
var whirpoolImg,whirpool;
var pshipgroup,crystalgroup,moneygroup;
var score=0;
var sea_s;
var gameState=play;
var play,end;


function preload(){
shipImg=loadAnimation("s1.png","s1.png","s2.png","s2.png","s3.png","s3.png","s4.png","s4.png");
enemyImg=loadImage("pship.png");
backgroundImg = loadImage("sea.png");
fireImg=loadImage("fireball .png");
crystalImg = loadImage("crystal.png");
moneyImg = loadImage("money.png");
whirpoolImg = loadImage("whirpool.png");
sea_s = loadSound("sea.mp3");
}

function setup(){
  
 //sea_s.play();
 sea_s.loop();

 player1 = createSprite(windowWidth/2,780,100,100);
 player1.addAnimation('rock',shipImg);
 player1.scale=2;

 backg = createSprite(960,400,60,60);
 backg.addImage(backgroundImg);
 //backg.scale=1.2;
 backg.velocityY=4;

 whirpool=createSprite(100,100);
 whirpool.addImage(whirpoolImg);
 whirpool.velocityX =5;
 whirpool.velocityY=5;
 whirpool.scale=0.2;

 pshipgroup = new Group();
 crystalgroup = new Group();
 moneygroup = new Group();
}

function draw(){
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(gameState==play){
  var edges = createEdgeSprites();
  whirpool.bounceOff(edges);
  whirpool.rotation+=15;

 if(backg.y>windowHeight-400){
   backg.y=height/2;
 } // console.log(mouseX,mouseY)

  if(keyDown("space")){
    fire = createSprite(player1.x,player1.y,30,30);
    console.log(fire.x,fire.y)
    fire.addImage(fireImg);
    fire.velocityY-=5;
    fire.scale=0.3;
    // fireX+
  }
  /*if(keyDown("UP_ARROW")){
    player1.y-=5;
  }
  if(keyDown("DOWN_ARROW")){
    player1.y+=5;
  }*/
  if(keyDown("LEFT_ARROW")){
    player1.x-=5;
  }
  if(keyDown("RIGHT_ARROW")){
    player1.x+=5;
  }
  //player1.rotation+=20;
  /*if(crystalgroup.isTouching(player1)){
    score+=2;
  }
  if(pshipgroup.isTouching(fire)){
    pshipgroup.destroyEach();
  }*/

  createEnemy();
  createTreasure();
  createTreasure1();
  windowResized();
  drawSprites();
  if(pshipgroup.isTouching(player1)){
    gameState=end;
  }
 }
  textSize(20)
  //fill(random(0,225),random(0,225),random(0,225));
  strokeWeight(2);
  //stroke(random(0,225),random(0,225),random(0,225));
  fill("white")
  text("SCORE : "+score,1720,50);
  
  else if(gameState==end){

  }

}

function createEnemy(){
  
  if(frameCount%250==0){
   enemy = createSprite(Math.round(random(100,1400)),108);
   console.log(enemy.x)
   //console.log(w,h);
   //enemy.x=Math.random(100,600);
   //enemy.y=Math.random(100,600);
  enemy.velocityY+=3; 
  enemy.addImage(enemyImg);
  enemy.lifetime=300;
  enemy.scale=0.2;
  enemy.depth=player1.depth;
  player1.depth+=1;
  pshipgroup.add(enemy);
  }
}

function createTreasure(){
  if(frameCount%70==0){
   treasure = createSprite(Math.round(random(100,1400)),108);
   //enemy.x=Math.random(100,600);
   //enemy.y=Math.random(100,600);
   treasure.addImage(crystalImg);
  treasure.velocityY+=3; 
  //treasure.addImage(treasureImg);
  treasure.lifetime=300;
  treasure.scale=0.1;
  treasure.depth=player1.depth;
  player1.depth+=1;
  crystalgroup.add(treasure);
  }
}

 function createTreasure1(){
   if(frameCount%170==0){
  treasure1 = createSprite(Math.round(random(100,1400)),108);
   //enemy.x=Math.random(100,600);
   //enemy.y=Math.random(100,600);
   treasure1.addImage(moneyImg);
  treasure1.velocityY+=3; 
  //treasure.addImage(treasureImg);
  treasure1.lifetime=300;
  treasure1.scale=0.1;
  treasure1.depth=player1.depth;
  player1.depth+=1;
  moneygroup.add(treasure);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

