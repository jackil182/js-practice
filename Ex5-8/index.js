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


//===========================================================


// /*
//   Есть список категорий с классом categories (на вкладке HTML).
  
//   Напишите код, который для каждого элемента li (первая вложенность) 
//   в списке categories выведет в консоль:
//   - Текст непосредственно в нём (название категории)
//   - Количество всех вложенных в него элементов li
  
//   К примеру:
//     Категория: Животные
//     Количество вложенных li: 4
// */

// const list = document.querySelectorAll('.categories > li');

// const result = list.forEach(elem => {
//     let category = elem.firstChild.textContent.trim();
//     let = numberOfItems = elem.querySelector('ul').children.length;
//     console.log(`
//         Категория: ${category}
//         Количество вложенных li: ${numberOfItems}
//         `);
// })


//===========================================================


// /*
//   Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */

// const list = document.querySelector('.list');
// // console.log(list);

// const firstItem = list.firstElementChild;
// firstItem.style.color = 'red';

// const lastItem = list.lastElementChild;
// lastItem.style.color = 'blue';


//===========================================================


// /*
//   Дан ul склассом .list и массив строк. 
  
//   Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
// */

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const item = document.createElement('li');

// let i = 0;
// const numberOfItems = elements.length;

// do {
//     const clone = item.cloneNode(true);
//     clone.textContent = elements[i]
//     list.append(clone);  
//     i++;
// } while (i < numberOfItems) 

// console.log(list);


//===========================================================


// /*
//   Напишите скрипт для создания галлереи изображений. 
  
//   - На вкладке HTML уже есть ul.gallery.
//   - Используйте массив объектов для создания тегов img вложенных в li
//   - Оформление по вкусу, можно и не делать, достаточно чтобы каждое изображение было 300px по ширине
//   - Добавьте все элементы галлереи в ul.gallery
// */

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];
  

// const gallery = document.querySelector('.gallery');

// const item = document.createElement('li');
// item.style.listStyle = 'none';

// const image = document.createElement('img');
// image.style.width = '300px';

// item.append(image);

// let i = 0;
// const numberOfImgs = galleryItems.length;

// do {
//     image.src = galleryItems[i]['url'];
//     image.alt = galleryItems[i]['alt'];
//     const clone = item.cloneNode(true);
//     gallery.append(clone);
//     i++;
// } while (i < numberOfImgs)

// console.log(gallery);


//===========================================================


// /*
//   Есть список с классом .size-filter из произвольного количества чекбоксов, каждый из которых содержит размер одежды в фильтре.
  
//   Напишите функцию collectInputData(inputs), которая принимает 1 параметр inputs - массив тех инпутов у которых состояние checked.
  
//   Возвращает массив значений атрибута value.
// */

// const checkboxes = document.querySelectorAll('input');
// // const checkboxes = document.querySelectorAll('.size-filter > li > label > input');
// // console.log(checkboxes);

// const inputsArray = [];
// checkboxes.forEach(elem => 
//     elem.hasAttribute('checked') && elem.getAttribute('type') === 'checkbox' 
//         ? inputsArray.push(elem)  
//         : inputsArray);
// // console.log(inputsArray);

// const collectInputData = (inputs) => {
//     let result = [];
//     inputs.forEach(x => result.push(x.getAttribute('value')));
//     return result;
// }

// console.log(collectInputData(inputsArray));

// // const collectInputData = (inputs) => {
// //     let result = [];

// //     checkboxes.forEach(elem => elem.hasAttribute('checked') 
// //     ? result.push(elem.getAttribute('value'))  
// //     : result);

// //     console.log(result);    
// // }


//===========================================================


// /*
//   Создайте функцию createMoviMovieCard(), которая создает и возвращает DOM-узел карточки кинофильма.
//   Разметка с классами есть на вкладке HTML. Стили на вкладке CSS.
//   Используйте createElement для создания узлов. Добавьте классы и атрибуты.
// */

// const movieList = [
//     {
//         image: {
//             src: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
//             alt: 'movie image',
//         },
//         title: 'The Godfather',
//         description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
//         date: 'Released: 1972-03-14',
//         rating: 'Rating: 8.6',
//     },

