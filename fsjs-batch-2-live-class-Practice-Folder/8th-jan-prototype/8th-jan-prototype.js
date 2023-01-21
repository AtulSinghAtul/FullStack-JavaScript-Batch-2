let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "superman"];

let heroPower = {
  // propertiese
  thor: "hammer",
  spiderman: "sling",
  //Method
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.atul = function () {
  console.log(`Atul is present in all object`);
};
myHeros.atul();

const user = {
  name: "Atul Singh",
  gmail: "xyz@gmail.com",
};

const teacher = {
  makeVideos: true,
};

const teachingSupport = {
  isAvailable: false,
};
const tsAssistant = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  // inheriting object property in prototype, this is old method.
  __proto__: teachingSupport,
};

//2 old way
teacher.__proto__ = user;

//modern syntax:-
Object.setPrototypeOf(teachingSupport, teacher);
