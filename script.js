'use script'

// task 1
   
function minutesToEndOfDay(date) {
    let nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let result = nextDay - date;
    return Math.round((result / 60000)* 100) / 100;
};

  let today = new Date();
  console.log(minutesToEndOfDay(today));
  
  // task 2

  function getSecondsToday(date) {
    let today1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let diff1 = date - today1;
    return Math.round(diff1 / 1000);
  }
  let today1 = new Date();
  console.log(getSecondsToday(today1) + ' прошло секунд с начала дня');
  
  // task 3

  function getWeekDay(date) {
    let days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return days[date.getDay()];
  }
  let date = new Date(2013, 0, 25);
  console.log(getWeekDay(date));
  
  // task 4

  function daysLeft() {
    let day = prompt('Ввести дату своего рождения у формате YYYY-MM-DD', '');
    let birthday = new Date(Date.parse(day));
    let now = new Date();
    let bDay = birthday.setFullYear(now.getFullYear());
    if (bDay < now) {
      birthday.setFullYear(now.getFullYear() + 1);
    }
    let ms = 24 * 60 * 60 * 1000;
    return Math.round((birthday.getTime() - now.getTime()) / ms);
  };
  console.log(daysLeft());

  