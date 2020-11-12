<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <button>Increase</button>
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    header() {
      return this.$store.getters.header;
    },
    welcome() {
      return this.$store.getters.welcome;
    },
    counter() {
      return this.$store.getters.counter;
    }
  }
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
