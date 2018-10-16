(function() {
  document.getElementById('main-menu-btn').addEventListener('click', function(e) {
    document.getElementById('main-menu').classList.add('transition');
    document.getElementById('main-menu').classList.toggle('show');
  });

  window.addEventListener('resize', function(e) {
    document.getElementById('main-menu').classList.remove('transition');
    document.getElementById('main-menu').classList.remove('show');
  });

  document.getElementById('main-menu').addEventListener('click', function(e) {
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
})();
