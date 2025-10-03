class Person{
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class employee extends Person{
  showName(): void{
    console.log(`Employee Name is: ${this.name}`);
    
  }
  showAge(): void{
    console.log(`Employee age is: ${this.age}`);
    
  }
}

const emp = new employee("Emam Saimon", 22);
emp.showName();  // Employee name: Emam saimon
emp.showAge();
// console.log(emp.name); // ❌ Error: Property 'name' is protected