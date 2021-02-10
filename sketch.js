const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground,polyImage;

function preload(){
    polyImage = loadImage("polygon.png");
}

function setup(){
createCanvas(1000,600);

engine = Engine.create();
world = engine.world;

//to create the polygonal stone
polygon=Bodies.circle(50,400,20);
World.add(world,polygon);

//to create the ground
ground = new Ground(500,590,1000,10);

//to create the platform
ground2 = new Ground(370, 490, 250, 10);

//to create the pyramid of block -  finish this as homework
box1 = new Box(340, 480, 30,30)
box2 = new Box(350, 480, 30,30);
box3 = new Box(360, 480, 30,30);
box4 = new Box(370, 480, 30,30);
box5 = new Box(380, 480, 30,30);
box6 = new Box(345, 450, 30,30);
box7 = new Box(355, 450, 30,30);
box8 = new Box(365, 450, 30,30);
box9 = new Box(375, 450, 30,30);
box10 = new Box(360, 450, 30,30);
box11 = new Box(360, 420, 30,30)
box12 = new Box(390, 420, 30,30)
box13 = new Box(420, 410, 30,30)
box14 = new Box(330, 400, 30,30)
box15 = new Box(300, 400, 30,30)
//to create the slingshot
slingshot1 = new SlingShot(polygon,{x:100,y:400})



}

function draw(){
background(0);
Engine.update(engine);
ground.display();
//to display the platform
ground2.display();

//to display the pyramid of block -  finish this as homework
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();


//to draw the polygon
imageMode(CENTER);
image(polyImage, polygon.position.x, polygon.position.y, 60,60)

//to display the sling
slingshot1.display();

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot1.fly();
  //  gameState = "launched";
}

