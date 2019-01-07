/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 

// let numInt = prompt('Введите произвольное целое число');
// if (numInt == null) {
//   alert('Приходите еще!');
// } else if (Number.isInteger(Number(numInt))) {
//     alert('Спасибо!');
// } else {
//   alert ('Необходимо было ввести целое число!');
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);

// let type = "";
// num % 2 == 0 ? type = "even" : type = "odd";

// console.log(`${num} is ${type}`);


//////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую, тоесть значения переменных hours, minutes, seconds  и добавлят впереди 0 если необходимо.
*/

// let hours = 11;
// let minutes = 3;
// let seconds = 42;

// hours = String(hours);
// minutes = String(minutes);
// seconds = String(seconds);

// hours.length < 2 ? hours = "0" + hours : hours;
// minutes.length < 2 ? minutes = "0" + minutes : minutes;
// seconds.length < 2 ? seconds = "0" + seconds : seconds;


// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);


//////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
  Создайте срипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// let inputNum = prompt("input number netween 1 and 5");

// if (inputNum == null) {
//     alert ('очень жаль, приходите еще!');
// } else {

//     switch (inputNum) {
//         case "1":
//             alert("Каталог хостелов");
//             break;
//         case "2": 
//             alert("Каталог бюджетных отелей");
//             break;
//         case "3":
//             alert("Каталог отелей ***");
//             break;
//         case "4": 
//             alert("Каталог отелей ****");
//             break;
//         case "5":
//             alert("Каталог лучших отелей");
//             break;

//         default:
//             alert('Неверный ввод, возможные варианты 1-5!');
//     }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию так, чтобы в консоль вывелись указаные в комментариях элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// let newArr = users.slice(1);
// console.log(newArr); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// newArr.pop();
// console.log(newArr); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// newArr.splice(0, 0, "Nazarii");
// console.log(newArr); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// newArr.push("Yoyo", "Yaya");
// console.log(newArr); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Попросить пользователя ввести произвольную строку и записать ее в переменную string
  
//   PS: для перебора массива используте цикл for или for...of
// */

// let string = prompt("Enter a few words");
// let arr;

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(" ");
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// let indexes = [];
// for (let i = 0; i < arr.length; i++){
//   indexes.push(i);
// }
// console.log(indexes);

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arr.length; i++){
//   console.log(`${indexes[i]} : ${arr[i]}`);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// let enteredNum;

// do {
//   enteredNum = prompt("Enter number greater than 100");
// }
//   while (enteredNum <= 100);


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i++){
//   if (i % 3 == 0){
//     console.log("Fizz");
//   } else if (i % 5 == 0){
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Напишите скрипт, который выбирает из массива numbers все числа, которые больше чем значение переменной num, записывая эти числа в массив newArray.
      
//   В результате в массиве newArray будут все подходяшие числа.
      
//   PS: используйте цикл for или for...of и оператор ветвления if
// */

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > num) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Напишите скрипт, который проверяет произвольную строку в переменной string и находит в ней самое длинное слово, записывая его в переменную longestWord.
// */

// const string = "May the force be with you";
// let longestWord;
// let acc = 0;

// let newArr = string.split(" ");

// for (let i = 0; i < newArr.length; i++){
//   if (newArr[i].length > acc){
//     longestWord = newArr[i];
//     acc = newArr[i].length;
//   };
// }

// console.log(longestWord); // 'force'


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Напишите скрипт который:
  
//   - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
//     Используйте do...while.
//   - Проверять что пользователь ввел не число не обязательно
//   - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
//   - После того как ввод был завершен, если массив не пустой, 
//     скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
//     Используйте цикл for...of
// */

// let inputNum;
// let sum = 0;

// do {
//   inputNum = prompt("Input number");
//   sum += Number(inputNum);
// }
// while (inputNum !== null);

// alert(`The sum of entered numbers is ${sum}`);


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
//   Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького, до самого большого элемента массива. Эти значения необходимо сохранить в переменные min и max. Учтите что массив произвольный, но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить, что было введено. Преобразовать input в числовой тип и проверить число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[numbers.length-1];
// let result;

// let inputNum = prompt(`Guess the number between ${min} and ${max}`);

// if (inputNum == null || isNaN(inputNum)){
//   alert("You didn't enter a number");
// } else {
//   for (let i = 0; i < numbers.length; i++) {
//     if (inputNum == numbers[i]){
//       result = numbers[i];
//       alert("Congratulations! You guessed it!");
//     } 
//   }
//   if (result == undefined){
//     alert("Too bad. You missed it!"); 
//   }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Напишите функцию checkNumberType(num)
  
//   Функция получает число num как аргумент и возвращает строку "Even" если число четное и строку "Odd" если не четное.
// */

// function checkNumberType(num) {
//   return num % 2 == 0 ? "Even" : "Odd";
// }

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

