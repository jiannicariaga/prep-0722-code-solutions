function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log('product: ', product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log('quotient: ', quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference: ', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('full name: ', fullName);

function cube(number) {
  return number * number * number;
}

var multipleOf3 = cube(5);
console.log('cube: ', multipleOf3);
