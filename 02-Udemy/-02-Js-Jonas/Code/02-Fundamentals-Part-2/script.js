//////////////////////////
// Activating Strict Mode

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // if done typing mistake (with "use strict") for example (forgot a letter) you would get an error and explaining in console
if (hasDriversLicense) console.log("I can drive 🛵");

// const interface = "Audio";
// const privet = 534;

/////////////
// Functions

function logger() {
  console.log("My name is Mohammed");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("29");
console.log(num);

// Trying out from my head..
function cpuPerformance(type, cores, watts) {
  const cpu = `The ${type} cpu has ${cores} cores, ${
    cores * 2
  } threads, and up to ${watts} watts of powers.`;
  return cpu;
}

const cpuRyzen5800X = cpuPerformance("R7 5800X", 8, 150);
console.log(cpuRyzen5800X);

///////////////////////////
// Function Declarations vs Expressions

// Declaration (NOTE: you can call it before declaration)
// function calcAge1(birthYear) {
//   const age = 2029 - birthYear;
//   return age;
// } or we can directly do this...
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1989);

// Expression (NOTE: you can NOT call it before declaration)
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1989);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const agee = 2022 - birthYear;
  const retirement = 65 - agee;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1989, "Mohammed"));
console.log(yearsUntilRetirement(1980, "Ali"));

/////////////////////////////////////
// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apples1, oranges1) {
  const applesPieces = cutFruitPieces(apples1);
  const orangesPieces = cutFruitPieces(oranges1);

  const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor1(2, 3));

///////////////////////
// Reviewing Functions

