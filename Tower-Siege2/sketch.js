const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground, cannon;
var stand1,stand2;
var slingShot, door;
var rock_img,doorImg;
var wall , towerImg
var windowS1,windowS2 
var windowS1Img, windowS1Img2
var bell1, ball1

function preload(){
  rock_img = loadImage("images/cannonBall.png");
  cannon = loadImage("images/cannon.png")
  fence = loadImage("images/fence.png")
  doorImg = loadImage("images/door.png")
  towerImg = loadImage("images/bellTower.png")
  windowS1Img = loadImage("images/window 1.png")
  windowS1Img2 = loadImage("images/windows.png")
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  windowS1 = createSprite(100,100,40,40)
  windowS1.addImage(windowS1Img)
  windowS1.scale = 0.34

  windowS2 = createSprite(100,100,25,25)
  windowS2.visible = false  

  ground = new Ground();
  stand1 = new Stand(700,190,25,0.5);
  stand2 = new Stand(770,305,150,1);
  wall = new Stand(840,340,2,10)
  wall2 = new Stand(570,340,2,10)
  wall3 = new Stand(840,265,2,10)
  wall4 = new Stand(570,265,2,10)
  door = new Door(660,300,60,110)
  
  block1 = new Block(587,360,30,40);
  block2 = new Block(617.5,360,30,40);
  block3 = new Block(647,360,30,40);
  block4 = new Block(677,360,30,40);
  block5 = new Block(707,360,30,40);
  block6 = new Block(737,360,30,40);
  block7 = new Block(767,360,30,40);
  block8 = new Block(787,360,30,40);
  block9 = new Block(817,360,30,40);
  block10 = new Block(622,320,35,40);
  block11 = new Block(585,320,35,40);
  block12 = new Block(767,320,35,40);
  block13 = new Block(730,320,35,40);
  block14 = new Block(780,320,35,40);
  block15 = new Block(820,320,35,40);
  block16 = new Block(810,285,35,40);
  blocks1 = new Block(586,285,35,40);
  blocks2 = new Block(610,285,30,40);
  blocks3 = new Block(620,241,25,40);
  blocks4 = new Block(718,285,30,40);
  blocks5 = new Block(760,285,35,40);
  blocks6 = new Block(590,241,40,40);
  blocks7 = new Block(700,241,40,40);
  blocks8 = new Block(730,241,40,40);
  blocks9 = new Block(760,241,40,40);
  blocks10 = new Block(800,241,30,40)

  ball = Bodies.circle(50,200,15);
  World.add(world,ball);

  fence001 = new Fence(400,355,10,50)
  fence002 = new Fence(430,355,10,50)
  fence003 = new Fence(460,355,10,50)
  fence004 = new Fence(490,355,10,50)
  fence005 = new Fence(525,355,10,50)

  windowB = new SpawnWindow(790,285,40,40)
  slingShot = new Slingshot(this.ball,{x:220,y:285});
  bell1 = new Bell(700,165,35)

}

function draw() {
  background(56,44,44); 
 
  windowS1.x = windowB.body.position.x
  windowS1.y = windowB.body.position.y

  windowS2.x = ball.position.x
  windowS2.y = ball.position.y

  

  imageMode(CENTER);
  image(rock_img ,ball.position.x,ball.position.y,30,30);
  image(towerImg,700,115,250,250)
  
  image(cannon,100,320,250,120)

  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display()

  door.display()

  fence001.display()
  fence002.display()
  fence003.display()
  fence004.display()
  fence005.display()
  bell1.display()
 
  wall.display()
  wall2.display()
  wall3.display()
  wall4.display()
  slingShot.display();

  windowB.display()

  if(windowS2.isTouching(windowS1)){
    windowS1.addImage(windowS1Img2)
    windowS1.changeImage(windowS1Img2)
  }

  drawSprites()

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  //if(keyCode === 20)
  //if(keyCode === 22)
  //if(keyCode === 30)
  if(keyCode === 32)
  {
      slingShot.attach(this.ball);
  }
}
