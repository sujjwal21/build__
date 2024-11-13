// Create a constructor function Person with a property name. Add a method greet to its prototype that prints "Hello, <name>". Test this with different instances.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let person1 = new Person("Ujjwal");
let person2 = new Person("Rakesh");

person1.greet();
person2.greet();
