var Frect,Mrect;


function setup() {
  createCanvas(800,400);
  Frect=createSprite(200, 200, 50, 50);
  Frect.debug=true;
  Frect.shapeColor="blue"
  Mrect=createSprite(400,200,50,50);
  Mrect.debug=true;
  Mrect.shapeColor="blue"
}

function draw() {
  background(0);  
Mrect.x=World.mouseX;
Mrect.y=World.mouseY;

if(Mrect.x-Frect.x<Mrect.width/2+Frect.width/2 &&
  Frect.x-Mrect.x<Mrect.width/2+Frect.width/2
  && Mrect.y-Frect.y<Mrect.width/2+Frect.width/2
  && Frect.y-Mrect.y<Mrect.width/2+Frect.width/2)
{
  Frect.shapeColor="red";
  Mrect.shapeColor="red";
}


  drawSprites();
}