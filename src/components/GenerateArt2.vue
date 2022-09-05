<template>
  <div class="GenerateArt2">
    <HeadNav></HeadNav>
    <div class="top">
      <!-- <el-image src="GenerateArtTopLogo.jpg" fit="cover"></el-image> -->
      <div class="top-text">Archi&Casca<br />建筑印象&层叠生成艺术</div>
    </div>
    <div class="back-btn" @click="goPage('GenerateArt1')">&lt; 返回上一步</div>
    <div class="step2">
      <div class="step2-title">
        <div class="step2-title-top">选择Archi与设置参数</div>
        <div class="step2-title-bottom">第二步</div>
      </div>
      <div class="canChoose">
        <div class="canChooseTitle">选择元素</div>
        <Swiper navigation :modules="modules" :slidesPerView="3.5">
          <swiper-slide v-for="item in canChooseItem" :key="item.id">
            <el-image
              :src="item.src"
              fit="cover"
              @click="SwitchElement(item.id)"
              :class="{ haveSelected: item.selected }"
            ></el-image>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="haveChosenAndGenerated">
        <div class="haveChoosen">
          <div class="haveChoosenTitle">已选元素：</div>
          <Swiper
            v-show="haveChoosenItem"
            navigation
            direction="vertical"
            :modules="modules"
            :slidesPerView="3.5"
          >
            <swiper-slide
              v-for="item in haveChoosenItem"
              :key="item.id"
              :name="item.id"
              :alt="item.id"
            >
              <el-image
                class="haveChoosenContentImg"
                :src="item.src"
                fit="cover"
              ></el-image>
            </swiper-slide>
          </Swiper>
          <!-- <div class="haveChoosenContent">
            <img
              class="haveChoosenContentImg"
              v-show="haveChoosenItem"
              v-for="item in haveChoosenItem"
              :key="item.id"
              :src="item.src"
              :name="item.id"
              :alt="item.id"
            />
          </div> -->
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
          <Swiper navigation :modules="modules" :slidesPerView="3.5">
            <swiper-slide v-for="item in 7" :key="item">
              <div
                class="colorBox"
                :class="{ haveSelected: whetherColorSelected(item) }"
                @click="selectColor(item)"
              >
                <div class="colorBoxInner1" style="background-color: red">
                  <div class="colorBoxInner2" style="background-color: gold">
                    <div
                      class="colorBoxInner3"
                      style="background-color: green"
                    ></div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
          <!-- <div class="colorBox"></div> -->
          <!-- <div class="colorBox"></div> -->
        </div>
      </div>
      <div class="todo-button-outer">
        <div class="todo-button-inner">
          <button class="todo-button" @click="goPage('GenerateArt3')">
            去创作
          </button>
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
import { useRouter } from "vue-router";

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
  // 传递的参数，选择天际线、网格、光栅等等。。。
  // mounted(){
  //   console.log(this.$route.params.Scenerio);
  // },
  setup() {
    const router = useRouter();
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
      // {
      //   id: 1,
      //   src: "Detail3-1.svg",
      //   selected: false,
      // },
      // {
      //   id: 2,
      //   src: "Detail3-2.svg",
      //   selected:false,
      // },
      // {
      //   id: 3,
      //   src: "Detail3-3.svg",
      //   selected:false,
      // },
      // {
      //   id: 4,
      //   src: "Detail3-3.svg",
      //   selected:false,
      // },
      // {
      //   id: 5,
      //   src: "Detail3-3.svg",
      //   selected:false,
      // },
    ]);
    let generateImg = ref("raster-1.svg");
    let generateSize = ref(50);
    let colorSelected = ref("");
    const scenerio = ref(router.currentRoute.value.params.Scenerio);

    return {
      canChooseItem,
      haveChoosenItem,
      generateImg,
      generateSize,
      router,
      scenerio,
      colorSelected,
      modules: [Navigation],
    };
  },
  methods: {
    goPage(pageName) {
      this.router.push({ name: pageName });
    },
    SwitchElement(id) {
      const target = this.canChooseItem.findIndex((item) => item.id == id);
      if (this.canChooseItem[target].selected) {
        const removeTarget = this.haveChoosenItem.findIndex(
          (item) => item.id == id
        );
        this.haveChoosenItem.splice(removeTarget, 1);
        this.canChooseItem[target].selected = false;
      } else {
        this.haveChoosenItem.push({
          id: id,
          src: this.canChooseItem[target].src,
        });
        this.canChooseItem[target].selected = true;
      }
    },
    whetherColorSelected(id) {
      return id === this.colorSelected ? true : false;
    },
    selectColor(id) {
      this.colorSelected = id;
    },
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
  height: 31.625rem;
  margin-top: 5rem;
  background: #ab97ff;
}
.top-text {
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.7); */
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
  font-size: 3.5rem;
  line-height: 3.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.step2-title-bottom {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
  margin-bottom: 3rem;
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
.canChoose .haveSelected {
  border: 1rem double skyblue;
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
.haveChoosen .swiper {
  height: 40rem;
}
.haveChoosen .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
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
  width: 35rem;
}
.colorDiv .swiper-slide {
  width: 5.5rem !important;
  margin: 0 2rem;
}
.colorBox {
  width: 5.5rem;
  height: 5.5rem;
  margin: 1.5rem;
  /* background: linear-gradient(0deg, #4472c4, #4472c4),
    linear-gradient(0deg, #4472c4, #4472c4), #4472c4; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.colorDiv .haveSelected {
  border: #ab97ff 0.5rem solid;
}
.colorBoxInner1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
}
.colorBoxInner2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
}
.colorBoxInner3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
}
.todo-button-outer {
  width: 100%;
  height: 20rem;
  background-image: url("~@/assets/Detail-bottom-background.svg");
  background-size: cover;
  display: flex;
  align-items: center;
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