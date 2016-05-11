 //Utility sleep
function sleep(milliseconds) {
       var currentTime = new Date().getTime();

  while (currentTime + milliseconds >= new Date().getTime()) {
  }
}
exports.sleep = sleep;