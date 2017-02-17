var time = 30;
var ammo = 15;
var score = 0;
var interval;


$('#start').click(function(){
  // $('#hideBox').fadeTo("slow", 0,function(){});
    $('#hideBox').css("display","none").css('z-index','-3');
  var interval = setInterval(tick, 1000);
   // $('#ammoCount').append('<img src="/img/ammo.png">');
  addAmmo();
});


function tick(){
  
  

  if(time>= 1){
    time -= 1;

  $('#timer').text(time);
}else{
    // GAME OVER AND STOP INTERVAL
      // stop interval
    clearInterval(interval);
    //   // STOP GAME
    // gameOver();
  }
};


// Hide target on click
function hitTarget(){
  $('img').click(function(){
    ammo-=1;
    score+=1;
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

function addAmmo(){
  for (var i = 0; i < ammo; i++) {
    $('#ammoCount').append('<img class="count'+i+'" src="../carnival-shooter/img/ammo.png">');
  }
}
function removeAmmo(){
  
  console.log('.count'+(ammo-1));
};

