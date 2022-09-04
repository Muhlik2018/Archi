<template>
  <div class="DetailPage">
    <HeadNav></HeadNav>
    <div class="back-button">&lt; 返回</div>
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
          @click="printInfo($event)"
        ></div>
        <div
          ref="photoPreviewInfo"
          v-show="hadClicked"
          class="photo-preview-info"
          :style="{ left: photoInfoOffset + 'px' }"
        >
          <p @click="hideInfo()">x</p>
          <img src="Detail-1.svg" class="photo-preview-reality" />
          <p>{{ photoInfo }}</p>
          <!-- Text description pop-up window of the element selected in the svg.
          Text description pop-up window of the element selected in the svg.
          Text description pop-up window of the element selected in the svg. -->
        </div>
      </div>
      <hr style="width: 100%" />
      <div class="photo-detail-text">
        <div class="photo-detail-background">
          <div class="photo-detail-background-left">
            <div class="photo-detail-name">博士来拜</div>
            <div class="photo-detail-author">鲁本斯</div>
          </div>
          <div class="photo-detail-background-right">
            <div class="photo-detail-QRcode">
              <!-- <el-image src="Detail-2.svg" fit="contain"></el-image> -->
              <vue-qr class="photo-detail-QRcode-img" :text="qrcodeText"></vue-qr>
              <div class="photo-detail-QRcode-text">扫码保存至手机</div>
            </div>
          </div>
        </div>
        <div class="photo-detail-tag">
          <el-button round>油画</el-button>
          <el-button round>鲁本斯</el-button>
        </div>
      </div>
      <div class="photo-information">
        <div class="photo-information-title">作品介绍</div>
        <div class="photo-information-text">
          彼得·保罗·鲁本斯（Peter Paul
          Rubens，1577.6.28——1640.5.30），法兰德斯画家，是欧洲第一个巴洛克式的画家。出生于德国的茨根小城一个律师家庭。9岁时随父母移居佛兰德斯，定居安特卫普。父亲去世后，母亲送他进一所拉丁文学校学习，他能阅读古希腊罗马书籍原著。1608年，与名律师兼人文主义者布兰特结婚，画家为妻子画过不少著名的肖像，所作一批以宗教和神话为题材的油画《复活》、《爱之园》、《末日审判》等，笔法洒脱自如，整体感强。特点是将文艺复兴美术的高超技巧及人文主义思想和佛兰德斯古老的民族美术传统结合起来，形成了一种热情洋溢地赞美人生欢乐的气势宏伟，色彩丰富，运动感强的独特风格，成为巴洛克美术的代表人物。
        </div>
      </div>
    </div>
    <div class="todo-button-outer">
      <div class="todo-button-inner">
        <button class="todo-button">去创作</button>
      </div>
    </div>
    <div class="more-photo">
      <div class="more-photo-title">更多相关作品</div>
      <div class="more-photo-box">
        <Swiper :slidesPerView="3">
          <swiper-slide v-for="item in morePhotoContext" :key="item.id">
            <div class="more-photo-swiper-item">
              <el-image
                :src="'Detail3-' + item.id + '.svg'"
                fit="cover"
              ></el-image>
              <div class="more-photo-swiper-item-text">
                <div class="more-photo-swiper-item-type">{{ item.type }}</div>
                <div class="more-photo-swiper-item-author">
                  {{ item.author }}
                </div>
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
import { onMounted, getCurrentInstance } from "@vue/runtime-core";
import vueQr from 'vue-qr/src/packages/vue-qr.vue';
import SVG from "@/assets/fractal_ac_0.svg";

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
    let detailId = router.currentRoute.value.params.id;
    let picutreId = "Home3-" + detailId + ".svg";
    let photoInfoOffset = ref(0);
    let morePhotoContext = reactive([
      {
        id: 1,
        type: "创作类别标题",
        author: "作家",
      },
      {
        id: 2,
        type: "创作类别标题",
        author: "作家",
      },
      {
        id: 3,
        type: "创作类别标题",
        author: "作家",
      },
      {
        id: 4,
        type: "创作类别标题",
        author: "作家",
      },
    ]);
    let photoInfo = ref(
      "Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg.Text description pop-up window of the element selected in the svg."
    );
    let svgDOM = reactive({});
    let renderSVG = reactive({});
    let hadClicked = ref(false);
    let currentInstance = ""; //photoPreviewInfo的ref属性
    let qrcodeText=ref("http://www.baidu.com");

    onMounted(() => {
      currentInstance = getCurrentInstance(); //获取对应dom节点

      //解析svg读取加载到页面上
      const xhr = new XMLHttpRequest();
      xhr.open("GET", SVG, true);
      xhr.send();
      xhr.addEventListener("load", () => {
        const resXML = xhr.responseXML;
        svgDOM.value = resXML.documentElement.cloneNode(true);
        svgDOM.value.style.width = "64rem";
        svgDOM.value.style.height = "75rem";
        let serializer = new XMLSerializer();
        let sXML = serializer.serializeToString(svgDOM.value);
        renderSVG.value = sXML;
      });
    });

    let printInfo = (e) => {
      let temp = e.path.find((element) => {
        // console.log("element", element.nodeName);
        return element.nodeName == "svg" && element.id != "";
      });
      // console.log("temp", temp);
      if (temp) {
        photoInfo.value = temp.id + " 随机数测试：" + Math.random();
        photoInfoOffset.value =
          Number(temp.getAttribute("x")) + Number(temp.getAttribute("width"));
        // console.log("photoInfoOffset", photoInfoOffset.value);
        hadClicked.value = true;
        currentInstance.ctx.$refs.photoPreviewInfo.focus();
      }
    };
    let hideInfo=()=>{
      console.log("blur");
      hadClicked.value=false;
    }
    return {
      morePhotoContext,
      detailId,
      picutreId,
      router,
      route,
      svgDOM,
      renderSVG,
      photoInfo,
      photoInfoOffset,
      hadClicked,
      currentInstance,
      qrcodeText,
      printInfo,
      hideInfo,
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
  width: 30rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
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

.photo-preview-reality {
  max-width: 80%;
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
  font-size: 2.2rem;
  line-height: 3rem;
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
.photo-detail-QRcode-img{
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
}

.photo-information {
  margin-top: 2rem;
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
.more-photo-box .swiper-slide {
  width: 30% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
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