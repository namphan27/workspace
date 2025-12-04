// const arr = [1,2,3,4]
// let sum = 0
// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i]
// // }
// // console.log(sum);

// for (let num of arr) {
//     sum += num
// }
// console.log(sum);

// const arr = [1,2,3,4,56]
// let max = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// const names = ["Phan", "Hai", "Nam"];
// const date = 2003
// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }
// names[names.length] =  "Nam2"
// const count = names.unshift("Name1", "Name2")
// names.pop()
// names.shift()
// console.log(names);
// names.reverse()
// console.log(names);
// const newArr = names.concat(date)
// console.log(newArr);
// const oldArr = []
// const newArr = oldArr.slice()
// oldArr.push("Hihi")
// console.log(oldArr);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// const chunkArr = []
// for (let i = 0; i < arr.length; i += 2) {
//     const subArr = arr.slice(i, i + 2)
//     chunkArr.push(subArr)
// }
// console.log(chunkArr);
// const str = arr.join("-")
// console.log(str);

// const sum = arr.reduce((acc, cur) => {
//    return acc += cur
// }, 0)
// console.log(sum);
// const stringArr = arr.map(element => {
//     return element.toString()
// })
// console.log(stringArr);

// const newArr = [];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 3) {
//     newArr.push(arr[i]);
//     count++;
//   }
// }
// console.log(count);

// console.log(newArr);

// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const number = arr[i] ** 2
//     newArr.push(number)
// }
// console.log(newArr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// const students = [
//   { name: "An", age: 18, score: 9 },
//   { name: "Bình", age: 17, score: 7 },
//   { name: "Chi", age: 19, score: 8 },
// ];
// const names = students.map((student) => {
//   return student.name;
// });
// const goodStudents = students.filter((student2) => {
//   if (student2.score >= 8) {
//     return true;
//   }
// });
// const totalScore = students.reduce((acc, cur) => {
//     return acc + cur.score
// }, 0)
// const average = totalScore / students.length;
// const topStudents = students[0]
// for (let i = 1; i < students.length; i++) {
//     if (students[i].score > topStudents.score) {
//         topStudents = students[i]
//     }
// }
// console.log(topStudents);

// console.log(average);

// console.log(goodStudents);
// console.log(names);

// const products = [
//   { name: "Phone", price: 1000, quantity: 2 },
//   { name: "Laptop", price: 2000, quantity: 1 },
// ];
// const totalValue = products.reduce((acc, product) => {
//     return acc += product.price * product.quantity
// }, 0)
// console.log(totalValue);

// const myArr = [[1,2], [3,4],5,[6,[7]]]
// const newArr = myArr.flat(Infinity)
// console.log(newArr);
// const person = {
//   name: "Nam",
//   age: 22,
//   email: "hainam03@gmail.com",
// };
// // if ("name" in person) {
// //   console.log("co key Name");
// // } else {
// //     console.log("Khong co");
// // }
// // if (person.hasOwnProperty("name"))
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// for (let key in person) {
//   console.log(person[key]);
// }
// person.date = 27;
// person.age = 23;
// delete person.date;
// console.log(person);

// Object.entries(person)
// console.log(person);

// const users = [];
// console.log(users.constructor.name);

// const scores = {
//     math: 9,
//     english: 7,
//     physics: 8
// }
// const value = Object.entries(scores)
// // const sum = value.reduce((acc, cur) => {
// //     return acc += cur
// // }, 0)
// // const average = sum / value.length
// // console.log(average);
// const sum2 = value.filter(([subject, score]) => score >= 8).map(([subject, score]) => subject)

// console.log(sum2);

class User {
  constructor(name, email) {
    // Thuộc tính
    this.name = name;
    this.email = email;
  }

  // Phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}
const myName = new User ("Nam","Hainam03@gmail.com")
console.log(myName);
console.log(myName.getName());
console.log(myName.getEmail());

