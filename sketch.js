
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;

var dground,tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
treeimg=loadImage("tree.png")
boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dground=new Ground();
stones=new Stone();
mango1=new Mango();
mango2=new Mango();
mango3=new Mango();
mango4=new Mango();
mango5=new Mango();

attach=new Throw(stone.body,{x:100,y:465})

tree=createSprite(775,368);
tree.addImage(treeimg);
tree.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  fill("black");
  textsize(18)

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  
  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}
  function mouseDragged(){
	  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	  attach.fly();
  }
  
 




