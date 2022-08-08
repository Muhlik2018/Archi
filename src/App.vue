<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HomePage></HomePage>
</template>

<script>
import HomePage from "./components/HomePage.vue";
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  height: 100%;
  min-width: 1600px;
  min-height: 900px;
  max-width: 2560px;
  max-height: 1440px;
}
</style>
