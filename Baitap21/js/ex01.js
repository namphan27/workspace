// Bai 1
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
const filterElectronics = (products) => {
  return products.filter((products) => products.category === "Electronics");
};
const productElectronics = filterElectronics(products);
console.log(productElectronics);
const sumProduct = productElectronics.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(sumProduct);

// Bai 2
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
const studentAverages = students.map((students) => {
  const scoresArray = Object.values(students.scores);
  const total = scoresArray.reduce((sum, score) => sum + score, 0);
  const average = total / scoresArray.length;
  return {
    name: students.name,
    average: average,
  };
});
console.log(studentAverages);

const topStudent = studentAverages.reduce((acc, cur) => {
  return cur.average > acc.average ? cur : acc;
});
console.log(topStudent);

const sortedStudents = studentAverages.sort((a, b) => {
  return b.average - a.average;
});
console.log(sortedStudents);

// Bai 3
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];
const orderTotal = orders.map((order) => {
  const total3 = order.items.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  return {
    orderId: order.orderId,
    customer: order.customer,
    total: total3,
  };
});
console.log(orderTotal);

const highTotals = orderTotal.reduce((maxOrder, curOrder) => {
  return curOrder.total3 > maxOrder.total3 ? curOrder : maxOrder;
});
console.log(highTotals);

// Bai 4
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
const salaryDepartment = employees.reduce((result, employee) => {
  const dept = employee.department;
  if (!result[dept]) {
    result[dept] = 0;
  }
  result[dept] += employee.salary;
  return result;
}, {});
console.log(salaryDepartment);

const topDepartment = employees.reduce((result, employee) => {
  const dept2 = employee.department;

  if (!result[dept2]) {
    result[dept2] = employee;
  } else {
    if (employee.salary > result[dept2].salary) {
      result[dept2] = employee;
    }
  }

  return result;
}, {});

console.log(topDepartment);

// Bai 5
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
const totalDuration = watchHistory.reduce((acc, cur) => {
  if (!acc[cur.videoId]) {
    acc[cur.videoId] = 0;
  }
  acc[cur.videoId] += cur.duration;
  return acc;
}, {});
console.log(totalDuration);

let maxVideoId = null;
let maxDuration = 0;

for (const videoId in totalDuration) {
  const duration = totalDuration[videoId];

  if (duration > maxDuration) {
    maxDuration = duration;
    maxVideoId = videoId;
  }
}
console.log(maxDuration);


// Bai 8
const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];
const ratingsByProduct = reviews.reduce((result, review) => {
  const product = review.productId;
  if (!result[product]) {
    result[product] = { total: 0, count: 0 };
  }
  result[product].total += review.rating;
  result[product].count += 1;
  return result;
}, {});

const averageRatings = {};
for (const product in ratingsByProduct) {
  averageRatings[product] = ratingsByProduct[product].total / ratingsByProduct[product].count;
}

console.log(averageRatings);


// Bai 9
const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];
const balanceByAccount = transactions.reduce((result, transaction) => {
  const acc = transaction.account;
  if (!result[acc]) {
    result[acc] = 0;  
  }

  if (transaction.type === "deposit") {
    result[acc] += transaction.amount;
  } else if (transaction.type === "withdraw") {
    result[acc] -= transaction.amount;
  }

  return result;
}, {});

console.log(balanceByAccount);


const maxAccount = Object.entries(balanceByAccount).reduce((max, [account, balance]) => {
  if (balance > max.balance) {
    return { account, balance };
  }
  return max;
}, { account: null, balance: -Infinity });

console.log(maxAccount);

