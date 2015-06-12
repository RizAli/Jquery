// Prevent spoilerphobes from seeing spoiler
// solution: hide spoilers and reveal them through user interaction

// 1, Hide spoiler
$(".spoiler span").hide();

// 2, Add a button
$(".spoiler").append("<button>Reveal Spoiler</button>")

// 3, When button pressed
  // 3.1 Show the spoiler
  // 3.2 Get rid of button
$("button").click(function(){

  $(this).prev().show("slideUp");
  $(this).remove();
});



