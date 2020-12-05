
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(280,300,40)
	bob1 = new Bob(320,300,40)
	bob2 = new Bob(360,300,40)
	bob3 = new Bob(400,300,40)
	bob4 = new Bob(440,300,40)
	roof = new Roof(700, 300, 800,20)
	rope = new Rope(bob.body, roof.body,-40*2,0) 
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  text(mouseX+","+mouseY, mouseX, mouseY) 
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
  drawSprites();
 
}



