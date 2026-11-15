const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  secondHand.style.transform =
    `translateX(-50%) rotate(${secondAngle}deg)`;
  minuteHand.style.transform =
    `translateX(-50%) rotate(${minuteAngle}deg)`;
  hourHand.style.transform =
    `translateX(-50%) rotate(${hourAngle}deg)`;
}

updateClock();
setInterval(updateClock, 1000);