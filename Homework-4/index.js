// Модуль 4 - Домашнее задание
/*
Создайте скрипт кассира, который получает список продуктов и деньги подсчитывает общую стоимость продуктов, и в зависимости от того хватает денег или нет, уведомляет покупателя о результате.
*/
/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
// const products = {
// bread: 10,
// milk: 15,
// apples: 20,
// chicken: 50,
// cheese: 40,
// };
/*
Необходимо создать функцию-конструктор Cashier.
Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
- name - строка, имя кассира, передается при вызове конструктора
- productDatabase - объект база данных продуктов, передается при вызове конструктора
- customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0
- getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
- countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
- countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
* Обязательно проверьте что customerMoney не меньше чем значение totalPrice
* Если денег было передано достаточно, возвращает разницу денег.
* Если в customerMoney меньше денег чем в totalPrice, возвращает null
- onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
- onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'
- reset() - метод, сбрасывает поле customerMoney 0.
*/
// function Cashier(name, productDatabase) {
// // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
// }
// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
// bread: 2,
// milk: 2,
// apples: 1,
// cheese: 1
// };

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    let total = 0;

    this.getCustomerMoney = function(value) {
        this.customerMoney = value;
    }

    this.countTotalPrice = function(order) {
        for (let key in order) {
            total += order[key] * productDatabase[key];
        }        
        return total;
    };    

    this.countChange = function() {
        if (this.customerMoney < total) {
            return null;
        } else {        
        return this.change = this.customerMoney - total;
        }
    };

    this.onError = function() {
        console.log('Очень жаль, вам не хватает денег на покупки');
    };

    this.onSuccess = function(change) {
        console.log(`Спасибо за покупку, ваша сдача ${change}!`);
    };

    this.reset = function() {
        this.customerMoney = 0;
    }
}


// Пример использования

const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log('cashier namer: ', mango.name); // Mango
console.log('project database: ', mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log('customer money: ', mango.customerMoney); // 0

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };

// Вызываем метод countTotalPrice для подсчета общей суммы передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);
console.log('total price: ', totalPrice);

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);
// Проверяем что в поле с деньгами пользователя
console.log('mango customer money: ', mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();
// Проверяем что нам вернул countChange
console.log('mango change: ', change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
// При успешном обслуживании вызываем метод onSuccess
mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
// При неудачном обслуживании вызываем метод onError
mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();
// Проверяем значения после reset
console.log('after reset customer money: ', mango.customerMoney); // 0