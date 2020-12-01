const numberОfDroids = prompt ('Введите количество дроидов, которое вы хотите купить');
let credits = 23580;
const pricePerDroid = 3000;
const totalPrice = pricePerDroid * numberОfDroids;


if (numberОfDroids === null) {
    console.log('Отменено пользователем!');

} else if (totalPrice >= credits) {
    console.log('Недостаточно средств на счету!');

} else { 
    credits = credits - totalPrice
    console.log(`Вы купили ${numberОfDroids} дроидов, на счету осталось ${credits} кредитов `)
}