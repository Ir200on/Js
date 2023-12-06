// 1-task
// let a = 1;
// let b = 0;
// let c = -3;

// if (a > b) {
//     console.log(true);  //true
// } else if (a < b) {
//     console.log(false);
// }

// if (b > c) {
//     console.log(true);  //true
// } else if (b < c) {
//     console.log(false);
// }

// if (c > b) {
//     console.log(true);  //false
// } else if (c < b) {
//     console.log(false);
// }

// if (b > a) {
//     console.log(true);  //false
// } else if (b < a) {
//     console.log(false);
// }

// 2-task
// let a = "test";
// let b = "qwerty";
// let c = "true";

// if (a === "test") {
//     console.log(true); //true
// } else {
//     console.log(false);
// }

// 3-task
// let a = 1;
// let b = 10;
// let c = 13;

// if (a > 10) {
//     console.log(a - 5);
// } else if (a < 10) {
//     console.log(a + 5); //6
// }

// if (b >= 10) {
//     console.log(b - 5); //5
// } else if (b <= 10) {
//     console.log(b + 5);
// }

// if (c > 10) {
//     console.log(c - 5); //8
// } else if (c < 10) {
//     console.log(c + 5);
// }

// 4-task
// const month = prompt("Введіть порядковий номер місяцю від 1 до 12");
// if (month > 0 && month < 2) {
//   alert("Січень");
// } else if (month > 1 && month < 3) {
//   alert("Лютий");
// } else if (month > 2 && month < 4) {
//   alert("Березень");
// } else if (month > 3 && month < 5) {
//   alert("Квітень");
// } else if (month > 4 && month < 6) {
//   alert("Травень");
// } else if (month > 5 && month < 7) {
//   alert("Червень");
// } else if (month > 6 && month < 8) {
//   alert("Липень");
// } else if (month > 7 && month < 9) {
//   alert("Серпень");
// } else if (month > 8 && month < 10) {
//   alert("Вересень");
// } else if (month > 9 && month < 11) {
//   alert("Жовтень");
// } else if (month > 10 && month < 12) {
//   alert("Листопад");
// } else if (month > 11 && month < 13) {
//   alert("Грудень");
// } else {
//   alert("Введіть правильну цифру");
// }

// 5-task
// let n = prompt("Введіть трьохзначне число");
// if (n >= 100 && n < 1000) {
//   let sum = 0;

//   while (n > 0) {
//     let ld = n % 10;
//     sum += ld;
//     n = Math.floor(n / 10);
//   }
//   alert(sum);
// } else {
//   alert("Щось пішло не так");
// }