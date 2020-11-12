var database;

var gameState = 0;
var playerCount ;
var allPlayers;
var distance = 0;
var game,player,form;

function setup(){

  database = firebase.database();
  createCanvas(displayWidth, displayHeight);
  game = new Gamestate()
  game.getState();
  game.start();

}

function draw(){
 // background("white");

  if (playerCount === 4){
    game.updateState(1)
  }

  if (gameState === 1){
    clear();
    game.play();
  }

   // drawSprites();
  
}