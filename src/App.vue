<template>
  <div style="overflow-x: hidden">
    <!-- 
  这里要加overflow-x: hidden因为要隐藏浏览器和移动端的左右移动框
 -->
    <!-- <HeadNav></HeadNav> -->
    <CulturalCreation></CulturalCreation>
    <!-- <FooterNav></FooterNav> -->
  </div>
</template>

<script>
import CulturalCreation from "./components/CulturalCreation.vue";
// import FooterNav from "./components/FooterNav.vue";
// import HeadNav from "./components/HeadNav.vue";
import "./js/flexible.js";
export default {
  name: "App",
  components: {
    CulturalCreation,
    // FooterNav,
    // HeadNav
  },
};
</script>

<style>
@media screen and (max-width: 360px) {
  html {
    font-size: 3px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 16px !important;
  }
}
</style>
