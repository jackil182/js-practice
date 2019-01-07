// Модуль 2 - Домашнее задание
/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять массив введенных чисел, сложить общую сумму всех элементов массива и записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// let userInput;
// const numbers = [];
// let total = 0;

// do {
//     userInput = prompt("Enter number");
//     //check if user entered a number value, add it to array if true, ask for a number again if isNaN
//     if (!isNaN(userInput)){
//     numbers.push(Number(userInput));
//     } else {
//         alert("You didn't enter a number. Try again");
//     }
//     //prompt for the number until the user hits ESC
// } while (userInput != null);

// for (let i = 0; i < numbers.length; i++) {
//     //add all numbers in array
//     total += numbers[i];
// }
// //check if final array consists of only one element, which is ESC
// if (numbers.length == 1 && numbers[0] == 0){
//     //the do while loop above only pushes numbers to array. if ESC is hit - '0' is stored in array. 
//     //we must explicitly check if user entered 0 before hitting ESC, because '0' is a valid number and we must accept it
//     alert("You didn't enter any numbers");
// } else {
//     alert(`Total sum of entered numbers equals ${total}`);
// }


// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
//   Напишите скрипт имитирующий авторизацию пользователя.
  
//   Есть массив паролей зарегистрированных пользователей passwords. 
  
//   При посещении страницы, необходимо попросить пользователя ввести свой пароль,
//   после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
//   Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
//   Подсказка: используйте цикл do...while.
//   Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
//   Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом "Неверный пароль, у вас осталось n попыток", где n это оставшийся лимит. 
  
//   После того как пользователь закрыл alert, запросить пароль снова. 
//   Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
//   Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
//   Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let inputPassword;
let currAttempt = 1;
let matched =[];

do {
    inputPassword = prompt("Enter password");
    if (inputPassword == null) {
        break;
    }

    for (let i = 0; i < passwords.length; i++){
        inputPassword == passwords[i] ? matched.push(passwords[i]) : matched;
    }

    if (matched.length > 0){
        alert("Welcome!");
        break;
    } 
    alert(`Wrong password. You have ${attempts-currAttempt} attempts left`);

    currAttempt++;
}
while (currAttempt <= attempts);

matched.length < 1 && inputPassword != null ? alert(`You have no more attempts. The account is blocked`) : matched.length;
