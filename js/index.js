const Day = document.querySelector("#day-input");
const Month = document.querySelector("#month-input");
const Year = document.querySelector("#year-input");
const showDay = document.querySelector("#days-number")
const showMonth = document.querySelector("#month-number")
const showYear = document.querySelector("#year-number")
const day_err = document.querySelector(".day-err")
const month_err = document.querySelector(".month-err")
const year_err = document.querySelector(".year-err")
function Calculate() {
  ClearAllError();
  const day = Day.value;
  const month = Month.value;
  const year = Year.value;
  if(!day){
    return day_err.textContent = "Day is required"
  }
  if(!month){
    return month_err.textContent = "Month is required"
  }
  if(!year){
    return year_err.textContent = "Year is required"
  }
  const CurrentDate = new Date();
  const CurrentYear = CurrentDate.getFullYear();
  const CurrentMonth = CurrentDate.getMonth() + 1;
  const CurrentDay = CurrentDate.getDate();
  if (Number(day) > 31) {
    return day_err.textContent = "Invalid Date";
  }
  if (Number(month) > 12) {
    return month_err.textContent = "Invalid Month";
  }
  if(Number(year) > CurrentYear){
    return year_err.textContent = "Must be a past year";
  }
  showDay.textContent = ConvertToPositive(CurrentDay - day);
  showMonth.textContent = ConvertToPositive(CurrentMonth - month)
  showYear.textContent = CurrentYear - year
}
function ClearAllError(){
  day_err.textContent = "";
  month_err.textContent = "";
  year_err.textContent = "";
}
function ConvertToPositive(number){
  if(number < 0){
    return number * -1
  }
  return number
}