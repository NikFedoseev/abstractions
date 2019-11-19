export const createStore = () => {
  let store = {};
  return {
    addItem: function({ group, name, salary }) {
      if (!store[group]) {
        store[group] = [];
      }
      store[group].push({ name, salary });
    },
    removeItem: function({ group, name }) {
      store[group] = store[group].filter(employee => employee.name !== name);
    },
    getItem: function(group, name) {
      return store[group].filter(employee => employee.name == name)[0];
    },
    getStore: function() {
      return store;
    }
  };
};

export const makeEmployee = (group, name, salary) => ({
  group,
  name,
  salary
});

export const makeProgrammer = (name, salary) =>
  makeEmployee("programming", name, salary);

export const getSalary = employee => employee.salary;

export const getSalaryAfterNDS = employee => employee.salary * 0.87;
