var car , wall;
var speed,mass;





function setup() {
  createCanvas(800,400);
 car =  createSprite(50, 200, 50, 50);
 wall = createSprite(350,200,50,80);

 speed = random(55,90);
 mass = random(400,1500);2

 car.velocityX = speed;
 car.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)){
  car.velocityX = 0;
  
  var deformation = speed*mass*speed*0.5/22500;

  if(deformation<100){
    car.shapeColor = "yellow";

  }

  if(deformation>180){
    car.shapeColor = "red";
  }
}

  drawSprites();
}