//     {
//         image: {
//             src: 'https://images.wolfgangsvault.com/the-lord-of-the-rings-the-definitive-movie-posters/book/memorabilia/ZZZ14649-BK.jpg', 
//             alt: 'movie image',
//         },
//         title: 'The Lord of the Rings',
//         description: 'Based on the J.R.R. Tolkien\'s trilogy, lorem ipsum isit dolor adispicum bla bla amily. When organized crime family patriarch, Vito Corleone barely surviv and so on, because asdf nskdjn f;as kdn ajd this movie is very good. The director did a great job ',
//         date: 'Released: 2001-09-24',
//         rating: 'Rating: 8.8',
//     },
// ];

// const moviesGrid = document.querySelector('.movies-grid');

// const elements = createMovieList(movieList);
// moviesGrid.append(...elements);


// //this function creates a single movie card
// function createMovieCard({image, title, description, date, rating}) {

//     const movieCard = document.createElement('div');
//     movieCard.classList.add('movie');

//     const movieImg = document.createElement('img');
//     movieImg.classList.add('movie__image');
//     movieImg.setAttribute('src', image.src);
//     movieImg.setAttribute('alt', image.alt);
    
//     const movieBody = document.createElement('div');
//     movieBody.classList.add('movie__body');
    
//     const movieTitle = document.createElement('h2');
//     movieTitle.classList.add('movie__title');
//     movieTitle.textContent = title;
    
//     const movieDescription = document.createElement('p');
//     movieDescription.classList.add('movie__description');
//     movieDescription.textContent = description;
    
//     const movieDate = document.createElement('p');
//     movieDate.classList.add('movie__date');
//     movieDate.textContent = date;
    
//     const movieRating = document.createElement('p');
//     movieRating.classList.add('movie__rating');
//     movieRating.textContent = rating;
    
    
//     movieBody.append(movieTitle, movieDescription, movieDate, movieRating);
//     movieCard.append(movieImg, movieBody);

//     return movieCard;
// }

// //this function creates multiple movie cards from array
// function createMovieList(arr) {

//     const elements = [];
//     arr.forEach(elem => {
//         const el = createMovieCard(elem);
//         elements.push(el);
//     });

//     return elements;
// };

// console.log(elements);


// // console.log(movieCard);
// // console.log(movieImg);
// // console.log(movieTitle);
// // console.log(movieDescription);
// // console.log(movieDate);
// // console.log(movieDate);


//===========================================================


// /*
//   В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
//   Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
//   Функция создает столько div, сколько указано в num и возвращает их в одном
//   общем контейнере. После чего необходимо повесить результат работы функции
//   в div с id="#root"
  
//   Каждый div:
//     - Имеет случайный rgb цвет фона
//     - Размеры самого первого div - 30px на 30px.
//     - Каждый следующий div после первого, должен быть шире и выше предыдущего
//       на 10px
// */

// const root = document.getElementById('root');
// // console.log(root);

// let boxSize = { height: 30, width: 30, };
// const addedBoxHeight = 10;
// const addedBoxWidth = 10;
// const boxes = [];

// function createBoxes(num) {
//     const box = document.createElement('div');

//     let i = 1;
//     do {
//         const clonedBox = box.cloneNode(true);

//         clonedBox.classList.add(`box${i}`);

//         clonedBox.style.backgroundColor = getRandomColor();
//         clonedBox.style.height = boxSize.height + 'px';
//         clonedBox.style.width = boxSize.width + 'px';
//         clonedBox.style.marginBottom = '10px';

//         boxes.push(clonedBox);
        
//         changeBoxSize(addedBoxHeight, addedBoxWidth);

//         i++;
//     }
//     while (i <= num);

//     root.append(...boxes);
// }


// function getRandomColor() {
//     const colorChars = '0123456789abcdef';
//     let color = '#';

//     for (let i = 0; i < 6; i +=1) {
//         color += colorChars[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function changeBoxSize(height, width) {
//     boxSize.height += height;    
//     boxSize.width += width;

