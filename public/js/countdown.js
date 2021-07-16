const deadline = new Date("7/15/2021 11:59:59 PM")

setInterval(function () {
  const currTime = Date.now(),
  diff = deadline.getTime() - currTime;

  let seconds = diff / 1000,
  minutes = seconds / 60,
  hours = minutes / 60,
  days = hours / 24;

  seconds = Math.abs(Math.floor((minutes%1)*60));
  minutes = Math.abs(Math.floor((hours%1)*60))
  hours = Math.abs(Math.floor((days%1)*24));
  if(days<0) {
    days+=1;
  }
  days = Math.abs(Math.floor(days));

  let timeString = days +" days, ";
  if(hours<10) {
    timeString += hours + "0 hours, ";
  } else {
    timeString += hours + " hours, ";
  }
  if(minutes<10) {
    timeString += minutes + "0 minutes, and ";
  } else {
    timeString += minutes + " minutes, and ";
  }
  if(seconds<10) {
    timeString += seconds + "0 seconds";
  } else {
    timeString += seconds + " seconds";
  }
  console.log(diff);
  document.getElementById('timer').innerHTML = timeString;
}, 1000);
