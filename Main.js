// let age = prompt('age?', 18);
// let message = (age < 3) ? 'baby' :
//     (age < 18) ? 'boy' :
//     (age < 100) ? "grand" :
//     'very very';

// alert(message)


////////////////задачи\\\\\\\\\\\\\\\\\
// 1
// let a = prompt('введите число: ', 10)
// printq = (10 == a) ? 'верно':'не верно';
// console.log(printq)

// 2
// let min = 110;
// if (min < 0 || min > 59) {
//     console.log("Неверное значение минут: " + min);
//     min = min % 60
//   }
// if (min >= 0 && min <= 14) {
//     console.log("Четверть часа: " + 1);
// } else if (min >= 15 && min <= 29) {
//     console.log("Четверть часа: " +2);
// } else if (min >= 30 && min <= 44) {
//     console.log("Четверть часа: " + 3);
// } else {
//     console.log("Четверть часа: " + 4);
// }

// 3
// let a = -5;
// if (a > 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 4
// let a = -5;
// if (a < 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 5
// let a = 0;
// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 6
// let a = 5;
// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 7
// let a = -0;
// if (a != 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 8
// let a = 3;
// if (a != 'test') {
//   console.log("Неверно");
// } else {
//   console.log("Верно");
// }

// 9
// let a = 1;
// if (a != 1) {
//   console.log("Неверно");
// } else {
//   console.log("Верно");
// }

// 1
// let a = 5;
// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2
// let a = 2;
// if (a === 0 || a === 2) {
//   a += 7;
// } else {
//   a /= 10;
// }
// console.log("Новое значение переменной a: " + a);

// 3
// let a = 3;
// let b = 3;

// if (a <= 1 && b >= 3) {
//   console.log("Сумма: " + (a + b));
// } else {
//   console.log("Разность: " + (a - b));
// }

// 4
// let a = 5;
// let b = 8;

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }


// 1 Задачи switch case


// let num = 2;
// let result;
// num = num % 4;

// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'лето';
//     break;
//   case 4:
//     result = 'осень';
//     break;
//   default:
//     result = 'некорректное значение';
//     break;
// }
// console.log(result);

////////////////Задачи\\\\\\\\\\\\\\\

// 1
// let day = 15;
// let decade;

// if (day >= 1 && day <= 10) {
//   decade = "первая";
// } else if (day >= 11 && day <= 20) {
//   decade = "вторая";
// } else if (day >= 21 && day <= 31) {
//   decade = "третья";
// } else {
//   decade = "некорректное значение";
// }

// console.log(decade); // Вывод: "вторая"

// 2
// let month = 9;
// let season;

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     season = 'зима';
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = 'весна';
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = 'лето';
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = 'осень';
//     break;
//   default:
//     season = 'некорректное значение';
//     break;
// }

// console.log(season); // Вывод: "осень"


// 3
// let str = '2bcde';
// if (str.charAt(0) === 'a') {
//   console.log('да');
// } else {
//   console.log('нет');
// }

// 4 
// let str = '12345';

// if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
//   console.log('да');
// } else {
//   console.log('нет');
// }

// 5
// let str = '123';
// let sum = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
// console.log(sum);

// 6
// let str = '123321';

// let sum1 = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
// let sum2 = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);
  
// if (sum1 === sum2) {
//   console.log('да');
// } else {
//   console.log('нет');
// }