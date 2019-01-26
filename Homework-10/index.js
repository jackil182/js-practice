const user = document.createElement('div');
user.classList.add('singleUserBlock');

const inputIDGet = document.querySelector('.userIDGet');

const inputNameAdd = document.querySelector('.userNameAdd');
const inputAgeAdd = document.querySelector('.userAgeAdd');

const inputIDRemove = document.querySelector('.userIDRemove');

const inputIDUpdate = document.querySelector('.userIDUpdate');
const inputNameUpdate = document.querySelector('.userNameUpdate');
const inputAgeUpdate = document.querySelector('.userAgeUpdate');


const btnGetAllUsers = document.querySelector('.btnGetAllUsers');
const btnGetUsersById = document.querySelector('.btnGetUsersById');
const btnAddUser = document.querySelector('.btnAddUser');
const btnRemoveUser = document.querySelector('.btnRemoveUser');
const btnUpdateUser = document.querySelector('.btnUpdateUser');


btnGetAllUsers.addEventListener('click', () => getAllUsers(btnGetAllUsers.nextElementSibling));

console.log(btnGetAllUsers.nextElementSibling);


function getAllUsers(nextElementSibling) {
    return fetch(`https://test-users-api.herokuapp.com/users/`)
        .then(res => {
            if (res.ok) return res.json();

            throw new Error('error', res.statusText);
        })
        .then(d => {
            updateAllUserList(d.data, nextElementSibling)
            // console.log(d.data)
        })
        .catch(err => console.log(err));
}

function updateAllUserList(data, nextElementSibling){
    data.forEach(el => {
        const singleUserBlock = user.cloneNode(true);
        const userID = document.createElement('p');
        const userName = document.createElement('p');
        const userAge = document.createElement('p');
        userID.textContent = `User id: ${el.id}`;
        userName.textContent = `User name: ${el.name}`;
        userAge.textContent = `User age ${el.age}`;

        singleUserBlock.append(userID, userName, userAge);
        nextElementSibling.append(singleUserBlock);
    })
}


btnGetUsersById.addEventListener('click', () => getUserById(inputIDGet.value, btnGetUsersById.nextElementSibling));

function getUserById(id, nextElementSibling) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`).then(res => {
        if (res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => {
        updateSingleUser(d.data, nextElementSibling)
        // console.log(d.data)
    })
    .catch(err => console.log(err));
    inputIDGet.value = '';
}

function updateSingleUser(data, nextElementSibling) {
    const singleUserBlock = user.cloneNode(true);
    const userID = document.createElement('p');
    const userName = document.createElement('p');
    const userAge = document.createElement('p');
    userID.textContent = 'User id: ' + (data.id || data._id || data);
    userName.textContent = `User name: ${data.name}`;
    userAge.textContent = `User age ${data.age}`;
    singleUserBlock.append(userID, userName, userAge);
    nextElementSibling.append(singleUserBlock);
}


btnAddUser.addEventListener('click', () => addUser(inputNameAdd.value, inputAgeAdd.value, btnAddUser.nextElementSibling))

function addUser(name, age, nextElementSibling) {
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
    .then(d => {
        updateSingleUser(d.data, nextElementSibling);
        console.log(d.data)
    })
    .catch(err => console.log(err));

    inputNameAdd.value = '';
    inputAgeAdd.value = '';
}


btnRemoveUser.addEventListener('click', () => {
    removeUser(inputIDRemove.value, btnRemoveUser.nextElementSibling)
})

function removeUser(id, nextElementSibling) {
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
    .then(d => {
        updateSingleUser(d.data, nextElementSibling);
        // console.log(d.data)
    })
    .catch(err => console.log(err));

    inputIDRemove.value = '';
}


btnUpdateUser.addEventListener('click', () => updateUser(inputIDUpdate.value, inputNameUpdate.value, inputAgeUpdate.value, btnUpdateUser.nextElementSibling));

function updateUser(id, name, age, nextElementSibling) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: name, age: age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.ok) return res.json();

        throw new Error('error', res.statusText);
    })
    .then(d => {
        updateSingleUser(d.data, nextElementSibling);
        console.log(d.data)
    })
    .catch(err => console.log(err));

    inputIDUpdate.value = '';
    inputNameUpdate.value = '';
    inputAgeUpdate.value = '';
}



