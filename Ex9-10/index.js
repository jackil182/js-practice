// /*
//   Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
//   нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
//   значение из массива. 

//   При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
//   Учтите что на кнопку Start могно нажать бесконечное количество раз,
//   сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
//   Start не имело эффекта.
// */

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// const body = document.querySelector('body');
// const btnStart = document.querySelector('.js-start');
// const btnStop = document.querySelector('.js-stop');

// let timerId = null;
// let isActive = false;

// const onStart = () => {
//     if(isActive) return;
//     isActive = true;
//     timerId = setInterval(setColor, 1000);
// }

// const onStop = () => {
//     isActive = false;
//     clearTimeout(timerId);
//     // body.style.backgroundColor = '#fff';
// }

// const setColor = () => {
//     const radnomIdx = Math.floor(Math.random()*colors.length);
//     let radnomColor = colors[radnomIdx];
//     body.style.backgroundColor = radnomColor;
// }


// btnStart.addEventListener('click', onStart);
// btnStop.addEventListener('click', onStop);


//===================================================================


// /* 
//   Напишите функцию getFormattedTime(time), которая получает time - кол-во миллисекунд и возвращает строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
//   Используйте возможности объекта Date для работы со временем.
  
//   Из миллисекунд нам интересен только разряд с сотнями, то есть если сейчас 831мс то нам интересна исключительно цифра 8.
// */

// function getFormattedTime(time) {
//     date = new Date(time)
//     let minutes = date.getMinutes();
//     minutes < 10 ? minutes = '0' + minutes : minutes;
//     let seconds = date.getSeconds();
//     seconds < 10 ? seconds = '0' + seconds : seconds;
//     let milliseconds = date.getMilliseconds();
//     milliseconds = milliseconds.toString()[1];

//     return (`${minutes}:${seconds}:${milliseconds}`);
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   
 
//===================================================================

 
// /* 
//   Напишите скрипт, реализующий базовый функционал таймера, запуск отсчета времени и сброс счетчика в исходное состояние.
  
//   Используйте возможности объекта Date для работы со временем.
  
//   Создайте функцию startTimer, которая будет запускать отсчет времени с момента ее нажатия, она вызывается при клике на кнопку с классом js-timer-start.
  
//   Создайте функцию stopTimer, которая будет останавливать счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
//   Используйте вспомогательную функцию updateClockface которая обновляет значение счетчика в интерфейсе. Для составления строки времени в формате xx:xx.x, исользуйте функцию getFormattedTime из задания номер 3.
  
//   Подсказка: так как нам интересны исключительно сотни миллисекунд, нет смысла выполнять пересчет времени чаще чем каждые 100мс.
// */


// first method (lots of global functions)

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// let isActive = false;

// function onStart({target}) {
//     if(isActive) return;
//     isActive = true;
    
//     timer.startTime = Date.now();  
//     timer.id = setInterval (function() {
//         startTimer(target);
//     }, 100);
// }

// function startTimer(target) { 
//     timer.deltaTime = Date.now() - timer.startTime;       
//     setActiveBtn(target);
//     updateClockface(clockface, timer.deltaTime);
// }

// /*
// * Подсветка активной кнопки
// */
// function setActiveBtn(target) {
//     if(target.classList.contains('active')) {
//       return;
//     }
    
//     startBtn.classList.remove('active');
//     stopBtn.classList.remove('active');
    
