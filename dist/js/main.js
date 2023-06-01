(function($) { 
    $(function() { 
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul.nav-list').slideToggle();
      });
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery); 
  // -- YouTube/Vimeo Frame Mobile Friendly --//
  $(function() {
    var $allVideos = $("iframe[src*='www.youtube.com'], iframe[src*='player.vimeo.com']");
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });
    $(window).resize(function() {
      $allVideos.each(function() {
        var $el = $(this);
        var newWidth = $el.parent().width();
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));
      });
    }).resize();
  });
  // -- Mobile Button --//
  $(document).ready(function(){
    $("parent").click(function(){
    $("ul").toggleClass("child");
    });
  });
// -- FadeIn on Scroll --//
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
// -- Vanilla JS SVG animation event -- //
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animation-svg');
    }
  });
});

observer.observe(document.querySelector('.animation-start'));