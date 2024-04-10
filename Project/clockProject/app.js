const clock = document.getElementById("clock");
setInterval(function () {
  //setInterval  method used  for the current time
  let date = new Date(); // suppose the create a variable
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
