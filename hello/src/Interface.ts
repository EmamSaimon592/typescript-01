// creating Object using Interface
interface Person {
  name: string;
  age: number;
  title: string;
  greet(): void;
}

const user: Person = {
  name: 'Emam Saimon',
  age: 22,
  title: 'MERN STACK Developer | 3D and GameDev Enthusiast',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
user.greet();

