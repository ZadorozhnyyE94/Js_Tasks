const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const Input = prompt('Яка кількість дроїдів потрібна?');
if (Input === null) {
console.log('Скасовано користувачем!');
} else {
totalPrice = Input * pricePerDroid;
if (totalPrice > credits) {
console.log('Недостатньо коштів на рахунку!');
} else {
const remainder = credits - totalPrice;
console.log(`Ви купили "${Input}" дроїдів, на рахунку залишилося "${remainder}" кредитів.`);}
}