// const form = document.querySelector('.form');
// const input = form.querySelector('.form__input');

// const list = document.querySelector('.todo-list');

// fetch('http://localhost:3001/tasks')
//     .then(res => res.json())
//     .then(data => {
//         localStorage.setItem('tasks', JSON.stringify(data));
//         renderItems(data);
//     })
//     .catch(err => {
//         let storageData = JSON.parse(localStorage.getItem('tasks')) || [];
//         renderItems(storageData);
//         console.log(err);
//     });

// function renderItems(arr) {
//     let result = arr.reduceRight((markup, item) => markup + `<li class="todo-list__item">${item.text}<button class="btn todo-list__item-remove" data-id=${item.id}><i class="fa fa-times" data-id=${item.id}></i></button></li>`, '');
//     list.innerHTML = result + list.innerHTML;
// }


// form.addEventListener('submit', createTask);

// function createTask(e) {
//     e.preventDefault();
//     if(!input.value) return;

//     let task = { text: input.value };
//     fetch('http://localhost:3001/tasks', {
//         method: 'post',
//         body: JSON.stringify(task),
//         headers: {
//             "Content-type" : "application/json; charset=UTF-8"
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         let arr = JSON.parse(localStorage.getItem('tasks'));
//         arr.push(data);
//         localStorage.setItem('tasks', JSON.stringify(arr));
//         renderItems([data])
//     })
//     .catch(err => console.log(err));

//     form.reset();
// }


// list.addEventListener('click', removeTask);

// function removeTask({target}) {
//     const id = target.dataset.id;
    
//     fetch(`http://localhost:3001/tasks/${id}`, {method: 'delete'})
//         .then(res => res.json())
//         .then(data => {
//             target.closest('li').remove();
//             let storageData = 
//                 JSON.parse(localStorage.getItem('tasks')).filter(el => el.id !== Number(id));
//             localStorage.setItem('tasks', JSON.stringify(storageData));
//         })
//         .catch(err => console.log(err));
// }





const favList = document.querySelector('.fav-list');
const chart = document.querySelector('.chart');
const form = document.querySelector('.form');
const input = form.querySelector('#input');

const favForm = document.querySelector('.fav-form');
const favInput = favForm.querySelector('#input-fav');

const list = document.querySelector('.list');
const youtubeVideo = document.querySelector('.youtube-video');

const lastFmUrl = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json&perPage=100';
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&type=video';


favForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
    e.preventDefault();
}

favForm.addEventListener('input', findFavTrack);
function findFavTrack() {
    const val = favInput.value;
    const tracksArr = JSON.parse(localStorage.getItem('tracks'));
    const filteredTrack = tracksArr.filter(x => x.toLowerCase().includes(val.toLowerCase()) || x.toLowerCase().includes(val.toLowerCase()));
    favList.innerHTML = filteredTrack.join('');
    console.log(filteredTrack);
    
}

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', findTrack);

function findTrack() {
    const val = input.value;

    fetch(lastFmUrl)
        .then(res => res.json())
        .then(data => {
        const tracksArr = data.tracks.track;
        if(!val) {
            renderList(tracksArr);
        } else {
            const filteredTrack = tracksArr.filter(x => x.artist.name.toLowerCase().startsWith(val.toLowerCase()) || x.name.toLowerCase().startsWith(val.toLowerCase()));
            renderList(filteredTrack);
        }
    })
    .catch(err => console.log(err));
}

fetch(lastFmUrl)
    .then(res => res.json())
    .then(data => {
        const tracksArr = data.tracks.track;

        renderList(tracksArr);
    })
    .catch(err => console.log(err));

function renderList(arr) {
    list.innerHTML = arr.reduce((markup, item) => markup + `
    <li class="track">
    <img class="artist-img" src="${item.image[0]['#text']}">
    <span class="artist-name">${item.artist.name}</span>
    <span class="track-name">${item.name}</span>
    <div class="favourites-btn" data-name="fav-btn"><i class="fav-btn" data-name="fav-btn"></i><span class="liked" data-name="fav-btn">Added to favourites</span></div>
    <div class="youtube-btn"></div>
</li>`, '');
}


list.addEventListener('click', handleBtnClick);

function getVideo(target) {
    if(target.classList.contains('youtube-btn')) {
        const songName = target.previousElementSibling.previousElementSibling.textContent;
        const artistName = target.previousElementSibling.previousElementSibling.textContent;
        const q = `&q=${songName} ${artistName}`;
    
        const link = youTubeUrl+q;
        
        fetch(link)
        .then(res => res.json())
        .then(data => {
            const videoID = data.items[0].id.videoId;
            console.log(videoID)
            startVideo(videoID);
        })
        .catch(err => console.log(err));
    }
}

function handleBtnClick({target}) {
    getVideo(target)

    if(target.hasAttribute('data-name')) {
        let item = target.closest('li').innerHTML;
        item = `<li class="track">${item}</li>`
        let storageData = JSON.parse(localStorage.getItem('tracks')) || [];
        storageData.includes(item) ? storageData : storageData.push(item);
        localStorage.setItem('tracks', JSON.stringify(storageData));
        renderFavourites();
    }
}

function addFavouriteTrack(item) {
    favList.innerHTML = item + favList.innerHTML;
}

function startVideo(id) {
    youtubeVideo.innerHTML = `<iframe class="embeded-video" src=https://www.youtube.com/embed/${id}?autoplay=1 frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
    </iframe>`;
}

window.addEventListener('click', stopVideo);

function stopVideo({target}){
    if (target === youtubeVideo) return;

    youtubeVideo.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', renderFavourites);

function renderFavourites() {
    let storageData = JSON.parse(localStorage.getItem('tracks')) || [];
    storageData = storageData.map(elem => elem = elem.replace('class="fav-btn"', 'class="fas fa-times-circle"'));    

    favList.innerHTML = storageData.join('');
}

favList.addEventListener('click', removeTrack);
function removeTrack({target}) {
    if (target.classList.contains('fas')) {
        const parent = target.closest('li');
        parent.remove();

        const uniqueId = parent.innerHTML.substr(34, 80);

        let storageData = JSON.parse(localStorage.getItem('tracks'));
        storageData = storageData.filter(el => !el.includes(uniqueId));
        localStorage.setItem('tracks', JSON.stringify(storageData));
    }

    getVideo(target);
}
