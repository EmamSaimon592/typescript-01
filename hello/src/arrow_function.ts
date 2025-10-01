// example 01
const squre = (n: number): number => n * n;
console.log(squre(5)); // you got output 25

// example:02
const divide: (a: number, b: number) => number = function (a, b) {
  return a / b;
};
const r = divide(100, 5);
console.log(r);

// setTimeout

setTimeout(() => {
  console.log('My name is Emam Saimon');
}, 5000);
