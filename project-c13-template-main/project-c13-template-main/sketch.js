var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leafImg, orange, orangeImg, red, redImg;
var apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  spawnapples();
  spawnleaves();
  drawSprites();
  
}

function spawnleaves() {

if (frameCount % 60 === 0) {
     leaf = createSprite(600,100,10,10);
    leaf.x = Math.round(random(10,600));
    leaf.addImage(leafImg);
    leaf.scale = 0.09;
    leaf.velocityY = 3;










}

if (frameCount % 60 === 0) {
  orange = createSprite(600,100,10,10);
 orange.x = Math.round(random(12,598));
 orange.addImage(orangeImg);
 orange.scale = 0.08;
 orange.velocityY = 3;

}

if (frameCount % 60 === 0) {
  red = createSprite(600,100,10,10);
 red.x = Math.round(random(15,595));
 red.addImage(redImg);
 red.scale = 0.09;
 red.velocityY = 3;

}
}

function spawnapples(){

  if (frameCount % 60 === 0) {
    apple = createSprite(600,100,10,10);
   apple.x = Math.round(random(10,600));
   apple.addImage(appleImg);
   apple.scale = 0.09;
   apple.velocityY = 3;

}
}