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

  //Create dots for slider navigation, it requires slider container id and ul selector for dots navigation
  function createDots(SliderId, listSelector) {
    var numberOfSlides = document.querySelectorAll('#' + SliderId + ' > div').length;
    for (var i = 0; i < numberOfSlides; i++) {
      var dot = document.createElement('li');
      var href = document.createElement('a');
      dot.appendChild(href);
      document.querySelector(listSelector).appendChild(dot);
    }
  };  

  function removeDots(){
    document.querySelectorAll('.products-slider-nav ul li').forEach(function(item){
    item.parentNode.removeChild(item);   
    });
  };

  //Create dots for blog slider navigation
  createDots('blog-slider', '.blog-slider-nav');
  
  //Add blog slider options
  var blogSlider = tns({
    "container": "#blog-slider",
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

  //remove Bootstrap's grid for slider to work correctly
  function removeGrid(){
    var elementsWithGrid = document.getElementsByClassName('tns-item');
    for (var i = 0; i < elementsWithGrid.length; i++) {
      var classesToRemove = elementsWithGrid[i].classList.value.match(/\bcol-[^\s]*/g);
      elementsWithGrid[i].classList.remove(...classesToRemove);
    }
  };

  //media query and event's listeners for dots
  function screenCheckLarge(mq) {
    if (mq.matches) { // If the viewport is more than 992px
      screenCheckHelper(4);
    } 
  }

  function screenCheckMedium(mq) {
    if (mq.matches) { // If the viewport is more than 768px and less than 991.98px
      screenCheckHelper(2);
    }
  }

  function screenCheckHelper(slidesPerPage) {
    var dotsList = document.querySelectorAll('.products-slider-nav ul li');
    dotsList.forEach(function(item){ item.classList.remove('visible');});
    //hide dots not needed for current media query
    for (var i = 0; i < dotsList.length; i += slidesPerPage) {
      dotsList.item(i).classList.add('visible');
    }
    if (dotsList.length % slidesPerPage != 0) {
      dotsList.item(i - slidesPerPage).classList.remove('visible');
      dotsList.item(dotsList.length - slidesPerPage).classList.add('visible');
    }

  }

  function screenCheckSmall(mq) {
    if (mq.matches) { // If the viewport is 767.98px wide or less
      document.querySelectorAll('.products-slider-nav ul li').forEach(function(item){ item.classList.add('visible');});
    }
  }

  var smallDevice = window.matchMedia("(max-width: 767.98px)");
  smallDevice.addListener(screenCheckSmall); // Attach listener function on state changes

  var mediumDevice = window.matchMedia("(max-width: 991.98px) and (min-width: 768px)");
  mediumDevice.addListener(screenCheckMedium); // Attach listener function on state changes

  var largeDevice = window.matchMedia("(min-width: 992px)");
  largeDevice.addListener(screenCheckLarge); // Attach listener function on state changes

  var productSlider;
  function startSlider(sliderId){
    productSlider = tns({
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

  function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;
    document.querySelector('.panel-bar .menu ul li a').classList.remove('active');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll('.section--products .tab-pane');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll('.section--products .panel-bar .menu .nav-item');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "flex";
    evt.currentTarget.classList.add('active');
  }

  document.querySelectorAll('.section--products .panel-bar .menu .nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      productSlider.destroy();
      removeDots();
      var newSliderId = e.target.getAttribute('id').split('-')[0];
      openTab(e, newSliderId);
      createDots(newSliderId, '.products-slider-nav ul');
      screenCheckSmall(smallDevice);
      screenCheckMedium(mediumDevice);
      screenCheckLarge(largeDevice);
      startSlider(newSliderId);
    });
  });
  
  //Prepare section products
  document.querySelector('.panel-bar .menu ul li a').classList.add('active');
  createDots('bed','.products-slider-nav ul');
  // Call listener's functions at run time
  screenCheckSmall(smallDevice);
  screenCheckMedium(mediumDevice);
  screenCheckLarge(largeDevice);
  startSlider('bed');

})();
