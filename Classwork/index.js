// // 1) Створити 3 змінних (камінь ножиці папір).
// // 2) Записати варіант користувача в змінну.
// // 3) Создати змінну в яку запишеться варіант компютера.
// // 4) Зрівняти змінну юзера і компютера:
// // 4,1) Якщо змінні однакові тоді нічия (Вивести результат)
// // 4,2) Якщо змінні різні: 
// // 4,2,2) Опрацювати варіанти перемоги юзера (Вивести результат)
// // 4,2,3) Інакше виграв комп. (Вивести результат)

// let computerVal, userVal;

// const randomVal = Math.floor(Math.random()* 3 + 1);
// computerVal = randomVal;

// const input = prompt('Enter: rock, paper or scissors');

// switch(randomVal) {
//     case 1: 
//         computerVal = 'rock';
//         break;
//     case 2:
//         computerVal = 'paper';
//         break;
//     case 3:
//         computerVal = 'scissors';
//         break;
//     default:
// }

// if(input !== null) {
//     userVal = input.toLowerCase();
// }

// const incorrectVal = userVal !== 'rock' && userVal !== 'paper' && userVal !== 'scissors';
// const compRockOverPaper = computerVal === 'rock' && userVal === 'paper';
// const userRockOverPaper = userVal === 'rock' && computerVal === 'paper';
// const compRockOverScissors = computerVal === 'rock' && userVal === 'scissors';
// const userRockOverScissors = userVal === 'rock' && computerVal === 'scissors';
// const userPaperOverScissors = userVal === 'paper' && computerVal === 'scissors';
// const compPaperOverScissors = computerVal === 'paper' && userVal === 'scissors';


// if(input === null) {
//     alert('no number')
// } else if (incorrectVal) {
//     alert('incorrect value');
// } else {
//     alert(`computer throws ${computerVal}`);
// }

// if (computerVal === userVal) {
//     alert(`
//     you throw ${userVal}
//     computer throws ${computerVal}
//     it\'s a draw
//     `) 
// }
// if (compRockOverPaper || compPaperOverScissors || userRockOverScissors) {
//     alert(`
//     you throw ${userVal}
//     computer throws ${computerVal}
//     you win
//     `);
// }
// if (userPaperOverScissors || userRockOverPaper || compRockOverScissors) {
//     alert(`
//     you throw ${userVal}
//     computer throws ${computerVal}
//     computer wins
//     `);
// }


// let inputAmount = prompt('How much do you want to excange?');

// const uahToEur = 0.031;
// const uahToUsd = 0.035;
// const usdToUah = 28;
// const usdToEur = 0.8;
// const eurToUah = 31;
// const eurToUsd = 1.2;

// const uah = 'UAH';
// const usd = 'USD';
// const eur = 'EUR';



// let result = null;

// if(!Number(inputAmount)) {
//     alert('you didn\'t input a number');
// } else {
//     inputAmount *= 1; //convert to number
//     let inputAvailCurrency = prompt(`
//     What is your currency? 
//     1 - UAH 
//     2 - USD 
//     3 - EUR
//     `);

//     if (Number(inputAvailCurrency) !== 1 && Number(inputAvailCurrency) !== 2 && Number(inputAvailCurrency) !== 3) {
//         alert('incorrect value');
//         } else {

//             inputAvailCurrency = Number(inputAvailCurrency);

//             let inputCurr = '';
//             let desiredCurr = '';

//             switch(inputAvailCurrency) {
//                 case 1:
//                     inputCurr = uah;
//                     break;
//                 case 2:
//                     inputCurr = usd;
//                     break;
//                 case 3: 
//                     inputCurr = eur;
//                     break;
//                 default: ''
//             }

//             inputAvailCurrency *= 1; //convert to number

//             let inputDesiredCurrency = prompt(`
//             What currency would you like to get: 
//             1 - UAH
//             2 - USD
//             3 - EUR
//             `);

//             if (Number(inputDesiredCurrency) !== 1 && Number(inputDesiredCurrency) !== 2 && Number(inputDesiredCurrency) !== 3) {
//                 alert('incorrect value');
//             } else {

//                 inputDesiredCurrency = Number(inputDesiredCurrency);

