// Модуль 1 - Домашнее задание
/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// let inputLogin = prompt("Enter login");

// switch(inputLogin) {
//     case null:
//     alert('Отменено пользователем!');
//     break;

//     case adminLogin:
//     let inputPassword = prompt("Enter password");

//     if (inputPassword == null){
//         alert('Отменено пользователем!')
//     } else if (inputPassword == adminPassword){
//         alert('Добро пожаловать!');
//     } else {
//         alert('Доступ запрещен, неверный пароль!');
//     }
    
//     break;

//     default:
//     alert('Доступ запрещен, неверный логин!');
// }



  
 
/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

let sharm = 15;
let hurgada = 25;
let taba = 6;

let inputPlaces = prompt("Enter the neccessary amount of places");
if (inputPlaces > 0 && inputPlaces == (Number(inputPlaces))){

    if (inputPlaces > Math.max(sharm, hurgada, taba)){
        alert('Извините, столько мест нет ни в одной группе!');
    } else {
        //check if possible to fit everyone in largest group only (very dirty solution without using cycles)
        inputPlaces > sharm ?  
            confirm("there is a place in hurgada") ?
                alert('Приятного путешествия в группе hurgada') :
                alert('Нам очень жаль, приходите еще!') 
                            :
            //check if possible to fit everyone in medium group, hence in the largest group
            inputPlaces > taba ?
                confirm('there is a place in sharm') ? 
                    alert('Приятного путешествия в группе sharm') : 
                    //if doesn't want this group
                    confirm("there is a place in hurgada") ?
                        alert('Приятного путешествия в группе hurgada') :
                        alert('Нам очень жаль, приходите еще!') 
                                :
                //if reached here, it means it's possible to fit everyone in the smallest group
                 confirm('there is a place in taba') ? 
                    alert('Приятного путешествия в группе taba') : 
                    //if doesn't want this group
                    confirm('there is a place in sharm') ? 
                        alert('Приятного путешествия в группе sharm') : 
                        //if doesn't want this group
                        confirm("there is a place in hurgada") ?
                            alert('Приятного путешествия в группе hurgada') :
                            //if doesn't want any group
                            alert('Нам очень жаль, приходите еще!') 
    }

} else if(inputPlaces == null){
    alert("Нам очень жаль, приходите еще!");
} else {
    alert("Ошибка ввода");
}