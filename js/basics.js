// Умовні оператори -  if, else if, else.
var age = 6;
if (age < 18) {
  console.log("Ви ще неповнолітній");
} else if (age >= 18 && age < 65) {
  console.log("Ви доросла особа");
} else {
  console.log("Ви пенсіонер");
}

// Цикли (Loops):  for, while, do-while
for (var i = 0; i < 5; i++) {
  console.log("Число " + i);
}
var j = 0;
while (j < 5) {
  console.log("Число " + j);
  j++;
}
// Функції (Functions)
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Fedir");

function calculateTotalPrice(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

var items = [{ name: 'Продукт 1', price: 10 }, { name: 'Продукт 2', price: 20 }];
var totalPrice = calculateTotalPrice(items);
console.log('Загальна сума замовлення: ' + totalPrice);

// Масиви (Arrays)
var fruits = ["Яблоко", "Груша", "Вишня", "Слива"];
console.log(fruits[1]);

var users = ['Анна', 'Олексій', 'Катерина', 'Михайло'];

for (var i = 0; i < users.length; i++) {
    console.log('Привіт, ' + users[i] + '!');
}

// Об'єкти (Objects)
var person = {
  name: "Fedir",
  age: 25,
  city: "Zmiev",
};
console.log(person.name);

var user = {
    name: 'Олена',
    age: 30,
    email: 'olena@example.com',
    isAdmin: false
};

console.log('Імя користувача: ' + user.name);
console.log('Email користувача: ' + user.email);


// Цикл for...in
var persons = {
  name: "Fedor",
  age: 35,
  city: "Zmiev2",
};
for (var key in persons) {
  console.log(key + ": " + persons[key]);
}
