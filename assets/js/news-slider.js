// <!-- slider script1 start  -->
    
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });
     
  
      // <!-- slider script1 end  -->
  
      // <!-- slider script2 start  -->
  
  
    $('.slider2').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group2');
  var $slides = $this.find('.slide2');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
  var animateLeft, slideLeft;
  
  advance();
  
  if ($group.is(':animated') || currentIndex === newIndex) {
  return;
  }
  
  bulletArray[currentIndex].removeClass('active');
  bulletArray[newIndex].addClass('active');
  
  if (newIndex > currentIndex) {
  slideLeft = '100%';
  animateLeft = '-100%';
  } else {
  slideLeft = '-100%';
  animateLeft = '100%';
  }
  
  $slides.eq(newIndex).css({
  display: 'block',
  left: slideLeft
  });
  $group.animate({
  left: animateLeft
  }, function() {
  $slides.eq(currentIndex).css({
    display: 'none'
  });
  $slides.eq(newIndex).css({
    left: 0
  });
  $group.css({
    left: 0
  });
  currentIndex = newIndex;
  });
  }
  
  function advance() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
  if (currentIndex < ($slides.length - 1)) {
    move(currentIndex + 1);
  } else {
    move(0);
  }
  }, 4000);
  }
  
  $('.next_btn2').on('click', function() {
  if (currentIndex < ($slides.length - 1)) {
  move(currentIndex + 1);
  } else {
  move(0);
  }
  });
  
  $('.previous_btn2').on('click', function() {
  if (currentIndex !== 0) {
  move(currentIndex - 1);
  } else {
  move(3);
  }
  });
  
  $.each($slides, function(index) {
  var $button = $('<a class="slide_btn">&bull;</a>');
  
  if (index === currentIndex) {
  $button.addClass('active');
  }
  $button.on('click', function() {
  move(index);
  }).appendTo('.slide_buttons');
  bulletArray.push($button);
  });
  
  advance();
  });
  
  
  // <!-- slider script2 end  -->
  
  //  <!-- slider script3 start  -->
  
  
      $('.slider3').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group3');
    var $slides = $this.find('.slide3');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
    return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
    slideLeft = '100%';
    animateLeft = '-100%';
    } else {
    slideLeft = '-100%';
    animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
    display: 'block',
    left: slideLeft
    });
    $group.animate({
    left: animateLeft
    }, function() {
    $slides.eq(currentIndex).css({
      display: 'none'
    });
    $slides.eq(newIndex).css({
      left: 0
    });
    $group.css({
      left: 0
    });
    currentIndex = newIndex;
    });
    }
    
    function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
    }, 4000);
    }
    
    $('.next_btn3').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
    move(currentIndex + 1);
    } else {
    move(0);
    }
    });
    
    $('.previous_btn3').on('click', function() {
    if (currentIndex !== 0) {
    move(currentIndex - 1);
    } else {
    move(3);
    }
    });
    
    $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
    $button.addClass('active');
    }
    $button.on('click', function() {
    move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
    });
    
    advance();
    });
  
    
    {/* <!-- slider script3 end  --> */}


      //  <!-- slider script4 start  -->
  
  
      $('.slider4').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group4');
        var $slides = $this.find('.slide4');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn4').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn4').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script4 end  --> */}


        //  <!-- slider script5 start  -->
  
  
      $('.slider5').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group5');
        var $slides = $this.find('.slide5');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn5').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn5').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script5 end  --> */}

          //  <!-- slider script6 start  -->
  
  
      $('.slider6').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group6');
        var $slides = $this.find('.slide6');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn6').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn6').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script6 end  --> */}

          //  <!-- slider script7 start  -->
  
  
      $('.slider7').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group7');
        var $slides = $this.find('.slide7');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn7').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn7').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script7 end  --> */}

          //  <!-- slider script8 start  -->
  
  
      $('.slider8').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group8');
        var $slides = $this.find('.slide8');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn8').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn8').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script8 end  --> */}

          //  <!-- slider script5 start  -->
  
  
      $('.slider9').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group9');
        var $slides = $this.find('.slide9');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
        });
        }
        
        function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
        }, 4000);
        }
        
        $('.next_btn9').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
        });
        
        $('.previous_btn9').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
        });
        
        $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
        $button.addClass('active');
        }
        $button.on('click', function() {
        move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
        });
        
        advance();
        });
      
        
        {/* <!-- slider script9 end  --> */}
  
  
  