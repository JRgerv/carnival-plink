var time = 30;
var ammo = 15;
var score = 0;
var interval;
var startBird = 25;
var showBird = 0;
var birdOrder= [0,4,2,1,3];

$('#start').click(function(){
    $('#hideBox').css("display","none").css('z-index','-3');
   interval = setInterval(tick, 1000);
  addAmmo();
});

function tick(){
  if(time-- > 0){
  $('#timer').text(":"+time);
  if(time%4 == 0){
    $('.bird').each(function(index){
      if(birdOrder[showBird] == index) $(this).css('opacity','1');
      else $(this).css('opacity','0');
    });
    showBird++;
  }
}else{
    gameOver();
  }
};

function hitTarget(){
  $('img').click(function(){
    score++;
    $(this).fadeTo(2, 0);
    $(this).off();  
    removeAmmo();
  });
};
hitTarget();

function missTarget(){
  $('#shootBox').click(function(){
    removeAmmo();
  }).children().click(function(e) {
  return false;
  });
};
missTarget();

function addAmmo(){
  for (var i = 0; i < ammo; i++) {
    $('#ammoCount').append('<img src="../carnival-shooter/img/ammo.png">');
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
    clearInterval(interval);
    $('#scoreBox').text('Score: '+(score+(time/2))+' Points');
    $('#gameBox').css({opacity: 0.1});
    $('.duck').off();
    $('.bull').off();
    $('#shootBox').off();
    $('#winBox').css('display','block').css('z-index','10');
}

$('#reset').click(function(){
  location.reload();
});
// 