
// Bai 2

function testPassword(password) {
    let upperCase = 0;
    let lowerCase = 0;
    let number = 0;
    let kyTuDacBiet = 0;

    const kyTuDacBietChoPhep = "!@#$%^&*()";

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);

        if (char >= `A` && char <= `Z`) {
            upperCase++;
        } else if (char >= `a` && char <= `z`) {
            lowerCase++;
        } else if (char >=`0` && char <= `9`) {
            number++;
        } else if (kyTuDacBietChoPhep.includes(char)) {
            kyTuDacBiet++
        }
    }
    const doDai = password.length >= 8;
    const hopLe = doDai && upperCase >= 2 && lowerCase >= 2 && number >= 1 && kyTuDacBiet >= 1;

return {
    hopLe: hopLe,
    thongTin: {
      doDai: doDai,
      chuHoa: upperCase,
      chuThuong: lowerCase,
      so: number,
      kyTuDacBiet: kyTuDacBiet
    }
};
}
const password = "Phannam2703!";
const ketQua = testPassword(password);

if (ketQua.hopLe) {
  console.log("Mat khau manh");
} else {
  console.log("Mat khau yeu");
}

// Bai 3
const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
let result = '';
let output = [];
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if ((',' + result + ',').indexOf(',' + user + ',') === -1) {
    result += (result ? ',' : '') + user;
    output.push(user);
  }
}

console.log(output);


// Bai 4 
const numbers = [5, 2, 1, 9, 8, 0];
const sorted = numbers.slice().sort((a, b) => b - a);
const unique = [...new Set(sorted)];
const secondLargest = unique[1];
console.log(secondLargest); 

// Bai 5 
function chenSoVaoMangSapXep(mangSo, soCanChen) {
    for (let i = 0; i < mangSo.length; i++) {
        if (soCanChen < mangSo[i]) {
            mangSo.splice(i, 0, soCanChen);
            return mangSo;
        }
        if (soCanChen === mangSo[i]) {
            mangSo.splice(i, 0, soCanChen);
            return mangSo;
        }
    }
    mangSo.push(soCanChen);
    return mangSo;
}

let danhSachSo = [1, 3, 5, 7, 9, 11];
console.log(chenSoVaoMangSapXep(danhSachSo, 4));




