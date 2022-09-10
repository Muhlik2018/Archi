<template>
  <div class="DetailPage">
    <HeadNav></HeadNav>
    <div class="back-button" @click="goHome">&lt; 返回</div>
    <div class="photo-detail">
      <div class="photo-preview">
        <!-- <object id="svgContainer" type="image/svg+xml" data="raster.svg"  alt="" style="min-height: 78rem;" @click="printInfo(this)"></object> -->
        <!-- <embed
          id="svgContainer"
          type="image/svg+xml"
          src="fractal_ac_0.svg"
          style="min-height: 78rem"
        /> -->
        <div
          id="svgTemplate"
          v-html="renderSVG.value"
          ref="svg"
          :style="{height:detailScene==='sketch'?'51rem':'75rem'}"
          @click="printInfo($event)"
        ></div>
        <div
          ref="photoPreviewInfo"
          v-if="photoInfo"
          v-show="hadClicked"
          class="photo-preview-info"
          :style="{ left: photoInfoOffset + 'px' }"
        >
          <!-- <p >x</p> -->
          <div @click="hideInfo()" class="photo-preview-info-x">
            <img
              src="Detail-X-Vector.svg"
              alt="X"
              style="width: 60%; height: 60%"
            />
          </div>
          <div class="archi-info">
            <div class="archi-info-img-div">
              <img
                v-for="(item, index) in photoInfo.images"
                :key="index"
                :src="item.url"
                class="photo-preview-reality"
              />
            </div>
            <p>{{ photoInfo.text }}</p>
          </div>
          <!-- Text description pop-up window of the element selected in the svg.
          Text description pop-up window of the element selected in the svg.
          Text description pop-up window of the element selected in the svg. -->
        </div>
      </div>
      <hr style="width: 100%" />
      <div class="photo-detail-text">
        <div class="photo-detail-background">
          <div class="photo-detail-background-left">
            <div class="photo-detail-name">{{ detailInfo.title }}</div>
            <div class="photo-detail-author">{{ detailInfo.author }}</div>
          </div>
          <div class="photo-detail-background-right" v-if="false">
            <div class="photo-detail-QRcode">
              <!-- <el-image src="Detail-2.svg" fit="contain"></el-image> -->
              <vue-qr
                class="photo-detail-QRcode-img"
                :text="qrcodeText"
              ></vue-qr>
              <div class="photo-detail-QRcode-text">扫码保存至手机</div>
            </div>
          </div>
        </div>
        <div class="photo-detail-tag">
          <el-button round v-for="(item, index) in detailInfo.tag" :key="index">
            {{ item }}
          </el-button>
        </div>
      </div>
      <div class="photo-information">
        <div class="photo-information-title">作品介绍</div>
        <div class="photo-information-text">
          {{ detailInfo.introduction }}
        </div>
      </div>
    </div>
    <div class="todo-button-outer">
      <div class="todo-button-inner">
        <button class="todo-button" @click="goGenerate()">去创作</button>
      </div>
    </div>
    <div class="more-photo">
      <div class="more-photo-title">更多相关作品</div>
      <div class="more-photo-box">
        <Swiper :slidesPerView="3">
          <swiper-slide v-for="item in morePhotoContext" :key="item.id">
            <div class="more-photo-swiper-item">
              <el-image :src="item.url" fit="contain"></el-image>
              <div class="more-photo-swiper-item-text">
                <div class="more-photo-swiper-item-type">{{ detailScene }}</div>
                <div class="more-photo-swiper-item-author">算法程序</div>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
    <hr style="width: 95%" />
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { reactive, ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import axios from "axios";

export default {
  name: "DetailPage",
  components: {
    Swiper,
    SwiperSlide,
    HeadNav,
    FooterNav,
    vueQr,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let detailScene = router.currentRoute.value.params.scene;
    let detailUrl = router.currentRoute.value.params.url;
    let detailInfo = ref({});
    let morePhotoContext = reactive([]);

    let photoInfo = ref({});
    let clickId = ref("");
    let photoInfoOffset = ref(0);
    let svgDOM = reactive({});
    let renderSVG = reactive({});
    let hadClicked = ref(false);
    let qrcodeText = ref("http://www.baidu.com");

    onMounted(() => {
      if (!detailScene || !detailUrl) {
        router.push({ name: "Home" });
      } else {
        const svgUrl =
          window.location.protocol + "//" + window.location.host + detailUrl;
        // console.log("svgUrl", svgUrl);

        //解析svg读取加载到页面上
        const xhr = new XMLHttpRequest();
        xhr.open("GET", svgUrl, true);
        xhr.send();
        xhr.addEventListener("load", () => {
          const resXML = xhr.responseXML;
          svgDOM.value = resXML.documentElement.cloneNode(true);
          if (detailScene === "sketch") {
            svgDOM.value.style.width = "90rem";
            svgDOM.value.style.height = "51rem";
          } else {
            svgDOM.value.style.width = "64rem";
            svgDOM.value.style.height = "75rem";
          }
          svgDOM.value.style.cursor="pointer";
          let serializer = new XMLSerializer();
          let sXML = serializer.serializeToString(svgDOM.value);
          renderSVG.value = sXML;
        });

        // 获取作品信息
        axios
          .get(`/ac/api/archicasca/info/${detailScene}`)
          .then(({ data }) => {
            if (data.code === 200) {
              data = data.data;
              detailInfo.value = data;
            } else {
              alert("网络错误");
            }
          })
          .catch((err) => {
            console.log(err);
          });

        //获取相关作品
        axios
          .get(`/ac/api/archicasca/${detailScene}`)
          .then(({ data }) => {
            if (data.code === 200) {
              data = data.data;
              for (let i = 0; i < 10 && i < data.length; i++) {
                let temp = data[i];
                temp.url = temp.url.replace(".svg", ".png");
                // console.log("temp", temp);
                morePhotoContext.push(temp);
              }
            } else {
              alert("网络错误");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

    //获取archi元素信息
    let printInfo = (e) => {
      let archi = e.path.find((element) => {
        // console.log("element", element.id);
        if (element.id === undefined) {
          return false;
        }
        return element.nodeName == "svg" && element.id != "";
      });
      // console.log("temp", temp);
      if (clickId.value === archi.id) {
        return;
      } else {
        clickId.value = archi.id;
      }
      if (archi) {
        axios
          .get(`/ac/api/archi/info/${archi.id}`)
          .then(({ data }) => {
            if (data.code === 200) {
              data = data.data;
              // console.log("data", data);
              photoInfo.value = data.info;
              photoInfoOffset.value = Number(archi.getAttribute("x"));
              hadClicked.value = true;
            } else {
              clickId.value = "";
            }
          })
          .catch((err) => {
            console.log("err", err);
            clickId.value = "";
          });
      } else {
        clickId.value = "";
      }
    };
    let hideInfo = () => {
      // console.log("blur");
      hadClicked.value = false;
      clickId.value = "";
    };
    let goGenerate = () => {
      router.push({ name: "GenerateArt1" });
    };
    let goHome = () => {
      router.push({ name: "Home" });
    };
    return {
      morePhotoContext,
      detailScene,
      detailUrl,
      router,
      route,
      svgDOM,
      renderSVG,
      photoInfo,
      clickId,
      photoInfoOffset,
      hadClicked,
      qrcodeText,
      detailInfo,
      printInfo,
      hideInfo,
      goGenerate,
      goHome,
    };
  },
};
</script>

<style scoped>
.DetailPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.back-button {
  width: 95%;
  margin: 2rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.56rem;
  color: #000000;
  cursor: pointer;
}

.photo-detail {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.photo-preview {
  position: relative;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
}
.photo-preview .el-image {
  width: 100%;
}
.photo-preview-info {
  position: absolute;
  z-index: 10000;
  width: 50rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #000000;
  padding: 1rem;
  background: rgba(240, 240, 240, 0.7);
  margin-bottom: 6rem;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo-preview-info-x {
  background: #b9c9fc;
  border-radius: 90%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50rem;
  top: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.archi-info {
  max-width: 50rem;
  max-height: 50rem;
}
.archi-info-img-div {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.photo-preview-reality {
  max-width: 15rem;
  max-height: 15rem;
}
.photo-detail-text {
  width: 100%;
}
.photo-detail-background {
  display: flex;
  align-items: center;
  width: 100%;
}
.photo-detail-background-left {
  width: 70%;
}
.photo-detail-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8rem;
  color: #000000;
}
.photo-detail-author {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #767676;
}
.photo-detail-background-right {
  width: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin: 0.5rem;
}
.photo-detail-QRcode {
  width: 7rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.photo-detail-QRcode-img {
  width: 7rem;
  height: 7rem;
}
.photo-detail-QRcode-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 0.5rem;
  color: #000000;
}
.photo-detail-tag .el-button {
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border: 1px solid #000000;
  transform: scale(1.4);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  height: 1.875rem;
  /* line-height: 3.125rem; */
}

.photo-information {
  margin-top: 2rem;
  width: 100%;
}
.photo-information-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #000000;
}
.photo-information-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #000000;
}
.todo-button-outer {
  width: 100%;
  height: 20rem;
  background-image: url("~@/assets/Detail-bottom-background.svg");
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3rem;
}
.todo-button-inner {
  width: 70%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
.todo-button {
  width: 20rem;
  height: 5rem;
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
  cursor: pointer;
  /* margin-left: 17.7rem; */
  /* margin-top: 5rem; */
}

.more-photo {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 5rem;
}
.more-photo-title {
  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.4375rem;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 2rem;
}
.more-photo-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.more-photo-box::v-deep .swiper-wrapper {
  cursor: move;
}
.more-photo-box .swiper-slide {
  width: 30% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.more-photo-box >>> .el-image__inner {
  max-height: 50rem;
  max-width: 40rem;
}
.more-photo-swiper-item-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.more-photo-swiper-item-type {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
  color: #3e45dc;
}
.more-photo-swiper-item-author {
  font-family: "Amaranth";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
  color: #000000;
}
</style>