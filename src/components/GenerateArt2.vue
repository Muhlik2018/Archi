<template>
  <div class="GenerateArt2">
    <HeadNav></HeadNav>
    <div class="top">
      <el-image src="GenerateArtTopLogo.jpg" fit="cover"></el-image>
      <div class="top-text">generative art <br />生成艺术</div>
    </div>
    <div class="back-btn">&lt; 返回上一步</div>
    <div class="step2">
      <div class="step2-title">
        <div class="step2-title-top">STEP two</div>
        <div class="step2-title-bottom">CHOOSE YOUR SCENARIO</div>
      </div>
      <div class="canChoose">
        <div class="canChooseTitle">选择元素</div>
        <Swiper navigation :modules="modules" :slidesPerView="3.5">
          <swiper-slide v-for="item in canChooseItem" :key="item.id">
            <el-image :src="item.src" fit="cover"></el-image>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="haveChosenAndGenerated">
        <div class="haveChoosen">
          <div class="haveChoosenTitle">已选元素：</div>
          <div class="haveChoosenContent">
            <img
              class="haveChoosenContentImg"
              v-show="haveChoosenItem"
              v-for="item in haveChoosenItem"
              :key="item.id"
              :src="item.src"
              :name="item.id"
              :alt="item.id"
            />
          </div>
        </div>
        <div class="generateImgBox">
          <img class="generateImg" :src="generateImg" alt="error" />
        </div>
        <div class="generateSize">
          <div class="generateSizeIcon">+</div>
          <div class="generateSizeSlider">
            <el-slider v-model="generateSize" vertical height="40rem" />
          </div>
          <div class="generateSizeIcon">-</div>
        </div>
      </div>
      <div class="chooseColor">
        <div class="chooseColorTitle">选择配色：</div>
        <div class="colorDiv">
          <div class="colorBox"></div>
          <div class="colorBox"></div>
          <div class="colorBox"></div>
        </div>
      </div>
      <div class="todo-button-outer">
        <div class="todo-button-inner">
          <button class="todo-button">去创作</button>
        </div>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { reactive, ref } from "@vue/reactivity";

import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
export default {
  name: "GenerateArt2",
  components: {
    Swiper,
    SwiperSlide,
    HeadNav,
    FooterNav,
  },
  setup() {
    let canChooseItem = reactive([
      {
        id: 1,
        src: "Detail3-1.svg",
      },
      {
        id: 2,
        src: "Detail3-2.svg",
      },
      {
        id: 3,
        src: "Detail3-3.svg",
      },
      {
        id: 4,
        src: "Detail3-4.svg",
      },
      {
        id: 5,
        src: "Detail3-3.svg",
      },
      {
        id: 6,
        src: "Detail3-3.svg",
      },
      {
        id: 7,
        src: "Detail3-3.svg",
      },
    ]);
    let haveChoosenItem = reactive([
      {
        id: 1,
        src: "Detail3-1.svg",
      },
      {
        id: 2,
        src: "Detail3-2.svg",
      },
      {
        id: 3,
        src: "Detail3-3.svg",
      },
    ]);
    let generateImg = ref("Detail3-1.svg");
    let generateSize = ref(50);
    return {
      canChooseItem,
      haveChoosenItem,
      generateImg,
      generateSize,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.GenerateArt2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* overflow: hidden; */
}
.top {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 1.25rem;
  width: 90%;
  margin-top: 5rem;
}
.top-text {
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1.25rem;
  font-family: "Arimo";
  font-style: normal;
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.375rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
}

.back-btn {
  width: 90%;
  margin: 2rem 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #000000;
}
.step2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step2-title-top {
  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.375rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.step2-title-bottom {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}

.canChoose {
  width: 83.5%;
  background: rgba(192, 192, 192, 0.2);
  border-radius: 20px;
  padding: 4rem;
}
.canChooseTitle {
  /* width: 100%; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  color: #531dab;
  margin: 2rem 0;
}
.canChoose .swiper {
  display: flex;
  justify-content: center;
}
.canChoose >>> .swiper-wrapper {
  width: 90% !important;
}
.canChoose .swiper-slide {
  width: 15% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.haveChosenAndGenerated {
  width: 100%;
  display: flex;
  margin: 2rem;
}
.haveChoosen {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border: 4px dashed #9747ff;
  border-radius: 20px;
  border-left-style: none;
}
.haveChoosenTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.25rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
  margin: 2rem 0;
}
.haveChoosenContent {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.haveChoosenContentImg {
  width: 50%;
  margin: 1rem 0;
}
.generateImgBox {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: 4rem;
  border: 0.5px solid #a8a8a8;
  border-radius: 10px;
}
.generateImg {
  margin: 1rem;
  height: 95%;
  /* border: 0.5px solid #a8a8a8;
  border-radius: 10px;
  display: block; */
}
.generateSize {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.generateSizeIcon {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  /* line-height: 1.5625rem; */
  text-align: center;
  color: #71c5fc;
}

.chooseColor {
  display: flex;
  height: 10rem;
  width: 55%;
}
.chooseColorTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.colorDiv {
  display: flex;
}
.colorBox {
  width: 5.5rem;
  height: 5.5rem;
  margin: 1.5rem;
  background: linear-gradient(0deg, #4472c4, #4472c4),
    linear-gradient(0deg, #4472c4, #4472c4), #4472c4;
}
.todo-button-outer {
  width: 100%;
  height: 20rem;
  background-image: url("~@/assets/Detail-bottom-background.svg");
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 3rem;
}
.todo-button-inner {
  margin-bottom: 3rem;
}
.todo-button {
  width: 20rem;
  height: 4rem;
  background: #faed00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #000000;
  border: none;
}
</style>