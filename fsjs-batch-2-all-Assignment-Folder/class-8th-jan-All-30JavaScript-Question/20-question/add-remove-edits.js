/*20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea' */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//- add 'Meat' in the beginning of your shopping cart if it has not been already added
let addMeatInTheStart = shoppingCart.unshift("Meat");
console.log(addMeatInTheStart); //5
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// - add Sugar at the end of your shopping cart if it has not been already added

let addSugarInTheLast = shoppingCart.push("Sugar");
console.log(addSugarInTheLast); //6
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

//    - remove 'Honey'

let removeHoney = shoppingCart.splice(4, 1);
console.log(removeHoney); //[ 'Honey' ]
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

//  - modify Tea to 'Green Tea'

let modifyGreenTeaToTea = shoppingCart.splice(3, 1, "Green Tea");
console.log(modifyGreenTeaToTea); //[ 'Tea' ]
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
