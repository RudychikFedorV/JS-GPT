// Обчислити площу прямокутника
function calculateRectangleArea(length, width) {
  return length * width;
}
var length = 15;
var width = 13;
var area = calculateRectangleArea(length, width);
console.log("Площа прямокутника: " + area);

// Перевірити, чи є число парним або непарним
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "парне";
  } else {
    return "непарне";
  }
}
var number = 4;
var result = checkEvenOrOdd(number);
console.log("Число " + number + " є " + result);

// Знайти максимальне число в масиві
function findMaxNumber(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
var numbers = [10, 5, 8, 20, 3];
var maxNumber = findMaxNumber(numbers);
console.log("максимальне число в масиві: " + maxNumber);
