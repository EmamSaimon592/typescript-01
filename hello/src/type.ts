// 1. Primitive Type Alias
type ID = number;
let userId: ID = 101;

// 2. Object Type Alias
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user1: User = {
  id: 1,
  name: 'Imam',
  isAdmin: true,
};


// 3. Union Type Alias
type Status = 'success' | 'error' | 'loading';
let currentStatus: Status = 'success';


// 4. Function Type Alias
type GreetFunction = (name: string) => string;

const greet: GreetFunction = name => `Hello, ${name}`;


// 5. Tuple Type Alias
type Point = [number, number];
const coordinate: Point = [10, 20];


// 6. Combining Types (Intersection)
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: 'Imam',
  employeeId: 1234,
};
