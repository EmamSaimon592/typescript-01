// example 01
enum Fruit {
  a = "Apple",
  b = "Banana",
  c = "cherry"
}
let myFruit: Fruit = Fruit.a;
myFruit = Fruit.c;
console.log(myFruit); // output will be cherry

// example 02:
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

const getMessage = (status: Status) => {
  if (status === Status.Success) {
    return 'Everything is OK! 😍 ';
  } else if (status === Status.NotFound) {
    return 'Page not found!😢 ';
  } else {
    return 'Server error!😡';
  }
};
console.log(getMessage(Status.Success)); // Output: Everything is OK!