//     target.classList.add('active');
//   }

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function updateClockface(elem, time) {
//     // Используйте функцию getFormattedTime из задания #1   
//     elem.textContent = getFormattedTime(time);
//   }

// function getFormattedTime(time) {
//     delta = new Date(timer.deltaTime);
//     let minutes = delta.getMinutes();    
//     minutes < 10 ? minutes = '0' + minutes : minutes;    
//     let seconds = delta.getSeconds();
//     seconds < 10 ? seconds = '0' + seconds : seconds;
//     let milliseconds = delta.getMilliseconds();
//     milliseconds = Math.floor(milliseconds / 100);
//     delta = `${minutes}:${seconds}.${milliseconds}`;    
    
//     return delta;
// }

// function stopTimer(target) {
//     setActiveBtn(target);
//     // updateClockface(clockface, timer.startTime);
// }



// function onStop({target}) {
//     isActive = false;
//     clearInterval(timer.id);
//     stopTimer(target);
// }

// startBtn.addEventListener('click', onStart);
// stopBtn.addEventListener('click', onStop);


// second method (using class)

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// class Timer {
//     constructor() {
//         this.startTime = null;
//         this.deltaTime = null,
//         this.id = null;
//         this.isActive = false;
//     }

//     onStart({target}) {        
//         if(this.isActive) return;
//         this.startTime = Date.now();  
//         this.isActive = true;

//         this.setActiveBtn(target);
    
//         this.id = setInterval (() => {
//             this.deltaTime = Date.now() - this.startTime;       
//             this.updateClockface(clockface, this.deltaTime);
//         }, 100);
//     }

//     onStop({target}) {
//         this.isActive = false;
//         // this.id = null;
//         clearInterval(this.id);
//         this.stopTimer(target);
//     }

//     setActiveBtn(target) {
//         if(target.classList.contains('active')) {
//           return;
//         }
        
//         startBtn.classList.remove('active');
//         stopBtn.classList.remove('active');
//         target.classList.add('active');
//       }

//       updateClockface(elem, time) {
//         elem.textContent = this.getFormattedTime(time);
//       }

//       getFormattedTime(time) {
//         let delta = new Date(this.deltaTime);
//         let minutes = delta.getMinutes();    
//         minutes < 10 ? minutes = '0' + minutes : minutes;    
//         let seconds = delta.getSeconds();
//         seconds < 10 ? seconds = '0' + seconds : seconds;
//         let milliseconds = delta.getMilliseconds();
//         milliseconds = Math.floor(milliseconds / 100);
        
//         return delta = `${minutes}:${seconds}.${milliseconds}`;
//     }

//     stopTimer(target) {
//         this.setActiveBtn(target);
//         // updateClockface(clockface, timer.startTime);
//     }
// }

// const timer = new Timer();

// startBtn.addEventListener('click', timer.onStart.bind(timer));
// stopBtn.addEventListener('click', timer.onStop.bind(timer));   
 

//===================================================================

 
// /*
//   Напишите скрипт работы магазина со складом товаров.
//   Есть переменная goodsAmount хранящиая в себе текущее количество единиц какого-то товара на складе.
  
//   Напишите функцию processOrder(amount), получающую кол-во товаров заказанных покупателем, и возвращающую промис.
//   Для имитации проверки достаточного количества товаров на складе используйте setTimeout с delay 500мс.
  
//   Если на складе товаров больше либо равно заказанному количеству, "верните" строку - "Ваш заказ готов!".
//   В противном случае - "К сожалению на складе не достаточно товаров!".
//   Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
// */

// const DELAY = 500;
// let goodsAmount = 100;


// function processOrder(amount) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (amount <= goodsAmount) resolve('Ваш заказ готов!');
//             if (amount > goodsAmount) reject('К сожалению на складе не достаточно товаров!');
//             if (typeof amount !== 'number') throw new Error('Некорректный ввод!');
//         }, DELAY);
//     });

//     return promise;
// }

// // Вызовы функции для проверки
// processOrder(50)
//   .then(result => console.log(result)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(50)
//   .then(result => console.log(result)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(500)
//   .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
//   .catch(err => console.log(err));

// processOrder("qwe")
//   .then(result => console.log(result))
//   .catch(err => console.log(err)); // Некоректный ввод!


//===================================================================

 
// /*
//   Написать функцию fetchCountryData, которая использует API_URL + текущее значение input для составления запроса.
  
//   Формат полного url таков: https://restcountries.eu/rest/v2/name/имя-страны
    
//   С помощью fetch сделать запрос по составленому адресу. 
//   Обязательно обработать вариант с ошибкой запроса используя catch. 
  
//   Результат запроса вывести в поле result в формате:
//     Country name: имя страны
//     Capital: столица
//     Main currency: название денежной единицы
//     Flag: флаг страны
  
//   Все необходимые данные есть в ответе от API.
  
//   PS: при отправке формы перезагружается страница, решите эту задачу вспомнив о том, как остановить поведение по умолчанию.
// */

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

const countryName = document.querySelector('.country__name');
const countryCapital = document.querySelector('.country__capital');
const countryCurrency = document.querySelector('.country__currency');
const countryFlag = document.querySelector('.flag__img');

const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
    evt.preventDefault();
    const inputValue = input.value;
  
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(response => response.json())
    .then(data =>{ 
        let destr = {...data[0]};
        countryName.textContent = `Country name: ${destr.name}`;
        countryCapital.textContent = `Capital: ${destr.capital}`;
        countryCurrency.textContent = `Main currency: ${destr.currencies[0].name}`;
        countryFlag.setAttribute('src', `${destr.flag}`);
        })
    .catch(err => console.log(err));
  
  evt.target.reset();
}


//=======================================================


// /*
//   Написать функцию fetchUserData, которая использует API_URL + текущее значение input для составления запроса.
  
//   Формат полного url таков: https://api.github.com/users/имя-пользователя
    
//   Документация по Git API: https://developer.github.com/v3/
    
//   С помощью fetch сделать запрос по составленому адресу. 
//   Обязательно обработать вариант с ошибкой запроса используя catch. 
  
//   Результат запроса вывести в поле result в формате:
//     Avatar: аватартка 
//     Username: логин
//     Bio: описание профиля
//     Public repos: кол-во открытых репозиториев
  
