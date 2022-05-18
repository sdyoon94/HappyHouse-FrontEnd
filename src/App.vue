<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "App",
  components: { HeaderNav },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Jua&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Do Hyeon", sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
