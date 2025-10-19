// Bai 1
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getInfo() {
        console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
    }
}
class Developer extends Employee {
  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.programmingLanguage = programmingLanguage;
  }
}
class Manager extends Employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    this.employees = [];
  }
  addEmployee(employee) {
        this.employees.push(employee);
    }
    getInfo() {
        console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
        console.log(" Quản lý nhân viên:");
        this.employees.forEach(emp => {
            if(emp instanceof Developer) {
                console.log(` - ${emp.name}, Ngôn ngữ: ${emp.programmingLanguage}`);
            } else {
                console.log(` - ${emp.name}`);
            }
        })
    }
}
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.getInfo();

// Bai 2
class Car {
  move() {
    console.log("Xe hơi đang chạy...");
  }
}
class Bicycle {
  move() {
    console.log("Xe đạp đang chạy...");
  }
}
function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}
const car = new Car();
const bike = new Bicycle();
start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!

// Bai 3
const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 2.3",
    parent: 2,
  },
  {
    id: 7,
    title: "Menu 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    title: "Menu 2.2.2",
    parent: 5,
  },
];

function getMenuTree(menus, parentId = 0) {
  return menus
    .filter(menu => menu.parent === parentId)
    .map(menu => {
      const children = getMenuTree(menus, menu.id);
      if (children.length > 0) {
        return { ...menu, children };
      }
      return { ...menu };
    });
}

const result = getMenuTree(menus);
console.log(result);



