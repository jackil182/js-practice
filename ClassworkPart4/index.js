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





const container = document.querySelector('.container');
const list = document.querySelector('.list');
const youtubeVideo = document.querySelector('.youtube-video');

const lastFmUrl = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json';

const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8';

fetch(lastFmUrl)
    .then(res => res.json())
    .then(data => {
        const tracksArr = data.tracks.track;

        renderList(tracksArr);
        console.log(tracksArr)
    })
    .catch(err => console.log(err));

function renderList(arr) {
    list.innerHTML = arr.reduce((markup, item) => markup + `
    <li class="track">
    <img class="artist-img" src="${item.image[0]['#text']}">
    <span class="artist-name">${item.artist.name}</span>
    <span class="track-name">${item.name}</span>
    <button class="youtube-link">Video</button>
</li>`, '');
}


list.addEventListener('click', playVideo);

function playVideo({target}) {
    if(target.textContent !== 'Video') return;
    
    const songName = target.previousElementSibling.textContent;
    const artistName = target.previousElementSibling.previousElementSibling.textContent;
    const q = `&q=${songName} ${artistName}`

    console.log(youTubeUrl+q);
    
    fetch(youTubeUrl+q)
        .then(res => res.json())
        .then(data => {
            const videoID = data.items[0].id.videoId;
            
            startVideo(videoID);
        })
        .catch(err => console.log(err))
}

function startVideo(id) {
    youtubeVideo.innerHTML = `<iframe class="embeded-video" src=https://www.youtube.com/embed/${id} frameBorder="0" allowFullScreen>
    </iframe>`
}