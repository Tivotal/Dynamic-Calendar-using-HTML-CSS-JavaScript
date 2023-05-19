/* Created by Tivotal */

let daysTag = document.querySelector(".days");
let currentDate = document.querySelector(".current-date");
let prevNextBtn = document.querySelectorAll(".icons span");

//getting date, current year, current month
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = [
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

let getCalendar = () => {
  //getting last date for this month
  let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  //getting first day of this month
  let firstDayofMoth = new Date(currentYear, currentMonth, 1).getDay();
  //getting last day of the month
  let lastDayofMonth = new Date(
    currentYear,
    currentMonth,
    lastDateofMonth
  ).getDay();

  //getting last date of lost month
  let lastDateofLostMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = "";

  //getting all last dates of lost month
  for (let i = firstDayofMoth; i > 0; i--) {
    //creating li tag for all dates of previous month
    liTag += `<li class="inactive">${lastDateofLostMonth - i + 1}</li>`;
  }

  //getting all dates of the month
  for (let i = 1; i <= lastDateofMonth; i++) {
    //getting days of each date
    let day = new Date(currentYear, currentMonth, i).getDay();

    //if day is 0 then marking it as sunday or leaving blank
    let isSun = day === 0 ? "sun" : "";

    //making today date as active if month , year and date matches
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "today"
        : "";
    //creating li tag for all days
    liTag += `<li class="${isToday} ${isSun}">${i}</li>`;
  }

  //getting first dates of next month
  for (let i = lastDayofMonth; i < 6; i++) {
    //creating li tag for first dates of next month
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  //displyaing current year and month
  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;

  //adding li tag to days tag
  daysTag.innerHTML = liTag;
};

getCalendar();

prevNextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //if clicked btn id is prev then increment current month
    //else decrement current month value
    currentMonth = btn.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    //if the current month value is less than 0 or greater than 11
    if (currentMonth < 0 || currentMonth > 11) {
      //creating new date of current year & month, passing it to date value
      date = new Date(currentYear, currentMonth, new Date().getDate());

      //updating current month year
      currentYear = date.getFullYear();

      //updating current month value
      currentMonth = date.getMonth();
    } else {
      //passing current date as date value
      date - new Date();
    }

    getCalendar();
  });
});
