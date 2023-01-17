/*
12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
 */

// YYYY-MM-DD HH:mm

var date = new Date();

function getDateInFormat(myDate, sepreater, colon) {
  //date
  var day = myDate.getDate();
  //console.log(day);
  var month = myDate.getMonth() + 1;
  // console.log(month);
  var fullYear = myDate.getFullYear();
  //console.log(fullYear);

  var hour = myDate.getHours();
  //console.log(hour);
  var minute = myDate.getMinutes();
  //console.log(minute);

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return (
    fullYear + sepreater + month + sepreater + day + " " + hour + colon + minute
  );
}

//console.log(getDateInFormat(date, "-", ":")); //2023-01-17 16:52

// - DD-MM-YYYY HH:mm /////////////////////
//let date2 = new Date();

function getDateInFormat(myDate, sepreater, colon) {
  //date
  let day = myDate.getDate();
  //console.log(day);
  let month = myDate.getMonth() + 1;
  //console.log(month);
  let fullYear = myDate.getFullYear();
  //console.log(fullYear);

  let hour = myDate.getHours();
  //console.log(hour);
  let minute = myDate.getMinutes();
  //console.log(minute);

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  return (
    day + sepreater + month + sepreater + fullYear + " " + hour + colon + minute
  );
}

console.log(getDateInFormat(date, "-", ":"));

//   - DD/MM/YYYY HH:mm //////////////////////

//let date2 = new Date();

function getDateInFormat(myDate, sepreater, colon) {
  //date
  let day = myDate.getDate();
  //console.log(day);
  let month = myDate.getMonth() + 1;
  //console.log(month);
  let fullYear = myDate.getFullYear();
  //console.log(fullYear);

  let hour = myDate.getHours();
  //console.log(hour);
  let minute = myDate.getMinutes();
  //console.log(minute);

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  return (
    day + sepreater + month + sepreater + fullYear + " " + hour + colon + minute
  );
}

console.log(getDateInFormat(date, "/", ":"));
