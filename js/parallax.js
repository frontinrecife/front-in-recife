$(function() {

  var elementHeader = document.getElementById('header');

  if (screen.width > 640) {

    window.addEventListener('scroll', function(e) {

      var position = document.body.scrollTop;

      if (position < 800) {
        elementHeader.style.backgroundPositionY = (position / 1.5).toFixed(1) + 'px';
      }

    });
  }
});