// let sectionArr = [{
//     classes: 'fa-mars',
//     sectionYear: 1879,
//     title: 'Albert Einstein born',
//     text: 'Albert Einstein is born in Ulm, Germany, the son of Hermann Einstein, a German Jewish featherbed salesman, and his wife Pauline.',
// },
// {
//     classes:'fa-magnet',
//     sectionYear: 1884,
//     title: 'Mystery of Magnetism',
//     text: "At the age of five, Albert Einstein becomes fascinated by his father's pocket compass, intrigued by invisible forces that cause the needle always to point north. Later in life, Einstein will look back at this moment as the genesis of his interest in science.",
// },
// {
//     classes: 'fa-plane',
//     sectionYear: 1894,
//     title: 'Move to Italy',
//     text: 'Struggling financially, the Einstein family moves from Germany to Italy in search of better work. Albert, aged fifteen, stays behind in Munich to finish his schooling, but soon either quits or is kicked out of his high school and follows his parents to Italy.',
// },
// {
//     classes: 'fa-ban',
//     sectionYear: 1895,
//     title: 'Boarding School in Aarau',
//     text: 'Albert Einstein attempts to get out of his last year of high school by taking an entrance exam to ETH, the Swiss Polytechnic University in Zurich. He fails the test, forcing him to attend one final year of high school in the small town of Aarau, Switzerland, instead.',
// },
// {
//     classes: 'fa-university',
//     sectionYear: 1896,
//     title: 'Einstein at ETH',
//     text: 'Albert Einstein graduates from high school and begins attending ETH, the prestigious Swiss Polytechnic University in Zurich.',
// },
// {
//     classes:'fa-graduation-cap',
//     sectionYear: 1900,
//     title: 'College Graduation',
//     text: 'Albert Einstein graduates from ETH with a degree in physics. He tries to find a teaching job, but is unable to obtain work.',
// },
// {
//     classes:'fa-briefcase',
//     sectionYear: 1902,
//     title: 'Swiss Patent Office',
//     text: 'Unable to find any work as a teacher or academic, Albert Einstein takes a job as a clerk at the Swiss Patent Office.',
// },
// {
//     classes:'fa-files-o',
//     sectionYear: 1905,
//     title: 'Annus Mirabilis',
//     text: 'Over the course of a year that he will later describe as his "Annus Mirabilis" - his miraculous year - Albert Einstein publishes four major theoretical papers in the prestigious German academic journal Annalen Der Physik. The four papers include a groundbreaking new interpretation of the photoelectric effect as well as the first published exploration of the theory of Special Relativity and the first formulation of the famous equation E = mc2',
// },
// {
//     classes:'fa-file-o',
//     sectionYear: 1915,
//     title: 'General Theory of Relativity',
//     text: 'Einstein completes his General Theory of Relativity.',
// },
// {
//     classes:'fa-thumbs-up',
//     sectionYear: 1919,
//     title: 'Eclipse Proves Theory of Relativity',
//     text: "A solar eclipse provides dramatic observable evidence that Einstein's General Theory of Relativity is correct. Einstein suddenly becomes a worldwide celebrity.",
// },
// {
//     classes:'fa-trophy',
//     sectionYear: 1921,
//     title: 'Nobel Prize',
//     text: 'Albert Einstein wins the Nobel Prize in Physics for his work on the photoelectric effect, first published in 1905.',
// },
// {
//     classes:'fa-envelope',
//     sectionYear: 1939,
//     title: 'Letter to President Roosevelt',
//     text: "Fearing that Nazi scientists might win the race to develop the world's first atomic bombs, Albert Einstein writes a letter to President Franklin D. Roosevelt, urging him to launch an American program of nuclear research.",
// },
// {
//     classes:'fa-death',
//     sectionYear: 1955,
//     title: 'Death of Albert Einstein',
//     text: 'Albert Einstein dies of heart failure at the age of 76.',
// }
// ]

// const root = document.querySelector('#root');

// const header = document.createElement('header');
// const title = document.createElement('h1');
// title.setAttribute('id', 'title');
// title.textContent = 'Albert Einstein';
// header.append(title);

// const main = document.createElement('main');
// main.setAttribute('id', 'main');

// const firstRow = document.createElement('div');
// firstRow.setAttribute('id', 'first-row');

// const imgDiv = document.createElement('div');
// imgDiv.setAttribute('id', 'img-div');

// const figure = document.createElement('figure');
// imgDiv.append(figure);

