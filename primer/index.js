//1) a+b+c
//Получаем рандом для переменных и результат - действие
let a1 = Math.ceil(Math.random() * 34);
let b1 = Math.ceil(Math.random() * 33);
let c1 = Math.ceil(Math.random() * 33);
let result1 = a1 + b1 + c1;
// Выводим пример в документ
let textDocument1 = `1)   ${a1} + ${b1} + ${c1} =`;
let pr1 = document.getElementById('pr1');
pr1.innerHTML = textDocument1;
// Получаем доступ к ответу пользователя
let num1 = document.getElementById("userRes1").value;
// Получаем результат по кнопке запускаем ф-цию

function f1() {
    if (num1 == result1) {
        alert('Ok')
    } else {
        alert('No')
    }
};
//Доступ к сообщению для пользователя
let ansver = document.getElementById('answer1')
console.log(result1);

// // 2) a+b-c
// let a2 = Math.ceil(Math.random() * 34);
// let b2 = Math.ceil(Math.random() * 33);
// let c2Random = () => {
//     min = 1;
//     max = a2 + b2;
//     return Math.ceil(Math.random() * (max - min)) + min;
// };
// let c2 = c2Random()
// let result2 = a2 + b2 - c2;
// let textDocument2 = `2)   ${a2} + ${b2} - ${c2} =`;
// console.log(result2);
// let pr2 = document.getElementById('pr2');
// pr2.innerHTML = textDocument2;

// // 3) a-b-c
// let a3Random = () => {
//     min = 3;
//     max = 99;
//     return Math.ceil(Math.random() * (max - min)) + min;
// };
// let a3 = a3Random();

// let b3Random = () => {
//     min = 1;
//     max = a3;
//     return Math.ceil(Math.random() * (max - min));
// };
// let b3 = b3Random();

// let c3Random = () => {
//     min = 1;
//     max = a3 - b3;
//     return Math.ceil(Math.random() * (max - min));
// };
// let c3 = c3Random()
// let result3 = a3 - b3 - c3;
// let textDocument3 = `3)   ${a3} - ${b3} - ${c3} =`;
// console.log(result3);
// let pr3 = document.getElementById('pr3');
// pr3.innerHTML = textDocument3;