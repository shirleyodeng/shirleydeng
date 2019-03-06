$(document).ready(function() {

  // toggleBackToTopButton()

  $('#work-link').click(function(e) {
    e.preventDefault()
    var workSection = $("#work")
    $('html, body').animate({ scrollTop: workSection.offset().top }, 'slow')
  });

  $('.details-link').click(function(e) {
    var name = $(e.target).attr("data-name")
    $(".details-container[data-name="+name+"]").toggleClass("show")
  });

  // $(window).scroll(function(){
  //   toggleBackToTopButton()
  // });

  $('.back-to-top').click(function(e) {
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

// function toggleBackToTopButton() {
//   var workSectionTop = $("#work").offset().top
//   if ($(window).scrollTop() >= workSectionTop) {
//     $('.back-to-top').removeClass("d-none")
//   } else {
//     $('.back-to-top').addClass("d-none")
//   }
// }
