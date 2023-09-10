let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let AmPm = document.getElementById("ampm");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

  if (currentTime.getHours() > 12) {
    hrs.innerHTML = ` ${0 + (currentTime.getHours() - 12)}`;
  }

  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  AmPm.innerHTML = currentTime.getHours() < 12 ? "AM" : "PM";
}, 1000);
