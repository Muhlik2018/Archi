<template>
  <div>
    <HeadNav></HeadNav>
    <div class="GenerateArt1">
      <div class="GenerateArt3">
        <!-- <span class="GenerateArtShadow"></span> -->
        <div>generative art<br />生成艺术</div>
      </div>

      <!-- 这里改成GenerateArt2 -->
      <p class="GenerateArtBack3" @click="goPage('GenerateArt1')">
        &lt;返回上一步
      </p>
      <div class="stepOne3">STEP THREE</div>
      <div class="choose-your-scenario">Dowloead YOUR Work</div>
      <div class="GenerateArtDownload">
        <div>
          <div class="GenerateArtImg">
            <img src="../assets/image13.svg" />
            <div>
              <div style="flex: 1">
                <!-- <div class="inputName">输入你的名字</div> -->
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
          </div>
        </div>

        <div>
          <div class="RightDate">2022.08.04</div>
          <div style="margin:0 auto;text-align: center;"><input class="RightinputName" v-model="inputName" /></div>
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
  },
  data() {
    return {
      inputName: "小锅焖大米",
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
  /* or 104% */

  color: #000000;

  cursor: pointer;
}
.GenerateArt3 {
  margin-top: 3.625rem;
  margin-left: 6.3125rem;
  width: 107.4375rem;
  height: 31.625rem;
  background-color: #786ab3;
  border-radius: 1.25rem;

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
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1.25rem;
}
.stepOne3 {
  margin: 0 auto;

  margin-top: -3rem;
  font-family: "Arimo";
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.375rem;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #531dab;
}
.choose-your-scenario {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #531dab;

  margin-top: 1.25rem;
}
.GenerateArtDownload {
  margin: 0 auto;
  margin-top: 11.6875rem;
  width: 93.75rem;
  height: 65.625rem;
  margin-left: 13.125rem;

  background: linear-gradient(
    90deg,
    rgba(83, 29, 171, 0.6) 0%,
    rgba(131, 249, 255, 0.6) 96.6%
  );
  border-radius: 1.875rem;

  display: flex;
}
.GenerateArtDownload > div {
  flex: 1;
}
.GenerateArtImg {
  width: 41.25rem;
  height: 60.5rem;
  margin-left: 2.625rem;
  margin-top: 2.5rem;
  background-color: #ffffff;
  position: relative;
}
.GenerateArtImg > img {
  margin-top: 1.25rem;
  margin-left: 1.5625rem;

  width: 38.125rem;
  height: 53.9375rem;
}
.GenerateArtImg > div {
  height: 5.3125rem;
  width: 100%;
  position: absolute;
  display: flex;

  top: 100%;
  transform: translateY(-100%);
}
.GenerateArtImg .inputName {
  margin-top: 1.25rem;
  margin-left: 1.5625rem;

  width: 6.5rem;

  border: 0;
  outline: 0;
  /* height: 1.9375rem; */

  /* line-height: 1.9375rem; */

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
  color: #bfbfbf;
}
.GenerateArtImg .inputName:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #bfbfbf;
}
.GenerateArtImg .inputName:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bfbfbf;
}
.GenerateArtImg .date {
  margin-top: 0.5rem;
  margin-left: 1.5625rem;

  width: 6.375rem;
  /* height: 1.4375rem; */

  /* line-height: 1.4375rem; */

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
.google {
  width: 14.8125rem;
  height: 100%;
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-right: 0.75rem;
}
.google img {
  /* width: 3.5rem;
  height: 1.1875rem;
  vertical-align: top; */
  position: absolute;
  top: 1.1875rem;

  left: 100%;
  transform: translateX(-100%);
}
.google div {
  position: absolute;
  top: 2.5rem;
  left: 100%;
  transform: translateX(-100%);

  width: 9.125rem;
  height: 1.875rem;

  font-family: "Microsoft YaHei";
  font-style: normal;
  font-weight: 400;
  font-size: 0.6875rem;

  display: block;
  /* or 127% */

  text-align: right;
  text-transform: capitalize;

  color: #8c8c8c;
}
.logo {
  /* margin: 0; */
  padding-left: 0.8125rem;
  width: 100%;
  height: 3.4375rem;
  border-left: 0.0313rem solid #9d9d9d;
  /* height: 100%; */
  display: inline-block;
  /* margin-bottom: 0.9375rem; */
  vertical-align: top;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.logo img {
  width: 2.3125rem;
  height: 3.4375rem;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.RightDate {
  margin: 0 auto;
  margin-top: 6.6875rem;
  width: 16.625rem;
  height: 2.9375rem;

  line-height: 2.9375rem;

  /* text-align: center; */

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
  margin: 0 auto;
  padding: 0 2.5rem;
  box-sizing: border-box;
  margin-top: 0.125rem;
  width: 22.5rem;
  height: 3.75rem;

  background: rgba(117, 74, 188, 0.25);
  border-radius: 0.9375rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  align-items: center;
  letter-spacing: 0.08em;

  
  /* text-transform: uppercase; */

  outline: none;
  border: 0;

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

  background: #faed00;
  border-radius: 0.3125rem;

  margin: 0 auto;
  margin-top: 2.375rem;

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
</style>