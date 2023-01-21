//first step////////////////////////
const obj = {};
//console.log(obj); //{}

//second step////////////////////////////
const obj1 = {
  //name: ["bob", "smith"],

  name: {
    firstName: "bob",
    lastName: "smith",
  },

  age: 38,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
  },
  introduceSelf: function () {
    console.log(`Hi i'm ${this.name[0]} ${this.name[1]}`);
  },
};
//console.log(obj1.name); //[ 'bob', 'smith' ]
//console.log(obj1.name[0]); //bob
//console.log(obj1.age); //38
//console.log(obj1.bio()); //bob smith is 38 years old
//console.log(obj1.introduceSelf()); //Hi i'm bob smith

//////////////Dot notation//////////////////
const obj1dot = {
  name: {
    firstName: "bob",
    lastName: "smith",
  },
};
//console.log(obj1dot.name.firstName); //bob
//console.log(obj1dot.name.lastName); //smith

//////////////// bracket notation //////////////////

const obj1bracket = {
  name: {
    firstName: "bob",
    lastName: "smith",
  },
  age: 32,
};

//console.log(obj1bracket["name"]["firstName"]); //bob
//console.log(obj1bracket["name"]["lastName"]); //smith
//console.log(obj1bracket["age"]); //32
const obj1bracketN = {
  name: ["bob", "smith"],
  age: 32,
};

function person(nam) {
  console.log(obj1bracketN[nam]);
}
//person("name"); //[ 'bob', 'smith' ]
//person("age"); //32

/////////// Setting(updating) object member ////////////
const obj1SettingMember = {
  name: ["bob", "smith"],
  age: 32,
};

// by dot notation setting member
const setNameByDot = (obj1SettingMember.name[0] = "Atul Singh");
//console.log(setNameByDot); //Atul Singh
//console.log(obj1SettingMember.name[0]); //Atul Singh
// set member by bracket notation
const setNameByBracket = (obj1SettingMember["age"] = 55);
//console.log(setNameByBracket); //55
//console.log(obj1SettingMember.age); //55

//////////////about this keyword/////////

const person1 = {
  name: "bob",
  introduceSelf() {
    //we can't write object name inside object so we
    //writ this instad of writing person1
    //console.log(`Hi i'm ${person1.name}`);
    console.log(`Hi i'm ${this.name}`); //Hi i'm bob
  },
};
//console.log(person1.introduceSelf());

const person2 = {
  name: "Smith",
  introduceSelf() {
    //we can't write object name inside object so we
    //writ this instad of writing person1
    //console.log(`Hi i'm ${person1.name}`);
    console.log(`Hi i'm ${this.name}`); //Hi i'm bob
  },
};
//console.log(person2.introduceSelf());

/////// Introducing Constructor/////////////////

function constructor(nam) {
  const obj = {};
  obj.name = nam;

  obj.constructMethod = function () {
    
    console.log(`Hi i'm ${this.name}`);
    
  };
  return obj;
}
/////////// first object/////////////
const atul = constructor("atul");

console.log(atul.name); //atul

console.log(atul.constructMethod()); //Hi i'm atul

/////////// second object/////////////
const mohan = constructor("Mohan Singh");

console.log(mohan.name); //Mohan Singh
console.log(mohan.constructMethod()); //Hi i'm Mohan Singh

///////////second constructor method///////////

function Person(name) {
  this.name = name;
  this.giveIntroSelf = function () {
    
    console.log(`Hi! I'm ${this.name}.`);
  };
}
