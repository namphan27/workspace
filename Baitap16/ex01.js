// Bai 1
const level_1 = 1678;
const level_2 = 1734;
const level_3 = 2014;
const level_4 = 2536;
const level_5 = 2834;
const level_6 = 2927;
let input = 500;
let output;
if (input < 0) {
    console.log("Khong hop le");
} else if (input <= 50) {
    output = input * level_1;
 } else if (input >= 51 && input <= 100) {
    output = 50 * level_1 + (input - 50) * level_2;
 } else if (input >= 101 && input <= 200) {
    output = 50 * level_1 + 50 * level_2 + (input - 100) * level_3;
 } else if (input >= 201 && input <= 300) {
    output = 50 * level_1 + 50 * level_2 + 100 * level_3 + (input - 100) * level_4;
 } else if (input >= 301 && input <= 400) {
    output = 50 * level_1 + 50 * level_2 + 100 * level_3 + 100 * level_4 + (input - 100) * level_5;
 } else {
    output = 50 * level_1 + 50 * level_2 + 100 * level_3 + 100 * level_4 + 100 * level_5 + (input - 100) * level_6;
 } 
 console.log(output);


 // Bai 2
 
 function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if ( n % i === 0) {
            return false;
        }
    }
    return true;
 }
 let number = 10;
 if (isPrime(number)) {
    console.log(number + "la so nguyen to");
 } else {
    console.log(number + "Khong phai la so nguyen to");
 }

 // Bai 3
 var n = 10;
 for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i +"Day la so chan");
    } else {
        console.log(i +"Day la so le");
    }
 }


 // Bai 4
 function calculate(n2) {
   let S = 0;
   for (let i = 1; i <= n2; i++) {
      S = i * (i + 1)
   }
   return S;
 }
 let n2 = 4;
 console.log("Gia tri cua S la", calculate(n2));
 

 // Bai 5
let a = 5;
let b = 9;
let soLe = 0;
let soChan = 0;
if (a > b) {
   console.log("a phai nho hon b");
}
for (let i = a; i <= b; i++) {
   if (i % 2 === 0) {
      soChan += i;
   } else {
      soLe += i;
   }
}
console.log("Tong so chan la", soChan);
console.log("Tong so le la", soLe);



// Bai 6
let html = `<table>`;

for (let i = 0; i < 8; i++) {
  html += "<tr>";
  for (let j = 0; j < 8; j++) {
    let color = (i + j) % 2 === 0 ? "#fff" : "#000";
    html += `<td style="width:60px; height:60px; background:${color};"></td>`;
  }
  html += "</tr>";
}

html += "</table>";
document.body.innerHTML = html;


// Bai 8 
let num = 1;
let n3 = 5;
for (let i = 1; i <= n3; i++) {        
  let line = "";

  for (let j = 1; j <= i; j++) {     
    line += num + " ";               
    num++;                          
  }

  console.log(line);          
}

