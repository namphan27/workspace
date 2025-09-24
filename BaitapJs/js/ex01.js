// Bai 1
let age = 22;
console.log(`Toi nam nay ${age} tuoi`);

// Bai 2
const Pi = 3.14159;
let r = 5;
let S = Pi * r ** 2;
console.log(S);

// Bai 3
let a = 7;
let b = 3;
let sum = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let percent = a % b;
console.log(`Tong cua a va b la ${sum}`);
console.log(`Hieu cua a va b la ${subtraction}`);
console.log(`Tich cua a va b la ${multiplication}`);
console.log(`Thuong cua a va b la ${division}`);
console.log(`So du cua a va b la ${percent}`);

// Bai 4
let name = "";
let defaultName = "Khach";
if (name) {
  displayName = name;
} else {
  displayName = defaultName;
}
console.log(defaultName);

// Bai 5
let userAge = 18;
if (userAge >= 18) {
  console.log("Du dieu kien");
} else {
  console.log("Khong du dieu kien");
}

// Bai 6
let userName2 = "sadsad";
let password = "123";

let isValid = userName2 !== "" && password !== "";
console.log(isValid);

// Bai 7
let salePrice = 100000;
let discountRate = 0.2;

let price = salePrice / (1 - discountRate)
console.log(price);

// Bai 8
let aa = 7;
let bb = 5;
aa = aa + bb;
bb = aa - bb; 
aa = aa - bb;
console.log(`a = ${aa} b = ${bb}`);
