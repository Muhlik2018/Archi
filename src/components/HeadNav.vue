<template>
  <div class="Headnav">
    <div style="display: flex">
      <div style="flex: 1;display:flex;align-items:center">
        <div class="frame" @click="goPage('Home')"><img src="../assets/ArchiLogo.svg" alt="" /></div>
        <div class="home"><img src="../assets/Home.svg" alt="" /></div>
      </div>
      <div>
        <div class="nav">
          <div @click="goPage('TeamMembers')">关于我们</div>
          <div @click="goPage('CulturalCreation')">文创周边</div>
          <div @click="goPage('ArchiActivities')">活动</div>
          <div @click="goPage('ArchiCreate')">创作</div>
        </div>
      </div>
      <!-- <div class="frame"><img src="../assets/ArchiLogo.svg" alt="" /></div>
      <div class="home"><img src="../assets/Home.svg" alt="" /></div>
      <div class="nav">
        <div>关于我们</div>
        <div>创作</div>
        <div>活动</div>
        <div>团队</div>
      </div> -->
    </div>
  </div>

  <!-- <div class="box"></div> -->
</template>

<script>
import "../js/flexible.js";
import { useRouter } from "vue-router";
export default {
    setup() {
    const router = useRouter();
    return {
      router,
    };
  },
    methods: {
    goPage(pageName) {
      this.router.push({name: pageName});
    },
  },
};
</script>

<style>
.Headnav {
  width: 120rem;
  margin: 0 auto;
  position: relative;

  /* margin-bottom: 2rem; */
}
.Headnav > div {
  width: 120rem;
  height: 4.5625rem;
}
.nav {
  float: right;
  vertical-align: top;
}
.nav > div {
  display: inline-block;
  width: 6.25rem;
  height: 4.5625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  /* align-items: center; */
  line-height: 4.5625rem;

  text-align: center;
  color: #531dab;
  cursor: pointer;

  vertical-align: top;
  margin-right: 3.125rem;

  -webkit-text-size-adjust: none;
}

.icon {
  vertical-align: middle;
  width: 2.75rem;
  height: 3.9312rem;
  display: inline-block;
}

.name {
  width: 22rem;
  height: 4.5625rem;
  float: left;

  vertical-align: top;

  text-align: center;
}
.frame {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1.0625rem;
  vertical-align: bottom;
  height: 100%;
}
.home {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8.1875rem;
  cursor: pointer;
  vertical-align: middle;
  height: 100%;
}
.frame img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5625rem;
  height: 3.75rem;
}
.home img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 1.75rem;
}
</style>

<!-- 20220811 晚-->