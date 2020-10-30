/*var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;*/
var zooImg;
var zoo;
var form;
var backgroundImg;
var backgroundImg2;
var backgroundImg3;
var tigerImg,elephantImg,lionImg,rabbitImg,birdImg,monkeyImg,squirrelImg,counterImg,ticketImg;
var tiger,elephant,lion,rabbit,monkey,squirrel,bird,counter,ticket;
var player;
var gameState = 0;
var opensound;

function preload(){
zooImg = loadImage("animalspics/zoo.png");
backgroundImg = loadImage("animalspics/background.jpg");
backgroundImg2 = loadImage("animalspics/background2.jpg");
backgroundImg3 = loadImage("animalspics/background3.jpg");
tigerImg = loadImage("animalspics/tiger.png");
elephantImg = loadImage("animalspics/elephant.png");
lionImg = loadImage("animalspics/lion.png");
rabbitImg = loadImage("animalspics/rabbit.png");
monkeyImg = loadImage("animalspics/monkey.png");
squirrelImg = loadImage("animalspics/squirrel.png")
birdImg = loadImage("animalspics/bird.png");
counterImg = loadImage("animalspics/counter.png");
ticketImg = loadImage("animalspics/ticket.png");
opensound = loadSound("animalsounds/opening.mp3");
}
function setup() {
  createCanvas(displayWidth-150,displayHeight-100);

zoo = createSprite(displayWidth/2 - 320, displayHeight/2 - 450);
zoo.addImage("zoo",zooImg);
zoo.scale = 2;

counter = createSprite(displayWidth/2 - 67, displayHeight/2 - 10);
counter.addImage("counter",counterImg);
counter.scale = 1.3;
counter.visible = false;

ticket = createSprite(displayWidth/2 - 320, displayHeight/2 - 450);
ticket.addImage("ticket",ticketImg);
ticket.scale = 2;
ticket.visible = false;

tiger = createSprite(displayWidth/2 + 420, displayHeight/2 +320);
tiger.addImage("tiger",tigerImg);
tiger.scale = 1;

monkey = createSprite(displayWidth/2 + 360, displayHeight/2 - 190);
monkey.scale = 1.5;
monkey.addImage("monkey",monkeyImg);

squirrel = createSprite(displayWidth/2 - 780, displayHeight/2 +160);
squirrel.scale = 0.3;
squirrel.addImage("squirrel",squirrelImg);

bird = createSprite(displayWidth/2 + 280, displayHeight/2 - 160);
bird.scale = 0.7;
bird.addImage("bird",birdImg);
bird.visible = false;

  player = new Player();
form = new Form();
}

function draw() {
background(backgroundImg);
form.display();

if (gameState === 1) {
 background(backgroundImg2);
form.title.style('color', 'brown');
form.title.html("Virtual Zoo");
form.title.position(displayWidth/2 - 520, displayHeight/2 - 570);
form.title.style('font-size', '170px');
form.title.visible = true;
bird.visible = true;
tiger.visible = false;
monkey.visible = false;
squirrel.visible = false;
zoo.visible = false;

form.greeting.style('color','blue');
form.greeting.style('font-size', '100px');
form.greeting.position(displayWidth/2 - 250, displayHeight/2 - 200);
form.greeting.html("Hello \n" + player.name);


form.button2.position(displayWidth/2 - 200, displayHeight/2 +70);
form.button2.style('width', '400px');
form.button2.style('height', '40px');
form.button2.style('background', 'orange');
form.button2.visible = true;
}

if (gameState === 2) {
  background(backgroundImg3); 
  form.vanish();
  bird.visible = false;
  counter.visible = true;
}

drawSprites();

}