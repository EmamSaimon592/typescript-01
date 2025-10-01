// example 01
const squre = (n: number): number => n * n;
console.log(squre(5)); // you got output 25

// example:02
const divide: (a: number, b: number) => number = function (a, b) {
  return a / b;
};
const r = divide(100, 5);
console.log(r);

// setTimeout function 

setTimeout(() => {
  console.log('My name is Emam Saimon');
}, 5000);



// function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2));       // 3
console.log(combine("Emam", "Saimon"));   // "EmamSaimon"



// generic func ........................>



//syntx:=>
function identity<T>(value: T): T {
  return value;
}
//T is a type variable (you can name it anything, but T is common).
//The function returns the same type it receives.

const num = identity<number>(5); // T = number
const str = identity<string>('Hi'); // T = string
const num2 = identity(10); // T inferred as number

console.log(num);
console.log(str);
console.log(num2);

