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


const urlRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const form = document.querySelector('.notes-form');
const input = document.querySelector('.input-text');
const btnSubmit = document.querySelector('.btn-submit');
const noteList = document.querySelector('.notes-list');

const source = document.querySelector('#js-template').innerHTML.trim();
const template = Handlebars.compile(source);


form.addEventListener('submit', addNote);

function addNote() {
  event.preventDefault();    
  let noteText = input.value;
  let storegaData = JSON.parse(localStorage.getItem('link')) || [];
    
  if (storegaData.every(x => x.url !== noteText)) {
    if (urlRegEx.test(noteText)) {      
      fetch(`https://api.linkpreview.net/?key=5c532304d318b4f07843367da32d6a39a636c4b68bb74&q=${noteText}`).then(res => {
        if (res.ok) return res.json();

        throw new Error('error', res.statusText);
      }).then(d => {
        let obj = {
          title: d.title,
          descr: d.description,
          image: d.image,
          url: noteText,
        }
        storegaData.unshift(obj);
        localStorage.setItem('link', JSON.stringify(storegaData));
        
        createListItem(obj);
      }).catch(err => {
        if(err) alert('Site doesn\'t exist');
      });

      form.reset();
    } else {
      alert('Your link is invalid. Please, check')
    }
  } else {
    alert('This link already exists');
  }
}

function removeListItem() {
  if (event.target.classList.contains('btn-close')) {
    event.target.parentNode.remove();
    
    let storegaData = JSON.parse(localStorage.getItem('link'));
    
    storegaData = storegaData.filter(x => console.log(x))
    localStorage.setItem('link', JSON.stringify(storegaData));
  }
}

function createListItem() {
  let storegaData = JSON.parse(localStorage.getItem('link'));
  const markup = storegaData.reduce((acc, val) => acc + template(val), '');
  noteList.innerHTML = markup;
}

noteList.addEventListener('click', removeListItem);


window.addEventListener('DOMContentLoaded', renderNotesList);

function renderNotesList() {
  let storegaData = JSON.parse(localStorage.getItem('link')) || [];
  storegaData.forEach(el => createListItem(el));
  }
  // localStorage.removeItem('link');