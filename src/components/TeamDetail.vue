<template>
  <div class="TeamDetail">
    <HeadNav></HeadNav>
    <div class="ourTeam">
      <img src="../assets/BigLogo.svg" />
      <div class="ourTeamBottom">
        <div class="ourTeamTitle">我们的团队</div>
        <div class="ourTeamSlogan">团队理念/slogan</div>
      </div>
    </div>

    <div class="subjectTitle">学科构成</div>
    <div class="subject">
      <div class="subject-subjectname">
        <div class="subject-subjectname-selected">
          <div class="subject-subjectname-title">计算机与软件</div>
          <div class="subject-subjectname-num">12人</div>
          <div class=""></div>
          <img
            src="../assets/Ellipse7.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname">
        <div class="">
          <div class="subject-subjectname-notselected"></div>
          <img
            src="../assets/Ellipse8.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname">
        <div class="">
          <div class="subject-subjectname-notselected"></div>
          <img
            src="../assets/Ellipse9.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname">
        <div class="">
          <div class="subject-subjectname-notselected"></div>
          <img
            src="../assets/Ellipse10.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname">
        <div class="">
          <div class="subject-subjectname-notselected"></div>
          <img
            src="../assets/Ellipse11.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
    </div>

    <div class="title">计算机科学与软件</div>
    <div class="titleDesc">项目系统开发与运营、宣传与活动</div>

    <div class="member">
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/Rectangle5773.svg" class="member-detailItem-img" />
        <div class="member-detailItem-name">贾吕山</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  
import { useRouter } from "vue-router";
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
export default {
    setup() {
        const router = useRouter();
        return {
            router,
        };
    },
    components: { HeadNav, FooterNav }
};
</script>

<style scoped>
.TeamDetail {
  width: 100%;
  margin: 0 auto;
}
.ourTeam {
  background: url("../assets/Rectangle5731.svg");
  background-size: cover;
  width: 100%;
  height: 45.4375rem;
  margin: 0 auto;
  position: relative;
}
.ourTeam > img {
  width: 7.0625rem;
  height: 10.25rem;
  position: absolute;
  top: 14.6875rem;
  left: 47%;
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
  width: 100%;
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
.subjectTitle {
  margin-top: 5.6875rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 1.5625rem;
  text-align: center;
  color: #3a3a3a;
}
.subject {
  display: flex;
  justify-content: space-around;

  margin-top: 3.75rem;
  height: 11.75rem;
}

.subject-subjectname {
  height: 11.75rem;
  width: 11.75rem;

  border-radius: 50%;

  position: relative;

  cursor: pointer;
}
.subject-subjectname-subjectimg {
  width: 100%;
  height: 100%;

  border-radius: 50%;
  position: absolute;
}
.subject-subjectname-selected {
  border: solid 0.9375rem transparent;

  left: -0.9375rem;
  top: -0.9375rem;

  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(180deg, #531dab 0%, rgba(0, 159, 232, 0) 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: inline-grid;
  width: 100%;
  height: 100%;
  position: absolute;
  vertical-align: center;
}
.subject-subjectname-notselected {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  width: 100%;
  height: 100%;
  border-radius: 50%;

  z-index: 100;
  position: absolute;
}
.title {
  margin-top: 8rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 1.5625rem;
  /* or 96% */

  text-align: center;

  color: #3a3a3a;
}
.titleDesc {
  margin-top: 1.25rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  /* or 125% */

  text-align: center;

  color: #434343;
}
.subject-subjectname-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  text-align: center;

  color: #ffffff;
  z-index: 150;

  width: 100%;
  text-align: center;
}
.subject-subjectname-num {
  position: absolute;
  top: 8.4375rem;
  left: 50%;
  transform: translateX(-50%);

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  text-align: center;
  color: #ffffff;

  z-index: 150;

  width: 100%;
  text-align: center;
}
.member {
  margin: 0 auto;
  flex-wrap: wrap;
  margin-left: 5.7%;
  margin-right: 5.7%;
}
.member-detailItem {
  width: 19%;
  display: inline-block;
  margin-top: 4.6875rem;
  margin-right:  5.2%;
}
.member-detailItem:nth-of-type(4n+1) {
  margin-left: 5.2%;
}
.member-detailItem:nth-of-type(4n) {
  margin-right: 0;
}
.member-detailItem-img {
  width: 100%;
}
.member-detailItem-name {
  margin-top: 1.5rem;
  width: 100%;
  height: 1.5rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #000000;
}
.member-detailItem-occupation {
  margin-top: 0.25rem;
  width: 21.75rem;
  height: 1.5625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 140%;
  color: #8c8c8c;
}
.member-detailItem-workfor {
  margin-top: 0.5rem;
  width: 21.75rem;
  height: 1.375rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  color: #000000;
}
</style>