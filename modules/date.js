import { DateTime } from './luxon.js';

const myDate = () => {
  let {
    month, hour, minute, day, second,
  } = DateTime.now();

  const { year, weekdayLong } = DateTime.now();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  document.getElementById('date').innerHTML = `Today is ${weekdayLong} ${year}-${month}-${day} Time: ${hour}:${minute}:${second}`;
};

export default myDate;