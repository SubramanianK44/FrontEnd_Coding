// 1. Create an object
let person = { name: "John", age: 25 };

// 2. Access object property (dot notation)
console.log(person.name);

// 3. Access property (bracket notation)
console.log(person["age"]);

// 4. Add new property
person.gender = "Male";
console.log(person);

// 5. Modify property value
person.age = 30;
console.log(person);

// 6. Delete property
delete person.gender;
console.log(person);

// 7. Check if property exists
console.log("name" in person);

// 8. Get object keys
console.log(Object.keys(person));

// 9. Get object values
console.log(Object.values(person));

// 10. Get entries (key-value pairs)
console.log(Object.entries(person));

// 11. Loop through object (for...in)
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 12. Create empty object
let emptyObj = {};

// 13. Object with multiple data types
let student = {
  name: "Sara",
  age: 21,
  isPassed: true,
  marks: [80, 85, 90]
};

// 14. Nested object
let user = {
  name: "Alex",
  address: {
    city: "New York",
    zip: 10001
  }
};
console.log(user.address.city);

// 15. Object inside array
let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 }
];
console.log(products[1].name);

// 16. Function inside object (method)
let car = {
  brand: "Toyota",
  start: function () {
    return "Car started";
  }
};
console.log(car.start());

// 17. Shorthand method
let dog = {
  bark() {
    return "Woof!";
  }
};
console.log(dog.bark());

// 18. Object constructor
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
}
let cat = new Animal("Cat", "Meow");
console.log(cat);

// 19. Object.freeze
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // won't change
console.log(obj);

// 20. Object.seal
let obj2 = { b: 2 };
Object.seal(obj2);
obj2.b = 3; // allowed
obj2.c = 4; // not allowed
console.log(obj2);

// 21. Combine objects
let objA = { a: 1 };
let objB = { b: 2 };
let combined = Object.assign({}, objA, objB);
console.log(combined);

// 22. Destructuring
let { name, age } = person;
console.log(name, age);

// 23. Object with array property
let team = {
  members: ["A", "B", "C"]
};
console.log(team.members[1]);

// 24. Add function as property
let circle = {
  radius: 5,
  area: function () {
    return 3.14 * this.radius ** 2;
  }
};
console.log(circle.area());

// 25. Check object type
console.log(typeof person); // "object"

// 26. Convert object to JSON
let jsonStr = JSON.stringify(person);
console.log(jsonStr);

// 27. Convert JSON to object
let backToObj = JSON.parse(jsonStr);
console.log(backToObj);

// 28. Count object properties
console.log(Object.keys(person).length);

// 29. Dynamic property
let key = "color";
let paint = {};
paint[key] = "Red";
console.log(paint);

// 30. Clone object (shallow)
let original = { x: 1 };
let clone = { ...original };
console.log(clone);

// 31. Merge using spread
let merged = { ...objA, ...objB };
console.log(merged);

// 32. Object with null value
let sample = { data: null };
console.log(sample);

// 33. Object with undefined value
let sample2 = { info: undefined };
console.log(sample2);

// 34. Nested object modification
user.address.zip = 12345;
console.log(user.address);

// 35. Object with boolean value
let status = { online: true };
console.log(status.online);

// 36. Object property as function return
let square = {
  side: 4,
  getArea: function () {
    return this.side ** 2;
  }
};
console.log(square.getArea());

// 37. Add property using Object.defineProperty
let obj3 = {};
Object.defineProperty(obj3, "id", {
  value: 101,
  writable: false
});
console.log(obj3.id);

// 38. Get all property descriptors
console.log(Object.getOwnPropertyDescriptors(obj3));

// 39. Optional chaining
console.log(user?.address?.city);

// 40. Loop through object values
Object.values(person).forEach(val => console.log(val));

// 41. Object with symbols
let sym = Symbol("id");
let user2 = { name: "Ravi", [sym]: 123 };
console.log(user2[sym]);

// 42. Prevent extensions
let locked = { a: 1 };
Object.preventExtensions(locked);
locked.b = 2; // won't be added
console.log(locked);

// 43. Check if object is sealed
console.log(Object.isSealed(obj2));

// 44. Check if object is frozen
console.log(Object.isFrozen(obj));

// 45. Object with computed property
let fruit = "apple";
let basket = {
  [fruit]: 5
};
console.log(basket.apple);

// 46. Create object using Object.create
let base = { greet: () => "Hello" };
let newObj = Object.create(base);
console.log(newObj.greet());

// 47. Loop through key-value pairs
Object.entries(person).forEach(([key, value]) => {
  console.log(key + " = " + value);
});

// 48. Object as lookup table
let grades = {
  A: "Excellent",
  B: "Good",
  C: "Average"
};
console.log(grades["A"]);
