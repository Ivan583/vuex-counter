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
        },
        reset(ctx, payload) {
            ctx.commit('reset', payload);
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload;
        },
        decrement(state, payload) {
            state.counter -= payload;
        },
        reset(state, payload) {
            state.counter = 0;
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
