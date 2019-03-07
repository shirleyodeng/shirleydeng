$(document).ready(function() {
  $('.details-link').click(function(e) {
    var name = $(e.target).attr("data-name")
    $(".details-container[data-name="+name+"]").toggleClass("show")
  });

  // Scroll To Top
  toggleBackToTopButton()
  $(window).scroll(function(){
    toggleBackToTopButton()
  });
  $('.btt').click(function(e) {
    $("html, body").animate({ scrollTop: 0 }, "slow")
  });

  // WORK HARD PLAY HARD
  $(".nav-bar-link").mouseenter(function(e) {
    $(e.target)[0].innerText += " HARD"
  });
  $(".nav-bar-link").mouseleave(function(e) {
    $(e.target)[0].innerText = $(e.target)[0].innerText.replace(" HARD", "")
  });
});

function toggleBackToTopButton() {
  var navbar = $(".nav-bar-container").height()
  if ($(window).scrollTop() >= navbar) {
    $('.btt').removeClass("d-none")
  } else {
    $('.btt').addClass("d-none")
  }
}
