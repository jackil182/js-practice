/*
  Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

let input;

function getAllUsers() {
    fetch(`https://test-users-api.herokuapp.com/users/`)
        .then(res => {
            if (res.ok) return res.json();

            throw new Error('error', res.statusText);
        })
        .then(d => {
            updateAllUserList(d.data)
            console.log(d.data)
        })
        .catch(err => console.log(err));
}

function getUserById() {
    fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => {
        // updateList(d.data);
        console.log(d.data);
    })
    .catch(err => console.log(err));
}

function addUser(name, age) {
    fetch(`https://test-users-api.herokuapp.com/users/`, {
        method: 'POST',
        body: JSON.stringify({ name: name, age: age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => console.log(d.data))
    .catch(err => console.log(err));
}

function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => console.log(d.data))
    .catch(err => console.log(err));
}

function updateUser(id, user) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: user.name, age: user.age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => console.log(d.data))
    .catch(err => console.log(err));
}


const result = document.querySelector('.result');
const block = document.createElement('div');
const user = document.createElement('div');
user.classList.add('singleUserBlock');

const blockGetAllUsers = document.querySelector('.blockGetAllUsers');
const userListAllUsers = document.querySelector('.userListAllUsers');

const blockGetUsersById = document.querySelector('.blockGetUsersById');
const userListById = document.querySelector('.userListById');
const inputID = document.querySelector('.userID');

const blockAddUser = document.querySelector('.blockAddUser');
const blockRemoveUser = document.querySelector('.blockRemoveUser');
const blockUpdateUser = document.querySelector('.blockUpdateUser');

const btnGetAllUsers = document.querySelector('.btnGetAllUsers');
const btnGetUsersById = document.querySelector('.btnGetUsersById');
const btnAddUser = document.querySelector('.btnAddUser');
const btnRemoveUser = document.querySelector('.btnRemoveUser');
const btnUpdateUser = document.querySelector('.btnUpdateUser');

function updateAllUserList(data){
    data.forEach(el => {
        const singleUserBlock = user.cloneNode(true);
        const userID = document.createElement('p');
        const userName = document.createElement('p');
        const userAge = document.createElement('p');
        userID.textContent = `User id: ${el.id}`;
        userName.textContent = `User name: ${el.name}`;
        userAge.textContent = `User age ${el.age}`;

        singleUserBlock.append(userID, userName, userAge);
        userListAllUsers.append(singleUserBlock);
    })
}

function updateList(data, id){
    const res = data.find(el => el.id === id);
    // console.log(res);
    
}

inputID.addEventListener('change', getID);

function getID({target}) {
    console.log(target.value);
    
    return target.value;
};


btnGetAllUsers.addEventListener('click', getAllUsers);
blockGetUsersById.addEventListener('click', getUserById);

console.log(result);



// getUserById('5c484b72b116b200143e9fe2');
// // addUser('Jackil', 27);
// // removeUser("5c4a16ae68ae100014bedad4");
// updateUser('5c484b72b116b200143e9fe2', {name: 'Anna', age: 24});


// setTimeout(()=> getAllUsers(), 2000);