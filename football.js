var start, end, numR, numL;
numL = 0;
numR = 0;
$('.numR').html(numR);
$('.numL').html(numL);
$('.ball').on('mousedown', function(){
start = new Date;
});

$('.ball').on('mouseup', function(){
end = new Date;
});

$('.ball').on('click', function(){
var posH, posW; 
var t = 800;
if ((end - start) > 500) t = 400;
var coords = $(this).position();
var height = parseInt($('.field').css('height'));
var per = Math.floor(height / 100);
var randomInt = Math.floor(Math.random() * 100);
posH = per * randomInt;
if ((height - posH) < 100) posH -= (100 - (height - posH));
if (coords.left > 0) posW = 0;
else posW = parseInt($('.field').css('width')) - 100;
$(this).animate({
  top: posH,
  left: posW
}, t, 'swing', function() {
    if (posH < per * 55 && posH > per * 40) {
     dis(posW);
    };
  });
});

function dis(posW) {
  if (posW) {
   ++numR;
    $('.numR').html(numR);
  }
  else {
    ++numL;
    $('.numL').html(numL);
  }
     $('#text').show();
      setTimeout(function(){
        $('#text').fadeOut(1000);
      }, 1000);
    
  };