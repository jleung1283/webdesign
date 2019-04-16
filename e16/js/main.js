$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#word-5').toggleClass('black');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'goldenrod');
	$('#word-4').toggleClass('cyan');
  });
  $('#number3').hover(function() {
    $('#number3').css('color', 'black');
	$('#word-3').toggleClass('yellow');
  });
  $('#number2').mouseenter(function() {
    $('#number2').css('color', 'pink');
	$('#word-2').toggleClass('silver');
  });
  $('#number1').click(function() {
    $('#number1').css('color', 'purple');
    $('#word-1').toggleClass('gold');
  });
});

$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');
  // added a message to the console, helpful in debugging
  console.log('added white');
  $('body').toggleClass('bodyBG');
});
