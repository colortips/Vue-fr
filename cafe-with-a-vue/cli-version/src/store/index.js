import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: "18 avenue du Beurre, Paris, France",
    email: "hello@cafewithavue.bakery",
    phone: "01 88 88 88 88",
    restaurantName: "La belle vue",
    shoppingCart: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant",
        },
        inStock: true,
        quantity: 1,
        price: 1.5,
      },
      {
        name: "Baguette",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain",
        },
        inStock: true,
        quantity: 1,
        price: 0.9,
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat",
        },
        inStock: false,
        quantity: 1,
        price: 1,
      },
    ],
  },
  getters: {
    copyright(state) {
      const currentYear = new Date().getFullYear();
      return `Copyright ${state.restaurantName} ${currentYear}`;
    },
  },
  mutations: {
    INCREMENT_SHOPPINGCART(state, amount) {
      state.shoppingCart += Number(amount);
    },
  },
  actions: {
    addToShoppingCart(context, amount){
      context.commit('INCREMENT_SHOPPINGCART', amount);
    }
  },
  modules: {
  }
})
