// === задача 1 ==================================================
// Объяви две переменные, productName для названия товара
//  и pricePerItem для хранения цены за штуку.При объявлении 
//  присвой переменным следующие характеристики товара:
// название - строка "Droid",цена за штуку - число 2000

// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

// === задача 2 ==================================================
// Имя товара изменили на "Repair droid" 
// и увеличили его цену на 1500 кредитов.Переопредели
//  значения переменных pricePerItem и productName после 
//  их объявления.

// let productName = "Droid";
// productName = 'Repair droid'

// let pricePerItem = 2000;
// pricePerItem = 3500;

// console.log(productName);
// console.log(pricePerItem);

// === задача 3 ===================================================
// Объяви следующие переменные используя ключевое
//  слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed, distance, login, isOnline, isAdmin);

// === задача 4 ==================================================
// Дополни код, присвоив переменной totalPrice выражение для 
// подсчёта общей суммы заказа.
    //  Переменная pricePerItem хранит цену одной единицы
    // товара, а orderedQuantity - количество единиц товара в
// заказе.

// let pricePerItem = 3500;
// let orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// === задача 5 ==================================================
// Объяви перемнную message и запиши в неё сообщение о покупке,
//  строку в формате: "You picked <имя товара>, price per item 
// is < цена товара > credits".Где < имя товара > и < цена 
// товара > это значения переменных productName и pricePerItem.
// Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item
//  is ${ pricePerItem } credits`
// console.log(message);

// === задача 6 ===================================================
// Магазин по продаже ремонтных дроидов готов к открытию,
//  осталось написать скрипт для их заказа.Объяви переменные
//   и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message);

// === задача 7 ==================================================
// Объяви функцию sayHi, внутри которой добавь console.log() 
// со строкой "Hello, this is my first function!".После 
// объявления вызови функцию sayHi.
// function sayHi(params) {
//     console.log("Hello, this is my first function!")
// }
// sayHi();

