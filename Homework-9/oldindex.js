/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его при рассчете текущего времени после возобновления таймера отнимая это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const btnStart = document.querySelector('.js-start');
const btnLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
let clockface = document.querySelector('.js-time');
const list = document.querySelector('.js-laps');
const listItem = document.createElement('li');
listItem.classList.add('js-item');

const timeObj = {
    startTime: null,
    deltaTime: null,
    id: null,
    pausedTime: null,
}

let isActive = false;

btnStart.addEventListener('click', onStart);
btnLap.addEventListener('click', onLap);
btnReset.addEventListener('click', onReset);

function onStart({target}) {        
    if(isActive) {
        btnStart.textContent = 'Continue';
        isActive = false;
        timeObj.pausedTime = timeObj.deltaTime; 
        console.log(clockface);
        
        changeClockface(clockface, timeObj.pausedTime);

    } else {
        timeObj.startTime = Date.now();
        isActive = true;
        btnStart.textContent = 'Pause';
        console.log(clockface);
        
        changeClockface(clockface, timeObj.pausedTime);

    }

    if(btnStart.textContent = 'Pause') {
        timeObj.startTime = Date.now() - timeObj.pausedTime;
    }


    timeObj.id = setInterval(function() {
        timeObj.deltaTime = Date.now() - timeObj.startTime;
        changeClockface(clockface, timeObj.deltaTime);
    }, 100);
}

function onLap({target}) {
    if(!isActive) return;

    const newItem = listItem.cloneNode(true);
    
    newItem.textContent = clockface.textContent;
    list.append(newItem);
}

function onReset({target}) {
    isActive = false;
    btnStart.textContent = 'Start';    
    clockface.textContent = '00:00.0';
    timeObj.startTime = Date.now();
    clearInterval(timeObj.id)
    console.log(timeObj);
}

function changeClockface(elem, time) {
    elem.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
    if(!isActive) return;
    let delta = new Date(time);
    let minutes = delta.getMinutes();
    minutes < 10 ? minutes = '0' + minutes : minutes;
    let seconds = delta.getSeconds();
    seconds < 10 ? seconds = '0' + seconds : minutes;
    let milliseconds = delta.getMilliseconds();
    milliseconds = Math.floor(milliseconds / 100);
    
    return delta = `${minutes}:${seconds}.${milliseconds}`;
    
}









/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/