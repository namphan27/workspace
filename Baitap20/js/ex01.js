// Bai 1
const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];
users.forEach(users => console.log(users.name));

const oldestUser = users.reduce((maxUser, currentUsers) => {
  return currentUsers.age > maxUser.age ? currentUsers : maxUser;
});
console.log(oldestUser);

const totalAge = users.reduce((sum, users) => sum + users.age, 0)
const total = totalAge / users.length;
console.log(total);

// Bai 2
const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];
const nameProduct = products.map(products => products.name) 
console.log(nameProduct);

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(totalPrice);

const price2 = products.filter(products => products.price > 1000000) 
console.log(price2);

// Bai 3
const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];
const studentAverages = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const average = total / student.scores.length;
  return {
    name: student.name,
    average: average
  };
});
console.log(studentAverages);

const highScores = studentAverages.filter(student => student.average >= 8)
console.log(highScores);

const sortedStudents = studentAverages.sort((a, b) => b.average - a.average)
console.log(sortedStudents);

// Bai 4
const posts = [ 
  { 
    id: 1, 
    title: "JavaScript cơ bản", 
    tags: ["js", "basic"], 
    comments: [ 
      { user: "An", text: "Hay quá!" }, 
      { user: "Bình", text: "Rất dễ hiểu" }, 
    ], 
  }, 
  { 
    id: 2, 
    title: "Học React không khó", 
    tags: ["react", "js"], 
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 
  }, 
];
posts.forEach(post => {
  console.log(`${post.title} - ${post.comments.length} comments`);
});
const allTags = posts.flatMap(post => post.tags);
console.log(allTags);

const allComments = posts.flatMap(post => post.comments);
const anComments = allComments.filter(comment => comment.user === "An");
console.log(anComments);


