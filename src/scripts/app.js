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
})();
