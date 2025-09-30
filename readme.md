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
