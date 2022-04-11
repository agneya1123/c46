var ground
var bunny,bunnyImg;
var background1,background1Img;
var bush,bushG
function preload() {
  bunnyImg= loadImage ("bunny.png");
  bunny1Img= loadAnimation ("bunny1.png","bunny2.png","bunny3.png");
 background1Img= loadImage ("background1.png");
  bushImg= loadImage ("obstacles.png");
}
function setup() {
  createCanvas(600,400);
  ground=createSprite(300,360,600,10);
  ground.visible = false;
  background1=createSprite(750,200,10,10);
  background1.addImage(background1Img)
background1.scale=0.7;
  background1.velocityX=-4;
  //background1.x = background1.width /2;
  background1.scale = 1.3
  bunny =createSprite(70,360,10,10);
  bunny.addAnimation("bunny",bunny1Img)
  bunny.scale = 0.3; 

  bushG=createGroup();
}

function draw() {
  background(230);
  if(keyDown(UP_ARROW)&& bunny.y >= 200){
    bunny.velocityY  = -10;
    
  }
  if(keyDown(DOWN_ARROW)){
  //  bunny.velocityY  = 1;
  }
  bunny.velocityY +=0.8
  bunny.collide(ground);
  
  if(bunny.isTouching(bushG)){
    bunny.addAnimation("bunny",bunnyImg)
    bunny.changeAnimation("bunny",bunnyImg)
    
     bushG.setVelocityXEach(0);
    
  }
   
   // if (background1.x < 0){
    //  background1.x = background1.width/9;
   // }
    
  bunny.setCollider("rectangle",0,0,220,220);
  bunny.debug = false
  bushObstacle()
  drawSprites()
}
function bushObstacle() {
 
  if (frameCount % 150 === 0) {
    var bush = createSprite(600,350,40,10);
    bush.addImage(bushImg);
    bush.scale = 0.3;
    bush.velocityX = -3;
    bush.lifetime = 200;
    bush.depth = bunny.depth;
    bunny.depth = bunny.depth + 1;
   
    bushG.add(bush);
  }
}