const calcAge4 = function (birthYear1) {
  return 2022 - birthYear1;
};
const yearsUntilRetirement1 = function (birthYear11, firstName1) {
  const ageee = calcAge4(birthYear11);
  const retirement1 = 65 - ageee;
  if (retirement1 > 0) {
    console.log(`${firstName1} retires in ${retirement1} years.`);
    return retirement1;
  } else {
    console.log(`${firstName1} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement1(1989, "Mohammed"));
console.log(yearsUntilRetirement1(1948, "Mr.Suleiman"));
//////////////////////////
// Introduction yo Arrays

const friend1 = "Mahmud";
const friend2 = "Eyad";
const friend3 = "Ahmad";
const friend4 = "Abdul";

const friends = ["Mahmud", "Eyad", "Ahmad", "Abdul"];
console.log(friends);

const years = new Array(1980, 1989, 1994, 2029);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[3] = "Abdullatif";
console.log(friends);
// friends = ["ljhjh", "khfuyhk", "lkhjk"] (const)

const firstName = "Mohammed";
const mohammed = [
  firstName,
  "ALDAHER",
  2029 - 1989,
  "student",
  friends,
  new Array(29, 5, 1989, "Lobo29GX"),
];
console.log(mohammed);
console.log(mohammed.length);

// Exercise
const calcAge5 = function (birthYear) {
  return 2050 - birthYear;
};
const years1 = [1980, 1989, 1994, 2029];

console.log(calcAge5(years1[1]));
console.log(calcAge5(years1[years1.length - 1]));

const ages1 = [
  calcAge5(years1[1]),
  calcAge5(years1[0]),
  calcAge5(years1[years1.length - 1]),
];
console.log(ages1);

/////////////////////////////////////
// Basic Array Operations (Methods)

const friends1 = ["Mahmud", "Eyad", "Ahmad"];

// add elements
friends1.push("Abdul");
const newLength = friends.push("Abdul");
console.log(friends1);
console.log(newLength);

friends1.unshift("Kutayba");
console.log(friends1);

// remove elements
friends1.pop(); // remove last one
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // remove first one
console.log(friends1);

console.log(friends1.indexOf("Mahmud"));
console.log(friends1.indexOf("Eyad"));

friends1.push(29);
console.log(friends1.includes("Eyad"));
console.log(friends1.includes("Abdul"));

if (friends1.includes("Eyad")) {
  console.log("You have a friends called Eyad.");
}

///////////////////////////
// Introduction to Objects

const moh42Array = [
  "Mohammed",
  "ALDAHER",
  2029 - 1989,
  "student",
  ["Mahmud", "Eyad", "Ahmad", "Abdul"],
];

const moh42 = {
  firstName: "Mohammed",
  lastName: "ALDAHER",
  age: 2022 - 1989,
  job: "student",
  friends: ["Mahmud", "Eyad", "Ahmad", "Abdul"],
};

/////////////////
// Dot vs. Bracket Notation

console.log(moh42);
console.log(moh42.age);
console.log(moh42.friends);

console.log(moh42["age"]);
console.log(moh42["friends"]);

const nameKey = "Name";
console.log(moh42["first" + nameKey]);
console.log(moh42["last" + nameKey]);
// console.log(moh42."last" + nameKey); // Error

// const interestedIn = prompt(
//   "What do you want to know about Mohammed? choose between firstName, lastName, age, job, and friends"
// );
// if (moh42[interestedIn]) {
//   console.log(moh42[interestedIn]);
// } else {
//   console.log(
//     "Wrong request, choose between firstName, lastName, age, job, and friends"
//   );
// }

moh42.location = "Turkey";
moh42["instagram"] = "@m.aldaher29";
console.log(moh42["location"]);
console.log(moh42.instagram);

// Challenge
// "Mohammed has 3 friends, and his best friend is called Mahmud"
console.log(
  `${moh42.firstName} has ${moh42.friends.length} friends, and his best friend is called ${moh42.friends[0]}.`
);

///////////////////
// Objects Methods

const moh44 = {
  firstName: "Mohammed",
  lastName: "ALDAHER",
  birthYear: 1989,
  job: "student",
  friends: ["Mahmud", "Eyad", "Ahmad", "Abdul"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) { // 1
  //   return 2029 - birthYear;
  // },
  // calcAge: function () { // 2
  //   console.log(this);
  //   return 2029 - this.birthYear;
  // },
  calcAge: function () {
    // 3
    this.age = 2029 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// console.log(moh44.calcAge(moh44.birthYear)); // 1

console.log(moh44.calcAge()); // 2

console.log(moh44.age); // 3
console.log(moh44.age);
console.log(moh44.age);

// Challenge
// "Mohammed is a 33-years old student, and he has a driver's license."
console.log(moh44.getSummery());

///////////////////////////
// Iteration: The for Loop

/*
console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️");
*/

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

///////////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const moh47 = [
  "Mohammed",
  "ALDAHER",
  1989,
  "student",
  ["Mahmud", "Eyad", "Ahmad", "Abdul"],
];
const types = [];

for (let i = 0; i < moh47.length; i++) {
  // reading moh47 array
  console.log(moh47[i], typeof moh47[i]);

  // filling types array
  // types[i] = typeof moh47[i];
  types.push(typeof moh47[i]);
}
console.log(types);

const years47 = [1980, 1989, 1994, 2022];
const ages47 = [];

for (let i = 0; i < years47.length; i++) {
  ages47.push(2029 - years47[i]);
}
console.log(ages47);

// Continue and break
for (let i = 0; i < moh47.length; i++) {
  // --- ONLY STRINGS ---
  if (typeof moh47[i] !== "string") continue;
  console.log(moh47[i], typeof moh47[i]);
}

for (let i = 0; i < moh47.length; i++) {
  // --- BREAK WITH NUMBER ---
  if (typeof moh47[i] === "number") break;
  console.log(moh47[i], typeof moh47[i]);
}

////////////////////////////////////////
// Looping backwards and Loops in Loops

const moh48 = [
  "Mohammed",
  "ALDAHER",
  1989,
  "student",
  ["Mahmud", "Eyad", "Ahmad", "Abdul"],
];

for (let i = moh48.length - 1; i >= 0; i--) {
  console.log(i, moh48[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}--`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️.`);
  }
}

//////////////////
// The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♂️.`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♂️.`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
