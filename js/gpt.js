// Примеры использования операторов:
var sum = 5 + 10;
console.log(sum);
var isEqual = 5 == 5;
console.log(isEqual);
var isGreater = 10 > 9;
console.log(isGreater);
var isTrue = true && false;
console.log(isTrue);
// Условные операторы:
var x = 10;
if (x > 5) {
  console.log("x>>>5");
} else {
  console.log("x<<<<<<<5");
}
// Циклы: for
for (var i = 0; i < 5; i++) {
  console.log("Это " + i + "-й проход цикла");
}
// 1. Пример с переменными и арифметическими операторами:
var num1 = 10;
var num2 = 9;
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
console.log("+ ", sum);
console.log("- ", difference);
console.log("* ", product);
console.log("/ ", quotient);
// Пример с логическими операторами:
// && (логическое "И") и ! (логическое "НЕ")
var isSunny = true;
var isWarn = false;

if (isSunny && isWarn) {
  console.log("Погода отличная");
} else if (isSunny && !isWarn) {
  console.log("Солнечно, но прохладно");
} else if (!isSunny && isWarn) {
  console.log("Облачно, но тепло");
} else {
  console.log("Плохая погода :(");
}

// Задача с переменными и арифметическими операторами:
// Запросить у пользователя два числа - prompt
var number1 = console.log("Введите первое число");
var number2 = console.log("Введите второе число:");
// Преобразовать введенные значения в числа
number1 = parseFloat(number1);
number2 = parseFloat(number2);
// Проверить, являются ли введенные значения числами
if (!isNaN(number1) && !isNaN(number2)) {
  // Выполнить арифметические операции
  var sum1 = number1 + number2;
  var difference1 = number1 - number2;
  var product1 = number1 * number2;
  var quotient1 = number1 / number2;
  // Вывести результаты
  console.log("Сумма:", sum1);
  console.log("Разность:", difference1);
  console.log("Произведение:", product1);
  console.log("Частное:", quotient1);
} else {
  console.log("Ошибка! Пожалуйста, введите числа.");
}

// Задача с условным оператором if:prompt
var userName = "Ваш возраст:";
userName = parseFloat(userName);
if (!isNaN(userName)) {
  var sum2 = userName + userName;
  var difference2 = userName - userName;
  var product2 = userName * userName;
  var quotient2 = userName / userName;
  if (userName < 18) {
    console.log("Доступ запрещен");
  } else {
    console.log("Доступ разрешен");
  }
}

// Запросить у пользователя его возраст // prompt
var age = "Введите ваш возраст:";
// Преобразовать введенное значение в число
age = parseInt(age);
// Проверить, является ли введенное значение числом и больше или равно 18
if (!isNaN(age) && age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// Задача с циклом for:
// Запросить у пользователя число для таблицы умножения
var number = prompt("Введите число для таблицы умножения:");
// Преобразовать введенное значение в число
number = parseInt(number);
// Проверить, является ли введенное значение числом
if (!isNaN(number)) {
  // Вывести таблицу умножения для введенного числа от 1 до 10
  console.log("Таблица умножения для числа", number + ":");
  for (var i = 1; i <= 10; i++) {
    var result = number * i;
    console.log(number + " * " + i + " = " + result);
  }
} else {
  console.log("Ошибка! Пожалуйста, введите число.");
}
