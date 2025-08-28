// 1. Create an array
let fruits = ["apple", "banana", "mango"];

// 2. Access first element
console.log(fruits[0]);

// 3. Access last element
console.log(fruits[fruits.length - 1]);

// 4. Add item at end
fruits.push("orange");
console.log(fruits);

// 5. Add item at beginning
fruits.unshift("grape");
console.log(fruits);

// 6. Remove last item
fruits.pop();
console.log(fruits);

// 7. Remove first item
fruits.shift();
console.log(fruits);

// 8. Find index of an item
console.log(fruits.indexOf("banana"));

// 9. Check if item exists
console.log(fruits.includes("mango"));

// 10. Change item value
fruits[1] = "kiwi";
console.log(fruits);

// 11. Array length
console.log(fruits.length);

// 12. Loop through array (for loop)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 13. Loop using forEach
fruits.forEach(fruit => console.log(fruit));

// 14. Create number array
let numbers = [5, 10, 15, 20];

// 15. Map: double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// 16. Filter: get numbers > 10
let greaterThan10 = numbers.filter(num => num > 10);
console.log(greaterThan10);

// 17. Reduce: sum all numbers
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

// 18. Sort array ascending
let sortedAsc = [...numbers].sort((a, b) => a - b);
console.log(sortedAsc);

// 19. Sort array descending
let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log(sortedDesc);

// 20. Reverse array
console.log(numbers.reverse());

// 21. Join array to string
console.log(fruits.join(", "));

// 22. Split string into array
let sentence = "hello world javascript";
let words = sentence.split(" ");
console.log(words);

// 23. Slice array
let sliced = fruits.slice(1, 3);
console.log(sliced);

// 24. Splice: remove 1 item at index 1
fruits.splice(1, 1);
console.log(fruits);

// 25. Splice: add item at index 1
fruits.splice(1, 0, "lemon");
console.log(fruits);

// 26. Nested arrays
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][1]); // Output: 4

// 27. Flatten nested array
let nested = [1, [2, 3], [4, 5]];
let flat = nested.flat();
console.log(flat);

// 28. Fill array with value
let filled = new Array(5).fill(0);
console.log(filled);

// 29. Check if variable is array
console.log(Array.isArray(fruits));

// 30. Find first even number
let evens = numbers.find(n => n % 2 === 0);
console.log(evens);

// 31. Find index of first number > 10
console.log(numbers.findIndex(n => n > 10));

// 32. Remove duplicates
let withDupes = [1, 2, 2, 3];
let noDupes = [...new Set(withDupes)];
console.log(noDupes);

// 33. Merge two arrays
let a = [1, 2], b = [3, 4];
let merged = a.concat(b);
console.log(merged);

// 34. Merge using spread
let merged2 = [...a, ...b];
console.log(merged2);

// 35. Copy array
let copy = [...fruits];
console.log(copy);

// 36. Empty an array
fruits.length = 0;
console.log(fruits);

// 37. Multidimensional access
let grid = [[1, 2], [3, 4], [5, 6]];
console.log(grid[2][0]); // Output: 5

// 38. Array of objects
let users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 }
];
console.log(users[1].name);

// 39. Filter objects by age
let adults = users.filter(user => user.age >= 21);
console.log(adults);

// 40. Sort objects by name
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);

// 41. Check if all numbers are positive
console.log(numbers.every(n => n > 0));

// 42. Check if any number is > 10
console.log(numbers.some(n => n > 10));

// 43. Count elements in array
let count = numbers.length;
console.log(count);

// 44. Loop with for...of
for (let num of numbers) {
  console.log(num);
}

// 45. Loop with for...in
for (let index in numbers) {
  console.log(numbers[index]);
}

// 46. Convert array to Set (unique)
let set = new Set([1, 2, 2, 3]);
console.log([...set]);

// 47. Create array from string
let chars = Array.from("hello");
console.log(chars);

// 48. Find max and min from array
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("Max:", max, "Min:", min);
