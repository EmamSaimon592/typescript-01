class Shape {
  area(): void {
    console.log('Calculating area...');
  }
}

class Circle extends Shape {
  area(): void {
    console.log('Area of Circle');
  }
}

class Square extends Shape {
  area(): void {
    console.log('Area of Square');
  }
}

const shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach(shape => shape.area());
// Output:
// Area of Circle
// Area of Square
