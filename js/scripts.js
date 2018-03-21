$(document).ready(function() {
  /*Script for tooltips
  $('[data-toggle="tooltip"]').tooltip();*/
  $("#my-carousel").carousel({interval:2000});
  /*Pause/Play the carousel*/
  $("#carousel-button").click(function() {
    if($("#carousel-button").children("span").hasClass("fa-pause")) {
      $("#my-carousel").carousel('pause');
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");
    } else if($("#carousel-button").children("span").hasClass("fa-play")) {
      $("#my-carousel").carousel('cycle');
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });
});
