<template>
  <div>
    <HeadNav></HeadNav>
    <div class="ourTeam">
      <img src="../assets/BigLogo.svg" />
      <div class="ourTeamBottom">
        <div class="ourTeamTitle">我们的团队</div>
        <div class="ourTeamSlogan">团队理念/slogan</div>
      </div>
    </div>

    <div class="aboutUs">
      <h1>关于我们</h1>
      <div>
        案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道
        写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么
      </div>
    </div>

    <div class="subject">
      <h1>学科构成</h1>
      <div>
        <div>
          <span class="computer_img"
            ><div class="subjectTransparent">
              <h4>计算机与软件</h4>
              <div>16人</div>
            </div></span
          >

          <span class="architecture_img"
            ><div class="subjectTransparent">
              <h4>建筑/艺术设计</h4>
              <div>14人</div>
            </div></span
          >

          <span class="math_img"
            ><div class="subjectTransparent">
              <h4>数学</h4>
              <div>12人</div>
            </div></span
          >
        </div>
        <div>
          <span class="info_img"
            ><div class="subjectTransparent">
              <h4>信息与交互设计</h4>
              <div>9人</div>
            </div></span
          >

          <span class="finance_img"
            ><div class="subjectTransparent">
              <h4>金融/工商管理</h4>
              <div>6人</div>
            </div></span
          >

          <span style="position: relative">
            <div class="viewDetail">查看团队详情>></div>
          </span>
        </div>
      </div>
    </div>

    <!-- <div class="teamActivity">
      <span class="Arrow leftArrow"
        ><img src="../assets/Vector_left.svg" alt=""
      /></span>
      <span class="Arrow rightArrow"
        ><img src="../assets/Vector_right.svg" alt=""
      /></span>
      <h1>团队活动</h1>
      <div class="activity">
        <div>
          <div class="activityTransparent">
            <h2>活动标题1</h2>
            <div>
              案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么
            </div>
          </div>
        </div>

        <div>
          <div class="activityTransparent">
            <h2>活动标题2</h2>
            <div>
              案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <el-carousel
      :interval="5000"
      arrow="always"
      class="teamActivity"
      :autoplay="false"
    >
      <template v-for="item in swiper" :key="item.id">
        <template v-if="item.id % 2 == 0">
          <!-- 一次跳两张，一次放入两张轮播图 -->

          <el-carousel-item>
            <div
              :style="{
                'background-image': 'url(' + item.img + ')',
              }"
              class="swiperItem"
            >
              <div class="activityTransparent">
                <!-- 图片阴影部分 -->

                <h2>{{ item.title }}</h2>
                <div>
                  {{ item.description }}
                </div>
              </div>
            </div>
            <div
              :style="{
                'background-image': 'url(' + swiper[item.id + 1].img + ')', //<!-- 获取id为奇数的轮播图数据 -->
              }"
              class="swiperItem"
            >
              <div class="activityTransparent">
                <!-- 图片阴影部分 -->
                <h2>{{ swiper[item.id + 1].title }}</h2>
                <!-- 获取id为奇数的轮播图数据 -->
                <div>
                  {{ swiper[item.id + 1].description }}
                </div>
              </div>
            </div>
          </el-carousel-item>
        </template>
      </template>
    </el-carousel>

    <div class="bottomActivity">
      <div><span></span></div>
      <div><span></span></div>
      <div><span></span></div>
      <div><span></span></div>
    </div>

    <div class="blueline">
      <div class="bluelineTarget">
        <img src="../assets/Group478.svg" alt="" />
      </div>
    </div>

    <div style="display: block">
      <div class="more">查看更多>></div>
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
  data() {
    return {
      swiper: [
        {
          title: "活动标题1",
          description:
            "111111111111111案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5732.svg"),
          id: 0,
        },
        {
          title: "活动标题2",
          description:
            "2222222222案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5736.svg"),
          id: 1,
        },
        {
          title: "活动标题3",
          description:
            "33333333333案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5732.svg"),
          id: 2,
        },
        {
          title: "活动标题4",
          description:
            "4444444444444案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5736.svg"),
          id: 3,
        },
        {
          title: "活动标题5",
          description:
            "555555555555案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5732.svg"),
          id: 4,
        },
        {
          title: "活动标题6",
          description:
            "666666666案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么",
          img: require("@/assets/Rectangle5736.svg"),
          id: 5,
        },
      ],
    };
  },
};
</script>

