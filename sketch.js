
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload()
{
	
}

function setup() {
	rectMode(CENTER);
	createCanvas(windowWidth/2,windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pend1 = new Pendulem(150,300,"black");
	pend2 = new Pendulem(210,300,"black");
	pend3 = new Pendulem(270,300,"black");
	pend4 = new Pendulem(330,300,"black");
	pend5 = new Pendulem(390,300,"black");

	sling1 = new Sling(pend1.body,{x:150,y:100});
	sling2 = new Sling(pend2.body,{x:210,y:100});
	sling3 = new Sling(pend3.body,{x:270,y:100});
	sling4 = new Sling(pend4.body,{x:330,y:100});
	sling5 = new Sling(pend5.body,{x:390,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  pend1.display();
  pend2.display();
  pend3.display();
  pend4.display();
  pend5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function keyPressed(){
  if(keyDown("UP_ARROW")){
	  Matter.Body.applyForce(pend1.body,pend1.body.position,{x:-0.05,y:-0.05});
  }
}


