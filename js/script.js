$(document).ready(function() {
  $('.details-link').click(function(e) {
    var name = $(e.target).attr("data-name")
    $(".details-container[data-name="+name+"]").toggleClass("show")
  });

  // Scroll To Top
  toggleBackToTopButton()
  
  $(window).scroll(function() {
    toggleBackToTopButton()
  });

  $('.btt').click(function() {
    goToTop()
  });

  // WORK HARD PLAY HARD
  $(".nav-bar-link").mouseenter(function(e) {
    $(e.target)[0].innerText += " HARD"
  });
  $(".nav-bar-link").mouseleave(function(e) {
    $(e.target)[0].innerText = $(e.target)[0].innerText.replace(" HARD", "")
  });

  // Work
  $('.project-link').click(function(e) {
    e.preventDefault()
    var name = $(e.target).attr("data-name")
    if (name === "European Rugby") {
      europeanRugby()
    } else if (name === "Gifter") {
      gifter()
    } else if (name === "MyCineplace") {
      mycineplace()
    }
  });

  $('.project-close').click(function(e) {
    $(".project-container").addClass("d-none")
    $(".projects").removeClass("d-none")
  });
});

function goToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow")
}

function toggleBackToTopButton() {
  var navbar = $(".nav-bar-container").height()
  if ($(window).scrollTop() >= navbar) {
    $('.btt').removeClass("d-none")
  } else {
    $('.btt').addClass("d-none")
  }
}

function europeanRugby() {
  var name = "European Rugby"
  var imageName = "https://res.cloudinary.com/devfclqwl/image/upload/v1551999252/shirleydeng/european-rugby.png"
  var blurb = "A bespoke marketing tool designed to engage brands with the world's biggest club rugby competitions."
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Heroku</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>jQuery</div></div>"
  var spec = "<div>> Easy-to-use admin system to create and manage company pages</div><div>> Relational database schema to represent and support processes</div><div>> Responsive web design</div>"
  handleProject(name, imageName, blurb, techStack, spec)
}

function gifter() {
  var name = "Gifter"
  var imageName = "https://res.cloudinary.com/devfclqwl/image/upload/v1551999252/shirleydeng/gifter.png"
  var blurb = "A prototype of a web application that makes it easy for parents to start investing in their child's future by crowdfunding towards purposeful gifts and experiences.<br/><br/>Go on, have a little browse <img src='images/back-arrow.png' class='flip-hor'><a href='https://www.gifter.tech' target='_blank'> go to website</a>"
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Heroku</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>jQuery</div></div>"
  var spec = "<div>> Facebook login to create an easy user registration process</div><div>> Fun, interactive event dashboard designed to engage children</div><div>> Messaging system for events</div><div>> Relational database schema to represent and support processes</div><div>> Responsive web design</div><div>> Stripe integration to receive and send payments</div>"
  handleProject(name, imageName, blurb, techStack, spec)
}

function mycineplace() {
  var name = "MyCineplace"
  var imageName = "https://res.cloudinary.com/devfclqwl/image/upload/v1551999245/shirleydeng/mycineplace.png"
  var blurb = "A one stop platform for all things cinema - discover content, watch trailers, read reviews, find showtimes.<br/><br/>Go on, have a little browse <img src='images/back-arrow.png' class='flip-hor'><a href='https://www.mycineplace.com' target='_blank'> go to website</a>"
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Capistrano</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>jQuery</div></div>"
  var spec = "<div>> Admin data management system</div><div>> Data integration through external APIs and web scraping</div><div>> Facebook + Google login to create a smooth user registration process</div><div>> Clean, flowing user browsing journey</div><div>> Relational database schema to represent and support processes</div><div>> Responsive web design</div><div>> User location detection to create a personal experience</div>"
  handleProject(name, imageName, blurb, techStack, spec)
}

function handleProject(name, imageName, blurb, techStack, spec) {
  goToTop()
  $(".project-title").text(name)
  $(".project-image").attr("src", imageName)
  $(".project-blurb").html(blurb)
  $(".project-stack").html(techStack)
  $(".project-spec").html(spec)
  $(".projects").addClass("d-none")
  $(".project-container").removeClass("d-none")
}
