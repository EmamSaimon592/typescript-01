class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log('Animal Sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark/ ishowspeed.... 🐶');
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log('Miaw........😸');
  }
}

const myDog = new Dog('Tom');
const myCat = new Cat('Jerry');

myDog.makeSound(); // output :  Bark/ ishowspeed.... 🐶
myCat.makeSound();  // Miaw........😸

