var wall , thickness;
var bulllet,speed,mass;





function setup() {
  createCanvas(800,400);
 bullet =  createSprite(50, 200, 50, 20);
 wall = createSprite(1200,200,thickness,50);

 speed = random(223,321);
 mass = random(30,52);
 thickness = random(22,83);

 bullet.velocityX = speed;
 bullet.shapeColor = "blue";
}

function draw() {
  background(0);  

if(collided(bullet,wall)){
  bullet.velocityX = 0;
  
  var damage = 0.5*speed*mass*speed/(thickness*thickness*thickness);

  if(damage<10){
    bullet.shapeColor = "yellow";

  }

  if(damage>10){
    bullet.shapeColor = "red";
  }
}

function collided(lbullet,lwall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>wallLeftEdge){
  return true;
}
return false;
}

  drawSprites();
}