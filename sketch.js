var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg


function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
birdImg=loadImage("assets/obsTop2.png")
obstacle1=loadImage("assets/obsBottom1.png");
obstacle2=loadImage("assets/obsBottom2.png");
obstacle3=loadImage("assets/obsBottom3.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight)

//background image
/*bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3*/

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;



}

function draw() {
  
  background(bgImg);
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0;
           
           spawnBird()
           spawnObstacles()
           drawSprites()

       
        
}
function spawnBird() {
  //write code here to spawn the bird
   if (frameCount % 90 === 0) {
    bird = createSprite(1500,100,40,10);
    bird.y = Math.round(random(10,200));
    bird.addImage(birdImg);
    bird.scale = 0.1;
    bird.velocityX = -3;
    
     //assign lifetime to the variable
    bird.lifetime = 500;
   }
   }
   function spawnObstacles(){
        if (frameCount % 80 === 0){
          var obstacle = createSprite(1500,540,10,40);
          obstacle.velocityX = -6;

      var rand = Math.round(random(1,3));
  switch(rand) {
    case 1: obstacle.addImage(obstacle1);
            break;
    case 2: obstacle.addImage(obstacle2);
            break;
    case 3: obstacle.addImage(obstacle3);
            break;
   
    default: break;
  }
  obstacle.scale=0.2
  obstacle.lifetime=260
}
   }


  
  
  

