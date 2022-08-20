<template>
  <div>
    <HeadNav></HeadNav>
    <div class="GenerateArt1">
      <div class="GenerateArt3">
        <div>generative art<br />生成艺术</div>
      </div>

      <!-- 这里改成GenerateArt2 -->
      <p class="GenerateArtBack3" @click="goPage('GenerateArt1')">
        &lt;返回上一步
      </p>
      <div class="stepOne3">STEP THREE</div>
      <div class="choose-your-scenario">Dowloead YOUR Work</div>
      <div class="GenerateArtDownload">
        <!-- <div>
          <div class="GenerateArtImg">
            <img src="../assets/image13.svg" />
            <div>
              <div style="flex: 1">
                <div class="inputName">输入你的名字</div>
                <div class="date">2022.08.04</div>
              </div>
              <div style="flex: 1">
                <div class="google">
                  <img src="../assets/GoogleFrame.svg" />
                  <div>developer Summit<br />China 2022</div>
                </div>
                <div class="logo">
                  <img src="../assets/BigLogo.svg" />
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div>
          <el-carousel
            :interval="100000"
            arrow="always"
            style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0)"
          >
            <el-carousel-item v-for="item in swiper" :key="item">
              <img :src="item.img" />
            </el-carousel-item>
            <div class="footer">
              <div style="flex: 1">
                <input
                  type="text"
                  v-model="inputName"
                  class="inputName"
                  placeholder="输入你的名字"
                />
                <div class="date">2022.08.04</div>
              </div>
              <div style="flex: 1">
                <div class="google">
                  <img src="../assets/GoogleFrame.svg" />
                  <div>developer Summit<br />China 2022</div>
                </div>
                <div class="logo">
                  <img src="../assets/BigLogo.svg" />
                </div>
              </div>
            </div>
          </el-carousel>
        </div>

        <div>
          <div class="RightDate">2022.08.04</div>
          <div style="margin: 0 auto; text-align: center">
            <input class="RightinputName" v-model="inputName" />
          </div>
          <p class="RightinputNameDesc">输入你的名字</p>
          <img
            src="../assets/Group483.svg"
            style="
              margin: 0 auto;
              margin-top: 2.5rem;
              display: block;
              cursor: pointer;
            "
          />
          <img
            src="../assets/image23.svg"
            style="margin: 0 auto; margin-top: 2.9375rem; display: block"
          />
          <div class="codeScan">扫码下载你的作品</div>
        </div>
      </div>
    </div>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
// import HeadNav from './HeadNav.vue';
import FooterNav from "./FooterNav.vue";
import HeadNav from "./HeadNav.vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  components: {
    HeadNav,
    FooterNav,
  },
  methods: {
    goPage(pageName) {
      this.router.push({ name: pageName });
    },
    handleSelectColor(index) {
      for (var i = 0; i < this.color.length; i++) {
        this.color[i].isSelected = false;
      }
      this.color[index].isSelected = true;
    },
  },
  data() {
    return {
      inputName: "小锅焖大米",
      // color: [
      //   {
      //     isSelected: true,
      //   },
      //   {
      //     isSelected: false,
      //   },
      //   {
      //     isSelected: false,
      //   },
      // ],
      swiper: [
        {
          img: require("@/assets/image13.svg"),
          id: 0,
        },
        {
          img: require("@/assets/image13.svg"),
          id: 1,
        },
        {
          img: require("@/assets/image13.svg"),
          id: 2,
        },
        {
          img: require("@/assets/image13.svg"),
          id: 3,
        },
        {
          img: require("@/assets/image13.svg"),
          id: 4,
        },
      ],
    };
  },
};
</script>

