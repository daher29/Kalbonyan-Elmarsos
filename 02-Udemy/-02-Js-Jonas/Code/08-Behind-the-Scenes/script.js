'use strict';

function calcAge(birthYear) {
  const age = 2029 - birthYear;
  // console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1994) {
      var millennial = true;

      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Moh';

      // Reassigning out scope's variable
      output = 'NEW OUTPUT!'; // redeclare line 8
      // const output = 'NEW OUTPUT!'; // creat new variable

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Mohammed';
calcAge(1989);

// console.log(age);
// printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Mohammed';
let job = 'student';
const year = 1989;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2029 - birthYear);
  console.log(this);
};
calcAge1(1989);

const calcAgeArrow = birthYear => {
  console.log(2029 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

/*
const moh = {
  year: 1989,
  calcAge2: function () {
    console.log(this);
    console.log(2029 - this.year);
  },
};
moh.calcAge2();

const suzan = {
  year: 2011,
};

suzan.calcAge2 = moh.calcAge2;
suzan.calcAge2();

const f = moh.calcAge2;
f();
// console.log(f);
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName1 = 'Suzan';

const mohammed = {
  firstName1: 'Moh',
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2029 - this.year);

    /*
    // const self = this; // self or that (to solve "this" bug)
    const isMillennial = function () {
      // console.log(self);
      console.log(this);
      console.log(this.year >= 1980 && this.year <= 1994);
      // console.log(self.year >= 1980 && self.year <= 1994);
    };
    */

    // or use Arrow function
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1980 && this.year <= 1994);
    };

    isMillennial();
  },
  greet: () => console.log(`Hey ${this.firstName1}`),
};
mohammed.greet(); // (this) does NOT work with Arrow function
mohammed.calcAge();

// Arguments keyword
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(3, 6);
addExpr1(3, 6, 3, 1, 4);

var addArrow1 = (a, b) => {
  return a + b;
};
addArrow1(2, 5, 7);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Daher';
let oldLastName = lastName;
lastName = 'Khatib';
console.log(lastName, oldLastName);

// Reference types
const suzan = {
  firstName: 'Suzan',
  lastName: 'Daher',
  age: 26,
};
const marriedSuzan = suzan;
marriedSuzan.lastName = 'Khatib';
console.log('Before marriage:', suzan);
console.log('After marriage: ', marriedSuzan);
// marriedSuzan = {};

// Copying objects
const suzan2 = {
  firstName: 'Suzan',
  lastName: 'Daher',
  age: 26,
  family: ['Ali', 'Huda'],
};

const suzanCopy = Object.assign({}, suzan2);
suzanCopy.lastName = 'Khatib';

suzanCopy.family.push('Farah');
suzanCopy.family.push('Abir');

console.log('Before marriage:', suzan2);
console.log('After marriage: ', suzanCopy);
