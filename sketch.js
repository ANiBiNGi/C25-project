
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}


function setup() {
	var canvas = createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600,670,1200,20);
	//wall = new Ground(600,50,1200,20)

	trash1 = new trash(1000,590,150,150)
	
	ball = new paper(140,100,50)
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  trash1.display()

  ball.display()
  ground.display()

}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-135});
	 }
 }
