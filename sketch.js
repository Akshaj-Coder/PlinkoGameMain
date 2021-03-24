var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=600;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  division1 = new Divisions(5,780,10,divisionHeight);
  divsion2 = new Divisions(90,780,10,divisionHeight);
  divsion3 = new Divisions(170,780,10,divisionHeight);
  divsion4 = new Divisions(260,780,10,divisionHeight);
  divsion5 = new Divisions(340,780,10,divisionHeight);
  divsion6 = new Divisions(420,780,10,divisionHeight);
  divsion7 = new Divisions(500,780,10,divisionHeight);
  divsion8 = new Divisions(580,780,10,divisionHeight);
  divsion9 = new Divisions(660,780,10,divisionHeight);
  divsion10 = new Divisions(740,780,10,divisionHeight);
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <= width-10; j+=50) {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <= width-10; j+=50) {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  division1.display();
  divsion2.display();
  divsion3.display();
  divsion4.display();
  divsion5.display();
  divsion6.display();
  divsion7.display();
  divsion8.display();
  divsion9.display();
  divsion10.display();




  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  } 
  
}