// function formatString(str) {
//   return str.length <= 40 ? str : str.substr(0, 41).concat("...");
  
// }

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Напишите функцию checkForSpam(str)
  
//   Функция принимает 1 параметр str - строку, и проверять ее на содержание слов: spam и sale
  
//   Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false
  
//   PS: слова могут быть в произвольном регистре
// */

// function checkForSpam(str) {
//   // return str.toLowerCase().includes("spam") || str.includes("sale") ? true : false;

//   return str.search(new RegExp("spam", "i")) != -1 || str.search(new RegExp("sale", "i")) != -1 ? true : false;
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*  
//   Написать функцию, getPx(str) 

//   Функция getPx должна получать строку вида '10px', проверять была ли передана строка, если да, возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.
// */

// function getPx(str) {
//   return typeof str != "string" ? null : Number.parseFloat(str);
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*  
//   Создайте фукнцию findLongestWord(str), которая получает аргументом произвольную строку и возвращает самое длинное слово в этой строке.   
  
//   Важное условие - в строке могут быть только пробелы, символы букв и цифр!
// */

// function findLongestWord(str){
//   return result = str.split(" ").reduce((longestWord, currWord) => 
//                                         currWord.length > longestWord.length ? currWord : longestWord);
// }

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*  
//   Создайте функцию findLargestNumber(numbers), которая получает массив чисел numbers, и возвращает самое большое число в массиве.
// */

// function findLargestNumber(numbers){
//   return numbers.reduce((a,b) => a > b ? a : b);
// }

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128


//////////////////////////////////////////////////////////////////////////////////////////////////////


// /*  
//   Есть массив уникальных чисел uniqueNumbers.
  
//   Написать функцию, addUniqueNumbers(...), которая получает произвольное кол-во чисел как аргументы, и добавляет в массив uniqueNumbers только уникальные, а те которые в массиве уже есть игнорирует.
// */

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(...args){
  
//   for (let i = 0; i < args.length; i++) {
//     if (uniqueNumbers.includes(args[i])){
//       continue;
//     } else {
//       uniqueNumbers.push(args[i]);
//     }
//   }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Напишите функцию filterFromArray(arr), которая объявляет 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел, за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только те элементы исходного массива, которые не совпадают ни с одним из числовых аргументов.
*/

// const filterFromArray = function(...arr) {
  
//   for (let i = 1; i < arr.length; i++){
//     if (arr[0].includes(arr[i])){
//       arr[0].splice(arr[0].indexOf(arr[i]), 1);
//     }
//   }
//   return arr[0];
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - удаляет свойство premium
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// //console.log(user);

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// const keys = Object.keys(user);
// for (let item of keys) {
//   console.log(`${item}: ${user[item]}`);
// }

// const entries = Object.entries(user);
// // console.log(entries);
// for (let entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  Напиште скрипт который определит и выведет в консоль имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 350,
//   helen: 1,
//   lorence: 99
// };

// let maxTasks = 0;

// for (let key in tasksCompleted) {
//   if (tasksCompleted[key] > maxTasks) {
//     maxTasks = tasksCompleted[key];
//   }
// }

// console.log(maxTasks);


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Напишите функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

// const countProps = function countProps(obj) {
//   const entries = Object.entries(obj);
//   return entries.length;
// }

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Создайте функцию isObjectEmpty(obj), которая получает один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки

// const isObjectEmpty = function(obj) {
//   const entries = Object.entries(obj);
  
//   return entries.length == 0 ? true : false;
// }

// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки

// let totalSalary = 0;

// const countTotalSalary = function(salaries) {
//   for (let key in salaries) {
//     totalSalary += salaries[key];
//   }
//   return totalSalary;
// }

// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Напишите функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа, возвращает массив значений определенного поля prop из каждого объекта в массиве
*/

// const getAllPropValues = function(arr, prop) {
//   const outputProps = [];

//   for (let i = 0, length = arr.length; i < length; i++) {
//     for (let key in arr[i]) {      
//       if (prop == key) {
//         outputProps.push(arr[i][key])
//       }
//     }
//   }
//   return outputProps;
// }

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Напишите код, который бы  с помощью функции-конструкора User, позволял создавать объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друзей} friends`

  Создать несколько объектов пользователя User и с помощью функции getUserInfo вывести строку в консоль.
*/

// function User(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`); 
//   };
// } 

// const Naz = new User("Nazarii", true, 27, 5);
// console.log(Naz);
// Naz.getUserInfo();

// const Ana = new User("Anastasiia", false, 24, 50);
// Ana.getUserInfo();


//////////////////////////////////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////////////////////////////


/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     // console.log(this.password);
//     return this.password;
//   };

//   this.getAccountInfo = function() {
//     return (`Login: ${this.login}, Pass: ${this.password}, Type: ${this.type}`);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// console.log(account.changePassword("asdzxc")); // 'asdzxc'

// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'