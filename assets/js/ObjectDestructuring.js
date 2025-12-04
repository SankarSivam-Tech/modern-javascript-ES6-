// Object Destructuring

const ObjectDestructuring = {
  author: "veera",
  ageing: 30,
  City: "New York",
  FullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  Parents: {
    father: "John Smith",
    mother: "Jane Smith",
  },
  hobbies: ["reading", "traveling", "swimming"],
  // favColor:"blue" // if the property is not present in object, then the assign value is printed. otherwise, the property value is printed
};

// const { author } = ObjectDestructuring;
// console.log(author);

// Assingning default values
const {favColor="red"}=ObjectDestructuring
console.log(favColor);

// changing default values
// let{hobbies:extracurriculum}=ObjectDestructuring
// console.log(extracurriculum);

//destructuring without defining(by using rest operator)
// const {author,ageing,...otherValues}=ObjectDestructuring
// console.log(author,ageing,otherValues)

//object destructuring in functions
function displayUser({author:name,hobbies}){
  console.log(`my name is ${name} and my hobbies are ${hobbies}`);
  
}

displayUser(ObjectDestructuring)


