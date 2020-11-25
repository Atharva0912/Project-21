var bullet;
var wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(50,80);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(500, 200, 100, 50);
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  

 if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/22500;
   if(deformation>100){
    bullet.shapeColor = "green";
   }
   if(deformation > 100  &&  deformation < 180){
    bullet.shapeColor = "yellow";
   }
   if(deformation < 180){
    bullet.shapeColor = "red";
   }

   if(hasCollided(bullet,wall)){
     bullet.velocityX = 0;
 var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
     if(damage > 10){
       wall.shapeColor = "red";
     }
     if(damage < 10){
      wall.shapeColor = "green"
    }
   }
 }

  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.y;
wallleftEdge = wall.x;
 if(bulletRightEdge>=wallleftEdge){
   return true
 }
   return false
}