//     return boxSize;
// }

// createBoxes(5);
// console.log(getRandomColor());


//===========================================================


// /*
//   Напишите скрипт который реализует следующий функционал.
  
//   Есть кнопка с классом button, текст которой отображает 
//   кол-во раз которое по ней кликнули, обновляется при каждом клике.
// */

// const button = document.querySelector('button');
// console.log(button);

// button.addEventListener('click', countClicks);

// function countClicks(event) {
//     this.textContent = Number(this.textContent) + 1;
// }


//===========================================================


// /*
//   Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
//   получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
// */

// const button = document.querySelector('.container > button');
// const inputs = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// button.addEventListener('click', handleButtonClick);

// function handleButtonClick(event) {
//     let sum = 0;
//     inputs.forEach(input => sum += Number(input.value));
//     result.textContent = sum;
//     // console.log(result);   
//     sum = 0;
// }


//===========================================================


// /*
//   Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
//   - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//   - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
//   - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
//   - Привяжите вызовы методов и значение счетчика к разметке
// */

// const val = document.querySelector('.value');
// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(btn => {
//     if (btn.getAttribute('data-action') === 'sub') {
//         btn.classList.add('js-btn--sub');                
//     } else if (btn.getAttribute('data-action') === 'add') {
//         btn.classList.add('js-btn--add');                
//     }    
// });

// const btnSub = document.querySelector('.js-btn--sub');
// const btnAdd = document.querySelector('.js-btn--add');

// function onChange() {
//     btnSub.addEventListener('click', () => {
//         val.textContent--;
//     });
//     btnAdd.addEventListener('click', () => {
//         val.textContent++;
//     });
// }

// class Counter {
//     constructor(onChange){
//         this.value = val.textContent; 
//     }

//     // increment(event) {
//     //     this.value++;
//     // }

//     // decrement() {
//     //     this.value--;
//     // }
// }

// const a = new Counter(onChange());


//===========================================================


// /*
//   Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, после чего нажимает кнопку "Submit" и происходит отправка формы.
  
//   При отправке формы:
//     - не должна перезагружаться страница
//     - необходимо получить выбранную опцию и вывести в параграф с классом .result
// */

// const form = document.querySelector('.question-form');
// const resultParagrapg = document.querySelector('.result');
// const resultText = resultParagrapg.textContent;

// const submitBtn = document.querySelector('.btn[type="submit"]');

// const inputs = document.querySelectorAll('input[type="radio"]');
// const labels = document.querySelectorAll('.options > label');

// let selectedLabel = '';
// const labelTitles = [];

// submitBtn.addEventListener('click', handleSubmitClick);
// function handleSubmitClick(event) {
//     event.preventDefault(); // avoid page refresh after form submit
//     resultParagrapg.textContent += selectedLabel;
//     form.reset(); //UNclick the radio button
// }

// labels.forEach(label => labelTitles.push(label.textContent.trim()));
// inputs.forEach(input => input.addEventListener('click', handleRadioClick));

// function handleRadioClick(event) {
//     const idx = Array.from(inputs).indexOf(this);
//     selectedLabel = labelTitles[idx];

//     //reset the resultParagrapg.textContent after radio button click to avoid concatenation
//     resultParagrapg.textContent = resultText;
// }


//===========================================================


// /*
//   Дан список изображений. Сделайте так, чтобы по клику на картинку 
//   алертом выводился ее src. Обязательно используйте делегирование событий.
// */

// const gallery = document.querySelector('.images');

// gallery.addEventListener('click', showImgSrc);

// // const images = gallery.querySelectorAll('img');
// // images.forEach(image => {
// //     image.addEventListener('click', showImgSrc);
// // } )

// function showImgSrc(event) {
//     alert(event.target.src);
// }


// //===========================================================


// /*
//   Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//   Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//   она находится. Обязательно используйте делегирование событий.
// */

// const list = document.querySelector('.list');

// list.addEventListener('click', deleteListItem);

// function deleteListItem(event) {
//     if (event.target.nodeName !== 'BUTTON') return;
//     event.target.parentElement.remove();    
// }


