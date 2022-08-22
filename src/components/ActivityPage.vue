<template>
  <div class="ActivityPage">
    <HeadNav></HeadNav>
    <Swiper
      class="topSwiper"
      :pagination="{ clickable: true }"
      :modules="modules"
      :slidesPerView="1"
    >
      <swiper-slide v-for="item in topSwiper" :key="item.id">
        <div class="topSwiperContent">
          <div class="topSwiperContentDate">
            <div class="topSwiperContentDateText">2022/08/15-2022/8/20</div>
          </div>
          <div class="topSwiperContentRight">
            <div class="topSwiperContentRightCity">
              <el-image :src="item.activity.img"></el-image>
            </div>
            <div class="topSwiperContentActivity">
              <div class="topSwiperContentActivityName">广州城市艺术展</div>
              <div class="topSwiperContentActivityContent">
                案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道
                写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案
              </div>
              <div class="topSwiperContentActivityButtonDiv">
                <button class="topSwiperContentActivityButton">
                  立即参与→
                </button>
              </div>
            </div>
          </div>
          <el-image :src="item.src" fit="cover" style="width: 100%"></el-image>
        </div>
      </swiper-slide>
    </Swiper>
    <div class="weCanDiv">
      <div class="weCanTitle">WE CAN</div>
      <div class="weCanContent">
        <img class="weCanArrorIcon" src="Activity2-1.png" alt="" />
        <div class="weCanLeft">
          <div class="weCanLeftImgAndText">
            <img class="weCanLeftImg" src="Activity2-2.jpg" alt="" />
            <div class="weCanLeftText">观展 Exhibition</div>
          </div>
          <div class="weCanLeftImgAndText">
            <img class="weCanLeftImg" src="Activity2-3.jpg" alt="" />
            <div class="weCanLeftText">创作 Creation</div>
          </div>
          <div class="weCanLeftImgAndText">
            <img class="weCanLeftImg" src="Activity2-4.jpg" alt="" />
            <div class="weCanLeftText">交流 Comminicate</div>
          </div>
          <!-- <img class="weCanLeftImg" src="Activity2-3.jpg" alt="" />
          <img class="weCanLeftImg" src="Activity2-4.jpg" alt="" /> -->
          <img class="weCanLeftBackground" src="Activity2-5.png" alt="" />
        </div>
        <div class="weCanRight">
          <div class="weCanRightContent">
            <div class="weCanRightTitle">我们可以做什么</div>
            <div class="weCanRightText">
              案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar">
      <div class="calendarTop">
        <img class="calendarDot" src="Activity3-1.png" alt="" />
        <div class="calendarTitle">
          <div class="calendarTitleCicleAndText">
            <div class="calendarTitleCicle"></div>
            <div class="calendarTitleText">CALENDAR 活 动日历</div>
          </div>
          <img class="calendarTitleTriangle" src="Activity3-2.png" />
        </div>
      </div>
      <div class="calendarContent">
        <div class="calendarLeft">
          <div class="calendarMonth">{{ month }}</div>
          <Swiper
            :scrollbar="{
              hide: false,
            }"
            :modules="modules"
            direction="vertical"
            :slidesPerView="1"
          >
            <swiper-slide v-for="item in calendarLeftContent" :key="item.id">
              <div ref="calendarLeftContentRef" class="calendarLeftContent">
                <div class="calendarLeftContentTop">
                  <div class="calendarLeftContentTitle">{{ item.title }}</div>
                  <div class="calendarLeftContentTimeAbout">
                    <div class="calendarLeftContentTime">
                      <span class="calendarLeftContentTimeLeft">
                        {{ getTimeLeft(item.time) }}
                      </span>
                      <span class="calendarLeftContentTimeRight">
                        |{{ getTimeRight(item.time) }}
                      </span>
                    </div>
                    <div class="calendarLeftContentTimeLast">
                      <!-- 30 minutes last -->
                      {{ getTimeDifference(item.time) }}
                    </div>
                  </div>
                </div>
                <div class="calendarLeftCenterImg">
                  <img
                    class="calendarLeftContentActivityImg"
                    :src="item.activityImg"
                  />
                </div>
                <div class="calendarLeftContentBottom">
                  <img class="avatarImg" :src="item.avatarImg" />
                  <div class="calendarLeftContentBottomIntroduction">
                    <div class="identity">{{ item.identity }}</div>
                    <div class="position">{{ item.position }}</div>
                    <div class="introduction">{{ item.introduction }}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div class="calendarRight">
          <Swiper :slidesPerView="3">
            <swiper-slide v-for="item in calendarRightContent" :key="item.id">
              <div class="calendarRightContent">
                <div class="calendarRightContentMonth">
                  {{ item.month }}
                </div>
                <div class="calendarRightContentTop">
                  <div class="calendarRightContentTitle">{{ item.title }}</div>
                  <div class="calendarRightContentTime">
                    <span class="calendarRightContentTimeLeft">
                      {{ getTimeLeft(item.time) }}
                    </span>
                    <span class="calendarRightContentTimeRight">
                      |{{ getTimeRight(item.time) }}
                    </span>
                  </div>
                  <div class="calendarRightContentTimeLast">
                    {{ item.tag }}
                  </div>
                </div>
                <div class="calendarRightContentImg">
                  <img
                    class="calendarRightContentActivityImg"
                    :src="item.activityImg"
                  />
                </div>
                <div class="calendarRightContentBottom">
                  <div class="calendarRightContentBottomIntroduction">
                    {{ item.introduction }}
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="ourWork">
      <div class="ourWorkTop">
        <div class="ourWorkDotDiv">
          <img class="ourWorkDot" src="Activity3-1.png" alt="" />
        </div>
        <div class="ourWorkTitle">
          <div class="ourWorkTitleCicle"></div>
          <div class="ourWorkSingleDot"></div>
          <div class="ourWorkTitleText">work 我们的作品</div>
        </div>
        <div class="ourWorkContent">
          <div class="ourWorkContentLeft">
            <div class="ourWorkContentLeftImgDiv">
              <img class="ourWorkContentLeftImg" src="Activity5-1.jpg" alt="" />
              <div class="ourWorkContentLeftImgTextBackGround">
                <div class="ourWorkContentLeftImgText">
                  <div class="title">户外交流会</div>
                  <div class="date">2022/9/16</div>
                  <div class="introduction">
                    案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么文字暂时还不知道写什么案列文字暂时还不知...
                  </div>
                </div>
              </div>
            </div>
            <div class="ourWorkContentLeftBottomDiv">
              <button class="ourWorkContentLeftBottom">了解更多→</button>
            </div>
          </div>
          <div class="ourWorkContentRight">
            <div class="ourWorkContentRightImgDiv">
              <img
                class="ourWorkContentRightImg"
                src="Activity5-2.jpg"
                alt=""
              />
              <div class="ourWorkContentRightInBox">
                <div class="type">参与活动照片成果展</div>
                <div class="title">广州城市艺术展讲座</div>
                <div class="date">2022/08/15</div>
                <div class="introduction">
                  案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么
                </div>
                <img class="image" src="Activity5-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { reactive, ref } from "@vue/reactivity";
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";

