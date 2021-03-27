
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render
var treeIMG;


function preload()
{
	boyIMG = loadImage("boy.png");
    treeIMG = loadImage("tree.png");
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
//tree1= new tree(625,400,300,500);

stone1 = new Stone(160,120, 20, 20)
	boy=createSprite(160, 540);
	boy.addImage(boyIMG);
	boy.scale = 0.125;
mango1 = new Mango(576,246,30);
mango2 = new Mango(614,208,30);
mango3 = new Mango(618,247,30);
mango4 = new Mango(656,216,30);
mango5 = new  Mango(650,175,30);
mango6 = new Mango(686,167,30);
mango7 = new Mango(694,203,30);
mango8 = new Mango(586,280,30);
mango9 = new Mango(590,313,30);
mango10 = new Mango(722,178,30);
mango11 = new Mango(553,282,30);
mango12 = new Mango(618,284,30);
mango13 = new Mango(644,259,30);
mango14 = new Mango(710,134,30);
mango15 = new Mango(618,313,30);
mango16 = new Mango(656,295,30);
mango17 = new Mango(677,252,30);
mango18 = new Mango(711,224,30);
mango19 = new Mango(690,288,30);
mango20 = new Mango(718,254,30);
mango21 = new Mango(715,300,30);
mango22 = new Mango(740,278,30);
mango23  = new Mango(747,229,30);
mango24 = new Mango(764,248,30);
mango25 = new Mango(772,287,30);
	rope1 = new Rope(stone1.body,{x:94, y:470})
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Render.run(render);
	Engine.run(engine);


}


function draw() {
  
  background(255);
  Engine.update(engine);
  ground.display();
 // tree1.display()
 image(treeIMG,525,100, 300,500)
  stone1.display()

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display(); 
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();	 
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
rope1.display();

drawSprites();

  text(mouseX+":"+mouseY,600,50)

 
}
function detect(stone,mango){
	mangoPosition = mango.body.position;
	stonePosition = stone.body.position;
	var distance = dist(mangoPosition.x,mangoPosition.y, stonePosition.x,stonePosition.y);
	if (distance<mango.width+stone.width){
		Body.setStatic(mango.body,false);
	}
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope1.fly();
    
}
function keyPressed(){
	if(keyCode===32){
		rope1.attach(stone1.body);
	}
}
