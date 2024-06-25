let dateText = document.querySelector(".digital-clock-box .date");
let timeText = document.querySelector(".digital-clock-box .time");

const weeks = ["Senin", "Selasa", "Rabu", "kamis", "Jum'at", "Sabtu", "Minggu"];
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

let AMpm = "AM";

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
    AMpm = "PM";
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
  timeText.innerHTML = `${hours} : ${minutes} : ${seconds} ${AMpm}`;
};

setInterval(getTime, 1000);
