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
  data() {
    return {
      header: "Vuex App",
      welcome: "Welome to our App",
      counter: 0
    };
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
