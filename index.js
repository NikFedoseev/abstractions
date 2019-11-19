import {
  createStore,
  makeEmployee,
  makeProgrammer,
  getSalary,
  getSalaryAfterNDS
} from "./abstractions";

const userDataBase = createStore();

// const employee = makeEmployee("programming", "employee", 300000);
// const programmer = makeProgrammer("Vasya", 100);

// userDataBase.addItem(employee);
// userDataBase.addItem(programmer);

// const vasya = userDataBase.getItem("programming", "Vasya");
// const vasyaSalary = getSalary(vasya);
// const vasyaSalaryAfterNDS = getSalaryAfterNDS(vasya);