// === задача 8 =================================================
// Функция add должна уметь складывать три числа и выводить 
// результат в консоль.Добавь функции add три параметра a,
//  b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку 
// "Addition result equals <result>", где < result > это сумма 
// переданных чисел.

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`)
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// === задача 9 ==================================================
// Дополни код функции add так, чтобы она возвращала результат 
// сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//     return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// === задача 10 ==================================================
// Функция makeMessage(name, price) составляет и возвращает 
// сообщение о покупке.Она объявляет два параметра, значения
//  которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message
//  записывалась строка "You picked <product name>, price per 
//  item is < product price > credits", где < product name > и
    // < product price > это значения параметров name и price.
    // Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//   // Change code below this line


//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
  
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// === задача 11 ===================================================
// Функция calculateTotalPrice считает и возвращает общую 
// сумму покупки. 
// Она принимает два параметра, значения которых будут 
// задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную 
// totalPrice записывалась общая сумма покупки, 
// результат умножения кол - ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
  
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// };

// console.log(calculateTotalPrice(100, 20));

// === задача 12 ===================================================
// Функция makeOrderMessage(orderedQuantity, pricePerDroid,
//  deliveryFee) составляет и возвращает сообщение о покупке 
//  ремонтных дроидов.Она объявляет три параметра, значения
//   которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе
//  в формате "You ordered droids worth <total price> credits. Delivery 
//  (<delivery fee> credits) is included in total price.".Не забудь
//  о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// / === задача 13 =================================================
// Функция isAdult объявляет один параметр age (возраст), 
// значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста 
// пользователя на совершеннолетие.Человек считается 
// совершеннолетним в возрасте 18 лет и старше.

// function isAdult(age) {
//   const passed = age>=18 ;
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37))

// / === задача 14 ================================================
// Функция isValidPassword(password) проверяет равенство
//  сохранённого и введённого паролей и возвращает результат
// проверки - буль true или false.Переменная SAVED_PASSWORD 
// хранит значение ранее сохраненного пароля.Введённый пароль 
// передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства
//  введённого и сохранённого ранее паролей.Результатом 
//  выражения проверки должно быть true, если значения
// совпадают, и false, если нет.

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = password === `jqueryismyjam`;
//     return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// / === задача 15 ================================================
// Добавь выражение проверки совершеннолетия пользователя,
//     значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок
// if и в переменную message записывается
//  строка "You are an adult".
// В противном случае должен выполняться блок else и 
// записывается строка "You are a minor".

// function checkAge(age) {
//     let message;
//     if (age >= 18) {
        
//         message = "You are an adult";
//     } else {
//         message = "You are a minor";
//     }
//     return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// / === задача 16 ================================================
// Функция checkStorage(available, ordered) проверяет 
// возможность оформления заказа и возвращает сообщение 
// о результате.Она объявляет два параметра, значения
//  которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество 
// товаров на складе, в переменную message записывается 
// строка "Not enough goods in stock!".
// В противном случае записывается строка
// "Order is processed, our manager will contact you."

// function checkStorage(available, ordered) {
//     let message;
//     if (available < ordered ) {
//         message = "Not enough goods in stock!";
//     } else { message = "Order is processed, our manager will contact you." }
//     return message
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 1800));

// / === задача 17 ================================================
// Замени выражения со стандартными математеческими
//  операторами на комбинированный оператор присвоения
//   с добавлением, вычитанием, умножением и делением.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// / === задача 18 ================================================
// Станция по продаже ремонтных дроидов готова к запуску,
// осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity,
//     customerCredits) выполняет транзакцию по продаже дроидов
//      и возвращает сообщение о результате операции.
//      Она объявляет три параметра, значения которых будут 
//      задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы 
// заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов 
// на счету клиента, запиши в переменную message строку
// "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта 
// клиента и запиши в переменную message
// сообщение: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;

//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!"
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//     return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// / === задача 19 ================================================
// Функция checkPassword(password) получает пароль 
// пользователя в параметр password, проверяет его на 
// совпадение с паролем администратора в переменной
//  ADMIN_PASSWORD и возвращает сообщение о результате
// сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит 
// пользователь отменил операцию и в message записывается 
// строка "Canceled by user!".
// Если значение параметра password совпадает со 
// значением ADMIN_PASSWORD, в переменную message присваивается
//  строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось,
// в переменную message записывается
//  строка "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message

//     if (password == null) {
//         message = "Canceled by user!";
//     } else if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!";
//     }
//     return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// / === задача 20 ================================================
// Функция checkStorage(available, ordered)
//  проверяет возможность оформления заказа и возвращает 
//  сообщение о результате.Она объявляет два параметра,
// значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра 
// ordered равно 0, в переменную message присваивается 
// строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе,
// то в переменную message присваивается 
// строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается 
// строка "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//     let message;

//     if (ordered == 0) {
//         message = "There are no products in the order!";
//     } else if (available < ordered) {
//         message = "Your order is too large, there are not enough items in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// === задача 21 ===================================================
// Функция isNumberInRange(start, end, number)
// проверяет, входит ли число в промежуток.Она объявляет три
// параметра, значения которых будут задаваться во время её
// вызова

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения
//  number в числовой промеждуток от start до end.То есть число 
//  должно быть больше либо равно start и меньше либо равно end.
//  Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number){
//     const isInRange = (number >= start && number <= end);
//     return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// === задача 22 ==================================================
// Функция checkIfCanAccessContent(subType) проверяет, может ли
//  пользователь получить доступ к контенту.Проверка происходит 
//  по типу подписки.Получить доступ могут только пользователи 
//  с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки
// подписки.Если значение параметра subType равно строкам
// "pro" или "vip", пользователь получит доступ.Результатом 
// выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType == "pro" || subType == "vip")
//     return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// === задача 23 ====================================================
// Функция isNumberNotInRange(start, end, number) проверяет,
// не входит ли число в промежуток.То есть число должно быть 
// меньше либо равно start и больше либо равно end.Результатом 
// выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться
//  во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии
//  значения переменной isInRange используя оператор!.

// function isNumberNotInRange(start, end, number) {
// const isInRange = number >= start && number <= end;
// const isNotInRange = !isInRange; 

// return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// === задача 24 ===================================================
// Функция getDiscount(totalSpent) определяет значение скидки в
// зависимости от общей суммы потраченных денег
// (параметр totalSpent) в магазине за всё время
// (партнёрская программа).Скидка записывается в 
// переменную discount и возвращается из функции как 
// результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000(включительно) или больше кредитов
//     - скидка 10 % (золотой партнёр)
// Если потрачено от 20000(включительно) до 50000 кредитов
//     - скидка 5 % (серебрянный партнёр)
// Если потрачено от 5000(включительно) до 20000 кредитов
//     - скидка 2 % (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов
//     - скидка 0(базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых 
// константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT 
// и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//     let discount;
    
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     }
//     return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// === задача 25 ==================================================
// Выполни рефакторинг решения задачи «Склад товаров», 
// заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//     let message;
    
// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// === задача 26 ====================================================
// Функция checkPassword(password) сравнивает переданный ей
// пароль(параметр password) с сохранённым паролем
// администратора(константа ADMIN_PASSWORD) и возвращает строку
//  с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой 
// переменной message строку "Access is allowed".
// В противном случае, присвой message строку
// "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// === задача 27 ====================================================
// Функция getSubscriptionPrice(type) получает строку
// с типом подписки пользователя(параметр type),
// проверяет её на совпадение с тремя возможными типами 
// ежемесячной подписки и возвращает цену хранящуюся в 
// переменной price.

// Если значение параметра type это строка:

// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.

// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case "starter" :
//             price = 0;
//             break;
        
//         case "professional" :
//             price = 20;
//             break;
        
//         case "organization" :
//             price = 50;
//             break;
//     }

//     return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// === задача 28 ==================================================
//     Функция checkPassword(password) получает пароль в параметр
// password, проверяет его на совпадение с паролем администратора
//  в переменной ADMIN_PASSWORD и возвращает сообщение 
//  о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message
//  записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message 
// присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную
//  message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch,
// и не забудь о блоке default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

// switch (password){

//   case null :
//     message = "Canceled by user!"
//     break;

//   case ADMIN_PASSWORD :
//     message = "Welcome!"
//     break;

//   default:
//     message = "Access denied, wrong password!"
  
// }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// === задача 29 ===================================================
// Функция getShippingCost(country) должна проверять возможность 
// доставки товара в страну пользователя(параметр country) и 
// возвращать сообщение о результате хранящееся в переменной message.
// Обязательно используй инструкцию switch.

// Формат возвращаемой строки
// "Shipping to <country> will cost <price> credits",
//     где вместо < country > и < price > необходимо подставить
//      соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде.
//  Если указанной страны нет в списке, то функция должна вернуть 
//  строку "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
  
// switch(country){
// case "Australia" :
// message = "Shipping to Australia will cost 170 credits";
// break;

// case "China" :
// message = "Shipping to China will cost 100 credits";
// break;

// case "Chile" :
// message = "Shipping to Chile will cost 250 credits";
// break;

// case "Jamaica" :
// message = "Shipping to Jamaica will cost 120 credits"
// break;

// default :
// message = "Sorry, there is no delivery to your country"
// break;
// }
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// === задача 30 ==================================================
// Функция getNameLength(name) принимает имя(параметр name) 
// и возвращает строку, в которой указана его длина.
// Дополни шаблонную строку в переменной message длиной строки из
//  параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// === задача 31 ===================================================
// Дополни код присвоив объявленным переменным выражения обращения к
//  соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.


// const courseTopic = "JavaScript essentials";


// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// === задача 32 ===================================================
// Функция getSubstring(string, length) принимает строку и возвращает 
// подстроку от начала и до length символов.Она объявляет два
// параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной
//  length символов(от начала) из строки string.

// function  getSubstring(string, length) {
//     const substring = (string.slice(0, length));
//     return substring
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// === задача 33 ===================================================
// Функция formatMessage(message, maxLength) принимает строку
//     (параметр message) и форматирует её, если длина превышает 
//     значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength 
// символов и добавляет в конец троеточие "...", после чего
//  возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length <= maxLength) {
//         result = message
//     } else if (message.length > maxLength) {
//         result = message.slice(0, maxLength);
//         result += "...";
//     }
//     return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec",20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// === задача 34 ==================================================
// Функция normalizeInput(input) принимает строку(параметр input)
//  и возвращает такую же строку, но в нижнем регистре.
//  Присвой переменной normalizedInput выражение создания строки 
//  в нижнем регистре из параметра input.

// function normalizeInput(input) {
//   const normalizedInput = (input.toLowerCase());

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

//  === задача 35 ==================================================
//     Функция checkName(fullname, name) принимает два параметра и 
// возвращает буль true или false - результат проверки вхождения 
// подстроки name в строку fullname.

//     fullname - полное имя состоящее из двух слов(имени и фамилии) 
// разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения
// имени(параметр name), в полное имя(параметр fullname).
// Пусть функция строго относится к регистру букв, то есть «Петя»
// и «петя» для неё разные имена.

// function checkForName(fullName, name) {
//  const result = (fullName.includes(name)); 
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

//  === задача 36 =================================================
// Функция checkForSpam(message) принимает строку(параметр message),
// проверяет её на содержание запрещенных слов spam и sale,
// и возвращает результат проверки.Слова в строке параметра 
// message могут быть в произвольном регистре, например 
// SPAM или sAlE.

// Если нашли запрещенное слово(spam или sale) то функция возвращает
//  буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//     let result;
//     let wordLowerCase = message.toLowerCase();
//     result = (wordLowerCase.includes(`spam`) || wordLowerCase.includes(`sale`));


//     return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

