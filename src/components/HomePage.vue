<template>
  <div class="HomePage">
    <div class="to-generate">
      <div class="to-generate-footer">
        <div class="tgf-left">
          <div class="tgf-left-up">
            <div>生成艺术</div>
            <div>GENERATE ART</div>
          </div>
          <div class="tgf-left-down">
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
        <div class="tgf-right">
          <button class="tgf-right-button">去创作</button>
        </div>
      </div>
      <el-image src="Home1.svg" fit="contain" style="width: 100%"></el-image>
    </div>
    <div class="carousel">
      <el-carousel height="800px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <div class="carousel-box">
            <div class="carousel-text">
              <div class="carousel-text-title">TITLE</div>
              <div class="carousel-text-details">
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <el-image
              src="Home2.svg"
              fit="contain"
              style="width: 100%"
            ></el-image>
            <el-image
              class="carousel-image-mask"
              src="Home2-1.svg"
              fit="contain"
              style="width: 100%"
            ></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="top5">
      <div class="top5-header">
        <div class="top5-header-title-up">today's top picks</div>
        <div class="top5-header-title-down">今日的TOP5生成艺术作品</div>
      </div>
      <!-- swiper实现 -->
      <div class="top5-swiper">
        <swiper
          :centeredSlides="true"
          :spaceBetween="-400"
          :slidesPerView="3.8"
          :initialSlide="2"
        >
          <swiper-slide
            v-for="(item, index) in 5"
            data-index="index"
            :key="index"
          >
            <div class="swiper-item">
              <div class="swiper-item-text">
                <div class="swiper-item-category">category</div>
                <div class="swiper-item-description">分类描述+作者信息</div>
              </div>
              <el-image :src="'Home3-' + item + '.svg'" fit="cover"></el-image>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "@vue/reactivity";
export default {
  name: "HomePage",
  components: { Swiper, SwiperSlide },
  setup() {
    let swiperOption = ref({
      loop: true, // 循环模式选项
      autoplay: true, //自动循环
      slidesPerView: 3.8, //设置slider容器能够同时显示的slides数量(carousel模式)。
      spaceBetween: -160, //在slide之间设置距离（单位px）。
      centeredSlides: true, //设置活动块居中
      width: 150,
    });
    console.log(swiperOption);
    return {
      swiperOption,
    };
  },
};
</script>

<style scoped>
.HomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.to-generate {
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.to-generate-footer {
  position: absolute;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tgf-left {
  width: 40rem;
  margin: 10rem;
}
.tgf-left-up {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 5rem;
  /* line-height: 7.625rem; */
  color: #ffffff;
}
.tgf-left-down {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  color: #ffffff;
}
.tgf-right-button {
  width: 20rem;
  height: 6rem;
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
  margin: 10rem;
}

.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.el-carousel {
  width: 100%;
  margin: 2rem;
}
.carousel-box {
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.carousel-image-mask {
  position: absolute;
  width: 100%;
  z-index: 500;
}
.carousel-text {
  position: absolute;
  width: 35rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin: 3rem;
}
.carousel-text-title {
  font-family: "Arimo";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.5rem;
  text-transform: uppercase;
  color: #ffffff;
}
.carousel-text-details {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  color: #ffffff;
}

.top5 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    #754abc 0%,
    rgba(255, 255, 255, 0) 74.04%
  );
  margin: 1rem;
}
.top5-header {
  margin-top: 5rem;
  margin-bottom: 2rem;
}
.top5-header-title-up {
  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: #fafafa;
}
.top5-header-title-down {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 1.75rem;
  line-height: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.top5-swiper {
  width: 90%;
  margin: auto;
}
.swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.swiper-slide {
  text-align: center;
  height: 70%;
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.7);
}
.swiper-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(0.9);
}
.swiper-slide-next {
  transform: scale(0.8);
  z-index: 998 !important;
}
.swiper-slide-prev {
  transform: scale(0.8);
}
.swiper-slide-active {
  z-index: 999 !important;
}
.swiper-item-text {
  position: absolute;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  z-index: 1000;
  margin: 3rem;
}
.swiper-item-category {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
}

.swiper-item-description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
}
</style>