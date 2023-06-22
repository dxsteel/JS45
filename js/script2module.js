// === задача 1 ==================================================
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// === задача 2 ==================================================
// Проведи рефакторинг кода функции checkPassword используя
// паттерн «ранний возврат» удали переменную message
// удали else код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//   if (password === ADMIN_PASSWORD) {
//    return  "Welcome!";
//   }  
    
//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// === задача 3 ==================================================
// Функция checkStorage проверяет возможность оформления заказа и 
// возвращает сообщение о результате.Она принимает два параметра,
// значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя
// паттерн «ранний возврат».

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// === задача 4 ==================================================
// Объяви переменную fruits и присвой ей массив фруктов
//     - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits);

// === задача 5 ==================================================
// Объяви три переменные и присвой каждой из них значение,
//     используя нотацию квадратных скобок.

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// === задача 6 ==================================================
// Переопредели значения элементов с индексами 1 и 3.
//  Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits [1] = `peach`;
// fruits [3] = `banana`;

// console.log(fruits);

// === задача 7 ==================================================
// Объяви переменную fruitsArrayLength и присвой ей 
// длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// === задача 8 ==================================================
// Объяви две переменные:
// lastElementIndex - Индекс последнего элемента масcива
//  fruits через длина_массива - 1
// lastElement	- Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]

// console.log(lastElement);

// === задача 9 ==================================================
// Напиши функцию getExtremeElements(array) которая принимает один
//  параметр array - массив элементов произвольной длины.Функция 
//  должна возвращать массив из двух элементов - первого
// и последнего элемента параметра array.

// function getExtremeElements(array) {

// const newArray = [];
// const first = array[0];
// const last = array[array.length - 1];
// newArray.push(first,last);

// return newArray;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// === задача 10 ==================================================
// Дополни код функции splitMessage(message, delimeter) так,
// чтобы она возвращала в переменной words результат разделения
//  строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
// words = message.split(delimeter);
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// === задача 11 ==================================================
// Сервису гравировки украшений нужна функция, которая бы 
// автоматически считала цену гравировки, в зависимости
//  от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). 
// Эта функция принимает строку, состоящую из слов разделённых
//  только пробелами(параметр message) и цену гравировки 
//  одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость 
// гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {

// let strings = message.split(" ");
// const price = strings.length * pricePerWord;

// return price;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log( calculateEngravingPrice("Web-development is creative work", 20));

// === задача 12 ==================================================
// Дополни код функции makeStringFromArray(array, delimeter) так,
// чтобы она возвращала в переменной string результат соединения
//  элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
  
//     string = array.join(delimeter);
    
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//  === задача 13 ==================================================
// Напиши функцию slugify(title) которая принимает заголовок статьи,
// параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены
//  только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
// let result;
// result = title.toLowerCase().split(' ').join('-');
// return result;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//  === задача 14 ==================================================
// Дополни код так, чтобы переменные содержали частичные копии
// исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//  === задача 15 ==================================================
// Дополни код так, чтобы в переменной allClients получился 
// массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//  === задача 16 ==================================================
// Напиши функцию makeArray(firstArray, secondArray, maxLength) 
// для создания нового массива со всеми элементами двух исходных 
// firstArray и secondArray.Параметр maxLength содержит 
// максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция 
// должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {

// let array = firstArray.concat(secondArray);
// return  array.slice(0, maxLength );
  
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//  === задача 17 ==================================================
// Дополни цикл for так, чтобы он логировал все целые числа в 
// диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { 
//   console.log(i);
// }

//  === задача 18 ==================================================
// Напиши функцию calculateTotal(number), которая принимает целое число
// (параметр number) и возвращает сумму всех целых чисел от единицы
// и до этого числа.Например, если number равно 3,
// то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
 
// let sum = 0;

// for (let i = 1; i <= number; i += 1){
// sum = sum + i;

// }
// return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

//  === задача 19 ==================================================
// Дополни код цикла for так, чтобы он последовательно 
// логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0;i < fruits.length; i += 1) { 
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//  === задача 20 ==================================================
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр
// order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;

// for (let i = 0; i < order.length; i += 1) {
//   total = total + order[i];
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//  === задача 21 ==================================================
// Напиши функцию findLongestWord(string) которая принимает произвольную
//  строку состоящую только из слов разделённых пробелом(параметр string)
//   и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
  
//   string = string.split(" ");
//   let longWord = string[0];
//   for (const word of string) {
//     if (word.length > longWord.length) {
//       longWord = word;
//   }
// }
// return longWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord());

//  === задача 22 ==================================================
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она
//  возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

// for (let i = min; i <= max; i += 1){
//   numbers.push(i)
// }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//  === задача 23 ==================================================
// Напиши функцию filterArray(numbers, value), которая принимает
//  массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
// const number = [];
// for(let i = 0; i <= numbers.length; i += 1){
// if(numbers[i] > value){
// number.push(numbers[i]);
// }
// }
//     return number;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  === задача 24 ==================================================
// Функция checkFruit(fruit) принимает строку с названием фрукта
// (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// return fruits.includes(fruit);
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

//  === задача 25 ==================================================
// Общими элементами массивов называют те элементы, которые присутствуют
//  во всех массивах.

// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут 
// числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает 
// два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
  
//   let element = [];
// for (const item of array1) {
//     if (array2.includes(item)) {
//       element.push(item);
//     }
//   }
//   return element;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//  === задача 26 ==================================================
// Выполни рефакторинг кода функции calculateTotalPrice(order) 
// заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const price of order) {
//     total += price;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

//  === задача 27 ==================================================
// Выполни рефакторинг функции filterArray(numbers, value) заменив 
// цикл for на for...of.

// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//   for (let arrey of numbers) {
//     const number = arrey;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  === задача 28 ==================================================
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//  === задача 29 ==================================================
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив 
// всех чётных чисел от start до end.Чётным считается число которое 
// делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {

// let total = [];

// for (let i = start; i <= end; i += 1){
// if (i % 2 === 0) {
// total.push(i);
// }
// } 
// return total;
//   }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//  === задача 30 ==================================================
// Дополни код так, чтобы в переменную number записывалось первое
//  число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = 10;
//     break;
//   }
// }
// console.log(number);

//  === задача 31 ==================================================
// Выполни рефакторинг функции findNumber(start, end, divisor) так,
// чтобы она: возвращала первое число от start до end, которое делится
// на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//  === задача 32 ==================================================
// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет,
// есть ли в массиве array значение value, возвращая true
//  если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя
//  использовать метод массив.includes(значение).

// function includes(array, value) {
//     for (const check of array) {
//         if (check === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));