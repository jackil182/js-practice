// 1) Данні з інпута (по кліку, або на кнопку ЕНТЕР і інпут чиститься)
// 2) Створити силку з данними з інпута
// 3) Посилаємо запит
// 4) Перевести з JSON формата
// 5) Намалювати розмітку

{/* <div class="one">   
    <p>Photographer is USERNAME</p>
    <img src= URL>
</div> */}

// const container = document.querySelector('#container');

// const KEY = "5018958-ed49ccd90878e6614abdf24a6";

// let input = '';
// const form = document.querySelector('.box');
// form.addEventListener('submit', hadndleFormSubmit);

// function hadndleFormSubmit(e) {
//     e.preventDefault();

//     input = document.querySelector('.input').value;
//     const URL = `https://pixabay.com/api/?key=${KEY}&per_page=9&q=${input}`;

//     fetch(URL)
//         .then(res => res.json())
//         .then(data => createGrid(data.hits))
//         .catch(err => console.log(err));

//     form.reset();
// }

// function createGrid(data) {
//     container.innerHTML = '';
//     data.forEach(item => {    
//         const div = document.createElement('div');
//         div.classList.add('one'); 
//         const par = document.createElement('p');
//         par.textContent = `Photographer is ${item.user}`;
//         const img = document.createElement('img');
//         img.setAttribute('src', item.webformatURL);
//         div.append(par, img); 
//         container.append(div);
//     });
// }

// window.addEventListener('DOMContentLoaded', hadndleFormSubmit);





// Отримати масив валют з сайта НБУ 
// Силка для запиту 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
// Вивести інформацію на екран в форматі списка. Пункт списку має мати 3 спана:
// Спан №1 показує текстову назву валюти
// Спан №2 показує курс
// Спан №3 показує позначку валюти (наприклад USD)
// Створити на екрані 3 кнопки та інпут.
// 1)Кнопка №1 сортує від дорожчого до дешевшого
// 2)Кнопка №2 сортує від дешевшого до дорощого
// 3)Кнопка №3 сортує по алфавіту
// 4)В інпут вводимо назву валюти текст або cc і отримуємо курс конкретної валюти. 


const form = document.querySelector('.form');

const buttons = document.querySelector('.buttons');
const btnToCheap = document.querySelector('.to-cheap');
const btnToExpensive = document.querySelector('.to-expensive');
const btnAtoZ = document.querySelector('.a-z');

const list = document.querySelector('.list');

const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

form.addEventListener('submit', displayRate);

function displayRate(e) {
    e.preventDefault();

    const input = document.querySelector('.input').value;

    fetch(URL)
        .then(res => res.json())
        .then(d => {
            if(e.target === btnToCheap) {
                d.sort((a, b) => b.rate - a.rate);
            }

            if(e.target === btnToExpensive) {
                d.sort((a, b) => a.rate - b.rate);
            }

            if(e.target === btnAtoZ) {
                d.sort((a, b) => a.txt.localeCompare(b.txt));
            }

            if(input !== "") {
                d = d.filter(x => x.txt === input || x.cc === input.toUpperCase());
                console.log(d);
            }
            
            createList(d);
        })
        .catch(err => console.log(err));

    form.reset();
}

function createList(data) {
    list.innerHTML = data.reduce((markup, item) => markup + `<li>
    <span class="text">${item.txt}</span>
    <span class="rate">${item.rate}</span>
    <span class="CC">${item.cc}</span>
</li>`, '');
}


buttons.addEventListener('click', displayRate);