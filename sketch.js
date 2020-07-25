var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roofObject;
var chain;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  bobObject1= new Box(150,340,35,35);
  bobObject2= new Box(190,340,35,35);
  bobObject3= new Box(230,340,35,35);
  bobObject4= new Box(270,340,35,35);
  bobObject5= new Box(310,340,35,35);
  roofObject= new Roof(240,70,250,10);

  Engine.run(engine);
  var options = {
    bodyA: bobObject1.body,
    bodyB: roofObject.body,
    stiffness:0.04,
    length:60
}
var chain  = Constraint.create(options);
        World.add(world, chain);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();


 line(bobObject1.body.position.x,bobObject1.body.position.y,roofObject.body.position.x,roofObject.body.position.y)
 
 
}



