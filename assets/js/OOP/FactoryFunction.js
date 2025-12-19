// What is a Factory Function?
// A factory function is a normal function that returns an object.
// 👉 It creates and returns objects without using:
// new
// this
// class
// That’s why it’s called a factory — it manufactures objects.

//example:
function CreatePerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`my name is ${name} and I am ${age} years old`);
    },
  };
}
const createdPerson1=CreatePerson("veera",29)
const createdPerson2=CreatePerson("sankar",28)
createdPerson1.greet(); //my name is veera and I am 29 years old
createdPerson2.greet(); //my name is sankar and I am 28 years old
