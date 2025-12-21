class NewStudent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  details() {
    return `Name:${this.name},Age:${this.age}`;
  }
}

const student1 = new NewStudent("Alice", 20);
console.log(student1.details()); // Output: Name:Alice,Age:20

// getters and setters
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
}

const peRson1 = new Person("Bob", 25);
console.log(peRson1.name); // Output: Bob
console.log(peRson1.age); // Output: 25

peRson1.name = "Charlie";
console.log(peRson1.name); // Output: Charlie

peRson1.age = 30;
console.log(peRson1.age); // Output: 30