//                 switch(inputDesiredCurrency) {
//                     case 1:
//                         desiredCurr = uah;
//                         break;
//                     case 2:
//                         desiredCurr = usd;
//                         break;
//                     case 3: 
//                         desiredCurr = eur;
//                         break;
//                     default: ''
//                 }

//                 inputDesiredCurrency *= 1; //convert to number
//                 if(inputAvailCurrency === 1) { //uah to
//                     switch(inputDesiredCurrency){
//                         case 1: //uah
//                         result = inputAmount * 1
//                         break;

//                         case 2: //usd
//                         result = inputAmount * uahToUsd;
//                         break;

//                         case 3: //eur
//                         result = inputAmount * uahToEur;
//                         break;

//                         default:
//                         alert('incorrect number')
//                     }
//                 }

//                 if(inputAvailCurrency === 2) { //usd to
//                     switch(inputDesiredCurrency){
//                         case 1: //uah
//                         result = inputAmount * usdToUah;
//                         break;

//                         case 2: //usd
//                         result = inputAmount * 1;
//                         break;

//                         case 3: //eur
//                         result = inputAmount;
//                         break;

//                         default:
//                         alert('incorrect number')
//                     }
//                 }

//                 if(inputAvailCurrency === 3) { //eur to
//                     switch(inputDesiredCurrency){
//                         case 1: //uah
//                         result = inputAmount * eurToUah;
//                         break;

//                         case 2: //usd
//                         result = inputAmount * eurToUsd;
//                         break;

//                         case 3: //eur
//                         result = inputAmount * 1;
//                         break;

//                         default:
//                         alert('incorrect number')
//                     }
//                 }
//                 alert(`
//                 You want to exchange ${inputAmount} ${inputCurr}
//                 Your total is ${result.toFixed(2)} ${desiredCurr}
//                 `);
//             }        
//         }
// }



// const inputStr = prompt('Enter the word to check if it\'s a palindrome');

// const reversedStr = inputStr.split('').reverse().join('');

// inputStr === reversedStr ? alert(`yes, ${inputStr} is a palindrome`) : alert(`no, ${inputStr} is not a palindrome.`)


// let numberOfTeams = Number(prompt('Enter the number of teams'));
// let numberOfMembers = Number(prompt('Enter the number of members in teams'));

// let namesArr = ['Albert','Isaac', 'Galileo', 'Marie', 'Johannes', 'Nicolaus', 'Max', 'Katherine', 'Ada', 'Sarah', 'Lise','Hanna'];

// let namesArrCopy = namesArr.slice();
// let totalMembers = namesArr.length - 1;

// let outerArr = [];

// for (let i = 0; i < numberOfTeams; i++) {
//         let innerArr = [];
    
//     for (let j = 0; j < numberOfMembers; j++) {
//         let randomMember = Math.floor(Math.random()*(totalMembers - 1) + 1 );
//             innerArr.push((namesArrCopy.splice(randomMember, 1)).toString());
//             totalMembers--;
//         }

//      //second method, using namesArrCopy.length
//     for (let j = 0; j < numberOfMembers; j++) {
//         let randomMember = Math.floor(Math.random()*namesArrCopy.length);
//             innerArr.push((namesArrCopy.splice(randomMember, 1)).toString());
//         }        

//     outerArr.push(innerArr);
// }

// console.table(outerArr);


// Написать програму которая будет отвечать за список покупок
// 1) В диалоговое окно вводим количество покупок которое хотим сделать;
// 2) Сколько покупок столько раз появится окно где юзер пишет фразу "Название товара:цена" Например ("Булочка:5")
// 3) После ввода всех товаров алертом вывести суму покупок;

// let productsQuantity = Number(prompt('How many items would you like to buy?'));
// let productNamePrice, productPrice;

// let acc = 0;
// let i = 0;

// while (i < productsQuantity) {
//     productNamePrice = prompt('Enter name and price like this: "Название товара:цена" Например ("Булочка:5")');
//     productPrice = Number(productNamePrice.split(":")[1]);
//     acc += productPrice;
//     i++;
// }

// alert(`Your total price is ${acc}`);


// 1) Данно оригинальний масив let arr = [5,10,15,20,25,30,35,40];
// 2) Данно масив з остатком let result = [10,20,35];
// 3) Получить масив удаленых чисел; // [5,15,25,30,40];