<style>
.ourTeam {
  background: url("../assets/Rectangle5731.svg");
  background-size: cover;
  width: 120rem;
  height: 45.4375rem;
  margin: 0 auto;
  position: relative;
}
.ourTeam > img {
  width: 7.0625rem;
  height: 10.25rem;
  position: absolute;
  top: 14.6875rem;
  left: 56.4375rem;
}
.ourTeamTitle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.4375rem;
  height: 4.5rem;

  font-family: "Amaranth";
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  /* identical to box height, or 100% */

  letter-spacing: 0.065em;
  text-transform: uppercase;

  color: #ffffff;
}
.ourTeamBottom {
  position: absolute;
  width: 120rem;
  height: 18.75rem;

  top: 26.6875rem;

  background: linear-gradient(0, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}
.ourTeamSlogan {
  position: absolute;
  width: 37.9375rem;
  height: 1.125rem;
  left: 50%;
  transform: translateX(-50%);
  top: 7.4375rem;

  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.125rem;
  text-align: center;
  /* identical to box height, or 75% */

  letter-spacing: 0.25em;

  color: #ffffff;
}
.aboutUs {
  height: 32.75rem;
  width: 120rem;
  margin: 0 auto;

  position: relative;
}
.aboutUs h1 {
  margin: 0 auto;
  margin-top: 5.75rem;

  height: 3.75rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  text-align: center;
  letter-spacing: 0.065em;

  color: #3a3a3a;
}
.aboutUs > div {
  margin: 0 auto;
  margin-top: 2.1875rem;

  height: 9.375rem;
  width: 43.75rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2rem;
  /* or 160% */

  color: #5c5c5c;
}
.subject {
  width: 120rem;
  height: 48.9375rem;
  position: relative;
  margin: 0 auto;
}
.subject h1 {
  margin: 0 auto;

  width: 26.5rem;
  height: 3.75rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  text-align: center;
  letter-spacing: 0.065em;

  color: #3a3a3a;
}
.subject > div {
  margin-top: 3.9375rem;
  display: flex;
  flex-direction: column;
}
.subject > div > div {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 15rem;
}
.subject > div > div > span {
  flex: 1;
  height: 15rem;

  width: 40rem;
  height: 15rem;
  background-size: cover;
}
.subjectTransparent {
  width: 40rem;
  height: 15rem;

  background: linear-gradient(
    270deg,
    #ffffff 2.19%,
    rgba(255, 255, 255, 0) 56.64%
  );
  position: relative;
}
.subjectTransparent h4 {
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 1.5625rem;
  /* or 83% */

  color: #ffffff;

  position: absolute;
  top: 4.75rem;
  left: 2.875rem;
}
.subjectTransparent div {
  margin: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  /* or 104% */

  color: #ffffff;

  position: absolute;
  top: 8.3125rem;
  left: 2.875rem;
}
.computer_img {
  background: url("../assets/Rectangle5788.svg");
}
.architecture_img {
  background: url("../assets/Rectangle5789.svg");
}
.math_img {
  background: url("../assets/Rectangle5790.svg");
}
.info_img {
  background: url("../assets/Rectangle5791.svg");
}
.finance_img {
  background: url("../assets/Rectangle5792.svg");
}

.viewDetail {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  /* or 104% */

  text-align: right;

  color: #3a3a3a;

  position: absolute;
  top: 7.4375rem;
  left: 24.0625rem;

  width: 11.5rem;
  height: 3.75rem;

  cursor: pointer;
}

.teamActivity {
  width: 120rem;
  height: 56.25rem;

  margin: 0 auto;
  position: relative;
}
.teamActivity > h1 {
  display: block;
  width: 16.125rem;
  height: 3.8125rem;

  margin: 0 auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  /* identical to box height */

  letter-spacing: 0.065em;
  text-transform: uppercase;

  color: #3a3a3a;

  text-align: center;

  margin-bottom: 4.1875rem;
}
.activity {
  position: relative;
  margin: 0 auto;
}
.activity > div {
  display: inline-block;
  width: 60rem;
  height: 43.75rem;
  position: relative;

  text-align: center;
}

.activityTransparent {
  width: 100%;
  height: 20rem;

  position: absolute;
  top: 23.875rem;

  /* background: url(''); */
  background: linear-gradient(0, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}
.activityTransparent > h2 {
  margin: 0;
  position: absolute;
  width: 12.5rem;
  height: 5.4375rem;
  left: 6.875rem;
  top: 16.625rem;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  /* line-height: 4.5rem; */
  /* or 180% */

  text-align: right;
  text-transform: uppercase;

  color: #434343;

  /* vertical-align: top; */
}
.activityTransparent > div {
  width: 30.625rem;
  height: 7.625rem;

  position: absolute;
  left: 24.375rem;
  top: 15.5625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;

  text-align: left;

  /* or 167% */

  color: #434343;

  /* vertical-align: top; */
}
.Arrow {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;

  background: rgba(217, 217, 217, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 50%;

  z-index: 10;
}

.rightArrow {
  left: 111.25rem;
}
.leftArrow {
  left: 3.4375rem;
}

.rightArrow img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  height: 1.7777rem;
  width: 2.0315rem;
}
.leftArrow img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  height: 1.7777rem;
  width: 2.0315rem;
}

.bottomActivity {
  margin: 0 auto;
  margin-top: 13.1875rem;

  height: 51.8125rem;
  width: 120rem;

  display: flex;
}
.bottomActivity > div {
  flex: 1;
  height: 51.8125rem;
}
.bottomActivity > div:nth-of-type(1) {
  background: url("../assets/Rectangle5734.svg");
  background-size: cover;
}
.bottomActivity > div:nth-of-type(2) {
  background: url("../assets/Rectangle5733.svg");
  background-size: cover;
}
.bottomActivity > div:nth-of-type(3) {
  background: url("../assets/Rectangle5735.svg");
  background-size: cover;
}
.bottomActivity > div:nth-of-type(4) {
  background: url("../assets/Rectangle5733.svg");
  background-size: cover;
}
.bottomActivity span {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  width: 12.5rem;
  height: 100%;
  display: block;
  /* 
transform: rotate(90deg);*/
  float: right;
}
.blueline {
  width: 120rem;
  height: 1.6875rem;

  background: linear-gradient(
    90deg,
    rgba(83, 29, 171, 0.8) 0%,
    rgba(89, 126, 247, 0.8) 33.21%,
    rgba(0, 159, 232, 0.8) 64.91%,
    rgba(131, 249, 255, 0.8) 96.1%
  );
  display: block;

  margin: 0 auto;

  position: relative;
}
.bluelineTarget {
  position: absolute;
  left: 1.375rem;
  top: 50%;
  transform: translateY(-50%);

  width: 2.875rem;
  height: 2.875rem;
}
.bluelineTarget img {
  width: 2.875rem;
  height: 2.875rem;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.swiperItem {
  height: 43.75rem;
  width: 50%;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
}
.more {
  margin: 0 auto;
  margin-top: 4.6875rem;

  width: 10.5rem;
  height: 1.75rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  /* or 104% */

  text-align: center;

  color: #3a3a3a;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__container {
  height: 100%;
  position: relative;
}
.el-carousel__arrow {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;

  background: rgba(217, 217, 217, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 20rem;

  z-index: 10;
}
.el-carousel__arrow:nth-of-type(1) {
  left: 3.4375rem;
}
.el-carousel__arrow:nth-of-type(2) {
  left: 111.25rem;
}
.el-icon>svg {
  width: 2.0313rem;
  height: 1.7775rem;
}
</style>





<!-- 20220811 晚4-->