// regular function

// a single value
function addOne(a: number) {
  return a + 5;
}

const result = addOne(5);
console.log(result);


// a double value

function addTwo(a: number, b: number) {
  return a + b;
}

const result1 = addTwo(5, 10);
console.log(result1);

// arrow function

const double = (x: number, y: number) => x * y;
const result2 = double(2 , 10);