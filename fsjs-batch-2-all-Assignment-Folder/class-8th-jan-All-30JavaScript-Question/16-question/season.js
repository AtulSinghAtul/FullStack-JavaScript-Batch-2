/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

const monthsName = [
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

const d = new Date();
const getMonths = d.getMonth();

const month = monthsName[getMonths];

switch (month) {
  case "January":
    console.log("Winter");
    break;

  case "February":
    console.log("Winter");
    break;

  case "March":
    console.log("Spring");
    break;

  case "Aprail":
    console.log("Spring");
    break;

  case "May":
    console.log("Spring");
    break;

  case "June":
    console.log("Summer");
    break;

  case "July":
    console.log("Summer");
    break;

  case "August":
    console.log("Summer");
    break;

  case "September":
    console.log("Autmn");
    break;

  case "October":
    console.log("Autmn");
    break;

  case "November":
    console.log("Autmn");
    break;

  case "December":
    console.log("Winter");
    break;

  default:
    console.log("not exist");
}
