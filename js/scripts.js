var time = 30;
var ammo = 15;
var interval;


$(document)

$('#start').click(function(){
  $('#hideBox').fadeTo("slow", 0,function(){});
  
  var interval = setInterval(tick, 1000);
 
});


function tick(){
  time -= 1;
  $('#timer').text(time);
  

  if(time<= 0){
    // GAME OVER AND STOP INTERVAL
      // stop interval
    clearInterval(interval);
      // STOP GAME
    gameOver();
  }
}

