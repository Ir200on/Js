// 1-task
// let age = prompt("Введіть вік");

// function checkAge(age) {
//     return age >= 18 ? true : confirm('Батьки дозволили?');
// }
// console.log(checkAge(age));

// 2-task
// function min(a, b) {
//     if (a > b) {
//     return b;
//     } else if (a === b) {
//     return "однакові" 
//     } else {
//         return a;
//     }
// }

// console.log(min(8, 5)); //5

// 3-task
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask (
    "Ви згодні?",
    () => alert("Ви погодились"),
    () => alert("Ви скасували виконання.")
);