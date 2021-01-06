const numberОfDroids = prompt ('Введите количество дроидов, которое вы хотите купить');
let credits = 23580;
const pricePerDroid = 3000;
const totalPrice = pricePerDroid * numberОfDroids;
let message;


if (numberОfDroids === null) {
    message = 'Отменено пользователем!';

} else if (totalPrice >= credits) {
    message = 'Недостаточно средств на счету!';

} else { 
    credits = credits - totalPrice
    message = `Вы купили ${numberОfDroids} дроидов, на счету осталось ${credits} кредитов `;
}

console.log(message);