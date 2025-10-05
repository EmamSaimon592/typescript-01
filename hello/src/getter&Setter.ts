class Person{
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string{
    return this._name;
  }
  // setter

  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    }
    else {
      console.log("Name Can't be Empty");
      
    }
  }
}
const person = new Person("Imam");

// Use getter (no parentheses)
console.log(person.name);  // Imam

// Use setter (assignment like a property)
person.name = "Hossain";   // Sets new name
console.log(person.name);  // Hossain

person.name = "";          // Shows error message
