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
      openTab(e, e.target.getAttribute('id').split('-')[0]);
    });
  });
  
  document.querySelector('.panel-bar .menu ul li a').classList.add('active');

})();
