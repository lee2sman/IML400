$(document).ready(function() {
  
  // get an attribute
  var src = $("#myPic").attr("src");
  console.log(src);
  
  
  // or set a css properties
  $("#myPic").attr("src", "https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg");
});