<style>
.GenerateArt1 {
  width: 120rem;

  margin: 0 auto;
}
.GenerateArtBack3 {
  margin-top: 6.4375rem;
  margin-left: 5.6875rem;
  margin-bottom: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  color: #000000;

  cursor: pointer;
}
.GenerateArt3 {
  width: 107.4375rem;
  height: 31.625rem;

  margin-top: 3.625rem;
  margin-left: 6.3125rem;
  border-radius: 1.25rem;

  background-color: #786ab3;

  position: relative;
}
.GenerateArt3 > div {
  height: 8rem;

  position: absolute;

  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);

  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.375rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.GenerateArtShadow {
  width: 100%;
  height: 100%;

  border-radius: 1.25rem;

  position: absolute;

  background: rgba(0, 0, 0, 0.7);
}
.stepOne3 {
  margin: 0 auto;
  margin-top: -3rem;

  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.375rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.choose-your-scenario {
  margin-top: 1.25rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.GenerateArtDownload {
  /* width: 94.75rem;
  height: 72.8125rem; */

  width: 93.75rem;
  height: 65.75rem;

  margin: 0 auto;
  margin-top: 11.6875rem;
  margin-left: 13.125rem;
  border-radius: 1.875rem;

  background: linear-gradient(
    90deg,
    rgba(83, 29, 171, 0.6) 0%,
    rgba(131, 249, 255, 0.6) 96.6%
  );

  display: flex;
}
.GenerateArtDownload > div:nth-of-type(1) {
  flex: 55;
}
.GenerateArtDownload > div:nth-of-type(2) {
  flex: 45;
}
.GenerateArtImg {
  /* width: 41.25rem;
  height: 58.125rem;

  margin-left: 3.6875rem;
  margin-top: 3.75rem; */

  width: 41.25rem;
  height: 60.5rem;

  margin-left: 2.625rem;
  margin-top: 2.5rem;

  background-color: #ffffff;

  position: relative;
}
.GenerateArtImg > img {
  /* width: 38.125rem;
  height: 51.5625rem;

  margin-top: 1.25rem;
  margin-left: 1.5625rem; */
  width: 38.125rem;
  height: 53.9375rem;

  margin-top: 1.25rem;
  margin-left: 1.5625rem;
}
.GenerateArtImg > div {
  /* height: 5.3125rem; */
  width: 100%;

  position: absolute;
  display: flex;

  top: 100%;
  transform: translateY(-100%);
}
.inputName {
  width: 6.5rem;

  margin-top: 1.25rem;
  margin-left: 1.5625rem;
  border: 0;
  outline: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bfbfbf;
}
.GenerateArtImg .inputName::-webkit-input-placeholder {
  color: #bfbfbf;
}
.GenerateArtImg .inputName::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bfbfbf;
}
.GenerateArtImg .inputName:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bfbfbf;
}
.GenerateArtImg .inputName:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bfbfbf;
}
.date {
  width: 6.375rem;

  margin-top: 0.5rem;
  margin-left: 1.5625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bfbfbf;
}
.GenerateArt1 .footer {
  width: 100%;
  height: 6.5625rem;

  top: 100%;
  transform: translateY(-100%);

  position: absolute;
  display: flex;
}
.google {
  width: 14.8125rem;
  height: 100%;

  margin-right: 0.75rem;

  display: inline-block;
  position: relative;

  vertical-align: top;
}
.google img {
  position: absolute;

  top: 1.1875rem;
  left: 100%;
  transform: translateX(-100%);
}
.google div {
  width: 9.125rem;
  height: 1.875rem;

  position: absolute;
  display: block;

  top: 2.5rem;
  left: 100%;
  transform: translateX(-100%);

  font-family: "Microsoft YaHei";
  font-style: normal;
  font-weight: 400;
  font-size: 0.6875rem;
  text-align: right;
  text-transform: capitalize;
  color: #8c8c8c;
}
.logo {
  width: 100%;
  height: 3.4375rem;

  display: inline-block;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  padding-left: 0.8125rem;
  border-left: 0.0313rem solid #9d9d9d;

  vertical-align: top;
}
.logo img {
  width: 2.3125rem;
  height: 3.4375rem;

  position: absolute;

  top: 50%;
  transform: translateY(-50%);
}
.RightDate {
  width: 16.625rem;
  height: 2.9375rem;

  margin: 0 auto;
  margin-top: 6.6875rem;

  line-height: 2.9375rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.625rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
}
.RightinputName {
  width: 22.5rem;
  height: 3.75rem;

  margin: 0 auto;
  padding: 0 2.5rem;
  margin-top: 0.125rem;
  border-radius: 0.9375rem;
  box-sizing: border-box;
  border: 0;
  outline: none;

  background: rgba(117, 74, 188, 0.25);

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  align-items: center;
  letter-spacing: 0.08em;
  color: #ffffff;
}
.RightinputNameDesc {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8c8c8c;
}
.codeScan {
  width: 23.625rem;
  height: 4.875rem;

  margin: 0 auto;
  margin-top: 2.375rem;
  border-radius: 0.3125rem;

  background: #faed00;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 4.875rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3a3a3a;

  cursor: pointer;
}
.color-group {
  margin-left: 3.8125rem;
  margin-top: 1.75rem;
}
.select-color {
  width: 4.0625rem;
  height: 6.8125rem;

  margin-right: 1.625rem;

  display: inline-block;

  text-align: center;
  vertical-align: bottom;
}
.select-color .color {
  width: 4.0625rem;
  height: 4.0625rem;

  display: block;

  cursor: pointer;
}
.hide {
  visibility: hidden;
}

/* .el-carousel__item div {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
.GenerateArt1 .el-carousel__container {
  width: 41.25rem;
  height: 60.5rem;

  margin-left: 3.6875rem;
  margin-top: 2.9375rem;

  background-color: #ffffff;

  position: relative;
}

.GenerateArt1 .el-carousel__item img {
  width: 38.125rem;
  height: 53.9375rem;

  margin-top: 0.5rem;
  margin-left: 1.5625rem;
}
.GenerateArt1 .el-carousel__arrow {
  top: 0;
}
.GenerateArt1 .el-carousel__arrow {
  top: 45%;
  transform: translateY(-50%);
  background: none;
}
.GenerateArt1 .el-carousel__arrow--right {
  left: 43.4375rem;
}
.GenerateArt1 .el-carousel__arrow--left {
  display: none;
}
.GenerateArt1 .el-carousel__arrow i {
  font-size: 8.5rem;
}
.GenerateArt1 .el-carousel__indicators {
  top: 63.2rem;
  left: 25rem;
}
.GenerateArt1 .el-carousel__indicator--horizontal .el-carousel__button {
  width: 0.9375rem;
  height: 0.9375rem;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}
.GenerateArt1
  .el-carousel__indicator--horizontal.is-active
  .el-carousel__button {
  width: 0.9375rem;
  height: 0.9375rem;
  background: #d9d9d9;
  border-radius: 50%;
  opacity: 1;
}
</style>