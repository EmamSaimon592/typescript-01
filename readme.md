# var vs let 
 1.  let is preferable over var.
 2. let is block-scoped let variables cannot be read or written to before they are declared.
 3. let variables cannot be  <b> re-declared</b>.

# const
  1. <i><span style="color: red;">const {variable name}: {variable type} = {variable value}</span></i>

 2. const declares an immutable variable that cannot be reassigned
  ```bash
   const PI = 3.1416
   PI = 3.14; // Error
   ```
  ```bash
  const person = { name: "Alice", age: 30 };
  person.age = 31; // Valid
  person = { name: "Bob", age: 40 }; // Error 
  ```



<table border="1" style="border-collapse: collapse; border: 1px solid black;">
  <tr>
    <th>Variable Name</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Number</td>
    <td>Used to store numbers, both integers and
 floating-point numbers.</td>
    <td>
    let age: number = 25; <br>
    let pi: number = 3.14;
 </td>
  </tr>
  <tr>
    <td>String</td>
    <td> Represents textual data</td>
    <td>
    let name: string = "Emam Saimon"; <br>
    let message: string = 'Hello, TypeScript!';
    </td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td> 
    Represents true/false values . Supports logical operations like AND (&&), OR (||), and NOT (!)
    </td>
    <td>
    let isActive: boolean = true; <br>
    let isCompleted: boolean = false;
    </td>
  </tr>
  <tr>
    <td>Null and undefined</td>
    <td>Represents absence of a value</td>
    <td>
   let result: null = null; <br>
   let data: undefined = undefined;
  </td>
  </tr>
  <tr>
    <td>Bigint</td>
    <td>Represents arbitrary precision integers</td>
    <td>let bigValue:bigint = BigInt(1000000000000000);</td>
  </tr>
  <tr>
    <td>Symbol</td>
    <td>Represents unique identifiers.Symbols are unique, even if they have the
 same description.</td>
    <td>
    const symbol1 = Symbol("Emam"); <br>
    const symbol2 = Symbol("Saimon");<br>
    console.log(symbol1 === symbol2); //False
    </td>
  </tr>
   <tr>
    <td>Arrays</td>
    <td>represent ordered collections of values and Arrays can store values of the same type,such as numbers or strings, or a combination of different types. Arrays have built-in methods and properties for manipulation and access,such as push(), pop(), length, andforEach(). </td>
    <td>
     let numbers: number[] = [1, 2, 3, 4, 5]; <b>Or</b> <br>
     let mixedArray: (number | string)[] = [1, "two", 3, "four"];
    </td>
  </tr>
</table>

---
# Objects
 Objects can be nested within other objects to create complex data structures.
```bash
 let user: {
 name: string,
 address: {
 street: string,
 city: string
 }
 } = {
 name: "John",
 address: {
 street: "123 Main St",
 city: "New York"
 }
 }
```

# Functions
<table border="1" style="border-collapse: collapse; border: 1px solid black; width: 50%;">
  <tr>
    <th>Functions in typescript</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>1.Basic Function</td>
    <td>
      <pre>
<code style="color:DodgerBlue;">function greet(): void {
  console.log("Hello, TypeScript!");
}</code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>2.Function with Parameters</td>
    <td>
      <pre>
  <code style="color:Crimson;">

function add(a: number, b: number): number {
  return a + b;
}
   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>3.Function with Optional Parameter</td>
    <td>
      <pre>
  <code style="color:Aquamarine">
function greetUser(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello!";
}

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>4.Function with Default Parameter</td>
    <td>
      <pre>
  <code style="color:BlueViolet">
function multiply(a: number, b: number = 2): number {
  return a * b;
}

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>5.Function with Rest Parameters</td>
    <td>
      <pre>
  <code style="color:Brown">

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>6.Arrow Functions</td>
    <td>
      <pre>
  <code style="color:Chartreuse">
