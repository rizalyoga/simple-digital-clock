let dateText = document.querySelector(".digital-clock-box .date");
let timeText = document.querySelector(".digital-clock-box .time");
let container = document.querySelector("main");
let clockBox = document.querySelector(".digital-clock-box");
let toogleBtn = document.querySelector(".toogle-btn");

const weeks = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

let AM_PM = "AM";

let getTime = () => {
  let d = new Date();
  let day = d.getDay();
  let year = d.getFullYear();
  let date = d.getDate();
  let month = d.getMonth();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    AM_PM = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  dateText.innerHTML = `${weeks[day]}, ${months[month]} ${date}, ${year}`;

  timeText.innerHTML = `${hours} : ${minutes} : ${seconds} ${AM_PM}`;
};

setInterval(getTime, 1000);

toogleBtn.addEventListener("click", () => {
  clockBox.classList.toggle("dark");

  if (clockBox.classList.contains("dark")) {
    toogleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    toogleBtn.style.background = "white";
    toogleBtn.style.color = "rgb(49, 49, 49)";

    container.style.background = "#252839";
  } else {
    toogleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    toogleBtn.style.background = "rgb(49, 49, 49)";
    toogleBtn.style.color = "white";

    container.style.background = "rgb(5, 136, 229)";
  }
});
