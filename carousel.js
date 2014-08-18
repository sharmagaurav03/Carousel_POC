$(document).ready(function() {
  var $carousel_slider = $('.slider'); // carousel slider
  var $picture = 'li';
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $carousel_slider.find($picture);
  }
  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll
  $interval = setInterval(
        function(){
          var $i = $carousel_slider.find($picture + '.active').index();

          slides().eq($i).removeClass('active');
          slides().eq($i).fadeOut($transition_time);

          if (slides().length == $i + 1) $i = -1; // loop to start

          slides().eq($i + 1).fadeIn($transition_time);
          slides().eq($i + 1).addClass('active');
        }
    , $transition_time + $time_between_slides
  );
});