// const image = document.createElement('img');
// image.setAttribute('id', 'image');
// image.setAttribute('src', 'http://jonivainio-kaila.fi/freecodecamp/tribute/assets/img/einstein-mobile.jpg"');
// image.setAttribute('alt', 'Profile picture of Albert Einstein.');
// const figcaption = document.createElement('figcaption');
// figcaption.setAttribute('id', 'img-caption');
// figure.append(image, figcaption);

// const tributeInfo = document.createElement('div');
// tributeInfo.setAttribute('id', 'tribute-info');

// firstRow.append(imgDiv, tributeInfo);

// const par = document.createElement('p');
// par.textContent = ' was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein\'s work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory.';
// tributeInfo.append(par);
// const strong = document.createElement('strong');
// strong.textContent = 'Albert Einstein';
// par.prepend(strong);

// const quote = document.createElement('div');

// const blockquote = document.createElement('blockquote');
// blockquote.textContent = 'Anyone who has never made a mistake has never tried anything new';
// quote.append(blockquote);

// const timeline = document.createElement('div');
// timeline.setAttribute('id', 'timeline');

// const secondaryTitle = document.createElement('h2');
// secondaryTitle.textContent = 'Timeline of Albert Einstein\'s life';
// timeline.append(secondaryTitle);


// for (el of sectionArr) {
//     const section = document.createElement('section');
//     const sectionIcon = document.createElement('div');
//     sectionIcon.classList.add('fa', el.classes);

//     const sectionTitle = document.createElement('h3');
//     const sectionYear = document.createElement('div');
//     sectionYear.classList.add('year');
//     sectionYear.textContent = el.sectionYear;
//     sectionTitle.textContent = el.title;

//     const sectionPar = document.createElement('p');
//     sectionPar.textContent = el.text;

//     sectionTitle.prepend(sectionYear);
//     section.append(sectionIcon, sectionTitle, sectionPar);
//     timeline.append(section);
// }

// const link = document.createElement('div');
// link.setAttribute('id', 'link');

// const tributeLink = document.createElement('a');
// tributeLink.setAttribute('id', 'tribute-link');
// tributeLink.setAttribute('href', 'http://www.shmoop.com/albert-einstein/timeline.html');
// tributeLink.setAttribute('target', '_blank');
// tributeLink.textContent = 'Full timeline at Shmoop!';

// main.append(firstRow, quote, timeline, tributeLink);

// const footer = document.createElement('footer');
// const footerPar = document.createElement('p');
// const footerPre = document.createTextNode('Tribute page project for ');

// const footerIcon = document.createElement('i');
// footerIcon.classList.add('fa', 'fa-free-code-camp');

// const footerPost = document.createTextNode = ' by Joni Vainio-Kaila';

// footerPar.append(footerPre, footerIcon, footerPost);
// footer.append(footerPar);

// root.append(header, main, footer);

// console.log(root);





// const form = document.querySelector('form');
// form.addEventListener('input', updateTotal);

// const price = document.querySelector('#price');
// const quantity = document.querySelector('#quantity');
// const amount = document.querySelector('.amount');
// const total = document.querySelector('.total');
// let totalPrice = 0;

// window.addEventListener('DOMContentLoaded', updateTotal);

// function updateTotal() {
//     totalPrice = Number(price.value) * Number(quantity.value);
//     total.textContent = totalPrice.toFixed(2);
//     amount.textContent = quantity.value;
// }




const box = document.querySelector('.box');
// box.addEventListener('click', calc);

// function calc() {
//     if(event.target === btnGetValue){
//         getInputs();
//     }

//     if(event.target === btnGetValue){
//         getSum();
//     }

//     if(event.target === btnMinus){
//         getMinus();
//     }

//     if(event.target === getMult) {
//         getMult();
//     }
    
//     if(event.target === getDivide) {
//         getDivide();
//     }

//     if(event.target === getPow) {
//         getPow();
//     }
// }

const btnGetValue = document.querySelector('.get-Value');
const a = document.querySelector('#a');
const b = document.querySelector('#b');
let firstVal, secondVal;

// button selectors
const btnSum = document.querySelector('.sum');
const btnMinus = document.querySelector('.minus');
const btnMult = document.querySelector('.mult');
const btnDivide = document.querySelector('.divide');
const btnPow = document.querySelector('.pow');

