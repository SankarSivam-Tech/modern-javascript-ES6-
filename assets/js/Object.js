// there are two ways to create an object in JavaScript

// 1. Using Object Literal
// key value pair->proprty
//function->method
const person1 = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  city: "New York",
  //   fullName: function () {
  //     console.log(this.firstName);
  //     return this.firstName + " " + this.lastName;
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  parents: {
    father: "John Smith",
    mother: "Jane Smith",
  },
  hobbies: ["reading", "traveling", "swimming"],
};
console.log(person1);
console.log(person1.firstName); //dot notation
console.log(person1.parents.father);
console.log(person1.hobbies[0]);

const person3 = {
  yearOfBirth() {
    return new Date().getFullYear() - this.age;
  },
  favSport: "Cricket",
};

// Object Merging
Object.assign(person1, person3);
console.log(person1); //full object
console.log(person1.yearOfBirth());

//object cloning
const objectCopied = Object.assign({}, person1);
console.log(objectCopied);

//object merging by spread operator
const objectMergingBySpreadOperator = { ...person1, ...person3 };
console.log(objectMergingBySpreadOperator);

// Delete key:value pair from Object
delete person1.age
console.log(person1);



document.getElementById("result").innerHTML = person1.lastName;
document.getElementById("result1").innerHTML = person1.fullName();

// 2. Using Object Constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.city = "Los Angeles";
console.log(person2);
