/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы чекбоксов (разметка дальше в задании). После того как пользователь выбрал какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/


const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];


const form = document.querySelector('.js-form');
const result = document.querySelector('.result');
const filteredList = document.querySelector('#filtered-list');

const btnSubmit = form.querySelector('.js-submit');
const btnReset = form.querySelector('.js-reset');

const inputs = document.querySelectorAll('input');
const inputsArr = Array.from(inputs);

let filter = { 
    size: [], 
    color: [], 
    release_date: [], 
}

form.addEventListener('click', updateFilter);

function updateFilter(){
    if(event.target.type === 'checkbox' ) {
    let key = event.target.name;
    let value = event.target.value;
    
    if (filter[key].includes(value)){
        filter[key] = filter[key].filter(x=> x!== value)
    } else {
        filter[key].push(value);
        }
    }
}

btnSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();

    renderCards();
});


btnReset.addEventListener('click', () => {
    filter = { 
        size: [], 
        color: [], 
        release_date: [], 
    };

    result.innerHTML = '';
})


function renderCards() {
    result.innerHTML = '';
    const source = document.querySelector('#filtered-list').innerHTML.trim();    
    const template = Handlebars.compile(source);
    let filteredArr = filterLaptops(filter); 
    const markup  = filteredArr.reduce((acc, item) => acc + template(item), '');

    result.insertAdjacentHTML('afterbegin', markup);

    if(markup === '') {
        alert('Nothing was found');
    }
}

function filterLaptops(filter) {    
    return laptops.filter(x => 
        filter.size.includes(String(x.size)) || filter.size.length === 0)
        .filter(x => filter.color.includes(x.color) || filter.color.length === 0)
        .filter(x => filter.release_date.includes(String(x.release_date)) || filter.release_date.length === 0)
}


















/* 
let zzz = [];
    laptops.forEach(item => {
        if (filter.size.length === 0) {
            filter.color.forEach(x => {                        
                if(item.color == x) {

                    filter.release_date.forEach(x => {                        
                        if(item.release_date == x) {
                            zzz.push(item);
                        }
                    })
                }
            })
        }


        if (filter.color.length === 0) {
            filter.size.forEach(x => {
                if(item.size == x) {
                    filter.release_date.forEach(x => {              
                    if(item.release_date == x) {
                        zzz.push(item);
                        }
                    })
                }
            })
        }


        if (filter.release_date.length === 0) {
            filter.size.forEach(x => {
                if(item.size == x) {
                    filter.color.forEach(x => {              
                    if(item.color == x) {
                        zzz.push(item);
                        }
                    })
                }
            })
        }



        if (filter.release_date.length === 0 && filter.color.length === 0 && filter.size.length === 0) {
            zzz.push(item)
        }


        if (filter.release_date.length === 0 && filter.color.length === 0) {
            filter.size.forEach(x => {
                if(item.size == x) {
                    zzz.push(item);
                }
            })
        }


        if (filter.size.length === 0 && filter.color.length === 0) {
            filter.release_date.forEach(x => {
                if(item.release_date == x) {
                    zzz.push(item);
                }
            })
        }



        if (filter.size.length === 0 && filter.release_date.length === 0) {
            filter.color.forEach(x => {
                if(item.color == x) {
                    zzz.push(item);
                }
            })
        }

        
        filter.size.forEach(x => {
            if(item.size == x) {

                filter.color.forEach(x => {                        
                    if(item.color == x) {

                        filter.release_date.forEach(x => {                        
                            if(item.release_date == x) {
                                zzz.push(item);
                            }
                        })
                    }
                })
            }
        })  
    })

    const unique = [...new Set(zzz)]; 
    
    return unique;
*/