// p selectors
const resultSum = document.querySelector('#sum');
const resultMinus = document.querySelector('#minus');
const resultMult = document.querySelector('#mult');
const resultDivide = document.querySelector('#divide');
const resultPow = document.querySelector('#pow');


// method with 6 functions 

// btnGetValue.addEventListener('click', getInputs);
// function getInputs() {
//     firstVal = Number(prompt('enter valid number 1'));
//     secondVal = Number(prompt('enter valid number 2'));
//     a.textContent = `First number: ${firstVal}`;
//     b.textContent = `Second number: ${secondVal}`;
// }

// btnSum.addEventListener('click', getSum);
// function getSum() {
//     resultSum.textContent = firstVal + secondVal;
// }

// btnMinus.addEventListener('click', getMinus);
// function getMinus() {
//     resultMinus.textContent = firstVal - secondVal;
// }

// btnMult.addEventListener('click', getMult);
// function getMult() {
//     resultMult.textContent = firstVal * secondVal;
// }

// btnDivide.addEventListener('click', getDivide);
// function getDivide() {
//     resultDivide.textContent = firstVal / secondVal;
// }

// btnPow.addEventListener('click', getPow);
// function getPow() {
//     resultPow.textContent = Math.pow(firstVal, secondVal);
// }


// method with Class

// class Calculator{
//     constructor(){
//         this.firstVal = null;
//         this.secondVal = null;

//         this.getInputs = this.getInputs.bind(this);
//         this.getSum = this.getSum.bind(this);
//         this.getMinus = this.getMinus.bind(this);
//         this.getMult = this.getMult.bind(this);
//         this.getDivide = this.getDivide.bind(this);
//         this.getPow = this.getPow.bind(this);

//     }

//     getInputs() {
//         this.firstVal = Number(prompt('enter valid number 1'));
//         this.secondVal = Number(prompt('enter valid number 2'));
//         a.textContent = `First number: ${this.firstVal}`;
//         b.textContent = `Second number: ${this.secondVal}`;
//     }

//     getSum() {
//         resultSum.textContent = this.firstVal + this.secondVal;
//     }

//     getMinus() {
//         resultMinus.textContent = this.firstVal - this.secondVal;
//     }

//     getMult() {
//         resultMult.textContent = this.firstVal * this.secondVal;
//     }

//     getDivide() {
//         resultDivide.textContent = this.firstVal / this.secondVal;
//     }

//     getPow() {
//         resultPow.textContent = Math.pow(this.firstVal, this.secondVal);
//     }
// }

// const calcOne = new Calculator();
// btnGetValue.addEventListener('click', calcOne.getInputs);

// btnSum.addEventListener('click', calcOne.getSum);
// btnMinus.addEventListener('click', calcOne.getMinus);
// btnMult.addEventListener('click', calcOne.getMult);
// btnDivide.addEventListener('click', calcOne.getDivide);
// btnPow.addEventListener('click', calcOne.getPow);




// 1) При скролі сайту на велечину хедера фбо більше меню стає фіксованим
// 2) При скролі сайту меньше ніж висота хедера меню стає на почвткову позицію

// клас fixed-nav

// const nav = document.querySelector('.nav');
// const headerHeight = document.querySelector('.header').clientHeight;

// window.addEventListener('scroll', changeMeuPoisition);

// function changeMeuPoisition() {
//     if(pageYOffset > headerHeight){
//         nav.classList.add('fixed-nav');
//     } else {
//         nav.classList.remove('fixed-nav');
//     }
// }



// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// const container = document.querySelector('.container');
// const btnHeight = document.querySelector('.btn').clientHeight;
// const btnWidth = document.querySelector('.btn').clientWidth;

// container.addEventListener('mouseover', changePosition);

// function changePosition() {
//     const randomX = Math.random() * (innerWidth - btnHeight);
//     const randomY = Math.random() * (innerHeight - btnWidth);
//     event.target.style.left = randomX + 'px';
//     event.target.style.top = randomY + 'px';
//     event.target.style.transition = '1s';
// }



// let arr = [];

// window.addEventListener('keypress', getText);
// function getText(){
//     arr.push(event.charCode);
//     console.log(arr);
// }


// const box = document.querySelector('.box');
// window.addEventListener('keydown', changeSize);
// let originalWidth = '50px';
// let originalHeight = '50px';

// function changeSize() {
//     if(event.key === 'ArrowRight') {
//         box.style.width = Number.parseInt(originalWidth) + 20 + 'px';
//         originalWidth = box.style.width;
//     }

