$(document).ready(function() {
  
  // get a css property
  var size = $("#third").css("font-size");
  console.log(size);
  
  var color = $("#third").css("color");
  console.log(color);
  
  
  // or set a css properties
  $("#third").css("color", "blue");
    

  console.log(color);
    
  $("p").css("text-decoration", "underline");
});