$(document).ready(function() {
  var transition_time = 1000; // 1 second
  var time_between_slides = 4000; // 4 seconds

  var images=["http://lorempixel.com/580/250/nature/1","http://lorempixel.com/580/250/nature/2","http://lorempixel.com/580/250/nature/3","http://lorempixel.com/580/250/nature/4"];

  var changeImage=(
    function ()
    {
      var index=0;
      var image = document.getElementById('slider');
      return function()
      {
         image.src=images[index++];
         if (images.length == index)
         {
             index = 0; // loop to start
         }
      }
    });

  function setIntervalAndExecuteChangeImage(fn, t) {
    var temp=fn();
    temp();

    return(setInterval(temp, t));
  }
    var i = setIntervalAndExecuteChangeImage(changeImage, transition_time + time_between_slides);

});