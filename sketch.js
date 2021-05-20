var  database;
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var form,player,game;

function setup(){
canvas = createCanvas(400,400);
  database = firebase.database();
  game=new Game()
  game.gameState();
  game.start()
  
}

function draw(){
  //background("white");
  
   
  
}

