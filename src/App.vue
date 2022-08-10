<template>
  <HomePage></HomePage>
  <DetailPage></DetailPage>
</template>

<script>
import DetailPage from './components/DetailPage.vue';
import HomePage from './components/HomePage.vue';
export default {
  name: "App",
  components: {
    DetailPage,
    HomePage
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
