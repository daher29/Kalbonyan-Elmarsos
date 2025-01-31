////////////////////////////////////////////////
// Developer Skills & Editor Setup "Challenges"

///////////////////////
// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// 1 - Understanding the problem
// transform arr to string
// days? x = i+1

// 2 - Breaking it to sub problems
// to str, degree symbol, day x = i +1, add ...

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let x = i + 1;

    // wrong method
    // const str = String(arr[i]);
    // const x = i + 1;
    // console.log(`${str}\xB0C in ${x} days...`);

    // str = str + ` ${arr[i]}\xB0C in ${x} days ...`;
    str += ` ${arr[i]}\xB0C in ${x} days ...`; // += is a better way
  }
  console.log(`...${str}`);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
