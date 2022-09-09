<template>
  <div class="GenerateArt2" v-loading="loading">
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
        <div class="outSwiperBox">
          <Swiper navigation :modules="modules" :slidesPerView="3.5">
            <swiper-slide
              v-for="item in canChooseItem"
              :key="item.id"
              @click="SwitchElement(item.id)"
              :class="{ haveSelected: item.selected }"
            >
              <el-image :src="item.url" fit="cover"></el-image>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
      <div class="haveChosenAndGenerated">
        <div class="haveChoosen">
          <div class="haveChoosenTitle">已选元素：</div>
          <Swiper
            v-show="haveChoosenItem"
            navigation
            direction="vertical"
            :modules="modules"
            :slidesPerView="4"
          >
            <swiper-slide
              v-for="item in haveChoosenItem"
              :key="item.id"
              :name="item.id"
              :alt="item.id"
            >
              <el-image
                class="haveChoosenContentImg"
                :src="item.url"
                fit="contain"
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
            <el-slider
              v-model="generateSize"
              :step="0.1"
              :max="1"
              vertical
              height="40rem"
            />
          </div>
          <div class="generateSizeIcon">-</div>
        </div>
      </div>
      <div class="chooseColor">
        <div class="chooseColorTitle">选择配色：</div>
        <div class="colorDiv">
          <Swiper navigation :modules="modules" :slidesPerView="3.5">
            <swiper-slide v-for="item in colorSet" :key="item.id">
              <div
                class="colorBox"
                :class="{ haveSelected: whetherColorSelected(item.id) }"
                @click="selectColor(item.id)"
              >
                <div
                  class="colorBoxInner1"
                  :style="{ backgroundColor: item.colorSet[0] }"
                >
                  <div
                    class="colorBoxInner2"
                    :style="{ backgroundColor: item.colorSet[1] }"
                  >
                    <div
                      class="colorBoxInner3"
                      :style="{ backgroundColor: item.colorSet[2] }"
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
          <!-- <button class="todo-button" @click="goPage('GenerateArt3')"> -->
          <button class="todo-button" @click="generatePhoto()">去创作</button>
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
import { onBeforeMount } from "@vue/runtime-core";
import axios from "axios";

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
    let canChooseItem = reactive([]);
    let haveChoosenItem = reactive([]);
    let generateImg = ref("");
    let generateSize = ref(0.5);
    let colorSet = reactive([]);
    let colorSelected = ref("");
    let loading = ref(false);
    const scenerio = ref(router.currentRoute.value.params.Scenerio);

    onBeforeMount(() => {
      if (scenerio.value === undefined) {
        router.push({ name: "GenerateArt1" });
      }
      // 获取场景风格轮播图
      axios
        .get("/ac/api/image/scene")
        .then(({ data }) => {
          if (data.code === 200) {
            data = data.data;
            data.forEach((element) => {
              if (element.scene === scenerio.value) {
                generateImg.value = element.url;
              }
            });
          } else {
            alert("请求失败请重试");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      // 获取元素列表
      axios
        .get(`/ac/api/archi/${scenerio.value}`)
        .then(({ data }) => {
          if (data.code === 200) {
            data = data.data;
            canChooseItem.push(...data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      axios
        .get(`/ac/api/gen/color/${scenerio.value}`)
        .then(({ data }) => {
          if (data.code === 200) {
            data = data.data;
            colorSet.push(...data);
          } else {
            alert("请求失败请重试");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    });

    return {
      canChooseItem,
      haveChoosenItem,
      generateImg,
      generateSize,
      router,
      scenerio,
      colorSelected,
      colorSet,
      loading,
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
        //分形只能选择一个
        if (this.scenerio === "fractal" && this.haveChoosenItem.length > 0) {
          alert("分形作画只能选择一个archi元素");
          return;
        }
        this.haveChoosenItem.push(this.canChooseItem[target]);
        this.canChooseItem[target].selected = true;
      }
    },
    whetherColorSelected(id) {
      return id === this.colorSelected ? true : false;
    },
    selectColor(id) {
      this.colorSelected = id;
    },
    generatePhoto() {
      if (this.haveChoosenItem.length > 0 && this.colorSelected) {
        const archi_id = this.haveChoosenItem.map((element) => {
          return element.id;
        });
        const scale = this.generateSize;
        const color_id = this.colorSelected;
        const scene = this.scenerio;
        this.loading = true;
        // console.log(archi_id, scale, color_id, scene);
        axios
          .post("/ac/api/gen", {
            archi_id,
            scale,
            color_id,
            scene,
          })
          .then(({ data }) => {
            if (data.code === 200) {
              data = data.data;
              this.getGeneratePhoto(data.id);
            } else {
              alert("网络错误");
              this.loading = false;
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else {
        alert("元素和颜色必选！");
      }
    },
    getGeneratePhoto(id) {
      axios
        .get(`/ac/api/gen/${id}`)
        .then(({ data }) => {
          if (data.code === 200) {
            data = data.data;
            console.log("data", data);
            if (data.status === 200) {
              this.router.push({
                name: "GenerateArt3",
                params: { id: data.id },
              });
            } else if (data.status === 300) {
              this.loading = false;
              alert("异常结束");
            } else if (data.status === 400) {
              this.loading = false;
              alert("参数错误");
            } else if (data.status === 500) {
              this.loading = false;
              alert("严重错误");
            } else {
              setTimeout(() => {
                this.getGeneratePhoto(data.id);
              }, 2000);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
  background: #b9c9fc;
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
.canChoose .outSwiperBox {
  position: relative;
  padding: 0 3rem;
}
.canChoose .swiper {
  display: flex;
  position: initial;
}
.canChoose >>> .swiper-wrapper {
  width: 90% !important;
  align-items: center;
}
.canChoose .swiper-slide {
  width: 15% !important;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.56);
  border: 0.3125rem dashed rgba(255, 255, 255, 0.95);
  border-radius: 1.875rem;
}
.canChoose >>> .el-image__inner {
  max-height: 10rem;
}
.canChoose .haveSelected {
  background: #ddd2ee;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  margin: 0;
  width: 100%;
}
.haveChoosen .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 3px 0px 3px 0px;
  border-style: dashed;
  border-color: #8b8b8b;
}
.haveChoosen .swiper-slide:nth-child(2n + 1) {
  background: #ddd2ee;
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
.haveChoosenContentImg >>> .el-image__inner {
  max-height: 10rem;
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
  max-width: 95%;
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
.generateSize::after {
  content: "大小";
  color: #71c5fc;
  font-size: 2rem;
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
  display: flex;
  align-items: center;
}
.colorDiv {
  display: flex;
  width: 40rem;
  align-items: center;
  position: relative;
  padding: 0 3rem;
}
.colorDiv .swiper{
  position: initial;
}
.colorDiv .swiper-slide {
  width: 5.5rem !important;
  margin: 0 2rem;
}
.colorBox {
  width: 5.5rem;
  height: 5.5rem;
  /* margin: 1.5rem; */
  /* background: linear-gradient(0deg, #4472c4, #4472c4),
    linear-gradient(0deg, #4472c4, #4472c4), #4472c4; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.colorDiv .haveSelected {
  border: #71c5fc 0.35rem dashed;
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