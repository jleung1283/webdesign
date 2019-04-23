$(document).mousemove(function(e){
    $("#image").stop().animate({left:e.pageX, top:e.pageY}, 1000, function() {
    // Animation complete.
  });
});
$(document).mousemove(function(e){
    $("#cheese").css({left:e.pageX, top:e.pageY});
});