//   Все необходимые данные есть в ответе от API.
// */

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// const avatar = document.querySelector('.avatar');
// const userName = document.querySelector('.user__name');
// const userBio = document.querySelector('.user__bio');
// const userRepos = document.querySelector('.user__repos');

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//     evt.preventDefault();

//     const inputValue = input.value;
//     const API_URL = `https://api.github.com/users/${inputValue}`;

//     fetch(API_URL)
//         .then(res => res.json())
//         .then(data => {
//             avatar.setAttribute('src', data.avatar_url);
//             userName.textContent = `User login: ${data.login}`;
//             userBio.textContent = `User bio: ${data.bio}`;
//             userRepos.textContent = `User oper repos: ${data.public_repos}`;
//             console.log(data);
//         })
//         .catch(err => console.log(err));

//     evt.target.reset();
// }


//=======================================================


// /*
//   Документация API: https://jsonplaceholder.typicode.com/

//   Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

//   Написать функцию fetchUsers, которая посылает get запрос.
//   Результатом fetch будет массив объектов.
  
//   В таблицу .user-table добавить строки для каждого пользователя.
//   Каждая строка состоит из 5-ти столбцов указанного формата.
//   Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
//     Имя | Почта | Город | Вебсайт | Компания
//     Имя | Почта | Город | Вебсайт | Компания
//     и так далее для каждого пользователя...
// */

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");

// const tableHead = document.createElement('thead');
// const row = document.createElement('tr');
// const cell = document.createElement('td');

// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//     const USER_API = `https://jsonplaceholder.typicode.com/users/`;
    
//     evt.preventDefault();

//   fetch(USER_API).then(res => {
//     if (res.ok) return res.json();

//     throw new Error('error', response.statusText)
//     })
//     .then(data => createTable(data))
//     .catch(err => console.log(err));

// }

// function createTable(dataArr) {
//     createHeadRow();
//     createTableRowWithCells(dataArr);
// }

// function createHeadRow() {
//     const headRow = row.cloneNode(true);
    
//     const thName = cell.cloneNode(true);
//     thName.textContent = 'User Name';
//     const thZip = cell.cloneNode(true);
//     thZip.textContent = 'User Zip Code';
//     const thCity = cell.cloneNode(true);
//     thCity.textContent = 'User City';
//     const thSite = cell.cloneNode(true);
//     thSite.textContent = 'User Web-site';
//     const thCompany = cell.cloneNode(true);
//     thCompany.textContent = 'User Company';

//     headRow.append(thName, thZip, thCity, thSite, thCompany)
//     tableHead.append(headRow);
//     userTable.append(tableHead);
// }

// function createTableRowWithCells(dataArr) {
//     dataArr.forEach(el => {
//         const tRow = row.cloneNode(true);
//         const tdName = cell.cloneNode(true);
//         const tdZip = cell.cloneNode(true);
//         const tdCity = cell.cloneNode(true);
//         const tdSite = cell.cloneNode(true);
//         const tdCompany = cell.cloneNode(true);

//         tdName.textContent = el.name;
//         tdZip.textContent = el.address.zipcode;
//         tdCity.textContent = el.address.city;
//         tdSite.textContent = el.website;
//         tdCompany.textContent = el.company.name;
//         tRow.append(tdName, tdZip, tdCity, tdSite, tdCompany);
//         userTable.append(tRow);
//     })
// }


//======================================================


// /*
//   Документация API: https://jsonplaceholder.typicode.com/

//   Написать функцию getUserById, которая посылает запрос на получение информации о пользоватеьте с id (число) введенным в input. Не забывайте что значение input это строка.
 
//   Объект что придет в ответе используйте для вывода информации о пользователе в элементе .result
  
//   Если пользователя с таким идентификатором в базе данных нет, в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
// */

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// const paragraph = document.createElement('p');

// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//     const inputValue = Number(input.value);
//     const API_URL = `https://jsonplaceholder.typicode.com/users/${inputValue}`;

//     evt.preventDefault();
//     evt.target.reset();

//     fetch(API_URL).then(res => {
//         if (res.ok) return res.json();

//         throw new Error('No user with such ID');
//     })
//     .then(data => {
//         for (let key in data){
//             const par = paragraph.cloneNode(true);
//             if (key === 'address') {
//                 par.textContent = `${key}: ${data[key].suite}, ${data[key].street}, ${data[key].city}, ${data[key].zipcode}`
//             } else if (key === 'company') {
//                 par.textContent = `${key}: ${data[key].name}`
//             } else {
//             par.textContent = `${key}: ${data[key]}`
//             }
//             result.append(par);
//         }
//         console.log(data);
//     })
//     .catch(err => console.log(err))
// }


//======================================================


