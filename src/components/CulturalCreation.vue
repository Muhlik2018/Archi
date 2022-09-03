<template>
  <div>
    <HeadNav></HeadNav>
    <div class="culturalCreationBackground">
      <div class="BackgroundDescription">
        <h1>文创周边</h1>
        <p>色彩鲜艳的珐琅画</p>
      </div>
    </div>
    <div class="content">
      <div>
        <div><img src="../assets/Vector7.svg" /></div>
        <div><img src="../assets/Vector8.svg" /></div>
        <div><img src="../assets/Vector6.svg" /></div>
      </div>

      <div style="width: 100%;">
        <div class="paint" style="width: 100%; height: 19.9375rem">
          <div>
            <div class="paintTitle">珐琅画</div>
            <div class="paintContent">
              珐琅画的介绍珐琅画的介绍珐琅画的介绍珐琅画的介绍珐琅画的介绍珐琅画的介绍珐琅画的介绍
            </div>
          </div>
          <div class="Rectangle19" style="">
            <img src="../assets/Rectangle19.svg" alt="" />
          </div>
        </div>
      </div>

      <div style="margin-top: 1.9375rem">
        <div><img src="../assets/Group15.svg" alt="" /></div>
        <div><img src="../assets/Group14.svg" alt="" /></div>
        <div><img src="../assets/Group16.svg" alt="" /></div>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
export default {
  components: {
    HeadNav,
    FooterNav,
  },
};
</script>

<style scoped>
.culturalCreationBackground {
  background: url("../assets/Rectangle20.svg") no-repeat;
  width: 100%;
  height: 65rem;
  margin: 0 auto;
  background-size: cover;
}
.content {
  margin: 0 auto;
  margin-top: 13.6875rem;
  height: 111.25rem;
  width: 100%;
}
.content > div {
  height: 33%;
}
.content > div > div {
  width: 33%;
  height: 100%;
  display: inline-block;
  position: relative;
}
.content img {
  width: 25.375rem;
  height: 33.9375rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.paint {
  width: 100%;
  height: 19.9375rem;
  background: linear-gradient(
    90deg,
    rgba(139, 165, 250, 0.5) 0%,
    rgba(146, 250, 255, 0.5) 107.97%
  );
  margin-top: 5.5rem;
  
}
.paint > div {
  left: 21%;
  top:50%;
  transform: translateX(0) translateY(-70%);
  margin-top: 2.3125rem;
  height: 13rem;
  width: 34.25rem;

  position: absolute;
}
.paintTitle {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4.25rem;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;

  text-align: center;

  margin-bottom: 1.4375rem;
}
.paintContent {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4375rem;
  text-transform: uppercase;

  color: #606060;
}
.paint>.Rectangle19 {
  position: absolute;
  top: 30%;
  left: 94%;
  transform: translateX(-100%) translateY(0);
}
.Rectangle19 > img {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.BackgroundDescription {
  width: 100%;
  height: 22.5rem;
  padding-top: 42.5rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.64) 100%
  );
}

.BackgroundDescription > h1 {
  width: 24rem;
  height: 7.25rem;
  margin: 0;
  margin-top: 4.75rem;
  margin-left: 3.0625rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 6rem;
  line-height: 7.25rem;
  text-transform: uppercase;

  color: #ffffff;
}
.BackgroundDescription > p {
  width: 24rem;
  height: 3.625rem;
  margin: 0;
  display: block;
  margin-top: 0.625rem;
  margin-left: 3.0625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.625rem;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
}
</style>
