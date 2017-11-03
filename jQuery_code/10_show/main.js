$(document).ready(function() {
  
  $("#p1").click(function() {
    $("#p2").show();
  });
  
  $("#p2").click(function() {
    $("#p3").show();
  });
  
  $("#p3").click(function() {
    $("#p4").show();
  });
  
  $('#p4').click(function() {
    $('p').hide();
  })
  
});