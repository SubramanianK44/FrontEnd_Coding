let a=6,b=5
function subraction (a,b){
    c=a+b
    console.log(c)
}
subraction(a,b)

 function addition(a,b){
    let c=a-b;
    console.log(c);
 }

 addition(a,b)

 function multiplication(a,b){
    let c=a*b;
    console.log(c)
 }

 multiplication(a,b)

 let d=88,e=11;

 function division(){
    console.log(d/e);

 }
 division()

 function greater(){
    console.log(a>b)
 }
 greater()


function greet(name = "Friend") {
  console.log("Hello " + name);
}
greet();
greet("John");


function square(n) {
  console.log(n * n);
}
square(4);


function cube(n = 3) {
  console.log(n * n * n);
}
cube();
cube(5);


function fullName(firstName, lastName = "Smith") {
  console.log(firstName + " " + lastName);
}
fullName("Anna");
fullName("Anna", "Lee");


function isPositive(num) {
  console.log(num > 0);
}
isPositive(5);


function max(a, b) {
  console.log(a > b ? a : b);
}
max(10, 20);


function repeat(str, n = 1) {
  console.log(str.repeat(n));
}
repeat("Hi ");
repeat("Hello ", 3);


function addThree(a = 1, b = 2, c = 3) {
  console.log(a + b + c);
}
addThree();
addThree(10, 20, 30);

// 13. Check if two numbers are equal with defaults
function isEqual(a = 0, b = 0) {
  console.log(a === b);
}
isEqual();
isEqual(5, 5);

// 14. Convert km to meters with default km
function kmToMeters(km = 1) {
  console.log(km * 1000);
}
kmToMeters();
kmToMeters(3);

// 15. Print array length
function arrayLength(arr) {
  console.log(arr.length);
}
arrayLength([1, 2, 3]);

// 
function greetUser(greeting = "Hello") {
  console.log(greeting);
}
greetUser();
greetUser("Hi");


function areaSquare(side) {
  console.log(side * side);
}
areaSquare(5);


function perimeterRectangle(length = 4, width = 2) {
  console.log(2 * (length + width));
}
perimeterRectangle();
perimeterRectangle(6, 3);

function isEven(num) {
  console.log(num % 2 === 0);
}
isEven(4);