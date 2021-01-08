const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var polygon;
var sling;
var tries=0;
var back;
var beep;
var backSound;

function preload()
{
  back=loadImage("Towers.jpg")
  beep=loadSound("beep-07.mp3")
  backSound=loadSound("sound.mp3")
}

function setup() {
	createCanvas(1200, 580);


	engine = Engine.create();
  world = engine.world;

    //Create the Bodies Here
    ground=new Ground(600,570,1200,20);

    stand1=new Ground(390,350,200,10);
    stand2=new Ground(845,450,200,10);
    
    //Tower1
    box1=new BoxYellow(330,325,30,40);
    box2=new BoxYellow(360,325,30,40);
    box3=new BoxYellow(390,325,30,40);
    box4=new BoxYellow(420,325,30,40);
    box5=new BoxYellow(450,325,30,40);
    
    box6=new BoxOrange(345,285,30,40);
    box7=new BoxOrange(375,285,30,40);
    box8=new BoxOrange(405,285,30,40);
    box9=new BoxOrange(435,285,30,40);

    box10=new BoxRed(360,245,30,40);
    box11=new BoxRed(390,245,30,40);
    box12=new BoxRed(420,245,30,40);

    box13=new BoxBlue(375,205,30,40);
    box14=new BoxBlue(405,205,30,40);

    box15=new BoxBlue(390,165,30,40);
   
    //Tower2
    box16=new BoxBlue(770,425,30,40);
    box17=new BoxBlue(800,425,30,40);
    box18=new BoxBlue(830,425,30,40);
    box19=new BoxBlue(860,425,30,40);
    box20=new BoxBlue(890,425,30,40);
    box21=new BoxBlue(920,425,30,40);

    box22=new BoxOrange(800,385,30,40);
    box23=new BoxOrange(830,385,30,40);
    box24=new BoxOrange(860,385,30,40);
    box25=new BoxOrange(890,385,30,40);

    box26=new BoxRed(830,345,30,40); 
    box27=new BoxRed(860,345,30,40);   

    box28=new BoxYellow(845,305,30,40);
   
    polygon=new Polygon(100,200,50);

    sling=new SlingShot(polygon.body,{x:100,y:200});

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

  

  ground.display();
  stand1.display();
  stand2.display();

  
  //Tower1
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
  
  //Tower2
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();
  box28.display();

  polygon.display();
  sling.display();

  if(tries>20){
    fill("red")
    textSize(20)
    text("No need to hit the blocks,You Lost!!",500,300);

  }

  

  drawSprites();
 
  fill("black")
  textSize(20);  
  text("Tries : "+tries,500,50);

 
}

  function mouseDragged(){
    if(mouseDragged){
    
    
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
    }
  }
  function mouseReleased()
  {
    sling.fly();
  }

  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(polygon.body, {x:100, y:200}) 
      sling.attach(polygon.body);
      tries=tries+1;
      beep.play();
    }
    }
