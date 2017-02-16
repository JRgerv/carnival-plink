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
function hitTarget(){
  $('img').click(function(){
    ammo-=1;
    $(this).toggle(250);  
    console.log(ammo);
  });
};
hitTarget();

function missTarget(){
  $('#shootBox').click(function(){
    ammo -= 1;
    console.log(ammo);
  }).children().click(function(e) {
  return false;
  });
};
missTarget();

