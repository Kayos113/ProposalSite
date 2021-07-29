// const deadline = new Date("8/14/2021 11:59:59 PM");
const deadline = new Date("7/29/2021 04:40:00 PM");
const interval = 200;
const audio = new Audio("./audio/Arby's Things That Are Yam.mp3");

setInterval(function () {
  let currTime = Date.now(),
  diff = deadline.getTime() - currTime;
  if(diff<0) {
    diff = Math.abs(diff);
  }
  if(diff<interval){
    console.log("EXECUTING");
    playAudio();
  }
  // console.log(diff);
  let seconds = diff / 1000,
  minutes = seconds / 60,
  hours = minutes / 60,
  days = hours / 24;

  seconds = Math.floor((minutes%1)*60);
  minutes = Math.floor((hours%1)*60);
  hours = Math.floor((days%1)*24);
  days = Math.floor(days);


  let timeString = days +" days, ";
  if(hours<10&&hours>0) {
    timeString += "0";
  }
  timeString += hours + " hours, ";
  if(minutes<10&&minutes>0) {
    timeString += "0";
  }
  timeString += minutes + " minutes, and ";
  if(seconds<10&&seconds>0) {
    timeString += "0";
  }
  timeString += seconds + " seconds";
  document.getElementById('timer').innerHTML = timeString;
}, interval);

function playAudio() {
  audio.play();
};
