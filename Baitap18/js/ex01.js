// Bai 1
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(function (arr) {
  return arr ** 2;
});
const result = arr.filter(function (arr) {
  return arr % 2 === 0;
});
const result2 = newArr.filter(function (arr) {
  return arr % 2 !== 0;
});
console.log(newArr);
console.log(result);
console.log(result2);

// Bai 2
const names = ["   hoang ", "AN", "  f8   ", "Education"];
const lowerName = names.map(function (names) {
  return names.trim().toLowerCase();
});
const upperName = lowerName.map(function (names) {
  return names.charAt(0).toUpperCase() + names.slice(1);
});
console.log(lowerName);
console.log(upperName);

// Bai 3
const nums = [3, 7, 2, 9, 12, 15, 18];
const filterNums = nums.filter(function (nums) {
  return nums >= 10;
});
console.log(filterNums);

const three = filterNums.filter(function (filterNums) {
  return filterNums % 3 === 0;
});
console.log(three);

const nhanDoi = nums.map(function (nums) {
  return nums * 2;
});
const soLe = nhanDoi.filter(function (nhanDoi) {
  return nhanDoi % 2 !== 0;
});
console.log(soLe);

// Bai 4
const words = ["javascript", "php", "css", "html", "python", "java"];
const longWords = words.filter(function (words) {
  return words.length >= 5;
});
console.log(longWords);

const upperWords = words.map(function (word) {
  return word.toUpperCase();
});
console.log(upperWords);

const reversedWords = words.map(function (word2) {
  return word2.split("").reverse().join("");
});
console.log(reversedWords);

// Bai 5
const myArr = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];
const rowSum = myArr.map(function (row) {
  return row.reduce(function (sum, value) {
    return sum + value;
  });
});
console.log(rowSum);

const columnSum = [];
const columnCount = myArr[0].length;

for (let i = 0; i < columnCount; i++) {
  columnSum[i] = 0;
}
myArr.forEach(function (row) {
  row.forEach(function (value, index) {
    columnSum[index] += value;
  });
});
console.log(columnSum);

const row2 = myArr.filter(function (rows) {
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    sum += rows[i];
  }

  return sum > 10;
});
console.log(row2);

// Bai 6 
const myArr2 = [ 

  ["hello", "world"], 

  ["javascript", "php"], 

  ["css", "html"] 

]
const upperArr = myArr2.map(function(row) {
  return row.map(function(word) {
    return word.toUpperCase();
  });
});

console.log(upperArr);

const longArr = myArr2.map(function(row) {
  return row.filter(function (word) {
    return word.length > 4;
  });
});

console.log(longArr);

const longArr2 = myArr2.map(function(row) {
  return row.filter(function(word) {
    return word.length > 4;
  });
});
const result3 = longArr2.flat();
console.log(result3);

// Bai 7
const myArr4 = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]
const diagonal = myArr4.map(function(row, index) {
    return row[index];
})
console.log(diagonal);

const size = myArr4.length;
const diagonal2 = myArr4.map(function(row, index) {
    return row[size - 1 - index]
})
console.log(diagonal2);

// Bai 8
const scores = [ 

  [8, 9, 7], 

  [6, 5, 7],  

  [10, 9, 8]   

]
const diemTB = scores.map(function(studentScores) {
    const total = studentScores.reduce(function(sum, scores) {
        return sum += scores;
    }, 0)

    return total / studentScores.length;
})
console.log(diemTB);

const averages = diemTB.filter(function(avg) {
  return avg >= 8;
});
console.log(averages);

const increasedScores = scores.map(function(studentScores2) {
  return studentScores2.map(function(score) {
    if (score < 10) {
      return score + 1;
    } else {
      return 10;
    }
  });
});
console.log(increasedScores);




