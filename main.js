//working with strings 3 other half
//split and join method in practical case to capitalize name:
capitalizeName = function (name) {
  let names = name.split(" ");
  let joinName = [];
  for (n of names) {
    joinName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(joinName.join(" "));
};

capitalizeName("name is this");

//padding:
let str = "abcdefg";
console.log(str.padStart(20, "+").padEnd(30, "+")); //number is the total lenght you want to set to
//the string and then you add the symbol which you wanna add as padding.

// practical usecase of padding
card = function (number) {
  let str = number + ""; //if one operand is a string rest automatically converts to string.
  let last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(card(164873129487));

//repeat method:
let rMethod = "All planes delayed because weather";
console.log(rMethod.repeat(5)); //it repeats the string.
//usecase
rUsecase = function (n) {
  console.log(`${n} number of planes waiting${"<|>"}`);
};

rUsecase(12);

//coding challange 4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  let text = document.querySelector("textarea").value;
  console.log(text);
  let rows = text.split("/n");
  for (const row of rows) {
    let [first, second] = row.trim().toLowerCase().split("_");
    const output = `${first}${second.replace(second[0], second[0].toUpperCase)}`;
  }
  console.log(output);
});

// converter = function (textArea) {
//   seperate = textArea.split("_");
//   for (let n of seperate) {
//     let str = n[0].toUpperCase() + n.slice(1);
//     console.log(str);
//   }
//   replace = textArea.includes(" ") ? textArea.replaceAll(" ", "") : textArea;
//   console.log(replace);
// };
// converter("under_case text_area camel_case");

//working with arrays
//starter files:

("use strict");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

/////////////////////////////////////////////////

//array slice method:
//works exactly as string slice method
let arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.slice(1));
console.log(arr.slice(1, 5)); //can also define end point and starting point.
console.log(arr.slice(-2)); //slice in negitive to get values in reverse
console.log(arr.slice(1, -3));
console.log(arr.slice()); //to get shallow copy

//splice method
//it is like slice method but insted of making a new array , it mutates the org one.
console.log(arr.splice(1));
console.log(arr.splice(-5));

//reverse method:
//it reverses the array and mutates the org one.
let arr2 = ["a", "b", "c", "d"];
arr2.reverse();
console.log(arr2);
arr2.splice(1, 3);
console.log(arr2);

//concat
//creates new array
//merges arrays
let arr3 = [1, 3, 23, 2];
let arr4 = [1, 3, 23, 2];
let letters = arr3.concat(arr4);
console.log(letters);

//join
//it joins array and returs a string
console.log(arr3.join("-"));

//LOOPING OVER ARRAYS USING forEach:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You diposited ${movement}`);
  } else {
    console.log(`You withdrew${Math.abs(movement)}`);
  }
});
//used forEach method to loopover an array , the main difference between for of and forEach is that
//forEach basically use callback function each time it itreates.

//to get the index of item in forEach loop you can just pass that as argument in this order first one
//is item second is index third is the entire array which is being looped (item,index,object/array).
//insted of for of loop where you use an other method like .enteries() to get index and items seprately.

//Like:
//0: function(200)
//1: function(450)
//2: function(-400)

//another looping method basically used to multiply all the array elements to a value, and it works
//on same callback priciple which forEach runs on.
//difference is that it doesnt mutate the orignal array , it creates a new one
let usd = movements.map(function (mov) {
  return mov * 2;
});
console.log(usd);
console.log(movements);
//using arrow function:
let usd2 = movements.map((mov) => {
  return mov * 2;
});
console.log(usd2);
console.log(usd);
console.log(movements);
//same as the foreach .map parameters are in the same order (itm,i,arr)

//filter method
//filter method returns a new array, filters values inside array on the basis of a condition we give to it.
//and rest works the same as foreach and map, same order(el,idx,arr),
const withdrawls = movements.filter(function (index) {
  return index < 0;
});
console.log(withdrawls);
//arrows works as return , it is a smaller version as the upper version basiclly works as callbacks funciton.
const withdrawls2 = movements.filter((mov) => mov < 0);
console.log(withdrawls2);

//reduce method
//reduce method basically works a little different then other methods , the main difference is that
//there is another callback parameter "accumalator" and works in an order (acc,currValue,index,array).
//it basically reduce all the current values and returns only one value on the basis of whichever
//operator you give to it.
//accumulator : current summed value , index: current element position , current :current value

const sum = movements.reduce(function (acc, curr, idx, arr) {
  console.log(`itration index: ${idx} accumalator: ${acc} current :${curr}`);
  return acc + curr;
}, 0);
console.log(sum);

//same thing done with for loop where we had to use sum2 as accumalator.
let sum2 = 0;
for (let mov of movements) sum2 += mov;
console.log(sum2);

//finding maximum:
const max = movements.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);
console.log(max);

//The magic of chaining methods

//data pipeline
//we can always add methods to the methods which creates new arrays , unlike reduce.
const euToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

//in js it is not a good practice to use methods which mutautes the orignal array like splice or reverse.
