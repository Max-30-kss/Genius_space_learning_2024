//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//let name = "Іван";
//let city = "Іван";
//console.log(city);

//***2***
//Який буде результат виконання скрипта?
//let Name = "Olga";
//console.log(`привіт ${1}`); //Привіт 1
//console.log(`привіт ${"Name"}`); //Привіт name
//console.log(`привіт ${Name}`); // Привіт Olga 


//***3***
//Видобути число зі змінних
//let a = "5";
//let b = "13cvb";
//let c = "12.9sxdcfgv";
// вивести в консоль тип

// Видобуття чисел
//let numA = parseFloat(a); // для цілого числа або дробу
//let numB = parseFloat(b);
//let numC = parseFloat(c);
// Виведення значень і їх типів
//console.log(numA, typeof numA); // 5 "number"
//console.log(numB, typeof numB); // 13 "number"
//console.log(numC, typeof numC); // 12.9 "number"


//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
//const result = 0.1 + 0.2;
//console.log(Number(result.toFixed(10)) === 0.3); // true
//console.log(result.toFixed(10)); // "0.3000000000"

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//const numbers = [20, 10, 50, 40];
//const maxNumber = Math.max(...numbers);
//console.log(maxNumber); // Виведе 50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
//const randomNum = Math.random() * (4 - 2) + 2;
//console.log(randomNum);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
//const message = "Welcome to Bahamas!";
//console.log(message.length); // Виведе довжину рядка 19

//***8**
//вивести в консоль message  великими літерами

//let message = "Привіт";
//console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

//let person = {};

// Додати ім'я, вік і місто
//person.name = "Максим";
//person.age = 30;
//person.city = "Херсон";

// Вивести результат в консоль
//console.log(person);

// Видалити місто
//delete person.city;

// Додати булеве значення з ключем: like flowers
//person.likeFlowers = true;

// Вивести результат в консоль
//console.log(person);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

//const obj = {
//name: "John",
//age: 30,
//profession: "developer"};

//for (let key in obj) {
//console.log(`Key: ${key}, Value: ${obj[key]}`);}