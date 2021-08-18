var box1,box1Image,box2,box2Image,box3,box3Image,box4,box4Img,box5,box5Img,bgImg
var bgImg,gameState,Start;

function preload(){
  bgImg=loadImage("sprites/bg.png")
  box1Image=loadImage("sprites/soldier.png")
  box2Image=loadImage("sprites/enemy1.png")
  box3Image=loadImage("sprites/enemy2.png")
  box4Img=loadImage("sprites/enemy3.png")
  box5Img=loadImage("sprites/enemy4.png")
  button=loadImage("sprites/button.png")
  back2Img= loadImage("sprites/background2.jpg")
}

function setup(){

  createCanvas(700,600);
  sb= createSprite(320,300)
  sb.addImage(button)
  sb.scale=1
  sb.visible= true

  back= createSprite(350,320)
  back.addImage(bgImg)
  back.scale=1.8
  back.visible=false

 
  back2= createSprite(350,320)
  back2.addImage(back2Img)
  back2.scale= 3
  back2.visible= false

  box1=createSprite(190,470,70,70)
   box1.addImage(box1Image)
   box1.scale=1
  box1.visible= false
  box1.debug= true
  box1.setCollider("circle",0,0,40)


  box2=createSprite(650,400,70,70)
  box2.addImage(box2Image)
  box2.scale=0.3
  box2.visible= false
  box2.debug= true
  


 

  box3=createSprite(650,280,70,70)
  box3.addImage(box3Image)
  box3.scale=0.3
  box3.visible= false
  box3.debug= true
  box3.velocityX=-3
  box3.velocityY=0

  box4=createSprite(650,520,70,70)
  box4.addImage(box4Img)
  box4.scale=0.3
  box4.visible= false

  box5=createSprite(820,160,70,70)
  box5.addImage(box5Img)
  box5.scale=0.3
  box5.visible= false

  
  

 

}

function draw(){
 background("black");
 drawSprites()




 if(mousePressedOver(sb)){
        back.visible= true
        box1.visible= true
       // box1=createSprite(190,470,70,70)
       // box1.addImage(box1Image)
       // box1.scale=1
        //box2=createSprite(650,400,70,70)
        //  box2.addImage(box2Image)
        //  box2.scale=0.3
          box2.visible= true



  
 }
  
   if(keyWentDown("LEFT_ARROW")){
   box1.velocityX= -10
  
   
   }
   else{
     box1.velocityX=0
   }


if(keyDown("RIGHT_ARROW")){
  box1.velocityX= 5;
  }
  else{
    box1.velocityX= 0
  }

  if(keyDown('UP_ARROW')){
    box1.velocityY= -5
  }else{
    box1.velocityY=0
  }


  if(box1.isTouching(box2)){

   textSize(40)
   text("move to secong round", 300 ,300)
   back2.visible= true
   box2.visible= false
   box3.visible= true
   
   
    
  


  }
  if (box1.isTouching(box3)){
    textSize(50)
    fill("black")
    text("You Won The Game",100,350)

  }
  
  //createEdgeSprites()
  // box3.bounceOff(edges)
  

}

