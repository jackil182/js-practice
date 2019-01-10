// /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

// /* 
//   Функция findGreaterThan получает два аргумента - число и массив.
//   Возвращает новый массив, содержащий элементы которые больше числа.
// */
// const findGreaterThan = (num, arr) => {
//     const result = arr.filter(x => x > num);
  
//     // for (let i = 0, max = arr.length; i < max; i += 1) {
//     //   if (arr[i] > num) {
//     //     result.push(arr[i]);
//     //   }
//     // }
  
//     return result;
//   };
  
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  
//   /* 
//     Функция multiplyBy принимает два аргумента - число и массив. 
//     Возвращает массив все значения которого умножены на число.
//   */
//   const multiplyBy = (num, arr) => {
//     let result = arr.map(x => x * num);
  
//     // for (let i = 0, max = arr.length; i < max; i += 1) {
//     //   result.push(arr[i] * num);
//     // }
  
//     return result;
//   };
  
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
//   /* 
//     Функция summAllNumbers принимает любое число аргументов.
//     Возвращает число - сумму всех аргументов.
//   */
//   function summAllNumbers(...args) {
//     let accumulator = args.reduce((a, b) => a + b);
  
// //     for (let i = 0, max = args.length; i < max; i += 1) {
// //       accumulator += args[i];
// //     }
  
//     return accumulator;
//   }
  
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */
//   const findEvery = (num, arr) => {
//     let result = arr.every(x => x >= num);
//     return result;
    
// //     for (let i = 0, max = arr.length; i < max; i += 1) {
// //       if (arr[i] < num) {
// //         return false;
// //       }
// //     }
  
// //     return true;
//    };
  
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


//================================================================


// /*
//   Напишите функию getPropValues(arr, prop), принимающую параметры arr - массив, и prop - имя ключа в объекте. 
  
//   Функция должна возвращать массив всех значений этого ключа из arr.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   const getPropValues = (arr, prop) => {
//       const result = arr.map(x => x = x[prop]);
//       return result;
//   }
  
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]


//================================================================


// /*      
//   Напишите функцию setGuestState(guests, period), где guests - массив гостей, period - кол-во дней после которого считается что гость не активен.
    
//   Если значение поля inactiveDays болше чем period, поставить для isActive значение false.
    
//   Если же значение inactiveDays меньше чем period, поставить для isActive значение true
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];

//   const setGuestState = (guests, period) => guests.map(
//       x => x.inactiveDays > period ? {...x, isActive: false} : {...x, isActive: true});
  
//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(users, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true  
  
//   console.log(
//     setGuestState(users, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(users, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


//===========================================================


// /*
//   Напишите функию getActiveGuests(guests), принимающую один параметр guests - массив объектов гостей. 
  
//   Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

// const getActiveGuests = guests => guests.filter(x => x.isActive == true);
  
//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax  


//===========================================================


// /*      
//   Напишите функцию getGuestsOlderThan(guests, age), где guests - массив объектов гостей, age - предел возраста для сортировки. 
  
//   Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

// const getGuestsOlderThan = (guests, age) => guests.filter(x => x.age > age);
  
//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []


//===========================================================


// /*
//   Напишите функию getGuestById(guests, id), принимающую guests - массив объектов гостей, id - идентификатор (число). 
  
//   Функция должна возвращать объект гостя с совпадающим id.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

// const getGuestById = (guests, id) => guests.find(x => x.id === id);
  
//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}
  
//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined


//===========================================================


// /*
//   Используя метод reduce, посчитайте сумму всех значений свойств объекта order.
// */ 
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
//   };

//   let arr = [];
//   let sum;

// // const orderTotal = order => {
// //     for (let key in order) {
// //         arr.push(order[key])
// //         sum = arr.reduce((acc, key) => acc + key);
// //     }
// //     return sum;
// // }

// // const orderTotal = order => Object.keys(order).reduce((acc, key) => acc + order[key], 0);

// const orderTotal = order => Object.values(order).reduce((acc, val) => acc + val, 0);
  
//   console.log(orderTotal(order)); // 150


//===========================================================


// /*
//   Напишите функцию getTotalPrice(products, order), где 
//   products - объект со свойствами "имя продукта":"цена за единицу", 
//   order - объект со свойствами "имя продукта":"количество единиц".
  
//   Функция возвращает общую сумму стоимости всех продуктов заказа.
  
//   PS: используйте метод reduce
// */

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
//   };
  
//   const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
//   };
  
//   const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
//   };

// //   const getTotalPrice = (products, order) => {
// //       const newArr = [];

// //       for (let key in order) {
// //         order.key === products.key 
// //             ? newArr.push(order[key] * products[key])
// //             : newArr;
// //     }
// //     return newArr.reduce((acc, val) => acc + val, 0);
// //   }

