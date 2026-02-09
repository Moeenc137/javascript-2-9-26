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