// //===========================================================


// /*
//   Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
//   инпуты проверяли свое содержимое на правильное количество символов. 
  
//   - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
//   - Если введено подходящее количество, то outline инпута становится зеленым, если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
// */

// const inputList = document.querySelector('.input-list');

// inputList.addEventListener('change', checkInputValidity);

// function checkInputValidity({target}) {    
//     if(target.value.length  == target.dataset.length) {
//         target.classList.add('valid');
//         target.classList.remove('invalid')
//     } else {
//     target.classList.add('invalid');
//     target.classList.remove('valid')
//     }
// }


// //===========================================================


// /*
//   Напишите скрипт который:
//     - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
//     - При наборе текста в инпуте (событие input), текущее его значение должно отображаться в p.input-value 
// */

// const message = document.querySelector('.message');
// const inputText = document.querySelector('.input');
// const inputValue = document.querySelector('.input-value');
// const inputValueOrigianlText = inputValue.textContent;

// const regE = /[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]/;

// inputText.addEventListener('focus', renderMessage);
// inputText.addEventListener('blur', removeMessage);
// inputText.addEventListener('keyup', showInputValue);

// function renderMessage() {
//     message.textContent = "Input is in focus!"
// }

// function removeMessage() {
//     message.textContent = ""
// }

// function showInputValue({target}){
//     if(regE.test(target.value)) {
//         inputValue.textContent = inputValueOrigianlText + target.value;
//     }
//     if(target.value.length == 0) {
//         inputValue.textContent = inputValueOrigianlText;
//     }
// }


// //===========================================================


// /*
//   На вкладках HTML и CSS уже готовая верстка модального окна.
//   По умолчанию модальное окно скрыто классом modal-hidden.
  
//   Напишите скрипт который реализует следующее поведение:
//   - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, должно появляться. Для этого необходимо убрать класс modal-hidden. 
//     Для выбора модального модального окна используйте класс js-modal-backdrop
 
//   - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal") или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
// */

// document.addEventListener('DOMContentLoaded', () => {
   
//     const modalWindow = document.querySelector('.modal');
//     const btnShowModal = document.querySelector('[data-action="open-modal"]');
//     const btnCloseModal = document.querySelector('[data-action="close-modal"]');    
    
//     modalWindow.addEventListener('click', handleBackdropClick);
//     btnShowModal.addEventListener('click', showModal);
//     btnCloseModal.addEventListener('click', hideModal);

//     function handleBackdropClick({target}) {
//         if (this !== target) return;
//         hideModal();
//     }
    
//     function showModal(){
//         modalWindow.classList.remove('modal-hidden');
//         modalWindow.classList.add('js-modal-backdrop');
//     }

//     function hideModal(){
//         modalWindow.classList.add('modal-hidden');
//          modalWindow.classList.remove('js-modal-backdrop');
//     }
// })


// //===========================================================


/*
//   Ознакомьтесь с HTML и CSS.
  
//   Есть меню навигации, необходимо написать скрипт, который
//   при клике на пункт меню добавит ему класс active,
//   таким образом выделив текущую (активную) ссылку,
//   при этом убрав его у всех остальных элементов меню.
  
//   Пунктов меню может быть произвольное количество, используйте
//   прием делегирование событий. Учтите клик по самому ul, его
//   необходимо игнорировать.
  
//   При клике по ссылкам не должна перезагружаться страница!
// */

// const menu = document.querySelector('.js-menu');
// menu.addEventListener('click', handleItemClick);

// const links = document.querySelectorAll('.menu-link');

// function handleItemClick({target}) {
//     event.preventDefault(); //prevents page refresh after link click

//     //make sure the link is the target, and not it's container
//     if(target.nodeName !== 'A') return;

//     setActiveLink(links, target);
// }

// function setActiveLink(linksCollection, targetElement) {
//     //add class to active link, remove class from the rest
//     linksCollection.forEach(link => {
//         if(link !== targetElement){
//             link.classList.remove('active');
//         } else {
//             link.classList.add('active');
//         }
//     })
// }