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