const square = (n: number): number => n * n;

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>7.Function Expression</td>
    <td>
      <pre>
  <code style="color:Chocolate">
const divide: (a: number, b: number) => number = function (a, b) {
  return a / b;
};

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>8.Anonymous Function</td>
    <td>
      <pre>
  <code style="color:DarkOrange">

setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>9.Callback Function</td>
    <td>
      <pre>
  <code style="color:DeepPink">

function processUserInput(callback: (input: string) => void) {
  const input = "TypeScript";
  callback(input);
}

processUserInput((name) => {
  console.log("Hello " + name);
});

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>10.Function Overloading</td>
    <td>
      <pre>
  <code style="color:Fuchsia">
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2));       // 3
console.log(combine("a", "b"));   // "ab"

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>11.Generic Function</td>
    <td>
      <pre>
  <code style="color:Tomato">
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

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>12.Void Return Type</td>
    <td>
      <pre>
  <code style="color:LightGreen">
function logMessage(msg: string): void {
  console.log(msg);
}

  </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>13.Never Return Type</td>
    <td>
      <pre>
  <code style="color:MediumPurple">

function throwError(msg: string): never {
  throw new Error(msg);
}

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>14.Async Function</td>
    <td>
      <pre>
  <code style="color:MediumSpringGreen">
async function fetchData(): Promise<string> {
  return "Data received";
}

   </code>
      </pre>
    </td>
  </tr>


  <tr>
    <td>15.Function as a Parameter (Higher-order function)</td>
    <td>
      <pre>
  <code style="color:Wheat">
function calculator(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

const result = calculator(10, 5, (x, y) => x + y); // 15

   </code>
      </pre>
    </td>
  </tr>
</table>

---

# Union type
 syntax
 ```besh
 let variableName : type1 | type2;
 ```
example:
```besh
let id: string | number;
id = 101;          // valid
id = "EmamSaimon"; // valid
id = true ;        //❌
```

#  Intersection Types
```besh
type A = { name: string };
type B = { age: number };
type Person = A & B; // Intersection
const p: Person = {
  name: "Imam",
  age: 25
};
```

# Tuples
```besh
et user: [string, number];
user = ["Imam", 25];  // ✅ valid
// user = [25, "Imam"]; // ❌ invalid
// user = ["Imam"];     // ❌ invalid
```

# Enum
Enum is a powerful feature in TypeScript that helps you <b> handle constant values</b> ​​in a neat way. Using it makes your code more readable and maintainable.


 Basic Syntax:
 ```besh
enum Fruit {
  a = "Apple",
  b = "Banana",
  c = "cherry"
}
let myFruit: Fruit = Fruit.a;
myFruit = Fruit.c;
console.log(myFruit); // output will be cherry
 ```
---

# Oops In Typescript
In TypeScript, OOPs (Object-Oriented Programming System) is fully supported using features like:
 1.Classes and Objects 

2. Inheritance  ---> use keyword( ✅extends)

3. Encapsulation ---> public , private , protected 
    -  <b>private = Only access from inside class.</b>
    *  <b>protected = class and subclass </b>
    +  <b>public =  class, subclass, object</b>

4. Polymorphism 

5. Abstraction

6. Interfaces
 Basic syntax:

    ```besh
    interface Person {
      name: string;
      age: number;
      greet(): void;
    }
    ```
 ### Interface Class
  ```besh
  interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Bark!");
  }
}

const myDog = new Dog("Tommy");
myDog.makeSound(); // Output: Bark!

  ```
### Interface with Function Type
 ```besh
 interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;

console.log(addNumbers(5, 3)); // Output: 8

 ```

# Generics in TypeScript
 + Basic syntax:
 ```rudy
 function identity<T>(arg: T): T {
  return arg;
}
identity<number>(5);       // Output: 5
identity<string>("Hello"); // Output: Hello
```

# Getter & Setter 
In TypeScript, getters and setters allow you to define methods for accessing and updating the properties of a class in a controlled way.