var divisionHeight=300;
var groundObj;

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

  groundObj = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  var particles = [];
  var plinkos = [];
  var divisions = [];

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var k = 0; k <=width; k = k + 80 ){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));  
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 55; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 65; j <=width-30; j=j+50)
  {
    plinkos.push(new Plinko(375));
  }

  for (var j = 0; j < particles.length; j++)
  {
    particles[j].display(); 
  }

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();

  platform.display();
  ground.display()




}