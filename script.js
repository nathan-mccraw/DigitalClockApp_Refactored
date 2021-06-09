function showTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? "AM" : "PM";

  document.getElementById("time").textContent = `${formatHour(
    hours
  )}:${minutes}:${addLeadingZero(seconds)} ${amPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;

  return hour;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function showDate() {
  const dateTime = new Date();
  const day = days[dateTime.getDay()];
  const month = months[dateTime.getMonth()];
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();

  document.getElementById(
    "date"
  ).textContent = `${day} , ${month} ${formatSuffix(date)} ${year}`;
}

function formatSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

showDate();
showTime();
setInterval(() => {
  showTime();
  showDate();
}, 1000);
