export default {
    state: {
        header: "Vuex App",
        welcome: "Welcome to our App",
        counter: 0
    },
    actions: {},
    mutations: {},
    getters: {
        header(state) {
            return state.header.toUpperCase();
        },
        welcome(state) {
            return state.welcome;
        },
        counter(state) {
            return state.counter;
        }
    }
}
