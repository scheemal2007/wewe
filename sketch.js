
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine
var world

var object
var ground
var ball

function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 var options={
   isStatic:true
 }
 var optionsBall={
   restitution:1.0
 }
 
 object=Bodies.rectangle(200,200,20,20)
 World.add(world,object)
 ground=Bodies.rectangle(400,380,800,20,options)
 World.add(world,ground)
 ball=Bodies.circle(300,100,20, optionsBall)
 World.add(world,ball)
}
function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x, object.position.y, 50, 50)
  rect(ground.position.x, ground.position.y, 800, 20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)

}

