// PART 1:-

const object = {
  rocket: "ROCKET",
  home: "HOME",
};
//how to loop in object: there are many wey to looping
//1:-
for (Key in object) {
  //console.log(Key);
}

//string, number, bigint, boolean, null, undefine, symbol
const obj1 = {
  rocket: "ROCKET",
  fuel: 2,
  // notice here object can also contain object
  config: {
    name: "mars",
  },
};

//modifying the object
obj1.fuel = 200;
obj1["year"] = 3000;
//console.log(obj1); //{ rocket: 'ROCKET', fuel: 200, config: { name: 'mars' }, year: 3000 }
// constant only assigning the memory to object(obj1) not tho the literal value like rocket and fuel. So this is the reason we //enable to modify the object literal value.

// PART 2:-//////////////////////////////////////
// we are using another syntax of creating object
const obj2 = new Object(); //constructor base syntax

obj2.redBook = "RED";
obj2.myValue = "1 BLUE BOOK";
//console.log(obj2); //{ redBook: 'RED', myValue: '1 BLUE BOOK' }

//PART 3:-////////////////////////////////////////////////////

// creating object to use some another way. we use this object for to inheriting another object.
// const obj3 = Object.create({}); // empety object

//EX:-
const powers = {
  fly: true,
  cordinate: Math.random() + 2,
};
//inheriting object
const obj3 = Object.create(powers);
//console.log(obj3); // {} we find some weired things empety object
//console.log(obj3.cordinate); //2.758131892499546 // but when use powers object key they give me value.

// we find empety object because this object get inherting all property to give the prototype so we saw here empety curly braces but all inherting property is inside the prototype and we can also access them those property.
//console.log(Object.getPrototypeOf(obj3)); //{ fly: true, cordinate: 2.7850562791101057 }// vs code me inherit property ko dekhne k liye ham .getPrototypeOf()method ka use karte hain.

//PART 4:-///////////////////////////////////////////////////////////////

//const obj4 = Object.create({}); // we pass here empety object and ejecting some property to preffered method.
// we also use old method to emjecting property but we are not using here simple method.
//to yanha par ham teen chij pass kar rhe hain target object, key, and value. value me ham ek aur object ko inject kar rhe hain
//Object.defineProperty(obj4, "book", {
//icon: "bluebook",
//});
//console.log(obj4); //{}// here we get empety object.
//console.log(obj4.book); //undefine
//console.log(Object.getPrototypeOf(obj4)); //{} here we also get empety object in vs code.

//we use getter and setter to find the injecting property value.
// Object.defineProperty(obj4, "book", {
//   //icon: "bluebook",
//   get: () => "bluebook",
// });
//console.log(obj4.book); //bluebook// Note:- getter lagane par hame yanha value mil rhi hai.
//console.log(Object.getPrototypeOf(obj4));

//itteration using for in:-
const obj4 = Object.create({}); // we pass here empety object and ejecting some property to preffered method.
Object.defineProperty(obj4, "book", {
  //icon: "bluebook",
  get: () => "bluebook",
  enumerable: true,
});

for (k in obj4) {
  //console.log("value is:", k);
}

//PART 5 //////////////////////////////////////////////////////////////

let pen = "cello";

// const obj5 = {
//   comics: "marvel",
//   pen: "",
//   //normal function
//   printComic: function () {
//     //here this keyword reffer to the parent object(obj5) and inside parent object(obj5) to get the pen property(line no 93 not the line no 89) and do update.
//     return (this.pen += "ulat");
//   },

//   //arrow function me this keyword work nhi karta hai.
//   printComic1: () => {
//     //here this keyword is not working
//     return (this.pen += "ulat");
//   },
// };
//console.log(obj5.printComic()); //ulat
//console.log(obj5.printComic1()); //undefinedulat

////////////////////////Another this keyword funfact////////////////////////////////////////
const obj5 = {
  comics: "marvel",
  pen: "",
  //normal function
  printComic: function () {
    this.pen += "ulat";
    //console.log(this);
  },

  //arrow function me this keyword work nhi karta hai.
  // printComic1: () => {
  //   //this.pen += "ulat";
  //   console.log(this);
  // },
};
//console.log(obj5.printComic()); //ulat
//console.log(obj5.printComic1()); //undefinedulat

////////////////////////Chaining the Method////////////////////////////////////////
const obj6 = {
  comics: "marvel",
  pen: "",
  //normal function
  printComic: function () {
    this.pen += "ulat";
    console.log(this);
    return 6;
  },
};
console.log(obj6.printComic().printComic().printComic());
//.printComic().printComic()
