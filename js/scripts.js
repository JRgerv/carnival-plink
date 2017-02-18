var time = 30;
var ammo = 15;
var score = 0;
var interval;


$('#start').click(function(){
  // $('#hideBox').fadeTo("slow", 0,function(){});
    $('#hideBox').css("display","none").css('z-index','-3');
   interval = setInterval(tick, 1000);
   // $('#ammoCount').append('<img src="/img/ammo.png">');
  addAmmo();
});


function tick(){
  if(time>= 1){
    time -= 1;
  $('#timer').text(time);
}else{
    gameOver();
  }
};


// Hide target on click
function hitTarget(){
  $('img').click(function(){
    score+=1;
    $(this).fadeTo(2, 0);
    $(this).off();  
    console.log(ammo);
    console.log(score);
    removeAmmo();
  });
};
hitTarget();

function missTarget(){
  $('#shootBox').click(function(){
    console.log(ammo);
    removeAmmo();
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
  ammo-=1;
  $('#ammoCount img').last().remove();
  if(ammo<=0){
    gameOver();
  }
}


function gameOver(){
    console.log('game over');
    console.log('Score: '+(score+(time/2))+' Points');
    clearInterval(interval);
    $('#scoreBox').text('Score: '+(score+(time/2))+' Points');
    $('#gameBox').css({opacity: 0.1});
    $('.duck').off();
    $('.bull').off();
    $('#shootBox').off();
    $('#winBox').css('display','block').css('z-index','10');
}

