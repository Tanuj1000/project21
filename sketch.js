const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObject, leftSide, rightSide;
var barrier, barrier2;
var ball, ball2, ball3, ball4, ball5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;
	
	
	//creating bodies//
	
	groundObject = new ground(width/2,690,width,20);
	leftSide = new ground(960,610,20,135);
 	rightSide = new ground(1210,610,20,135);

	barrier = new Barrier(1590,350,10,700);
	barrier2 = new Barrier(width/2,5,1600,20);

	ball = new Ball(50,200,30);
	ball2 = new Ball(100,200,30)
	ball3 = new Ball(150,200,30);
	ball4 = new Ball(200,200,30)
	
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
 background("lightgreen");

 fill("red")
 textSize(20)
 text("Use Up Arrow, Down Arrow, Right Arrow and Left Arrow key to put the waste in the bin.", 400, 120)

 fill("purple")
 textSize(22)
 text("Project 21 - A simple game of throwing crumpled paper balls in a waste paper basket", 370, 80)
  
  
  groundObject.display();
  leftSide.display();
  rightSide.display();

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();

  barrier2.display();
  barrier.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
  
	}

	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(ball2.body,ball2.body.position,{x:50,y:-50});
	
	  }

	if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball3.body,ball4.body.position,{x:50,y:-50});
	
	  }

	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball4.body,ball4.body.position,{x:40,y:-50});
	
	  }
}