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

  // GIRL
  $(".girl")
  .mouseenter(function() {
    $(this).find("img[alt=techie]").addClass("d-none");
    $(this).find("img[alt=waver]").removeClass("d-none");
  })
  .mouseleave(function() {
    $(this).find("img[alt=techie]").removeClass("d-none");
    $(this).find("img[alt=waver]").addClass("d-none");
  });

  // Work
  const start = moment("2018-01-15T08:00:00");
  const keys = ["years", "months", "days", "hours", "minutes", "seconds"]
  setInterval((function() {
    var end = moment();
    var duration = moment.duration(end.diff(start));
    var data = duration._data;
    var html = '';
    keys.forEach(key => {
      var value = data[key];
      if (value !== 0) {
        measurementText = value === 1 ? key.toUpperCase().slice(0, -1) : key.toUpperCase();
        valueText = value;
        html += `<span class='mx-2'><span class='value'>${value}</span> ${measurementText}</span>`
      }
    })
    $('.counter-time').html(html);
  }), 1000);

  $('.project-link').click(function(e) {
    e.preventDefault()
    var name = $(e.target).attr("data-name")
    if (name === "European Rugby") {
      europeanRugby()
    } else if (name === "Gifter") {
      gifter()
    } else if (name === "My Cineplace") {
      mycineplace()
    } else if (name === "AdPlan") {
      adplan()
    } else if (name === "Endo") {
      endo()
    }
  });

  $('.project-close').click(function(e) {
    $(".project-container").addClass("d-none")
    $(".work").removeClass("d-none")
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

function adplan() {
  var name = "AdPlan (WIP)"
  var subheading = "React + Ruby on Rails API"
  var image = "<img src='https://res.cloudinary.com/devfclqwl/image/upload/v1556575222/shirleydeng/adplan.png' width='100%'>"
  var blurb = "A search engine to query all known display advertising in the UK, from all suppliers simultaneously. View surrounding bus routes to maximise impact. Pick ad spaces to generate a campaign plan, and it can then be purchasable from within the application.<br/>(Still in early development phase - not mobile friendly)<br/><br/>Go on, have a little browse <img src='images/back-arrow.png' class='flip-hor'><a href='https://ad-plan.co.uk' target='_blank'> go to website</a>"
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Capistrano</div><div>Docker</div><div>Git</div></div><div class='col-md-6'><div>ReactJS</div><div>HTML5</div><div>CSS3</div><div>Bootstrap</div></div>"
  var spec = "<div>> Internal Ruby on Rails API</div><div>> Data integration through CSV imports and external APIs</div><div>> Extensive use of Google Maps Platform</div><div>> Use of transportation APIs to implement bus routes feature</div><div>> Clean, flowing user browsing journey</div><div>> Relational database schema to represent and support processes</div><div>> Stripe integration to receive payments</div>"
  handleProject(name, subheading, image, blurb, techStack, spec)
}

function endo() {
  var name = "Endo at the Rotunda"
  var subheading = "React Native + Ruby on Rails API"
  var image = "<img src='https://res.cloudinary.com/devfclqwl/image/upload/v1556641817/shirleydeng/endo.png' width='100%'>"
  var blurb = "Endo at the Rotunda is London’s newest high-end sushi restaurant, helmed by third generation sushi master Endo Kazutoshi, and based in the Rotunda above what was the BBC Television Centre. A React Native mobile app was built for customers to view and manage bookings, and pre-warn the restaurant of a customer's arrival to deliver the best service."
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Git</div></div><div class='col-md-6'><div>React Native</div><div>Capistrano</div><div>AWS</div></div>"
  var spec = "<div>> Data integration through an internal Ruby on Rails API to retrieve and manage reservations</div><div>> SMS verification system using Twilio </div><div>> Background location tracking</div><div>> Separate React Native app build for restaurant staff to track locations of arriving reservations</div>"
  handleProject(name, subheading, image, blurb, techStack, spec)
}

function europeanRugby() {
  var name = "European Rugby"
  var subheading = "Ruby on Rails"
  var image = "<img src='https://res.cloudinary.com/devfclqwl/image/upload/v1551999252/shirleydeng/european-rugby.png' width='100%'>"
  var blurb = "A bespoke marketing tool designed to engage brands with the world's biggest club rugby competitions."
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Heroku</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>jQuery</div></div>"
  var spec = "<div>> Easy-to-use content management system</div><div>> Relational database schema to represent and support processes</div><div>> Responsive web design</div>"
  handleProject(name, subheading, image, blurb, techStack, spec)
}

function gifter() {
  var name = "Gifter"
  var subheading = "Ruby on Rails"
  var image = "<img src='https://res.cloudinary.com/devfclqwl/image/upload/v1551999252/shirleydeng/gifter.png' width='100%'>"
  var blurb = "A prototype of a web application that makes it easy for parents to start investing in their child's future by crowdfunding towards purposeful gifts and experiences.<br/><br/>Go on, have a little browse <img src='images/back-arrow.png' class='flip-hor'><a href='https://www.wegifter.co' target='_blank'> go to website</a>"
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Heroku</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>JavaScript</div></div>"
  var spec = "<div>> Facebook login to create an easy user registration process</div><div>> Fun, interactive event dashboard designed to engage children</div><div>> Messaging system for events</div><div>> Relational database schema to represent and support processes</div><div>> Responsive web design</div><div>> Stripe integration to receive and send payments</div>"
  handleProject(name, subheading, image, blurb, techStack, spec)
}

function mycineplace() {
  var name = "My Cineplace"
  var subheading = "Ruby on Rails"
  var image = "<img src='https://res.cloudinary.com/devfclqwl/image/upload/v1559410334/shirleydeng/my-cineplace.png' width='100%'>"
  var blurb = "A one stop platform for all things cinema - discover content, watch trailers, read reviews, find showtimes."
  var techStack = "<div class='col-md-6'><div>Ruby on Rails</div><div>PostgreSQL</div><div>Capistrano</div><div>Git</div></div><div class='col-md-6'><div>HTML5</div><div>CSS3</div><div>Bootstrap</div><div>jQuery</div></div>"
  var spec = "<div>> Admin content management system</div><div>> Data integration through external APIs and web scraping</div><div>> Relational database schema to represent and support processes</div><div>> Facebook + Google login to create a smooth user registration process</div><div>> Clean, flowing user browsing journey</div><div>> Extensive use of jQuery to create an effective search/filter feature</div><div>> User location detection to create a personal experience</div><div>> Responsive web design</div>"
  handleProject(name, subheading, image, blurb, techStack, spec)
}

function handleProject(name, subheading, image, blurb, techStack, spec) {
  var scrollTop = $(".work-container").offset().top - 40
  $("html, body").animate({ scrollTop: scrollTop }, "slow")
  $(".project-title").text(name)
  $(".project-subheading").text(subheading)
  $(".project-image-container").html(image)
  $(".project-blurb").html(blurb)
  $(".project-stack").html(techStack)
  $(".project-spec").html(spec)
  $(".work").addClass("d-none")
  $(".project-container").removeClass("d-none")
}