// let arr = [5,10,15,20,25,30,35,40, 10];
// let result = [10,20,35];
// let removedElements = [];

// for (let i = 0, max = arr.length; i < max; i++) {
//     if (!result.includes(arr[i])) {
//         removedElements.push(arr[i]);
//     }
// }
// console.log(arr);
// console.log(removedElements);



// Написать програму которая находит разницу значений двух масивов
// 1) [1, 2, 3], [100, 2, 1, 10] // [3, 10, 100]

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let uniqeVal = [];

// first method
// for(let el of arr1) {
//     if(!arr2.includes(el)){
//         uniqeVal.push(el)
//     }
// }

// for(let el of arr2) {
//     if(!arr1.includes(el)){
//         uniqeVal.push(el)
//     }
// }

// console.log(uniqeVal);


// second method
// arr3 = arr1.concat(arr2);

// for(let elem of arr3) {
//     let counter = 0;

//     for (let nextElem of arr3) {
//         if(elem === nextElem){
//             counter++;
//         }
//     }
//     if (counter === 1) uniqeVal.push(elem);
// }

// console.log(uniqeVal);

// third method
// let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
// let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

// const unique = unique1.concat(unique2);

// console.log(unique);

// console.log(result);



//  Написать код который удалит из масива  null, 0, "", false, undefined NaN
// 1) let start =  [NaN, 0, 15, false, -22, '',undefined, 47, null];
// 2) Должны получить на виходе let result = [15, -22, 47];


// let start =  [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let result = []

// for(let elem of start){
//     if(elem){
//         result.push(elem)
//     }
// }

// console.log(result);


//====================

// function convertYear(year){
//     return Math.floor(year/100) + 1;
// }
// console.log(convertYear(1999));
// console.log(convertYear(1249));
// console.log(convertYear(436));

//====================

// function checkIfLeapYear(year) {
//     return year % 4 === 0 ? 'leap year' : 'regular year';
// }

// let checkIfLeapYear = year => year % 4 === 0 ? 'leap year' : 'regular year';

// console.log(checkIfLeapYear(1996));
// console.log(checkIfLeapYear(1997));
// console.log(checkIfLeapYear(1998));
// console.log(checkIfLeapYear(1999));
// console.log(checkIfLeapYear(2004));


/*  
  Напишите код, который бы  с помощью функции-конструкора User, позволял создавать объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку: `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью функции getUserInfo вывести строку в консоль.
*/

// function User(name, isActive, age, friends){
//     this.name = name;
//     this.isActive = false;
//     this.age = age;
//     this.friends = friends;

//     this.getUserInfo = function() {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//     }
// }

// const user1 = new User('alpha', true, 20, 3);
// user1.getUserInfo();



