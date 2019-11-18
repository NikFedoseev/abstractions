const createStore = () => {
  let store = {}
  return {
    addItem: function({group, name, salary}) {
      if(!store[group]) {
        store[group] = []
        store[group].push({name, salary})
        
      }
      store[group].push({name, salary})
    },
    removeItem: function({group, name}) {
      store = store[group].filter(item => item[name] !== name)
    },
    getStore: function() {
      return store
    }
  }
}

const makeEployee = (group, name, salary) => {
  return {
    group, name, salary
  }
}


const userDataBase = createStore()
const user = makeEployee('programming', "olol", 300000)
userDataBase.addItem(Nik)

console.log(userDataBase.getStore())
// userDataBase.addItem()
