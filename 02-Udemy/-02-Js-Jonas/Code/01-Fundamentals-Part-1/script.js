const js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Mohammed");
console.log(30);

const firstName = "Mohammed";
console.log(firstName);

const myFirstJob = "Programmer";
const myCurrentJob = "Teacher";

const job1 = "Programmer";
const job2 = "Teacher";

console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 29);
console.log(typeof "daher");

javascriptIsFun = "NO!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2012;
console.log(typeof year);

let age = 29;
age = 30;

const birthYear = 1989;
// birthYear = 1990; (ERROR, CAN NOT DO THAT)
// const job;

let job = "coder";
job = "programmer";

lastName = "ALDAHER"; // never do that (without declaring)
console.log(lastName);

//////////////////
// Math operators

const now = 2029;
const ageMohammed = now - 1989;
const ageSuzan = now - 1994;
console.log(ageMohammed, ageSuzan);

console.log(ageMohammed * 3, ageMohammed / 5, 2 ** 3);

const firstName0 = "Mohammed";
const lastName0 = "ALDAHER";
console.log(firstName0 + " " + lastName0);

/////////////////////////
// Assignments operators
let y = 9 + 7; // 16
y += 9; // x = x + 9
y *= 4; // x = x * 4
y++; // x = x + 1;
y--; // x = x - 1;
y--;
console.log(y);

////////////////////////
// Comparison operators

console.log(ageMohammed > ageSuzan); // >, <, >=, <=
console.log(ageSuzan >= 18);

const isFullAge = ageSuzan <= 24;

console.log(now - 1989 > now - 1994);

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// (depends on the table) Higher precedence execute first
let x, z;
x = z = 25 - 10 - 5; // x = z = 10
console.log(x, z);

// const averageAge = ageMohammed + ageSuzan / 2;
// console.log(ageMohammed, ageSuzan, averageAge);

const averageAge = (ageMohammed + ageSuzan) / 2; // without () would get wrong result as previous example
console.log(ageMohammed, ageSuzan, averageAge);

/////////////////////
// Template Literals

const firstName1 = "Moh";
const jobb = "Student";
const birthYear1 = 1989;
const year1 = 2029;

const mohammed1 =
  "I'm " +
  firstName1 +
  ", a " +
  (year1 - birthYear1) +
  " years old " +
  jobb +
  "!";
console.log(mohammed1);

const mohNew1 = `I'm ${firstName1}, a ${year1 - birthYear1} years old ${jobb}!`;
console.log(mohNew1);

console.log(`Just a regular string...`);

console.log("String with \nmultiple \nlines");

console.log(`String
multiple
lines`);

////////////////////////////////////////////
// if / else Statements (CONTROL STRUCTURE)

const agee = 19;
const isOldEnough = agee >= 18;

if (isOldEnough) {
  console.log("Suzan can start driving license 🚙");
} else {
  const yearsLeft = 18 - agee;
  console.log(`Suzan is too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear0 = 1989;
let century;

if (birthYear0 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//////////////////////
// Type Conversion

const inputYear = "1989";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Moh"));
console.log(typeof NaN);

console.log(String(29), 29);

// Type Coercion
console.log("I am " + 29 + " years old");
console.log("I am " + "29" + " years old");
console.log("I am " + String(29) + " years old");

console.log("29" - "10" - 9);

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
console.log("10" - "4" - "3" - 2 + "5"); // '15'
console.log("10" - "4" - "3" - 2 + 5); // 6
console.log("10" - "4" - "3" - 2 + 5 + "1"); // '61'

///////////////////
// 5 falsy values:
// 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Moh")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
} // because 0 is a false value which means (else)

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED!");
} // useful for debugging except if the value is 0 you will still get false value (else)

//////////////
// == vs ===
// === is better to use in general.

const age2 = "18";
if (age2 === 18) console.log("You just became an adult :D (strict)");

if (age2 == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 29) {
  // '29' == 29 true / '29' === 29 false, that is why added (Number) to prompt
  console.log("Cool! 29 is an amazing number");
} else if (favorite === 5) {
  console.log("Cool! 5 is also an amazing number");
} else if (favorite === 4) {
  console.log("Cool! 4 is also an amazing number");
} else {
  console.log("Number is not 29, 5, or 4");
}

if (favorite !== 21) console.log("Why not 29?");

/////////////////////
// Logical operators

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console, log("Suzan is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Suzan is able to drive!");
} else {
  console.log("Someone else should drive...");
}

////////////////////
// Switch Statement

const day = "friday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plane course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("It's not a valid day!");
}
// without break; the code would continues executing

if (day === "monday") {
  console.log("Plane course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("It's not a valid day!");
}

////////////////////////
// Statements and Expressions

3 + 4;
1989;
true && false && !false;

if (29 > 10) {
  const str = "29 is bigger";
}

const me = "Moh";
console.log(`I'm ${2029 - 1989} years old ${me}`);

//////////////////////////////////////
// The conditional (Ternary) operator
// =====IMPORTANT=====
// ===================

const age3 = 29;
age3 >= 18
  ? console.log("I like to drink nescafe ☕")
  : console.log("I like to drink milk 🥛");

const drink = age >= 18 ? "nescafe ☕" : "milk 🥛";
console.log(drink);

let drink2;
if (age3 >= 18) {
  drink2 = "nescafe ☕";
} else {
  drink2 = "milk 🥛";
}
console.log(drink2);

console.log(`I like to drink ${age3 >= 18 ? "nescafe ☕" : "milk 🥛"}`);

///////////////////////////////////////////////