/*
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']



// #3

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login}, 
//       Pass: ${this.password}, 
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'



// Написать ф-ю конструктор Pizza который создает обэкты пиццы.
// Обект должен иметь такие поля:
// 1) Название пиццы // через параметр
// 2) Размер пиццы // чеерз параметр
// 3) набор начинок // масив
// 4) набор соусов // масив
// 5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
// 6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы
// 7) метод addToppings котрый принимает обект начинки и добавляет его а масив начинок если ее нету
// 8) метод addSouces котрый принимает обект соуса и добавляет его а масив соусов если его нету
// 9) метод deleteToppings который удаляет начинку из масива если она там есть
// 10) метод deleteSousess который удаляет соус из масива если он там есть
// Размеры,(sizes) начинки,(topings) соусы (souces) это обекты. 

// function Pizza(name, size, toppings, sauces){
//     this.name = name;
//     this.size = size;
//     this.toppings = [];
//     this.sauces = [];
//     this.price = 0;
//     this.callories = 0;

//     this.totalPrice = function() {
//         this.price = this.size.price + 
//             this.toppings.reduce((acc, val) => acc + val.price, 0) + 
//             this.sauces.reduce((acc, val) => acc + val.price, 0);
//         return this.price;        
//     }

//     this.totalCalories = function() {
//         this.callories = this.size.callories + 
//             this.toppings.reduce((acc, val) => acc + val.callories, 0) + 
//             this.sauces.reduce((acc, val) => acc + val.callories, 0);
//         return this.callories;      
//     }

//     this.addToppings = function(toppingsObj) {
//         return this.toppings.includes(toppingsObj) ? this.toppings : this.toppings.push(toppingsObj);
//     }

//     this.addSauces = function(saucesObj) {
//         return this.sauces.includes(saucesObj) ? this.sauces : this.sauces.push(saucesObj);
//     }

//     this.deleteToppings = function(topping) {
//         const idx = this.toppings.indexOf(topping);
//         this.toppings.splice(idx, 1);
//         return this.toppings;
//     }

//     this.deleteSauces = function(sauce){
//         const idx = this.sauces.indexOf(sauce);
//         this.sauces.splice(idx, 1);
//         return this.sauces;
//     }
// }


// // sies
// const BIG = {
//     size: 'big',
//     price: 80,
//     callories: 150
// }
// const SMALL = {
//     size: 'small',
//     price: 50,
//     callories: 100,
// }
// // topings
// const MEAT = {
//     name: 'meat',
//     price: 20,
//     callories: 85
// }

// const CHEESE = {
//     name: 'cheese',
//     price: 15,
//     callories: 50
// }

// const SALAT = {
//     name: 'salad',
//     price: 12,
//     callories: 5
// }

// const corn = {
//     name: 'corn',
//     price: 10,
//     callories: 5
// }
// // souces
// const SOUSE = {
//     name: 'sauce',
//     price: 8,
//     callories: 30
// }

// const mustard = {
//     name: 'mustard',
//     price: 13,
//     callories:10
// }

// const ketchup = {
//     name: 'ketchup',
//     price: 8,
//     callories: 7
// }


// const pizza1 = new Pizza('yooyoooo', SMALL);
// pizza1.addSauces(mustard);
// pizza1.addSauces(ketchup);

// pizza1.addToppings(MEAT);

// console.log(pizza1);
// console.log(pizza1.totalPrice());
// console.log(pizza1.totalCalories());

// pizza1.deleteSauces(mustard);
// console.log(pizza1);
// console.log(pizza1.totalPrice());
// console.log(pizza1.totalCalories());


// // создвть 2 разных пицы большую и маленькую. Дл каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
// // Дальше добавить еще по одному соусу и 2 начинки.
// // Потом удалить одну начинку и вывести цену и калории новой пицы



// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();

// function Calculator() {
//     this.nums = [];
//     this.read = function() {
//         let inputNum;
//         while (inputNum !== null) {
//             inputNum = prompt('enter numbers');
//             if (inputNum === null) break;
//             this.nums.push(Number(inputNum));
//         }
//         return this.nums;
//     }

//     this.sum = function() {
//         let sum = this.nums.filter(x => !Number.isNaN(x)).reduce((acc, val) => acc + val, 0);
//         return sum;
//     }

//     this.mul = function() {
//         let mul = this.nums.filter(x => !Number.isNaN(x)).reduce((acc, val) => acc * val, 1);
//         return mul;
//     }

//     this.addMethod = function(name, func) {
//         this[name] = func;
//     }
// }

// let calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);


// // console.log(calculator.read()); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу

// const subtract = function() {
//     let subtr = this.nums.filter(x => !Number.isNaN(x)).reduce((acc, val) => acc - val, 0);
//     return subtr;
// }

// calculator.addMethod('minus', subtract) // додається метод на віднімання

// console.log(calculator.minus()) // -13



// Написати конструктор обєкта Account який буде описувати рахунок користувача.
// Обєкт має мати такі унікальні ключі:
// 1) Імя юзера
// 2) id юзера
// 3) ключ balance
// 4) ключ credits // список кредитів
// 5) ключ deposits // список депозитів
// 6) ключ depositIncome // загальний прибуток від депозитів
// 7) ключ creditCosts // загальні затрати по кредитах
// 8) ключ charity // сума яку виділили на благодійність

// Також мають бути такі методи
// 1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
// 2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
// 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
// 5) showIncome // метод що показує загальний дохід від депозитів
// 6) showCost // метод що показує загальні затрати на кредити
// 7) showProfit //метод що показує прибуток (різниця доходів і витрат)
// 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
// 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
// 10) closeCredit метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
// 11) closeDeposit метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome

// // Зразок обєкта депозита
// const deposit = {
// 	   id:1,
//     amount: 5000,
//     type: '', // типи депозиту 'simple', 'compound'
//     percent: '10%',
//     period: 1 // період вказуємо в місяцях
// }

// // зразок обєкта кредиту
// const credit = {
// 	   id:2,
//     amount: 500000,
//     type: '', // типи кредиту 'annuity', 'simple'
//     percent: '5%',
//     period: 15 // період вказуємо в роках
// }


// simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 

// compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

// annuity credit formula
// Дивитися Приклад 4.
// https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// simple credit formula
// Дивитися Приклад 3.
// https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC


// 


// function Account(accName, accId) {
//   this.accName = accName;
//   this.accId = accId;
//   this.balance = 0;
//   this.credits = [];
//   this.deposits = [];
//   this.depositIncome = 0;
//   this.creditCosts = 0;
//   this.charity = 0;

//   this.countDepositsIncome = function(deposit) {
//     let currentDepositIncome = 0;
//     if (deposit.type === 'simple') {
//       currentDepositIncome = deposit.amount * (Number.parseInt(deposit.percent) / 100 / 12) * deposit.period;
//     } else if (deposit.type === 'compound') {
//       currentDepositIncome = deposit.amount * Math.pow((1 + Number.parseInt(deposit.percent) / 100 / 12), 12 * (deposit.period / 12)) - deposit.amount;
//     }
//     return currentDepositIncome ;
//   }

//   this.openDeposit = function(deposit) {
//     this.deposits.push(deposit);
//     this.depositIncome += this.countDepositsIncome(deposit);
//   }

//   this.countCreditCost = function(credit) {
//     let currentCreditCost = 0;
//     if (credit.type === 'simple') {
//       currentCreditCost = (2 * credit.amount - (credit.amount * (credit.period - 1) / credit.period) / 2) * credit.period * (Number.parseInt(credit.percent) / 100);
//     } else if (credit.type === 'annuity') {
//       currentCreditCost = credit.amount * (Number.parseInt(credit.percent) / 100 * (Math.pow(1 + Number.parseInt(credit.percent) / 100, credit.period)) / (Math.pow(1 + Number.parseInt(credit.percent) / 100, credit.period) - 1) * credit.period - 1);
//     }

//     return currentCreditCost;
//   }

//   this.openCredit = function(credit) {
//     this.credits.push(credit);
//     this.creditCosts += this.countCreditCost(credit);
//   }

//   this.showIncome = function() {
//     console.log('deposit income', this.depositIncome.toFixed(2));
//   }

//   this.showCost = function() {
//     console.log('credit cost', this.creditCosts.toFixed(2));
//   }

//   this.showProfit = function() {
//     return console.log('profit', (this.depositIncome - this.creditCosts).toFixed(2));
//   }

//   this.getCash = function(amount) {
//     return this.balance -= amount;
//   }

//   this.addition = function(amount) {
//     return this.balance += amount;
//   }

//   this.closeCredit = function(id) {
//     let removedCredit = this.credits.find(el => el.id === id);
//     this.credits.filter(el => el.id !== id);
//     this.creditCosts -= this.countCreditCost(removedCredit);
//   }

//   this.closeDeposit = function(id) {
//     let removedDeposit = this.deposits.find(el => el.id === id);
//     this.deposits.filter(el => el.id !== id);
//     this.depositIncome -= this.countDepositsIncome(removedDeposit);
//   }
// }





// function Account(accName, accId) {
//   this.accName = accName;
//   this.accId = accId;
//   this.balance = 0;
//   this.credits = [];
//   this.deposits = [];
//   this.depositIncome = 0;
//   this.creditCosts = 0;
//   this.charity = 0;
// }

// Account.prototype.countDepositsIncome = function(deposit) {
//   let currentDepositIncome = 0;
//   if (deposit.type === 'simple') {
//     currentDepositIncome = deposit.amount * (Number.parseInt(deposit.percent) / 100 / 12) * deposit.period;
//   } else if (deposit.type === 'compound') {
//     currentDepositIncome = deposit.amount * Math.pow((1 + Number.parseInt(deposit.percent) / 100 / 12), 12 * (deposit.period / 12)) - deposit.amount;
//   }
//   return currentDepositIncome ;
// }

// Account.prototype.openDeposit = function(deposit) {
//   this.deposits.push(deposit);
//   this.depositIncome += this.countDepositsIncome(deposit);
// }

// Account.prototype.countCreditCost = function(credit) {
//   let currentCreditCost = 0;
//   if (credit.type === 'simple') {
//     currentCreditCost = (2 * credit.amount - (credit.amount * (credit.period - 1) / credit.period) / 2) * credit.period * (Number.parseInt(credit.percent) / 100);
//   } else if (credit.type === 'annuity') {
//     currentCreditCost = credit.amount * (Number.parseInt(credit.percent) / 100 * (Math.pow(1 + Number.parseInt(credit.percent) / 100, credit.period)) / (Math.pow(1 + Number.parseInt(credit.percent) / 100, credit.period) - 1) * credit.period - 1);
//   }
//   return currentCreditCost;
// }

// Account.prototype.openCredit = function(credit) {
//   this.credits.push(credit);
//   this.creditCosts += this.countCreditCost(credit);
// }

// Account.prototype.showIncome = function() {
//   console.log('deposit income', this.depositIncome.toFixed(2));
// }

// Account.prototype.showCost = function() {
//   console.log('credit cost', this.creditCosts.toFixed(2));
// }

// Account.prototype.showProfit = function() {
//   return console.log('profit', (this.depositIncome - this.creditCosts).toFixed(2));
// }

// Account.prototype.getCash = function(amount) {
//   return this.balance -= amount;
// }

// Account.prototype.addition = function(amount) {
//   return this.balance += amount;
// }

// Account.prototype.closeCredit = function(id) {
//   let removedCredit = this.credits.find(el => el.id === id);
//   this.credits.filter(el => el.id !== id);
//   this.creditCosts -= this.countCreditCost(removedCredit);
// }

// Account.prototype.closeDeposit = function(id) {
//   let removedDeposit = this.deposits.find(el => el.id === id);
//   this.deposits.filter(el => el.id !== id);
//   this.depositIncome -= this.countDepositsIncome(removedDeposit);
// }



// // В якому порядку перевіряти роботу кода.
// // Рахуємо депозити помісячно
// // 1) створюємо обєкт запуском new Account(name, id);
// const acc = new Account('yo', 10);
// console.log(acc);

// // 2) Запускаєм метод addition() // для поповнення балансу
// acc.addition(30000);
// // console.log(acc);

// // 3) Запускаєм метод openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24}) // відкриваємо по депозиту різного типу
// // acc.openDeposit({
// //   id: 10,
// //   amount: 50000, 
// //   type: 'simple', 
// //   percent: '15%', 
// //   period: 24
// // })
// // console.log(acc);

// // 4) Запускаєм метод openDeposit({amount: 20000, type: 'compound', percent: ;'20%', period: 12}) //  відкриваємо по депозиту різного типу
// acc.openDeposit({
//   id: 11,
//   amount: 20000, 
//   type: 'compound', 
//   percent: '20%', 
//   period: 12
// })
// // console.log(acc);

// // 5)Запускаєм метод openCredit({ammount: 500000 ,type: 'annuity', percent: '5%', period:10})
// // acc.openCredit({
// //   id: 20,
// //   amount: 500000,
// //   type: 'annuity', 
// //   percent: '5%', 
// //   period:10
// // })
// // console.log(acc);

// acc.openCredit({
//   id: 20,
//   amount: 1000000,
//   type: 'annuity', 
//   percent: '8%', 
//   period: 8
// })

// // 6)Запускаєм метод openCredit({ammount:10000 ,type: 'simple', percent: '25%', period:3})
// // acc.openCredit({
// //   id: 21, 
// //   amount: 10000,
// //   type: 'simple', 
// //   percent: '25%', 
// //   period:3
// // })
// // console.log(acc);

// // 7) Запускаєм метод showIncome()
// acc.showIncome();
// // 8) Запускаєм метод showCost()
// acc.showCost();
// // 9) Запускаєм метод showProfit()
// acc.showProfit();
// // 10) Запускаєм метод getCash(1000)
// acc.getCash(1000);
// // console.log(acc);

// // 11) Запускаєм метод addition(5000)
// acc.addition(5000);
// // console.log(acc);

// // 12)Запускаєм метод closeCredit(id)
// // acc.closeCredit(21);
// // console.log(acc);

// // 13)Запускаєм метод closeDeposit(id)
// // acc.closeDeposit(10);
// // console.log(acc);




// ================================================

// function Ship(name, life, armor, color, x, y, amunition) {
//   this.speed = 0;
//   this.name = name;
//   this.life = life;
//   this.armor = armor;
//   this.color = color;
//   this.x = x;
//   this.y = y;
//   this.amunition = amunition;
// }

// Ship.prototype.move = function (a, b) {
//   if (this.speed > 0) {
//     this.x = a;
//     this.y = b;
//   }
// }

// Ship.prototype.acselerate = function (speed) {
//   this.speed = speed;
// }

// Ship.prototype.stop = function () {
//   this.speed = 0;
// }

// Ship.prototype.fire = function () {
//   if (this.amunition > 0) {
//     this.amunition--;
//   }
// }
// function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
//   // this = {}
//   Ship.call(this, name, life, armor, color, x, y, amunition);
//   this.torpeds = torpeds;
//   this.smokeAmunition = smokeAmunition;
// }

// ES.prototype = Object.create(Ship.prototype);
// ES.prototype.constructor = ES;

// ES.prototype.launchTorpeds = function() {
//   if(this.torpeds > 0) {
//     this.torpeds--;
//   }
// }

// ES.prototype.launchSmoke = function() {
//   if(this.smokeAmunition > 0) {
//     this.smokeAmunition--;
//   }
// }


// function AV(name, life, armor, color, x, y, amunition, plane) {
//   Ship.call(this, name, life, armor, color, x, y, amunition);
//   this.plane = plane;
// }

// AV.prototype = Object.create(Ship.prototype);
// AV.prototype.constructor = AV;

// AV.prototype.launchPlane = function(numberOfPlanes) {
//   if(this.plane > 0) {
//     this.plane -= numberOfPlanes;
//   }
// }

// function CR(name, life, armor, color, x, y, amunition, pvo) {
//   Ship.call(this, name, life, armor, color, x, y, amunition);
//   this.pvo = pvo;
// }

// CR.prototype = Object.create(Ship.prototype);
// CR.prototype.constructor = CR;

// CR.prototype.launchPvo = function() {
//   if(this.pvo > 0) {
//     this.pvo--;
//   }
// }

// const esm1 = new ES('esm1', 100, 100, 'black', 0, 15, 40, 14, 10);
// const av1 = new AV('av1', 80, 120, 'white', 50, 50, 55, 25);
// const cr1 = new CR('cr1', 200, 140, 'grey', 100, 15, 50, 10);

// esm1.launchTorpeds();
// esm1.acselerate(20);
// esm1.move(15, 59);

// av1.launchPlane(8);
// cr1.launchPvo();

// console.log(esm1);
// console.log(av1);
// console.log(cr1);



//============================================

// class Ship {
//   constructor(name, life, armor, color, x, y, amunition) {
//     this.speed = 0;
//     this.name = name;
//     this.life = life;
//     this.armor = armor;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//     this.amunition = amunition;
//   }

//   move(a, b) {
//     if (this.speed > 0) {
//       this.x = a;
//       this.y = b;
//     }
//   }

//   acselerate(speed) {
//     this.speed = speed;
//   }

//   stop() {
//     this.speed = 0;
//   }

//   fire() {
//     if (this.amunition > 0) {
//       this.amunition--;
//     }
//   }
// }

// class ES extends Ship {
//   constructor(name, life, armor, color, x, y, amunition,torpeds,smokeAmunition) {
//   super(name, life, armor, color, x, y, amunition)
//   this.torpeds = torpeds;
//   this.smokeAmunition = smokeAmunition;
//   }
//   launchTorpeds(){
//     if(this.torpeds > 0) {
//       this.torpeds--;
//     }
//   }
//   launchSmoke() {
//     if(this.smokeAmunition > 0) {
//       this.smokeAmunition--;
//     }
//   }
// }


// class AV extends Ship {
//   constructor(name, life, armor, color, x, y, amunition, plane) {
//     super(name, life, armor, color, x, y, amunition)
//     this.plane = plane;
//   }

//   launchPlane(numberOfPlanes) {
//     if(this.plane > 0) {
//       this.plane -= numberOfPlanes;
//     }
//   }
// }

// class CR extends Ship {
//   constructor(name, life, armor, color, x, y, amunition, pvo) {
//     super(name, life, armor, color, x, y, amunition);
//     this.pvo = pvo;
//   }

//   launchPvo() {
//     if(this.pvo > 0) {
//       this.pvo--;
//     }
//   }  
// }

// const esm1 = new ES('esm1', 100, 100, 'black', 0, 15, 40, 14, 10);
// const av1 = new AV('av1', 80, 120, 'white', 50, 50, 55, 25);
// const cr1 = new CR('cr1', 200, 140, 'grey', 100, 15, 50, 10);

// esm1.launchTorpeds();
// esm1.acselerate(20);
// esm1.move(15, 59);

// av1.launchPlane(8);
// cr1.launchPvo();

// console.log(esm1);
// console.log(av1);
// console.log(cr1);


//========================================

// #1 
// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// const worker1 = new Worker('one', 'oneovich', 100, 30);
// console.log(worker1);
// console.log(worker1.getSalary());

// const worker2 = new Worker('two', 'twoovich', 500, 15);
// console.log(worker2);
// console.log(worker2.getSalary());



// #2 
// 1) Створити конструктор User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити конструктор Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

// class User {
//   constructor(name, surname){
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     // console.log(this.name + ' ' + this.surname);
//     return (this.name + ' ' + this.surname)
//   }
// }

// class Student extends User {
//   constructor(name, surname, yearIn) {
//     super(name, surname);
//     this.yearIn = yearIn;
//   }

//   getCourse() {
//     // console.log(2019 - this.yearIn);
//     return 2019 - this.yearIn;
//   }

//   getFullInfo(){
//     return (this.getFullName() + ' ' + this.getCourse());
//   }
// }


// const stud1 = new Student('stud1', 'stud1ovich', 2015);
// console.log(stud1);
// console.log(stud1.getFullName());
// console.log(stud1.getCourse());
// console.log(stud1.getFullInfo());


// #3
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для них метод download()
// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива order ту книгу для якої викликаємо цей метод.
// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива books


// const order = [];

// class Book {
//   constructor(title, author, pages, price) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.price = price;
//     this.curentPage = 0;
//   }

//   buy(arr) {
//     return arr.push(this);
//   }

//   read(num) {
//     return this.curentPage += num;
//   }
// }

// const book1 = new Book('book1', 'author1', 400, 50);
// const book2 = new Book('book2', 'author2', 300, 100);
// const book3 = new Book('book3', 'author3', 100, 10);
// book1.buy(order);
// book2.buy(order);
// book3.buy(order);
// console.log(order);

// let totalPrice = order.reduce((acc, val) => acc + val.price, 0);
// console.log(totalPrice);

// book1.read(10);
// book2.read(20);
// book3.read(30);



// class EBook extends Book {
//   constructor(title, author, pages, price, fileSize){
//     super(title, author, pages, price);
//     this.fileSize = fileSize;
//   }

//   download() {
//     console.log(`Book ${title} has been dowloaded, app was downloaded ${fileSize} kb`)
//   }
// }

// const ebook1 = new EBook('ebook1', 'eauthor1', 200, 20, 1000);
// const ebook2 = new EBook('ebook2', 'eauthor2', 100, 40, 2000);
// ebook1.buy(order);
// ebook2.buy(order);
// console.log(order);
// totalPrice = order.reduce((acc, val) => acc + val.price, 0);
// console.log(totalPrice);


// class PapperBook extends Book {
//   constructor(title, author, pages, price, cover){
//     super(title, author, pages, price);
//     this.cover = cover;
//   }

//   burn(arr) {
//     const idx = arr.indexOf(this);
//     return arr.splice(idx, 1)
//   }
// }

// const paperbook1 = new PapperBook('pbook1', 'pauthor1', 50, 200, 'soft');
// const paperbook2 = new PapperBook('pbook2', 'pauthor2', 250, 100, 'hard');
// const paperbook3 = new PapperBook('pbook3', 'pauthor3', 350, 100, 'hard');
// paperbook1.buy(order);
// paperbook2.buy(order);
// paperbook3.buy(order);
// console.log(order);
// paperbook1.burn(order);
// paperbook2.burn(order);
// console.log(order);