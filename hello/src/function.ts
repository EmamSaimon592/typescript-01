function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const result1 = sumAll(1, 2, 3, 4, 5, 6); // 1 + 2 + 3 + 4 + 5 + 6 = 21
console.log(result1); // Output: 21


// ...numbers collects all arguments into an array.

// .reduce() adds them all together.

// Starts from 0 as the initial value.

