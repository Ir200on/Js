// 1-task
// const student = {
//     name: "Dasha",
//     spec: "Developer",
//     bal: "100",
//     epsent: "0",
//   showinfo: function () {
//     console.log( 
//       "name " +
//       this.name +
//       " spec " +
//       this.spec +
//       " bal " +
//       this.bal +
//       " epsent " +
//       this.epsent
//     );
//   },
// };

// studentTwo = {
//     name: "Leana",
//     spec: "HR",
//     bal: "75",
//     epsent: "3",
// };

// studentFree = {
//     name: "Vlad",
//     spec: "Reserch",
//     bal: "86",
//     epsent: "4",
// };

// studentFor = {
//     name: "Helen",
//     spec: "HR",
//     bal: "93",
//     epsent: "2",
// };

// student.showinfo();
// student.showinfo.bind(studentTwo)();
// student.showinfo.call(studentFree);
// student.showinfo.apply(studentFor);

// 2-task
// const inf = {
//     showitems() {
//       console.log("infa:", this.items);
//     },
// };
// const html = {
//     items:
//       "HTML (HyperText Markup Language - це мова гіпертекстової розмітки)",
// };
// const css = {
//     items: "CSS (Cascading Style Sheets - це Каскадні таблиці стилів)",
// };

// inf.showitems.bind(html)();

// document
//   .querySelector(`#htmll`)
//   .addEventListener(`click`, inf.showitems.bind(html));

// inf.showitems.bind(css)();

// document
//   .querySelector(`#csss`)
//   .addEventListener(`click`, inf.showitems.bind(css));

// 3-task
// function shop(fruit) {
//     const totalCost = Math.round(fruit.cost * fruit.quantity);
//     console.log(`${fruit.name}: ${totalCost} грн вартість`);
// }
    
// const sumFrut = {
//     name: "banana",
//     cost: 30,
//     quantity: 4.5,
// };  
// const cherry = {
//     name: "cherry",
//     cost: 58,
//     quantity: 1.3,
// };
// const jrange = {
//     name: "jrange",
//     cost: 89,
//     quantity: 3.4,
// };

// shop(sumFrut);
// shop(cherry);
// shop(jrange);