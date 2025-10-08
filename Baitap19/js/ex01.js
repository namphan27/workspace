// Bai 1
function hasNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return true;
    }
  }
  return false;
}
console.log(hasNegative([-1, 2, 3]));

// Bai 2
function isAllEven(number2) {
  for (let i = 0; i < number2.length; i++) {
    if (number2[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
console.log(isAllEven([2, 4, 6, 8]));
console.log(isAllEven([2, 4, 6, 9]));

// Bai 3
function findDivisibleBy5(number3) {
  for (let i = 0; i < number3.length; i++) {
    if (number3[i] % 5 === 0) {
      return number3[i];
    }
  }
  return null;
}
console.log(findDivisibleBy5([1,2,3,4,5]));

// Bai 4
function findLastNegative(number4) {
  for (let i = number4.length - 1; i >= 0; i--) {
    if (number4[i] < 0) {
      return number4[i];
    }
  }
  return null;
}
console.log(findLastNegative([1,2,-3,4,-5]));

// Bai 5
function findFirstOddIndex(number5) {
  for (let i = 0; i < number5.length; i++) {
    if (number5[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
}
console.log(findFirstOddIndex([10,20,30,40,5]));

// Bai 6
function findLastGreaterThan50(number6) {
  for (let i = number6.length - 1; i >= 0; i--) {
    if (number6[i] > 50) {
      return i;
    }
  }
  return -1;
}
console.log(findLastGreaterThan50([10,20,30,40,50,60]));

// Bai 7
function sum(number7) {
  let total = 0;
  for (let i = 0; i < number7.length; i++) {
    total += number7[i];
  }
  return total;
}
console.log(sum([1,2,3,4,5,6]));

// Bai 8
function multiplyAll(number8) {
  let total2 = 1;
  for (let i = 0; i < number8.length; i++) {
    total2 = total2 * number8[i];
  }
  return total2;
}
console.log(multiplyAll([2,4,5,7]));

// Bai 9 
function longestStringLength(strings) {
  let maxLength = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxLength) {
      maxLength = strings[i].length
    }
  }
  return maxLength
}
console.log(longestStringLength(["javascript", "html", "css"]));

// Bai 10
function hasPrime(number10) {
  if (number10 <= 1) return false;
  for (let i = 2; i < number10 ** 2; i++) {
    if (number10 % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrime(10));



