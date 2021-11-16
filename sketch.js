var eu;
function setup() {
  createCanvas(400,400);

  eu = createSprite(200,200,70,70);
//trex = createSprite(50,160,20,50);
}

function draw() 
{
  background(20);
  background("yellow");
if(keyDown("D")){
  background("red");
}

drawSprites();}




