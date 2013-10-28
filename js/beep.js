    //Modified from js motion sample.js
    // consider using a debounce utility if you get too many consecutive events
 (function () {
     $(window).on('motion', function (ev, data) {
         console.log('detected motion at', new Date(), 'with data:', data);

         //Play a beep
         var snd = new Audio("beep-7.mp3"); // buffers automatically when created
         snd.play();

         //navigator.notification.vibrate(200);
         console.log("Beep!");

         var spot = $(data.spot.el);
         spot.addClass('active');
         setTimeout(function () {
             spot.removeClass('active');
         }, 230);

     });
 })();