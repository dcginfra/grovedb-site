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
// -- Tabs Script -- //
$(document).ready(function() {
  $('#vertical_tab_nav > ul > li > a').eq(0).addClass("selected");
  $('#vertical_tab_nav > div > article').eq(0).css('display', 'block');
  $('#vertical_tab_nav > ul').click(function(e) {
    if ($(e.target).is("a")) {
      $('#vertical_tab_nav > ul > li > a').removeClass("selected");
      $(e.target).addClass("selected");
      var clicked_index = $("a", this).index(e.target);
      $('#vertical_tab_nav > div > article').css('display', 'none');
      $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();
    }
    $(this).blur();
    return false;
  });
}); 
$(".tab_drawer_heading").click(function() {
  $("article").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();
  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");
  $("ul.tabs li a").removeClass("selected");
  $("ul.tabs li a[rel^='"+d_activeTab+"']").addClass("selected");
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