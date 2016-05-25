function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var days;
  var hours;
  var minutes;

  function updateClock() {
    var t = getTimeRemaining(endtime);

    days = t.days;
    hours = ('0' + t.hours).slice(-2);
    minutes = ('0' + t.minutes).slice(-2);

    clock.innerHTML = days + " days, " + hours + " hours, " + minutes;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 60000);
}

var deadline = new Date(Date.parse(new Date()) + 100 * 24 * 60 * 60 * 1000);


// window.onload = function() {
//   initializeClock('countdown', deadline);
// };