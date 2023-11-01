import { createStore } from "vuex";
import homeModule from './modules/home'

const store = createStore({

  state: () => ({
    counter: 456,
    name: 'why',
    age: 18,
    books: [
      { id: 1, price: 123 },
      { id: 2, price: 456 },
      { id: 3, price: 789 },
    ] 
  }),
  getters: {
    doubleCounter: state => state.counter * 2,
    totalPrice: (state, getters) => state.books.reduce((preValue, item) => {
      // getters 可以调用别的getters
      return preValue + item.price;
    }, 0),
    getbook1: (state) => state.books.find(book => book.id === 1),
    getbookbyid: (state) => (id) => state.books.find(book => book.id === id),
    message:()=>'hello world'
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    changeMessage(state) { 
      state.name = 'change'
    },

  },
  actions: {
    incrementAction(context) {
      context.commit('increment')
    },
    async fetchInfo(context) { 
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      console.log(data);
    }
  },
  modules: {
    home:homeModule
  }
})

export default store