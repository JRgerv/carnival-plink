var time = 30;
var ammo = 15;
var interval;


$('#start').click(function(){
  // $('#hideBox').fadeTo("slow", 0,function(){});
    $('#hideBox').css("display","none").css('z-index','-3');
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
};


// Hide target on click
function clickTarget(){
  $('img').click(function(){
    $(this).toggle(250);  
    console.log('log')
  });
};
clickTarget();

