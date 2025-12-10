"use strict";

const letters1 = ["a", "b", "c"];
const letters2 = ["a", "B", "c"];

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
}
console.log(every(letters1, (x) => x === x.toLowerCase()));
console.log(every(letters2, (x) => x === x.toLowerCase()));
console.log(letters1.every((x) => x === x.toLowerCase()));
console.log(letters2.every((x) => x === x.toLowerCase()));
console.log("some function");

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}
console.log(some(letters1, (x) => x === x.toUpperCase()));
console.log(some(letters2, (x) => x === x.toUpperCase()));
console.log(letters1.some((x) => x === x.toUpperCase()));
console.log(letters2.some((x) => x === x.toUpperCase()));

function onlyIf(array, test, action) {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      action(array[i]);
    } else {
      console.log("didnt pass test");
    }
  }
}
function printIt(x) {
  console.log(x);
}
onlyIf(letters1, (x) => x === x.toUpperCase(), printIt);

onlyIf(letters2, (x) => x === x.toUpperCase(), printIt);
onlyIf(letters1 ,(x) => x === x.toUpperCase(), x =>console.log(x));

