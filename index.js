import {
  createStore,
  makeEmployee,
  makeProgrammer,
  getSalary,
  getSalaryAfterNDS,
  getExpenses,
  getExpensesPerYear
} from "./abstractions";

const userDataBase = createStore();

const emp = makeEmployee("programming", "ololosha", 100);

userDataBase.addItem(emp);