//     if(event.key === 'ArrowLeft') {
//         box.style.width = Number.parseInt(originalWidth) - 20 + 'px';
//         originalWidth = box.style.width;
//     }

//     if(event.key === 'ArrowUp') {
//         box.style.height = Number.parseInt(originalHeight) - 20 + 'px';
//         originalHeight = box.style.height;
//     }

//     if(event.key === 'ArrowDown') {
//         box.style.height = Number.parseInt(originalHeight) + 20 + 'px';
//         originalHeight = box.style.height;
//     }
// }




// 1) Скачати картинки
// 2) Наповнити розмітку
// 3) Створити через js модалку + В правому верхньому кутку хрестик на закриття
// 4) В модалці має зявлятися по центру картинка з підписом
// 5) При кліку на оверлей чи хрестик модалка пропадає
// 6) Пункти 3,4,5, активуються при кліку на картинку галереї (делегування).
// 7) Якщо все працює переписати на клас.
// *
// 1) Додати до модалки кнопку превю
// 2) При кліку на неї збоку зявляється панель з міні-картинками
// 3) При кліку на маленьку картинку змінюється картинка в модалці.
// 4) До міні-картинок додається бордер який підсвічує активне зображення.

const gallery = document.querySelector('#gallery');
const body = document.querySelector('body');
const modal = document.createElement('div');
body.append(modal);

const imgInModal = document.createElement('img');
imgInModal.classList.add('modal-img')

modal.append(imgInModal);

gallery.addEventListener('click', showLargeImg);
function showLargeImg() {    
    modal.classList.add('modal--active');
    imgInModal.classList.add('display-img')
    imgInModal.setAttribute('src', event.target.dataset.big)
    closeBtn.classList.add('close-btn');
    previewBtn.classList.add('preview-btn');
}

modal.addEventListener('click', hideModal);
function hideModal() {
    if (event.target === previewBtn) {        
        showPreview();
    }

    if(event.target === closeBtn || event.target === modal) {
        modal.classList.remove('modal--active');
        imgInModal.classList.remove('display-img');
        closeBtn.classList.remove('close-btn');
        previewBtn.classList.remove('preview-btn');
        sidebar.classList.remove('preview-bar--show');
    }
}

const closeBtn = document.createElement('div');
closeBtn.textContent = 'X';

modal.append(closeBtn);

const previewBtn = document.createElement('div');
previewBtn.textContent = '...';

modal.append(previewBtn);

const sidebar = document.createElement('div');
modal.append(sidebar);
sidebar.classList.add('preview-bar');

function showPreview() {
    sidebar.classList.toggle('preview-bar--show');
};

const sidebarBlock = document.createElement('div');
sidebarBlock.classList.add('sidebar-block');

const sidebarImg = document.createElement('img');
sidebarImg.classList.add('sidebar-img')
const sidebarImgOne = sidebarImg.cloneNode(true);
const sidebarImgTwo = sidebarImg.cloneNode(true);
const sidebarImgThree = sidebarImg.cloneNode(true);
const sidebarImgFour = sidebarImg.cloneNode(true);
const sidebarImgFive = sidebarImg.cloneNode(true);
const sidebarImgSix = sidebarImg.cloneNode(true);

sidebarBlock.append(sidebarImgOne, sidebarImgTwo, sidebarImgThree, sidebarImgFour, sidebarImgFive, sidebarImgSix);

sidebar.append(sidebarBlock);

sidebarImgOne.setAttribute('src', './pic1-large.jpeg');
sidebarImgTwo.setAttribute('src', './pic2-large.jpeg');
sidebarImgThree.setAttribute('src', './pic3-large.jpeg');
sidebarImgFour.setAttribute('src', './pic4-large.jpeg');
sidebarImgFive.setAttribute('src', './pic5-large.jpeg');
sidebarImgSix.setAttribute('src', './pic6-large.jpeg');

const sidebarImgArr = [...sidebarBlock.querySelectorAll('img')];

sidebarBlock.addEventListener('click', updateLargeImg);

function updateLargeImg() {
    if(event.target === sidebarBlock) return;       
    imgInModal.setAttribute('src', event.target.src);
    sidebarImgArr.map(x => {
        if (event.target === x) {
            console.log('aaa');
            x.classList.add('sidebar-img--active');
        } else {
            x.classList.remove('sidebar-img--active');
            console.log('bbb');
        }
        console.log(x);
    })
}