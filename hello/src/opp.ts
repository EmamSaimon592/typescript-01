// example 01 [ class and object]
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void{
    console.log(`hello, my name is ${this.name}`);
    
  }
}
const person1 = new Person("Imam", 22);
person1.greet(); // Output: Hello, my name is Imam  