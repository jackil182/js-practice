const container = document.querySelector('.container');

const source = document.querySelector('#user-template').innerHTML.trim();
const templateFunc = Handlebars.compile(source);

window.addEventListener('DOMContentLoaded', getUser);

function getUser() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];
        let dob = new Date(user.dob.date);
        dob = dob.toLocaleDateString("en-US");

        const obj = {
            pic: user.picture.large,
            name: user.name.first + " " + user.name.last,
            email: user.email,
            dob,
            address: user.location.street,
            phone: user.phone,
            password: user.login.password,
            helperPhrase: {
                name: 'Hi, My name is',
                email: 'My email address is',
                dob: 'My birthday is',
                address: 'My address is',
                phone: 'My phone number is',
                password: 'My password is',
            }
        }
        const markup = templateFunc(obj);
        container.innerHTML = markup;

        return obj;
    })
    .then(obj => {
        const icons = document.querySelector('.icons');
        icons.addEventListener('mouseover', () => {
            renderInfo(obj, true)
        });
        // next IF is neccessary to pass DOMContentLoaded event to function
        if(document.querySelector('.info').textContent === ""){
        renderInfo(obj, false)
        }
    })
    .catch(err => console.log(err));
}


function renderInfo(obj, flag) {
    const title = document.querySelector('.title');
    const info = document.querySelector('.info');
    const firstIcon = document.querySelector('.icons__item');

    if (flag) {
        const type = event.target.dataset.type;
        if(!type) return;
        title.textContent = obj.helperPhrase[type];
        info.textContent = obj[type];
        firstIcon.classList.remove('active');                
    } else {
        title.textContent = obj.helperPhrase.name;
        info.textContent = obj.name;
        firstIcon.classList.add('active');                
    }
}
