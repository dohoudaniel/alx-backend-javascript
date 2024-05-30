const myArray = Array(12).fill(1161);
console.log(myArray);

const myDate = new Date(1995, 11, 18);
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);git add    ; git commit -m ""

// Date.prototype
// Object { }
// null