export default {
  name: "ActivityPage",
  components: {
    Swiper,
    SwiperSlide,
    HeadNav,
    FooterNav,
  },
  setup() {
    let topSwiper = reactive([
      {
        id: 1,
        src: "Activity1-1.jpg",
        activity: {
          name: "广州城市艺术展",
          content:
            "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道 写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案",
          img: "Activity1-2.svg",
        },
      },
      {
        id: 2,
        src: "Activity1-1.jpg",
        activity: {
          name: "广州城市艺术展",
          content:
            "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道 写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案",
          img: "Activity1-2.svg",
        },
      },
      {
        id: 3,
        src: "Activity1-1.jpg",
        activity: {
          name: "广州城市艺术展",
          content:
            "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道 写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案",
          img: "Activity1-2.svg",
        },
      },
      {
        id: 4,
        src: "Activity1-1.jpg",
        activity: {
          name: "广州城市艺术展",
          content:
            "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道 写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案",
          img: "Activity1-2.svg",
        },
      },
    ]);
    let calendarLeftContent = reactive([
      {
        id: 1,
        title: "广州城市艺术展讲座",
        time: "2022/09/15  |  15：30",
        activityImg: "Activity4-1.jpg",
        avatarImg: "Activity4-2.png",
        identity: "华南理工大学 教授",
        position: "项目负责人",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
      {
        id: 2,
        title: "广州城市艺术展讲座",
        time: "2022/08/15  |  15：30",
        activityImg: "Activity4-1.jpg",
        avatarImg: "Activity4-2.png",
        identity: "华南理工大学 教授",
        position: "项目负责人",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
      {
        id: 3,
        title: "广州城市艺术展讲座",
        time: "2022/08/15  |  15：30",
        activityImg: "Activity4-1.jpg",
        avatarImg: "Activity4-2.png",
        identity: "华南理工大学 教授",
        position: "项目负责人",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
      {
        id: 4,
        title: "广州城市艺术展讲座",
        time: "2022/08/15  |  15：30",
        activityImg: "Activity4-1.jpg",
        avatarImg: "Activity4-2.png",
        identity: "华南理工大学 教授",
        position: "项目负责人",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
    ]);
    let month = ref("八月August");
    let calendarRightContent = reactive([
      {
        id: 1,
        month: "九月  September",
        title: "AI艺术线上座谈会",
        time: "2022/09/15 | 10：00",
        tag: "30 minutes last",
        activityImg: "Activity4-3.jpg",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
      {
        id: 2,
        month: "九月  September",
        title: "AI艺术线上座谈会",
        time: "2022/09/15 | 10：00",
        tag: "30 minutes last",
        activityImg: "Activity4-4.jpg",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
      {
        id: 3,
        month: "十月 October",
        title: "AI艺术线上座谈会",
        time: "2022/09/15 ",
        tag: "30 minutes read",
        activityImg: "Activity4-5.jpg",
        introduction:
          "案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么案列文字暂时还不知道写什么么",
      },
    ]);
    // console.log(this.$refs.singleSwiperSlide);
    // let calendarLeftContentRef = ref(null);
    // let heightList = ref([]);
    // let maxcalendarLeftContentHeight = ref("40rem");
    // onMounted(() => {
    //   // console.log("calendarLeftContentRef.value", calendarLeftContentRef.value);
    //   calendarLeftContentRef.value.forEach((element) => {
    //     // console.log("element.offsetHeight", element.offsetHeight);
    //     heightList.value.push(element.offsetHeight);
    //   });
    //   // console.log("heightList", heightList);
    //   const maxHeight = Math.max(...heightList.value);
    //   maxcalendarLeftContentHeight = `${Math.ceil(maxHeight / 16) + 5}rem`;
    //   // console.log("maxcalendarLeftContentHeight", maxcalendarLeftContentHeight);
    // });
    // watch(
    //   calendarLeftContentRef.value,
    //   () => {
    //     console.log(
    //       "calendarLeftContentRef.value",
    //       calendarLeftContentRef.value
    //     );
    //   }
    // );

    return {
      topSwiper,
      calendarLeftContent,
      month,
      calendarRightContent,
      // calendarLeftContentRef,
      // maxcalendarLeftContentHeight,
      modules: [Pagination, Scrollbar],
    };
  },
  methods: {
    getTimeLeft(str) {
      const timeLeft = str.split("|");
      return timeLeft[0];
    },
    getTimeRight(str) {
      const timeLeft = str.split("|");
      return timeLeft[1];
    },
    getTimeDifference(str) {
      const firstSlice = str.split("|");
      const secondSlice = firstSlice[0].split("/");
      const thirdSlice = firstSlice[1].split("：");
      const targetDate = new Date(
        secondSlice[0],
        secondSlice[1] - 1,
        secondSlice[2],
        thirdSlice[0],
        thirdSlice[1]
      );
      const today = new Date();
      const dateDifference = targetDate - today;
      const days = Math.floor(dateDifference / (24 * 3600 * 1000));
      const level1 = dateDifference % (24 * 3600 * 1000); //计算去掉天数后剩余的毫秒数
      const level2 = dateDifference % (3600 * 1000); //计算去掉小时数后剩余的毫秒数
      const hours = Math.floor(level1 / (3600 * 1000));
      const minutes = Math.floor(level2 / (60 * 1000));
      if (days < 0 || hours < 0 || minutes < 0) {
        return "已展开";
      } else {
        return days + "days" + hours + "hours" + minutes + "minutes last";
      }
    },
  },
  watch() {},
};
</script>

<style scoped>
.ActivityPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.topSwiperContent {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
}
.topSwiperContentDate {
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 20rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.38%, #737373 100%);
}
.topSwiperContentDateText {
  font-family: "Aleo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 4.5rem;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
  color: #ffffff;
  margin: 2rem 5rem;
}
.topSwiperContentRight {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 33%;
  height: 100%;
  background: rgba(98, 98, 98, 0.29);
  backdrop-filter: blur(20px);
}
.topSwiperContentRightCity {
  width: 100%;
  max-height: 59%;
  text-align: end;
}
.topSwiperContentActivity {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 65%;
}
.topSwiperContentActivityName {
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 4.5rem;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 1.5rem;
}
.topSwiperContentActivityContent {
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.825rem;
  line-height: 1.5625rem;
  /* or 179% */

  color: #ffffff;
}
.topSwiperContentActivityButtonDiv {
  width: 100%;
  margin: 1.5rem 0;
}
.topSwiperContentActivityButton {
  width: 100%;
  height: 4.5rem;
  background: #faed00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-transform: uppercase;
  color: #000000;
  border: none;
  border-radius: 8px;
}
.topSwiper .swiper-slide {
  width: 100% !important;
}
.topSwiper .swiper-pagination-bullet {
  background: #ffffff;
  opacity: 100;
}
.topSwiper .swiper-pagination-bullet-active {
  --swiper-theme-color: #faed00;
  background: #faed00;
}

.weCanDiv {
  width: 100%;
  margin: 1rem 0;
}
.weCanTitle {
  width: 95%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  display: flex;
  align-items: center;
  color: #531dab;
  margin: 0 4rem;
  margin-bottom: -1.5rem;
}
.weCanContent {
  position: relative;
  display: flex;
  width: 100%;
}
.weCanArrorIcon {
  position: absolute;
  z-index: 0;
}
.weCanLeft {
  z-index: 500;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  position: relative;
}
.weCanLeftImgAndText {
  margin: 1rem 0;
  max-width: 20%;
}
.weCanLeftText {
  display: flex;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  color: #000000;
  margin-top: 1rem;
}
.weCanLeftBackground {
  position: absolute;
  z-index: -2;
  margin: 7rem 0;
  height: 75%;
  width: 100%;
}
.weCanRight {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}
.weCanRightContent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 3rem;
  border: 4px dashed #9747ff;
  border-radius: 1.25rem;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.weCanRightTitle {
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 1.5625rem;
  text-align: center;
  color: #000000;
  margin-bottom: 1.75rem;
}
.weCanRightText {
  width: 80%;
  display: flex;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5625rem;
  color: #000000;
}

.calendar {
  width: 100%;
  height: 100%;
  /* margin-bottom: 20rem; */
}
.calendarTop {
  width: 100%;
  height: 10rem;
}
.calendarDot {
  position: absolute;
  z-index: -1;
  margin: 1rem 3rem;
}
.calendarTitle {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.calendarTitleCicle {
  position: absolute;
  z-index: -1;
  height: 4.5rem;
  width: 4.5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  border-radius: 100%;
  background-color: #faed00;
}
.calendarTitleText {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3.5rem;
  color: #531dab;
}
.calendarTitleTriangle {
  margin-left: 1rem;
}
.calendarContent {
  width: 100%;
  height: 60rem;
  display: flex;
  overflow-y: hidden;
}
.calendarLeft {
  width: 30%;
  height: 100%;
  margin-right: 1rem;
}

.calendarMonth {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  color: #531dab;
  margin: 4rem 3rem;
}
.calendarLeft .swiper {
  height: 50rem !important;
  margin: 0 1rem 0 2rem;
}
.calendarLeft .swiper-slide {
  height: 100% !important;
}
.calendarLeft .swiper-scrollbar.swiper-scrollbar-vertical {
  height: 30rem !important;
  margin-top: 3rem;
}
.calendarLeftContent {
  width: 100%;
}
.calendarLeftContentTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #000000;
}
.calendarLeftContentTimeAbout {
  display: flex;
  margin: 2rem 0;
  max-width: 95%;
  justify-content: space-between;
}
.calendarLeftContentTime {
  font-family: "Aleo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
}
.calendarLeftContentTimeLeft {
  color: #597ef7;
}
.calendarLeftContentTimeLast {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  text-transform: lowercase;
  color: #ff6e5b;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: #ff402c solid;
  border-radius: 0.4rem;
  border-width: thin;
  padding: 0.2rem;
}
.calendarLeftCenterImg {
  width: 95%;
  display: flex;
  justify-content: center;
}
.calendarLeftContentActivityImg {
  height: 20rem;
  max-width: 100%;
  object-fit: contain;
}
.calendarLeftContentBottom {
  display: flex;
  width: 95%;
  margin: 1.5rem 0;
}
.calendarLeftContentBottom .avatarImg {
  max-width: 25%;
  object-fit: contain;
}
.calendarLeftContentBottomIntroduction {
  width: 70%;
  margin-left: 1rem;
}
.calendarLeftContentBottomIntroduction .identity {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #8c8c8c;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.calendarLeftContentBottomIntroduction .position {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #531dab;
}
.calendarLeftContentBottomIntroduction .introduction {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
}
.calendarContent .swiper-scrollbar-drag {
  background: #597ef7;
}

.calendarRight::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    270deg,
    rgba(139, 165, 250, 0.6) 70.85%,
    rgba(146, 250, 255, 0.6) 107.97%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.calendarRight {
  position: relative;
  width: 70%;
  height: 100%;
}
.calendarRight .swiper-slide {
  /* width: 35% !important; */
  display: flex;
  justify-content: center;
}
.calendarRightContent {
  width: 85%;
}
.calendarRightContentMonth {
  margin: 4rem 3rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  color: #ffffff;
}
.calendarRightContentTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #000000;
}
.calendarRightContentTime {
  font-family: "Aleo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.065rem;
  text-transform: uppercase;
  margin: 1rem 0;
}
.calendarRightContentTimeLeft {
  color: #597ef7;
}
.calendarRightContentTimeLast {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  text-transform: lowercase;
  color: #ff6e5b;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: #ff402c solid;
  border-radius: 0.4rem;
  border-width: thin;
  display: inline-flex;
  padding: 0.2rem;
  margin-bottom: 2rem;
}
.calendarRightContentImg {
  max-width: 100%;
  max-height: 50%;
  object-fit: contain;
}
.calendarRightContentActivityImg {
  width: 100%;
  max-height: 100%;
}
.calendarRightContentBottom {
  margin-top: 2rem;
}
.calendarRightContentBottomIntroduction {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
}

.ourWork {
  width: 100%;
  height: 120rem;
  background-image: url("~@/assets/ActivityBottomBackground.svg");
  background-size: cover;
  margin-top: -10rem;
}
.ourWorkTop {
  margin-top: 11rem;
  width: 100%;
  height: 15rem;
  position: relative;
}
.ourWorkDotDiv {
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.ourWorkDot {
  margin: 1rem 3rem;
}
.ourWorkTitle {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.ourWorkTitleText {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3.5rem;
  color: #531dab;
}
.ourWorkTitleCicle {
  background: #faed00;
  height: 15rem;
  width: 15rem;
  border-radius: 100%;
  margin-left: 22rem;
  z-index: -1;
  position: absolute;
}
.ourWorkSingleDot {
  background: #faed00;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin-left: 45rem;
  margin-top: 12rem;
  z-index: -1;
  position: absolute;
}
.ourWorkContent {
  width: 100%;
  height: 89rem;
  margin-top: 5rem;
  display: flex;
}
.ourWorkContentLeft {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ourWorkContentLeftImgDiv {
  width: 85%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-end;
}
.ourWorkContentLeftImg {
  width: 100%;
}
.ourWorkContentLeftImgTextBackGround {
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 18.68%,
    rgba(0, 0, 0, 0.7) 101.91%
  );
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.ourWorkContentLeftImgText {
  width: 85%;
  margin: 3rem 0;
}
.ourWorkContentLeftImgText .title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  color: #ffffff;
}
.ourWorkContentLeftImgText .date {
  font-family: "Aleo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #83f9ff;
}
.ourWorkContentLeftImgText .introduction {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #ffffff;
}
.ourWorkContentLeftBottomDiv {
  width: 100%;
}
.ourWorkContentLeftBottom {
  width: 30%;
  margin: 6% 3%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: #000000;
  background: #faed00;
  box-shadow: 0rem 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  border: none;
}
.ourWorkContentRight {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ourWorkContentRightImgDiv {
  width: 85%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: flex-end;
  margin-top: 10%;
}
.ourWorkContentRightImg {
  width: 100%;
}
.ourWorkContentRightInBox {
  position: absolute;
  z-index: 1;
  max-width: 50%;
  max-height: 50%;
  background: rgba(244, 244, 244, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10% 2% 5% 1%;
  margin: 8% 6%;
}
.ourWorkContentRightInBox .type {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
}
.ourWorkContentRightInBox .title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  color: #000000;
}
.ourWorkContentRightInBox .date {
  font-family: "Aleo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 4.5rem;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #597ef7;
}
.ourWorkContentRightInBox .introduction {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
  max-width: 60%;
}
.ourWorkContentRightInBox .image {
  max-width: 90%;
}
</style>