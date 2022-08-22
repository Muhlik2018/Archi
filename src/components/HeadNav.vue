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
          <div @click="goPage('GenerateArt1')">创作</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../js/flexible.js";
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

<style scoped>
.Headnav {
  width: 100%;

  margin: 0 auto;

  position: relative;
}
.Headnav > div {
  width: 100%;
  height: 4.5625rem;

  box-shadow: 0 1rem 1rem -1rem #666;
}
.nav {
  float: right;

  vertical-align: top;
}
.nav > div {
  
  width: 6.25rem;
  height: 4.5625rem;
  
  margin-right: 3.125rem;
  
  display: inline-block;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 4.5625rem;
  text-align: center;
  color: #531dab;

  cursor: pointer;

  vertical-align: top;

  -webkit-text-size-adjust: none;
}

.icon {
  
  width: 2.75rem;
  height: 3.9312rem;

  display: inline-block;
  
  vertical-align: middle;
}

.name {
  width: 22rem;
  height: 4.5625rem;

  float: left;

  vertical-align: top;

  text-align: center;
}
.frame {
  height: 100%;

  margin-left: 1.0625rem;
  
  top: 50%;
  transform: translateY(-50%);
  
  position: absolute;
  
  vertical-align: bottom;
  
  cursor: pointer;
}
.home {
  height: 100%;

  margin-left: 8.1875rem;
  
  top: 50%;
  transform: translateY(-50%);
  
  position: absolute;
  
  cursor: pointer;

  vertical-align: middle;
  
}
.frame img {
  width: 2.5625rem;
  height: 3.75rem;
  
  top: 50%;
  transform: translateY(-50%);
  
  position: absolute;
}
.home img {
  
  width: 2.5rem;
  height: 1.75rem;
  
  top: 50%;
  transform: translateY(-50%);
  
  position: absolute;
  
}
</style>