// const getTotalPrice = (prod, ord) => Object.keys(ord)
//     .reduce((acc, key) => acc + prod[key] * ord[key], 0);

  
//   // Вызовы функции для проверки
//   console.log(getTotalPrice(products, orderA)); // 140
  
//   console.log(getTotalPrice(products, orderB)); // 130


//===========================================================


// /*     
//   Напишите функию allGuestsActive(guests), принимающую один параметр guests - массив объектов гостей. 
  
//   Функция должна возвращать true если значение поля isActive всех объектов true, в противном случае false.
  
//   PS: используйте метод every или some, никаких for!
// */

// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
//   ];
  
// const allGuestsActive = guests => guests.every(x => x.isActive);

//   // Вызовы функции для проверки
//   console.log(allGuestsActive(guestsA)); // false
  
//   console.log(allGuestsActive(guestsB)); // true
  

//===========================================================


// /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */


// function Account(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function () {
//   console.log(`
//   login: ${this.login}
//   email: ${this.email}
//   friendscount ${this.friendsCount}`);
// }

// const naz = new Account('Naz', 'naz@email.com', 5);
// const ana = new Account('Ana', 'ana@email.com', 50);

// naz.getAccountInfo();
// ana.getAccountInfo();


//===========================================================


// /*
//   Напишите ES6 класс StringBuilder.
  
//   На вход (в конструкторе) он получает один параметр string - строку, которую записывает в поле value.
  
//   Добавьте классу следующие методы:
//     - getValue() - выводит в консоль текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */

// class StringBuilder {
//   constructor (string) {
//     this.value = string;
//   }

//   showValue() {
//     console.log(this.value);
//   }

//   append(str) {
//     this.value = this.value.concat(str);
//   }

//   prepend(str) {
//     this.value = str.concat(this.value);
//   }

//   pad(str) {
//     this.value = str.concat(this.value).concat(str);
//   }
// };

// const stringBuilder = new StringBuilder('.');

// stringBuilder.append('^'); 
// stringBuilder.showValue(); // '.^'

// stringBuilder.prepend('^'); 
// stringBuilder.showValue(); // '^.^'

// stringBuilder.pad('='); 
// stringBuilder.showValue(); // '=^.^='


//===========================================================

  
// /*Создайте класс Car с указанными полями и методами.
// */

// class Car {
//   constructor(maxSpeed) {
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, 
//           возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//     this.speed = 0;
//   }
  
//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     spd <= this.maxSpeed && this.running ? this.speed = spd : this.speed;
//   }
  
//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     spd <= this.maxSpeed && spd >= 0 && this.running ? this.speed = spd : this.speed;
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     this.running ? this.distance = hours * this.speed : this.distance;
//   }
// }

// const kia = new Car(180);
// // console.log(kia);

// kia.turnOn();
// console.log('turned on', kia);

// // kia.turnOff();
// // console.log('turned off', kia);

// kia.accelerate(140);
// console.log('accelerated', kia);

// kia.decelerate(110);
// console.log('decelerated', kia);

// kia.drive(1.2);
// console.log('traveled distance', kia);

// kia.turnOff();
// console.log('turned off', kia);


//===========================================================


// /*
//   Добавьте к классу Car из предыдущего задания статический метод getSpecs, который получает объект-машину как аргумент и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
// */

// class Car {
//   constructor(maxSpeed) {
//     this.maxSpeed = maxSpeed;
//     this.speed = 0;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     this.running = true;
//   }

//   turnOff() {
//     this.running = false;
//     this.speed = 0;
//   }
  
//   accelerate(spd) {
//     spd <= this.maxSpeed && this.running ? this.speed = spd : this.speed;
//   }
  
//   decelerate(spd) {
//     spd <= this.maxSpeed && spd >= 0 && this.running ? this.speed = spd : this.speed;
//   }

//   drive(hours) {
//     this.running ? this.distance = hours * this.speed : this.distance;
//   }

//   static getSpecs(car) {
//     console.log(`
//     maxSpeed: ${car.maxSpeed},
//     running: ${car.running},
//     distance: ${car.distance}`
//     );
//   }
// }

//   const someCar = new Car(100);
  
//   someCar.turnOn();
//   someCar.accelerate(100);
//   someCar.drive(2);
//   console.log(someCar);

//   Car.getSpecs(someCar);


//===========================================================


// /*
//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
  
//   const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */

// class Car {
//   constructor(maxSpeed, value) {
//     this.maxSpeed = maxSpeed;
//     this._value = value;
//   }
//   get value () {
//     return this._value;
//   }

//   set value (value) {
//     return this._value = value;
//   }
// }

// const myCar = new Car(50, 2000);
  
// console.log('value: ', myCar.value); // 2000
// myCar.value = 4000;
// console.log('value: ', myCar.value); // 4000