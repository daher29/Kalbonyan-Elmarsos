///////////////
// LECTURE: Functions
/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
function describeCountry(country, population, capitalCity) {
  const desc = `${country} has ${population} millions people and its capital city is ${capitalCity}.`;
  return desc;
}

const descSyria = describeCountry("Syria", 18, "Damascus");
const descTurkey = describeCountry("Turkey", 85, "Ankara");
const descEgypt = describeCountry("Egypt", 103, "Cairo");
console.log(descSyria);
console.log(descTurkey);
console.log(descEgypt);

//////////////////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions
/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
function percentageOfWorld1(population) {
  return ((population * 100) / 7900).toFixed(2);
}
const percSyria = percentageOfWorld1(18);
const percTurkey = percentageOfWorld1(85);
const percEgypt = percentageOfWorld1(103);
console.log(percSyria, percTurkey, percEgypt);
// 4
const percentageOfWorld2 = function (population) {
  return ((population * 100) / 7900).toFixed(2);
};

console.log(
  percentageOfWorld2(18),
  percentageOfWorld2(85),
  percentageOfWorld2(103)
);

////////////////////////////
// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => {
  return ((population * 100) / 7900).toFixed(2);
};

console.log(percentageOfWorld3(18));
console.log(percentageOfWorld3(85));
console.log(percentageOfWorld3(103));

//////////////////////////////////////////////
// LECTURE: Functions Calling Other Functions
/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
const describePopulation = function (country, population) {
  return `${country} has ${population} millions of people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.log(describePopulation("Syria", 18));
console.log(describePopulation("Turkey", 85));
console.log(describePopulation("Egypt", 103));

///////////////////////////////////
// LECTURE: Introduction to Arrays
/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

// Addition
const descChina = describeCountry("China", 1413, "Beijing");
console.log(descChina);
//

const populations = [18, 85, 103, 1413];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

/////////////////////////////////////////////
// LECTURE: Basic Array Operations (Methods)
/*
1. Create an array containing all the neighboring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbors. Store the array
into a variable called 'neighbors'
2. At some point, a new country called 'Utopia' is created in the neighborhood of
your selected country. So add it to the end of the 'neighbors' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbors' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighboring countries. To do that, find the
index of the country in the 'neighbors' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/
const neighbors = ["Turkey", "Iraq", "Jordan", "Palestine", "Lebanon"];
neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
  console.log("Mmmm, Probably not a central European country..");
}

// const indxOfPalestine = neighbors.indexOf("Palestine");
// neighbors[indxOfPalestine] = "Occupied Palestine";
neighbors[neighbors.indexOf("Palestine")] = "Occupied Palestine";
console.log(neighbors);

/////////////////////
// LECTURE: Introduction to Objects
/*
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbors' (an array like we used in previous assignments)
*/
const myCountry = {
  country: "Syria",
  capital: "Damascus",
  language: "Arabic",
  population: 18,
  neighbors: ["Turkey", "Iraq", "Jordan", "Palestine", "Lebanon"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} millions ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

/////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation
/*
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighboring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
console.log(
  `${myCountry.country} has ${myCountry.population} millions ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);
myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

///////////////////////////
// LECTURE: Object Methods
/*
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighboring countries, and false if
there are. Use the ternary operator to set the property.
*/

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry.checkIsIsland()); // it done its job but i don't know why it is (undefined in console)
console.log(myCountry);

////////////////////////////////////
// LECTURE: Iteration: The for Loop
/*
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting,`);
}

////////////////////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing
/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/
const populations1 = [18, 85, 103, 1413];
const percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  percentages2.push(percentageOfWorld1(populations1[i]));
}
console.log(percentages2);

////////////////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops
/*
1. Store this array of arrays into a variable called 'listOfNeighbors'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighboring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbor: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let x = 0; x < listOfNeighbors[i].length; x++) {
    if (listOfNeighbors[i][x] === undefined) continue;
    console.log(`Neighbor: ${listOfNeighbors[i][x]}`);
  }
}

///////////////////////////
// LECTURE: The while Loop
/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/
const percentages3 = [];
let i = 0;

while (i < populations1.length) {
  percentages3.push(percentageOfWorld1(populations1[i]));
  i++;
}
console.log(percentages3);
// not much different from (for loop) in this situation
