/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const cardsGrid = document.querySelector('.cards-grid');

const cardNodes = createCards(posts);

cardsGrid.append(...cardNodes);

//this function creates a single post card
function createPostCard({img, title, text, link}) {

    const postCard = document.createElement('div');
    postCard.classList.add('card');

    const postImg = document.createElement('img');    
    postImg.classList.add('card__image');
    postImg.setAttribute('src', img);
    
    const postBody = document.createElement('div');
    postBody.classList.add('card__body');
    
    const postTitle = document.createElement('h2');
    postTitle.classList.add('card__title');
    postTitle.textContent = title;
    
    const postText = document.createElement('p');
    postText.classList.add('post__text');
    postText.textContent = text;
    
    const postLink = document.createElement('a');
    postLink.classList.add('post__link');
    postLink.textContent = link;
    postLink.setAttribute('href', link)    
    
    postBody.append(postTitle, postText, postLink);
    postCard.append(postImg, postBody);

    return postCard;
}

//this function creates multiple post cards from array
function createCards(arr) {
    const elements = [];

    arr.forEach(elem => {
        const el = createPostCard(elem);
        elements.push(el);
    });

    return elements;
};
