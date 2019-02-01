// /*
//   К pen уже подключен Handlebars.
//   Используйте встроенные шаблоны и метод Handlebars.compile
//   Создайте шаблон списка указаного во вкладке HTML.
//   Отрендерите список в DOM по данным из массива listItems.
// */

// const products = [
//     { name: 'Apples', count: 50 },
//     { name: 'Grapes', count: 44 },
//     { name: 'Cheese', count: 128 },
//     { name: 'Milk', count: 293 },
//   ];

// const list = document.querySelector('.products');

// const source = document.querySelector("#list-template").innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = products.reduce((acc, item) => acc + template(item), '');

// list.innerHTML = markup;
// console.log(list);


//===============================================================


// /*
//   Используйте встроенные шаблоны и метод Handlebars.compile
  
//   Создайте шаблон поста указаного во вкладке HTML. Отрендерите список постов в DOM по данным из массива posts.
//   Если в объекте поле isFav=true, в посте должна быть разметка иконки избранного поста, в противном случае разметки иконки быть не должно.
//   Используйте эту иконку для фона: https://image.flaticon.com/icons/svg/290/290413.svg
// */

// const posts = [
//     {
//       title: "Phasellus volutpat metus",
//       text:
//         "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//       isFav: true
//     },
//     {
//       title: "Nulla consequat massa",
//       text:
//         "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//       isFav: false
//     },
//     {
//       title: "In enim justo",
//       text:
//         "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//       isFav: true
//     },
//     {
//       title: "Vestibulum ante ipsum",
//       text:
//         "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est.",
//       isFav: false
//     }
//   ];
  
//   const list = document.querySelector('.posts');

//   const source = document.querySelector('#posts-list').innerHTML.trim();
//   const template = Handlebars.compile(source);
//   const markup = posts.reduce((acc, item) => acc + template(item), '');

//   list.innerHTML = markup;
//   console.log(list);
  

//========================================================


// /* 
//   Напишите функцию validate которая проверяет поля формы firstname и lastname и возвращает результат в виде обьекта со свойствами 'first name' и 'last name'.
//   Кроме того, формат объекта: в свойства записывается буль-флаг уведомляющий о статусе прохождения валидации для каждого поля.
//   {
//     'first name': true или false,
//     'last name': true или false,
//   }
  
//   Критерии валидации:
//   1)Имя. Допускается не более 2-х слов, разделенных пробелами или дефисом. Слова должны состоять только из букв.
//   2)Фамилия. Допускается не более 2-х слов, разделенных пробелами или дефисом. Слова должны состоять только из букв.
  
//   При клике на кнопку submit должна происходить проверка. Результат проверки, объект, выводить в консоль.
// */

// const form = document.querySelector('.js-form');
// const results = document.querySelector('.results');
// const item = document.createElement('li');

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// const regEx = /^[a-z]{2,10}$|^[a-z]{2,10}-?\s?[a-z]{2,10}$/i;

// submitBtn.addEventListener("click", (evt) => {
//     evt.preventDefault();

//     results.innerHTML = '';
//     validate(firstname.value, lastname.value);
    
//     form.reset();
//     });

// function validate(first, last) {
//     const firstNameLi = item.cloneNode(true);
//     const lastNameLi = item.cloneNode(true);

//     if (regEx.test(first)) {
//         firstNameLi.classList.add('success');
//         firstNameLi.classList.remove('error');
//         firstNameLi.innerHTML = `Your name **${first}** is valid`;
//     } else {
//         firstNameLi.classList.add('error');
//         firstNameLi.classList.remove('success');
//         firstNameLi.innerHTML = `Your name **${first}** is not valid`;
//     }
//     results.append(firstNameLi);

//     if (regEx.test(last)) {
//         lastNameLi.classList.add('success');
//         lastNameLi.classList.remove('error');
//         lastNameLi.innerHTML = `Your last name **${last}** is valid`;
//     } else {
//         lastNameLi.classList.add('error');
//         lastNameLi.classList.remove('success');
//         lastNameLi.innerHTML = `Your last name **${last}** is not valid`;
//     }
//     results.append(lastNameLi);
//     console.log({
//         'first name': regEx.test(first),
//         'last name':  regEx.test(last),
//     });
// }


//======================================================================================

