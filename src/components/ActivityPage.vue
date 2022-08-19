<template>
  <div class="ActivityPage">
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
          <Swiper direction="vertical" :slidesPerView="1">
            <swiper-slide v-for="item in calendarLeftContent" :key="item.id">
              <div class="calendarLeftContent">
                <div class="calendarLeftContentTop">
                  <div class="calendarLeftContentTitle">{{ item.title }}</div>
                  <div class="calendarLeftContentTimeAbout">
                    <div class="calendarLeftContentTime">{{ item.time }}</div>
                    <div class="calendarLeftContentTimeLeft">
                      30 minutes last
                    </div>
                  </div>
                </div>
                <img
                  class="calendarLeftContentActivityImg"
                  :src="item.activityImg"
                />
                <div class="calendarLeftContentBottom">
                  
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div class="calendarRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { reactive } from "@vue/reactivity";

export default {
  name: "ActivityPage",
  components: {
    Swiper,
    SwiperSlide,
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
        time: "2022/08/15  |  15：30",
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
    let month = "八月August";

    return {
      topSwiper,
      calendarLeftContent,
      month,
      modules: [Pagination],
    };
  },
};
</script>

<style>
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
  font-size: 0.625rem;
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
  height: 55rem;
  display: flex;
}
.calendarLeft {
  width: 30%;
  height: 100%;
  /* height: 100%; */
}
.calendarRight {
  width: 70%;
  height: 100%;
}
.calendarLeft .swiper {
  height: 100% !important;
}
.calendarLeft .swiper-slide {
  height: 100% !important;
}
.calendarLeftContent {
  width: 100%;
  height: 100%;
}
.calendarLeftContentTimeAbout{
  display: flex;
}
</style>