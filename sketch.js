
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	rectMode(CENTER);
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new BOB(400,550,40);
	bob2 = new BOB(440,550,40);
	bob3 = new BOB(360,550,40);
	bob4 = new BOB(480,550,40);
	bob5 = new BOB(320,550,40);
	pend1 = new PEND(400,300,250,30);
	chain1 = new CHAIN(bob1.body,pend1.body,0,20);
	chain2 = new CHAIN(bob2.body,pend1.body);
	chain3 = new CHAIN(bob3.body,pend1.body);
	chain4 = new CHAIN(bob4.body,pend1.body);
	chain5 = new CHAIN(bob5.body,pend1.body,{x:40,y:10});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  pend1.display();
  drawSprites();
 
}



