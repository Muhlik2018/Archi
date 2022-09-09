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
      <div class="subject-subjectname" @click="selectSubject('computer')">
        <div :class="{ selected: subject == 'computer' }">
          <div class="subject-subjectname-title">计算机与软件</div>
          <div class="subject-subjectname-num">12人</div>
          <div :class="{ notselected: subject != 'computer' }"></div>
          <img
            src="../assets/Ellipse7.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname" @click="selectSubject('design')">
        <div :class="{ selected: subject == 'design' }">
          <div class="subject-subjectname-title">建筑/艺术设计</div>
          <div class="subject-subjectname-num">14人</div>
          <div :class="{ notselected: subject != 'design' }"></div>
          <img
            src="../assets/Ellipse8.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname" @click="selectSubject('math')">
        <div :class="{ selected: subject == 'math' }">
          <div class="subject-subjectname-title">数学</div>
          <div class="subject-subjectname-num">12人</div>
          <div :class="{ notselected: subject != 'math' }"></div>
          <img
            src="../assets/Ellipse9.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname" @click="selectSubject('information')">
        <div :class="{ selected: subject == 'information' }">
          <div class="subject-subjectname-title">信息与交互设计</div>
          <div class="subject-subjectname-num">9人</div>
          <div :class="{ notselected: subject != 'information' }"></div>
          <img
            src="../assets/Ellipse10.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
      <div class="subject-subjectname" @click="selectSubject('finance')">
        <div :class="{ selected: subject == 'finance' }">
          <div class="subject-subjectname-title">金融/工商管理</div>
          <div class="subject-subjectname-num">6人</div>
          <div :class="{ notselected: subject != 'finance' }"></div>
          <img
            src="../assets/Ellipse11.svg"
            class="subject-subjectname-subjectimg"
          />
        </div>
      </div>
    </div>

    <div class="title" v-if="false">{{SubjectCnName}}</div>
    <div class="titleDesc" v-if="false">项目系统开发与运营、宣传与活动</div>

    <div class="member">
      <div class="member-detailItem">
        <img src="../assets/陈春华.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">陈春华</div>
        <div class="member-detailItem-occupation">华南理工大学 教授</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/董诗语.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">董诗语</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/方惠锋.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">方惠锋</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/龚小榆.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">龚小榆</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/胡辰昕.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">胡辰昕</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/郭琳莹.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">郭琳莹</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/赖柏瀛.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">赖柏瀛</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/肖承栋.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">肖承栋</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目负责人</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/罗冠宇.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">罗冠宇</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/简合谊.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">简合谊</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/章宇思.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">章宇思</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/王晶晶.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">王晶晶</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/柳羽默.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">柳羽默</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/林雯尉.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">林雯尉</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/林伊霞.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">林伊霞</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/巫睿燊.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">巫睿燊</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/孙昌隆.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">孙昌隆</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/周逸凡.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">周逸凡</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
      </div>
      <div class="member-detailItem">
        <img src="../assets/王悦力.png" class="member-detailItem-img" />
        <div class="member-detailItem-name">王悦力</div>
        <div class="member-detailItem-occupation">华南理工大学 学生</div>
        <div class="member-detailItem-workfor">项目成员</div>
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
  components: { HeadNav, FooterNav },
  data() {
    return {
      subject:'computer'
    };
  },
  methods:{
    selectSubject(subjectName)
    {
      this.subject=subjectName;
    }
  },
  computed:{
    SubjectCnName(){
      if(this.subject=='computer')return '计算机与软件'
      else if(this.subject=='design')return '建筑/艺术设计'
      else if(this.subject=='math')return '数学'
      else if(this.subject=='information')return '信息与交互设计'
      else if(this.subject=='finance')return '金融/工商管理'
      else return ''
    }
  }
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
.selected {
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
.notselected {
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
  margin-right: 5.2%;
}
.member-detailItem:nth-of-type(4n + 1) {
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