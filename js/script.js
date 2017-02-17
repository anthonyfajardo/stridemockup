// ************************
//  smooth scroll
// ************************

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -50
        }, 1000);
        return false;
      }
    }
  });
});

// ********************************
// navbar click outside to close  
// ********************************

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// ********************************
// Navbar and header offset for the rest of the pages  
// ********************************

$(function(){
  var navHeight = $(".navbar").height(); 
  var newNavHeight = navHeight + 60;
  console.log(navHeight);
  console.log(newNavHeight);

  $(".headerOffset").css("padding-top", newNavHeight);
  $(".headerOffset").css("padding-bottom", 30);


});



// ********************************
// isotope imagesLoaded
// ********************************

