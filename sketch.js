
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var ground1, treeIMG, boyIMG, tree, boy, stone1, mango1, mango2, mango3, mango4, mango5, mango6, throw1


function preload()
{
	treeIMG=loadImage("tree.png")
	boyIMG=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 600);
	
	engine = Engine.create();

	world = engine.world;

  //Create the Bodies Here.
  
  

	ground1= new Ground(400,height-20, width,20)

	stone1= new Stone(150,500,25)

	mango1= new Mango(450,250, 25)
	mango2= new Mango(550,200, 25)
	mango3= new Mango(550,250, 25)
	mango4= new Mango(650,250, 25)
	mango5= new Mango(650,200, 25)
	mango6= new Mango(750,250, 25)

	throw1= new Throw(stone1.body, {x: 150,y: 500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  imageMode(CENTER);

  image(treeIMG, 600, 350, 500,500);

  image(boyIMG, 200, 540, 175,175);

  

  ground1.display();
  
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  throw1.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    
    throw1.fly();

}


function detectCollision(stone, mango){
  mpos = mango.body.position;

  spos = stone.body.position;

  var distance = dist(spos.x, spos.y, mpos.x, mpos.y)
   if(distance <= mango.radius + stone.radius){
    Matter.Body.setStatic(mango.body, false);
  }


}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x: 150,y: 500})

		throw1.attach(stone1.body);
		
	}


}
