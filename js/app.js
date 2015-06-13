// Problem: user when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - lightbox


  //An image
  //A caption
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

// add overlay
$("body").append($overlay);



// Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


$overlay.click(function(){
  $overlay.hide();
});

//When overlay is clicked
  //hide the overlay