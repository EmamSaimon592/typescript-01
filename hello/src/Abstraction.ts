abstract class Vehicle {
  abstract startEngine(): void;

  stopEngine(): void {
    console.log('Engine stopped');
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log('Car engine started');
  }
}

const car = new Car();
car.startEngine(); // Car engine started
car.stopEngine(); // Engine stopped
