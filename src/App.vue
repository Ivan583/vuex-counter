<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <button>Increase</button>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["header", "welcome", "counter"])
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
</style>
