//  This is footer for all pages start******
$(function () {
  $("#header").load("header.html")
  $("#footer").load("footer.html");
})
//  This is footer for all pages end******
 // ****This is use on about Us page and Career page Gallery image hover******start
 $( ".img-wrapper" ).hover(
    function() {
      $(this).find(".img-overlay").animate({opacity: 1}, 600);
    }, function() {
      $(this).find(".img-overlay").animate({opacity: 0}, 600);
    }
  );
  
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  $overlay.hide();
  $(".img-overlay").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).prev().attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
  });
  $overlay.click(function() {
    $(this).fadeOut("slow");
  });
  $nextButton.click(function(event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) { 
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    event.stopPropagation();
  });
  $prevButton.click(function(event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    event.stopPropagation();
  });
  $exitButton.click(function() {
    $("#overlay").fadeOut("slow");
  });
 // ****This is use on about Us page and Career page Gallery image hover******end


  // ******this is for header animation start******
  
  var header = document.querySelector('.header');


  onScroll = () => {
    var scrolledPage = Math.round(window.pageYOffset);
    if (scrolledPage > 80) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }


  document.addEventListener('scroll', onScroll);
  // *******this is for header animation end********

// *********This counter animation is use on home and about us page***********start

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

$(function() {
  $(window).scroll(function() {
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});

// *********This is for counter animation***********end

// ************This is for accordian animation tab on home page start**********
$(".tab_content").hide();
$(".tab_content:first").show();
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

$('ul.tabs li').last().addClass("tab_last");
// ************This is for accordian animation tab on home page end**********

// *******this is for testimonials slider start**********
$('.testimonial').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// *******this is for testimonials slider end**********


