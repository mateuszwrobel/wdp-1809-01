(function () {
  document.getElementById('main-menu-btn').addEventListener('click', function (e) {
    document.getElementById('main-menu').classList.add('transition');
    document.getElementById('main-menu').classList.toggle('show');
  });

  window.addEventListener('resize', function (e) {
    document.getElementById('main-menu').classList.remove('transition');
    document.getElementById('main-menu').classList.remove('show');
  });

  document.getElementById('main-menu').addEventListener('click', function (e) {
    document.getElementById('main-menu').classList.remove('show');
  });

<<<<<<< HEAD
  //Create dots for slider navigation
  var numberOfSlides = document.querySelectorAll('.blog-slider > div').length;
  for (var i = 0; i < numberOfSlides; i++) {
    var dot = document.createElement('li');
    var href = document.createElement('a');
    dot.appendChild(href);
    document.querySelector('.blog-slider-nav').appendChild(dot);
  }

  //Add slider options
  var slider = tns({
    "container": ".blog-slider",
    "navContainer": ".blog-slider-nav",
    "controls": false,
    "navAsThumbnails": true,
    "items": 1,
    "gutter": 27,
    "edgePadding": 0,
    "mouseDrag": true,
    autoplay: true,
    "autoplayButtonOutput": false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  //remove Bootstrap's grid
  var removeGrid = document.getElementsByClassName('tns-item');
  for (var i = 0; i < removeGrid.length; i++) {
    var classesToRemove = removeGrid[i].classList.value.match(/\bcol-[^\s]*/g);
    removeGrid[i].classList.remove(...classesToRemove);
  }
  
=======
  

  //Create dots for product-slider navigation
  var createDots = function (SliderId) {
    var numberOfSlides = document.querySelectorAll('#' + SliderId + ' > div').length;
    for (var i = 0; i < numberOfSlides; i++) {
      var dot = document.createElement('li');
      var href = document.createElement('a');
      dot.appendChild(href);
      document.querySelector('.products-slider-nav ul').appendChild(dot);
    }
  };

  var removeDots = function(){
    document.querySelectorAll('.products-slider-nav ul li').forEach(function(item){
    item.parentNode.removeChild(item);   
    });
  };

  //media query and event's listeners for dots
  function myFunctionLarge(mq) {
    if (mq.matches) { // If the viewport is more than 992px
      var dotsList = document.querySelectorAll('.products-slider-nav ul li');
      dotsList.forEach(function(item){ item.classList.remove('visible');});
      //hide dots not needed for current media query
      var i = 0;
      for (i; i < dotsList.length; i += 4) {
        dotsList.item(i).classList.add('visible');
      }
      if (dotsList.length % 4 != 0) {
        dotsList.item(i - 4).classList.remove('visible');
        dotsList.item(dotsList.length - 4).classList.add('visible');
      }
    } 
  }

  function myFunctionMedium(mq) {
    if (mq.matches) { // If the viewport is more than 768px and less than 991.98px
      var dotsList = document.querySelectorAll('.products-slider-nav ul li');
      dotsList.forEach(function(item){ item.classList.remove('visible');});
      //hide dots not needed for current media query
      for (var i = 0; i < dotsList.length; i += 2) {
        dotsList.item(i).classList.add('visible');
      }
      if (dotsList.length % 2 != 0) {
        dotsList.item(i - 2).classList.remove('visible');
        dotsList.item(dotsList.length - 2).classList.add('visible');
      }
    }
  }

  function myFunctionSmall(mq) {
    if (mq.matches) { // If the viewport is 767.98px wide or less
      document.querySelectorAll('.products-slider-nav ul li').forEach(function(item){ item.classList.add('visible');});
    }
  }

  var smallDevice = window.matchMedia("(max-width: 767.98px)");
  smallDevice.addListener(myFunctionSmall); // Attach listener function on state changes

  var mediumDevice = window.matchMedia("(max-width: 991.98px) and (min-width: 768px)");
  mediumDevice.addListener(myFunctionMedium); // Attach listener function on state changes

  var largeDevice = window.matchMedia("(min-width: 992px)");
  largeDevice.addListener(myFunctionLarge); // Attach listener function on state changes

  //remove Bootstrap's grid for slider to work correctly
  var removeGrid = function(){
    var elementsWithGrid = document.getElementsByClassName('tns-item');
    for (var i = 0; i < elementsWithGrid.length; i++) {
      var classesToRemove = elementsWithGrid[i].classList.value.match(/\bcol-[^\s]*/g);
      elementsWithGrid[i].classList.remove(...classesToRemove);
    }
  };

  var slider;
  var startSlider = function(sliderId){
    slider = tns({
      "container": "#" + sliderId,
      "navContainer": ".products-slider-nav ul",
      "controls": false,
      "navAsThumbnails": true,
      "items": 1,
      "slideBy": "page",
      "rewind": true,
      "gutter": 27,
      "edgePadding": 0,
      "mouseDrag": true,
      autoplay: true,
      "autoplayButtonOutput": false,
      responsive: {
        576: {
          items: 1,
          "slideBy": 1
        },
        768: {
          items: 2,
          "slideBy": 2
        },
        992: {
          items: 4,
          "slideBy": 4
        }
      }
    });
    removeGrid();
  };
  
  //TABS

>>>>>>> Add slider in section products
  function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;
    document.querySelector('.panel-bar .menu ul li a').classList.remove('active');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("nav-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "flex";
    evt.currentTarget.classList.add('active');
  }

  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      slider.destroy();
      removeDots();
      var newSliderId = e.target.getAttribute('id').split('-')[0];
      openTab(e, newSliderId);
      createDots(newSliderId);
      myFunctionSmall(smallDevice);
      myFunctionMedium(mediumDevice);
      myFunctionLarge(largeDevice);
      startSlider(newSliderId);
    });
  });
  
  //Prepare section products
  document.querySelector('.panel-bar .menu ul li a').classList.add('active');
  createDots('bed');
  // Call listener's functions at run time
  myFunctionSmall(smallDevice);
  myFunctionMedium(mediumDevice);
  myFunctionLarge(largeDevice);
  startSlider('bed');

})();
