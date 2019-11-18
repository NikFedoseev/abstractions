const createStore = () => {
  let store = {}
  return {
    addItem: function({group, name, salary}) {
      if(!store[group]) {
        return store[group] = []
      }
      return store[group].push({name, salary})
    },
    removeItem: function({group, name}) {
      store = store[group].filter(item => item[name] !== name)
    },
  }
}


const userDataBase = createStore()
userDataBase.addItem()
