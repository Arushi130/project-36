var dog;
var happyDog;
var Database;
var foodS;
var foodStock;

function foodSTock()
foodStock=database.ref('food');
foodStock.on("value,readStock");


feedTime=database.ref('FeedTime');
fedTime.on("value",function(date){
  lastFed=data.val();
});

//function to update gameState in database
function update(state){
  data.ref('/').update({
    gameState:state
  });
}


//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}
//read gameState from database
readState=database.ref('gameState');
readState.on("value",function(data){
gameState=data.val();
});
function draw() {  
  background("yellow",46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happydog);
  }
  if(gameState="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  } else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }
  drawSprites();
  //add styles here

}

