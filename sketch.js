var pathImg,jackImg,jake
function preload(){
  pathImg=loadAnimation("path.png")
  jackImg=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png")
  

  //pre-load images
}



function setup(){
  createCanvas
  (400,400);
  //create sprites here
  path=createSprite(200,200)
path.addImage(pathImg);
path.velocityY=4;
path,scale=1.2;
jake=createSprite(180,340,30,30)
jake.addAnimation("Jake.png","Jake2.png","Jake3.png","Jake4.png","jake5.png")
leftboundary=createSprite(0,280,100,550)
rightboundary=createSprite(400,300,80,600)
leftboundary.visible=false;
rightboundary.visible=false;


}

function draw() {
  background(0);
  jake.x=World.mouseX;
  if(path.y>400)
    path.y=height/2
 
  drawSprites()
}
