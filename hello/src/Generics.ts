// <T> means Generic type parameter

function identity<T>(arg: T): T {
  return arg;
}
identity<number>(10);
identity<string>("Imam Hossain");
identity<boolean>(true);  


