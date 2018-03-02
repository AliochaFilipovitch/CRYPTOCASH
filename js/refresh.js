var a = 0;
var b = 0;
var c = 0;

$(document).ready(function() {
  $('#refreshTime').click(function(){
        a = 1;
        $.getScript("http://localhost/CRYPTOCASH/js/time.js");
    });
  $('#refreshAverage').click(function(){
        b = 1;
        $.getScript("http://localhost/CRYPTOCASH/js/average.js");
    });
   $('#refreshBest').click(function(){
        c = 1;
        $.getScript("http://localhost/CRYPTOCASH/js/best.js");
   });
});