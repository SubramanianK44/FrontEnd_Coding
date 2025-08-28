// 1. Add two numbers
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));

// 2. Subtract two numbers
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(10, 4));

// 3. Multiply two numbers
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 6));

// 4. Divide two numbers
const divide = function(a, b) {
  return a / b;
};
console.log(divide(20, 4));

// 5. Modulus
const modulus = function(a, b) {
  return a % b;
};
console.log(modulus(10, 3));

// 6. Power
const power = function(a, b) {
  return a ** b;
};
console.log(power(2, 3));

// 7. Check even
const isEven = function(n) {
  return n % 2 === 0;
};
console.log(isEven(4));

// 8. Check odd
const isOdd = function(n) {
  return n % 2 !== 0;
};
console.log(isOdd(5));

// 9. Check positive
const isPositive = function(n) {
  return n > 0;
};
console.log(isPositive(7));

// 10. Check negative
const isNegative = function(n) {
  return n < 0;
};
console.log(isNegative(-3));

// 11. Greet someone
const greet = function(name) {
  return "Hello, " + name;
};
console.log(greet("Ram"));

// 12. Full name
const fullName = function(f, l) {
  return f + " " + l;
};
console.log(fullName("John", "Doe"));

// 13. Convert to uppercase
const toUpper = function(str) {
  return str.toUpperCase();
};
console.log(toUpper("hello"));

// 14. Convert to lowercase
const toLower = function(str) {
  return str.toLowerCase();
};
console.log(toLower("WORLD"));

// 15. Find string length
const stringLength = function(str) {
  return str.length;
};
console.log(stringLength("Hello"));

// 16. Area of square
const areaSquare = function(side) {
  return side * side;
};
console.log(areaSquare(4));

// 17. Area of rectangle
const areaRectangle = function(l, w) {
  return l * w;
};
console.log(areaRectangle(5, 3));

// 18. Area of triangle
const areaTriangle = function(b, h) {
  return 0.5 * b * h;
};
console.log(areaTriangle(4, 6));

// 19. Area of circle
const areaCircle = function(r) {
  return 3.14 * r * r;
};
console.log(areaCircle(7));

// 20. Perimeter of rectangle
const perimeterRectangle = function(l, w) {
  return 2 * (l + w);
};
console.log(perimeterRectangle(6, 2));

// 21. Find max
const max = function(a, b) {
  return a > b ? a : b;
};
console.log(max(8, 15));

// 22. Find min
const min = function(a, b) {
  return a < b ? a : b;
};
console.log(min(8, 15));

// 23. Square a number
const square = function(n) {
  return n * n;
};
console.log(square(9));

// 24. Cube a number
const cube = function(n) {
  return n * n * n;
};
console.log(cube(3));

// 25. Factorial
const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

// 26. First element of array
const firstElement = function(arr) {
  return arr[0];
};
console.log(firstElement([10, 20, 30]));

// 27. Last element of array
const lastElement = function(arr) {
  return arr[arr.length - 1];
};
console.log(lastElement([10, 20, 30]));

// 28. Array length
const arrayLength = function(arr) {
  return arr.length;
};
console.log(arrayLength([1, 2, 3, 4]));

// 29. Sum of array
const sumArray = function(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
};
console.log(sumArray([1, 2, 3]));

// 30. Average of array
const averageArray = function(arr) {
  return sumArray(arr) / arr.length;
};
console.log(averageArray([10, 20, 30]));
