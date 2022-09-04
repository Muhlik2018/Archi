<template>
  <div class="HomePage">
    <HeadNav></HeadNav>
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
          <button class="tgf-right-button" @click="goGenerate()">去创作</button>
        </div>
      </div>
      <el-image :src="homeTheme" fit="contain" style="width: 100%"></el-image>
    </div>
    <div class="carousel">
      <el-carousel height="800px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item" @click="goOtherPage(item.id)">
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
          :spaceBetween="-190"
          :slidesPerView="3.8"
          :initialSlide="2"
        >
          <swiper-slide
            v-for="(item, index) in 5"
            data-index="index"
            :key="index"
            @click="goDetail(item)"
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
    <!-- 下面的本阶段隐藏 -->
    <div class="category" v-if="false">
      <div class="category-header">分类</div>
      <div class="category-box">
        <div
          class="category-item"
          v-for="item in categoryContext"
          :key="item.id"
        >
          <div class="category-item-text">
            <div class="category-item-title">{{ item.title }}</div>
            <div class="category-item-detail">{{ item.detail }}</div>
          </div>
          <el-image
            :src="'Home4-' + item.id + '.svg'"
            fit="contain"
            style="width: 100%"
          ></el-image>
        </div>
      </div>
    </div>
    <div class="collection" v-if="false">
      <div class="collection-header">你的收藏</div>
      <div class="collection-box">
        <swiper navigation :modules="modules" :slidesPerView="5">
          <swiper-slide
            v-for="(item, index) in 7"
            data-index="index"
            :key="index"
          >
            <div class="collection-swiper-item">
              <el-image :src="'Home5-' + item + '.svg'" fit="cover"></el-image>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onBeforeMount } from "@vue/runtime-core";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
    HeadNav,
    FooterNav,
  },
  setup() {
    const router = useRouter();
    let categoryContext = reactive([
      {
        id: 1,
        title: "地区",
        detail: "在不同地区之间探索艺术作品",
      },
      {
        id: 2,
        title: "主题",
        detail: "依据主题来开启艺术之旅",
      },
      {
        id: 3,
        title: "颜色",
        detail: "根据颜色来发现艺术作品",
      },
    ]);
    let homeTheme = ref("Home1.svg");
    let homeClassic = reactive([]);
    let homeScene = reactive([]);

    onBeforeMount(() => {
      // 获取主题背景图
      axios
        .get("/ac/api/image/theme")
        .then(({ data }) => {
          console.log("theme data", data);
          if (data.code === 200) {
            data = data.data;
            homeTheme.value = data.url;

            // 到时候要删掉
            homeTheme.value = "Home1.svg";
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      // 获取经典画作轮播图
      axios
        .get("/ac/api/image/classic")
        .then(({ data }) => {
          console.log("classic data", data);
          if (data.code === 200) {
            data = data.data;
            homeClassic.value = data;
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      // 获取场景风格轮播图
      axios
        .get("/ac/api/image/scene")
        .then(({ data }) => {
          console.log("scene data", data);
          if (data.code === 200) {
            data = data.data;
            homeScene.value = data;
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    });

    return {
      categoryContext,
      router,
      modules: [Navigation],
      homeTheme,
      homeClassic,
      homeScene,
    };
  },
  methods: {
    goDetail(id) {
      this.router.push({ name: "detail", params: { id } });
    },
    goGenerate() {
      this.router.push({ name: "GenerateArt1" });
    },
    goOtherPage(id) {
      if (id == 1) {
        this.router.push({ name: "ArchiCulture" });
      }
      else{
        this.router.push({ name: "ArchiCulture" });
      }
    },
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
  width: 100%;
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
.top5-swiper .swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.top5-swiper .swiper-slide {
  text-align: center;
  height: 70%;
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.7);
}
.top5-swiper .swiper-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
}
.top5-swiper .swiper-slide-active,
.top5-swiper .swiper-slide-duplicate-active {
  transform: scale(0.9);
}
.top5-swiper .swiper-slide-next {
  transform: scale(0.8);
  z-index: 998 !important;
}
.top5-swiper .swiper-slide-prev {
  transform: scale(0.8);
}
.top5-swiper .swiper-slide-active {
  z-index: 999 !important;
}
.top5-swiper .swiper-item-text {
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
.top5-swiper .swiper-item-category {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
}
.top5-swiper .swiper-item-description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
}

.category {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
}
.category-header,
.collection-header {
  margin-left: 1.5rem;
  font-family: "Eczar";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 4rem;
  color: #000000;
}
.category-box {
  display: flex;
  justify-content: space-around;
}
.category-item {
  margin: 1.5rem;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.category-item-text {
  position: absolute;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(0, 0, 0, 0.61) 82.03%
  );
}
.category-item-title {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
.category-item-detail {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.01rem;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.collection {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
}
.collection .swiper-slide {
  margin: 0.5rem;
  display: flex;
  justify-content: center;
}
</style>