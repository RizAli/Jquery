// Problem: user when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - lightbox


  //An image
  //A caption
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
$overlay.append($image);

// Add image to overlay
$("body").append($overlay);

// Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  $overlay.show();
  //Show the overlay


  //Get child's alt attribute and set caption.
});


$overlay.click(function(){
  $overlay.hide();
});

//When overlay is clicked
  //hide the overlay