// /*
//   Создайте скрипт секундомера.  
//   По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
//   Изначально в HTML есть разметка:
  
//   <div class="stopwatch">
//     <p class="time js-time">00:00.0</p>
//     <button class="btn js-start">Start</button>
//     <button class="btn js-take-lap">Lap</button>
//     <button class="btn js-reset">Reset</button>
//   </div>
//   <ul class="laps js-laps"></ul>
  
//   Добавьте следующий функционал:
  
//   - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
//     со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
//     новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
//     🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
//                   достаточно повторять не чаще чем 1 раз в 100 мс.
    
//   - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
//     а функционал при клике превращается в оставновку секундомера без сброса 
//     значений времени.
    
//     🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
//   - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
//     меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
//     а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени с 6 секунд, а не с 16. 
    
//     🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его при рассчете текущего времени после возобновления таймера отнимая это значение от времени запуска таймера.
    
//   - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
//     button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
//     disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
//   - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
// */


// const btnStart = document.querySelector('.js-start');
// const btnLap = document.querySelector('.js-take-lap');
// const btnReset = document.querySelector('.js-reset');
// let clockface = document.querySelector('.js-time');
// const list = document.querySelector('.js-laps');
// const listItem = document.createElement('li');
// listItem.classList.add('js-item');

// const timeObj = {
//     startTime: null,
//     deltaTime: null,
//     id: null,
// }

// btnStart.addEventListener('click', onStart);
// btnLap.addEventListener('click', onLap);
// btnReset.addEventListener('click', onReset);

// function onStart({target}) {
//     if(target.textContent === 'Start') {
//         timeObj.startTime = Date.now();
//         target.textContent = 'Pause';

//         timeObj.id = setInterval(function() {
//             timeObj.deltaTime = Date.now() - timeObj.startTime;
//             changeClockface(clockface, timeObj.deltaTime);
//         }, 100);
        
//     } else if(target.textContent === 'Pause') {
//         target.textContent = 'Continue';

//         clearInterval(timeObj.id);

//     } else if(target.textContent === 'Continue'){
//         target.textContent = 'Pause';
//         timeObj.startTime = Date.now() - timeObj.deltaTime;  

//         timeObj.id = setInterval(function() {
//             timeObj.deltaTime = Date.now() - timeObj.startTime;
//             changeClockface(clockface, timeObj.deltaTime);
//         }, 100);    
//     }
// }

// function onLap({target}) {
//     if(btnStart.textContent !== 'Pause') return;

//     const newItem = listItem.cloneNode(true);    
//     newItem.textContent = clockface.textContent;
//     list.append(newItem);
// }

// function onReset({target}) {
//     btnStart.textContent = 'Start';    
//     clockface.textContent = '00:00.0';

//     clearInterval(timeObj.id)
// }

// function changeClockface(elem, time) {
//     elem.textContent = getFormattedTime(time);
// }

// function getFormattedTime(time) {
//     let delta = new Date(time);
//     let minutes = delta.getMinutes();
//     minutes < 10 ? minutes = '0' + minutes : minutes;
//     let seconds = delta.getSeconds();
//     seconds < 10 ? seconds = '0' + seconds : minutes;
//     let milliseconds = delta.getMilliseconds();
//     milliseconds = Math.floor(milliseconds / 100);
    
//     return delta = `${minutes}:${seconds}.${milliseconds}`; 
// }







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



class Stopwatch {
    constructor(parentDiv) {
        this.parentDiv = parentDiv;
        this.startTime = null;
        this.deltaTime = null;
        this.id = null;
        this.stopwatch = document.createElement('div');
        this.clockface = document.createElement('p');
        this.btnStart = document.createElement('button');
        this.btnLap = document.createElement('button');
        this.btnReset = document.createElement('button');
        this.list = document.createElement('ul');
        this.listItem = document.createElement('li');

        this.stopwatch.append(this.clockface, this.btnStart, this.btnLap, this.btnReset);
        this.parentDiv.append(this.stopwatch, this.list);

        this.addListeners();
    }

    addListeners() {
        this.stopwatch.classList.add('stopwatch');

        this.clockface.classList.add('js-time');
        this.clockface.textContent = '00:00.0';

        this.btnStart.classList.add('js-start');
        this.btnStart.textContent = 'Start';

        this.btnLap.classList.add('js-lap');
        this.btnLap.textContent = 'Lap';

        this.btnReset.classList.add('js-reset');
        this.btnReset.textContent = 'Reset';

        this.list.classList.add('js-laps');
        this.listItem.classList.add('js-list-item')

        this.btnStart.addEventListener('click', this.onStart.bind(this));
        this.btnLap.addEventListener('click', this.onLap.bind(this));
        this.btnReset.addEventListener('click', this.onReset.bind(this));
    }

    onStart({target}) {
        if(target.textContent === 'Start') {
            this.startTime = Date.now();
            target.textContent = 'Pause';

            this.id = setInterval(() => {
                this.deltaTime = Date.now() - this.startTime;
                this.changeClockface(this.clockface, this.deltaTime);
            }, 100);
            
        } else if(target.textContent === 'Pause') {
            target.textContent = 'Continue';

            clearInterval(this.id);

        } else if(target.textContent === 'Continue'){
            target.textContent = 'Pause';
            this.startTime = Date.now() - this.deltaTime;  

            this.id = setInterval(() => {
                this.deltaTime = Date.now() - this.startTime;
                this.changeClockface(this.clockface, this.deltaTime);
            }, 100);    
        }
    }

    onLap({target}) {
        if(this.btnStart.textContent !== 'Pause') return;

        const newItem = this.listItem.cloneNode(true);    
        newItem.textContent = this.clockface.textContent;
        this.list.append(newItem);
    }

    onReset({target}) {
        this.btnStart.textContent = 'Start';    
        this.clockface.textContent = '00:00.0';

        clearInterval(this.id)
    }

    changeClockface(elem, time) {
        elem.textContent = this.getFormattedTime(time);
    }

    getFormattedTime(time) {
        let delta = new Date(time);
        let minutes = delta.getMinutes();
        minutes < 10 ? minutes = '0' + minutes : minutes;
        let seconds = delta.getSeconds();
        seconds < 10 ? seconds = '0' + seconds : minutes;
        let milliseconds = delta.getMilliseconds();
        milliseconds = Math.floor(milliseconds / 100);
        
        return delta = `${minutes}:${seconds}.${milliseconds}`; 
    }
}

const stopwatchFirst = document.querySelector('.stopwatch-1');
const stopwatchSecond = document.querySelector('.stopwatch-2');
const stopwatchThird = document.querySelector('.stopwatch-3');


const stopwatch1 = new Stopwatch(stopwatchFirst);
const stopwatch2 = new Stopwatch(stopwatchSecond);
const stopwatch3 = new Stopwatch(stopwatchThird);