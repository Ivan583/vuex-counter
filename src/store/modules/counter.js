export default {
    state: {
        header: "Vuex App",
        welcome: "Welcome to our App",
        counter: 0
    },
    actions: {
        increment(ctx, payload) {
            ctx.commit('increment', payload = 5);
        },
        decrement(ctx, payload) {
            ctx.commit('decrement', payload = 5);
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload;
        },
        decrement(state, payload) {
            state.counter -= payload;
        }
    },
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
