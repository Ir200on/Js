//1-task
// const fruts = [
//  { id: 0, name: "Apple" },
//  { id: 1, name: "Tomat" },
//  { id: 2, name: "Cherry" },
//  { id: 3, name: "Orange" },
//  ];

//  let frutsNew = fruts.map((fruts) => fruts.name);
//  console.log(frutsNew);

//2-task
// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }

//3-task
// let i = 0;
// while (i < 5) {
//     i++;
//     console.log(`цифра ${i}!`);
// }

//4-task
// let a;

// while (true) {
//     a = prompt("Введіть число більше 100");
//     if (a === null || a === "") {
//       alert("Ви відмінили введення, або ввели порожній рядок");
//       break;
//     }
//     a = +a;
//     if (a > 100) {
//       alert(`Ви ввели число: ${a}`);
//       break;
//     } else {
//       alert("Введіть число більше 100");
//     }
// }    

//5-task
// const girls = [
//       { age: 23, name: "Оля" },
//       { age: 29, name: "Аня" },
//       { age: 10, name: "Юля" },
//       { age: 20, name: "Катя" },
//     ];
    
//     let aa = girls.map((item) => item.age);
//     let ages = aa.reduce((summ, item) => summ + item) / girls.length;
//     console.log(ages); //20.5