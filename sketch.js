
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var ball1,ball2,ball3 ,ball4,ball5;
var ground;
var roof ; 

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

ball1=new Bob(300,350,50);
ball2=new Bob(350,350,50);
ball3=new Bob(400,350,50);
ball4=new Bob(450,350,50);
ball5=new Bob(500,350,50);
ground = new Roof(400,200,300,20);
rope1= new Rope(ball1.body,ground.body,-100,0);
rope2= new Rope(ball2.body,ground.body,-50,0);
rope3= new Rope(ball3.body,ground.body,-0,0);
rope4= new Rope(ball4.body,ground.body,50,0);
rope5= new Rope(ball5.body,ground.body,100,0);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
  
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ground.display();
	rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
  	rope5.display();

    
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 
} 

// MADE BY KARTAVYA WHILE LISTENING TO SONGS
// THANKS TO NEWTON FOR THIS :D