"use strict";

// Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
// Реализуйте следующий функционал:
//   - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
//   - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
//   - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
//   - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для создания списка карточек. Форма уже есть в HTML при загрузке страницы.
//   - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
//       * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть, всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
//       * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой добавляется в коллекцию.
//   - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
//   - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике на кнопку происходит удаление.
//   - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
// 🔔 Оформление интерфейса произвольное
// */

/*
⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка на валидность введенной ссылки: если был введен невалидный url то должно всплывать диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте регулярные выражения для валидации url.
        
  - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки, для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
var urlRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
var form = document.querySelector('.notes-form');
var input = document.querySelector('.input-text');
var btnSubmit = document.querySelector('.btn-submit');
var noteList = document.querySelector('.notes-list');
var source = document.querySelector('#js-template').innerHTML.trim();
var template = Handlebars.compile(source);
form.addEventListener('submit', addNote);

function addNote() {
  event.preventDefault();
  var noteText = input.value;
  var storegaData = JSON.parse(localStorage.getItem('link')) || [];

  if (storegaData.every(function (x) {
    return x.url !== noteText;
  })) {
    if (urlRegEx.test(noteText)) {
      fetch("https://api.linkpreview.net/?key=5c532304d318b4f07843367da32d6a39a636c4b68bb74&q=".concat(noteText)).then(function (res) {
        if (res.ok) return res.json();
        throw new Error('error', res.statusText);
      }).then(function (d) {
        var obj = {
          title: d.title,
          descr: d.description,
          image: d.image,
          url: noteText
        };
        storegaData.unshift(obj);
        localStorage.setItem('link', JSON.stringify(storegaData));
        createListItem(obj);
      }).catch(function (err) {
        if (err) alert('Site doesn\'t exist');
      });
      form.reset();
    } else {
      alert('Your link is invalid. Please, check');
    }
  } else {
    alert('This link already exists');
  }
}

function removeListItem() {
  if (event.target.classList.contains('btn-close')) {
    event.target.parentNode.remove();
    var storegaData = JSON.parse(localStorage.getItem('link'));
    storegaData = storegaData.filter(function (x) {
      return console.log(x);
    });
    localStorage.setItem('link', JSON.stringify(storegaData));
  }
}

function createListItem() {
  var storegaData = JSON.parse(localStorage.getItem('link'));
  var markup = storegaData.reduce(function (acc, val) {
    return acc + template(val);
  }, '');
  noteList.innerHTML = markup;
}

noteList.addEventListener('click', removeListItem);
window.addEventListener('DOMContentLoaded', renderNotesList);

function renderNotesList() {
  var storegaData = JSON.parse(localStorage.getItem('link')) || [];
  storegaData.forEach(function (el) {
    return createListItem(el);
  });
} // localStorage.removeItem('link');