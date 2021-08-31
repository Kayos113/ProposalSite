exports.deadline = new Date("9/19/2021 11:59:59 AM");
// exports.deadline = new Date("7/29/2021 09:40:00 PM");

exports.isPast = function() {
  let currTime = Date.now(),
  diff = this.deadline.getTime() - currTime;
  if(diff<0) {
    return true;
  } else {
    return false;
  }
}
