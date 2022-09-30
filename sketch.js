var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg;
var i,bomb, powerImg;

function preload(){
  pathImg=loadImage("path.png") //loadImage de path (camino)
  boyImg=loadAnimation("jake1.png", "jake2.png", "jake3.png" ,"jake4.png", "jake5.png")//loadAnimation de boy (niño)
  bombImg=loadImage("bomb.png")
  powerImg=loadImage("power.png")
}

function setup(){
  
 createCanvas(400,400);
 path=createSprite(200,0,400,400);//crear sprite de path (camino) 
 path.addImage("suleo",pathImg);//agregar imagen de path
 path.velocityY=2;//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.scale=1.2;
 path.y = height/2;

 boy=createSprite(200,200,20,20);//crear sprite de boy (niño)
 boy.addAnimation("correr",boyImg); //agregar animación para boy
 boy.scale=0.8;

 bomb=createSprite(200,-100,20,20);
 bomb.addImage("bomb", bombImg);
 bomb.scale=0.08;
 bomb.velocityY=2;

 power=createSprite(80,-400,20,20);
 power.addImage("poder",powerImg);
 power.scale=0.1
 power.velocityY=2;
 
  
// crear  left Boundary (límite izquierdo)
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible=false;////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible=false;//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
 
  
  boy.x=mouseX// boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);// colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 500 ){
    path.y = height/2;
  }
  if(boy.collide(bomb)){
    path.velocityY=0
    boy.velocityY=0
  }
 if(boy.collide(power)){
   boy.x=200;
   boy.y=200;
 }
  

  
  drawSprites();

  


}
