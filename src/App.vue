<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <button @click="increment">Increase</button>
    <button @click="decrement">Decrease</button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["header", "welcome", "counter"]),
  methods: mapActions(["increment", "decrement"])
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: green;
  margin: 60px 0 0 60px;
}

button {
  margin-right: 0.5rem;
}
</style>
