// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//function checkValue(value) {
/* if (value > 0) {
       return true;
   } 
       else if (value < 0) {
   return false;
    } 
   else {
        return false; // Якщо значення рівне 0
  }} 
  
console.log(checkValue(1));  // true
console.log(checkValue(0));  // false
console.log(checkValue(-3)); // false 
*/
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
/*
let variable = "test";

if (variable === "test") {
  console.log(true);
} else {
  console.log(false);
}
let variables = ['test', "qwerty", true];
variables.forEach(variable => {
  if (variable === "test") {
    console.log(true);
  } else {
    console.log(false);
  }
});
*/
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
/*
function modifyNumber(number) {
  if (number > 10) {
    number -= 5;
  } else {
    number += 5;
  }
  console.log(number);
}

// Перевірка на варіантах 1, 10, 13
modifyNumber(1);   // Виведе 6 (1 + 5)
modifyNumber(10);  // Виведе 15 (10 + 5)
modifyNumber(13);  // Виведе 8 (13 - 5)
*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
/*
function getMonthByNumber(monthNumber) {
  const months = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
  ];
  
  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1];
  } else {
    return "Невірне число! Введіть число від 1 до 12.";
  }
}

let monthNumber = 7;  // замінити на число від 1 до 12
console.log(getMonthByNumber(monthNumber));
*/

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
/*
function sumDigits(number) {
    if (number >= 100 && number <= 999) {
        // Отримуємо кожну цифру числа
        const hundreds = Math.floor(number / 100);
        const tens = Math.floor((number % 100) / 10);
        const ones = number % 10;

        // Повертаємо суму цифр
        return hundreds + tens + ones;
    } else {
        return "Будь ласка, введіть тризначне число.";
    }
}

// Приклад використання
const number = 470;
console.log(sumDigits(number));  // Виведе 11
*/