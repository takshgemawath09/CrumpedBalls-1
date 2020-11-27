
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground= new Ground(400,700,800,20);
	
	
	
	box1= new Box(600,600,20,150);
	
	box2 =new Box(650,650,125,20);

	box3 =new Box(700,600,20,150);
	

	 paper = new Paper(100,650,20,20);
	 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  rectMode(CENTER);






  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  Fly();
}
 function Fly(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:2,y:-4.0})
	}
 }


