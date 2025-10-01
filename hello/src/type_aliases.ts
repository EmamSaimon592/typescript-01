type User = {
  name: string;
  age?: number; // Optional Properties
  title?: string; // Optional Properties
};

const user1: User = {
  name: "Imam",
  age: 25,
  title:"MERN Stack Developer | 3D , DevOps & Game Dev Enthusiast"
  
};
const user2: User = {
  name: "Ash",
  title:"Web Developer"
  
};
const user3: User = {
  name: "Farshid",
  age: 20
};


console.log(user1); 
console.log(user2);
console.log(user3); 

/*{
  name: 'Imam',
  age: 25,
  title: 'MERN Stack Developer | 3D , DevOps & Game Dev Enthusiast'
}
{ name: 'Ash', title: 'Web Developer' }
{ name: 'Farshid', age: 20 }
*/
