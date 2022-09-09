<template>
  <div>
    <HeadNav></HeadNav>
    <div style="margin-bottom: 15.875rem">
      <div class="GenerateArt1">
        <p class="GenerateArtBack" @click="goPage('Home')">&lt;返回</p>
        <div class="GenerateArt">
          <!-- <span class="GenerateArtShadow"></span> -->
          <div>Archi&Casca<br />建筑印象&层叠生成艺术</div>
        </div>
        <div class="stepOne">选择场景风格</div>
        <div class="choose-your-scenario">第一步</div>
      </div>
      <div class="Generate">
        <template v-for="(item, index) in scenerioList" :key="index">
          <template v-if="index < 4">
            <div
              @click="handleClickScenerio(item.scene)"
              :class="{ currentGenerate: scenerio == item.scene }"
            >
              <img :src="item.url" />
              <p>{{ item.scene }}</p>
            </div>
          </template>
        </template>
        <!-- <div
          @click="handleClickScenerio('sketch')"
          :class="{ currentGenerate: scenerio == 'sketch' }"
        >
          <img src="../assets/image18.svg" />
          <p>天际线</p>
        </div>
        <div
          @click="handleClickScenerio('grid')"
          :class="{ currentGenerate: scenerio == 'grid' }"
        >
          <img src="../assets/3c3ee662d122cf2e2a7279fc9c3c1a612.svg" />
          <p>网格</p>
        </div>
        <div
          @click="handleClickScenerio('raster')"
          :class="{ currentGenerate: scenerio == 'raster' }"
        >
          <img src="../assets/image17.svg" />
          <p>条纹</p>
        </div>
        <div
          @click="handleClickScenerio('fractal')"
          :class="{ currentGenerate: scenerio == 'fractal' }"
        >
          <img src="../assets/image17.svg" />
          <p>条纹</p>
        </div> -->
      </div>
      <div class="nextStep" v-show="scenerio" @click="goPage('GenerateArt2')">
        下一步
      </div>
      <div class="todo-button-outer">
        <div class="todo-button-inner"></div>
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
import axios from "axios";
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
  beforeMount() {
    axios.get("/ac/api/image/scene").then(({ data }) => {
      if (data.code === 200) {
        data = data.data;
        this.scenerioList = data.filter((item)=>{
          return item.scene=='grid'||item.scene=='sketch'||item.scene=='fractal'||item.scene=='raster'
        });
      } else {
        alert("请求失败请重试");
      }
    });
  },
  data() {
    return {
      scenerio: "",
      scenerioList: [],
    };
  },
  computed: {},
  methods: {
    goPage(pageName) {
      this.router.push({ name: pageName, params: { Scenerio: this.scenerio } });
    },
    handleClickScenerio: function (name) {
      if (name == this.scenerio) {
        this.scenerio = "";
      } else this.scenerio = name;
    },
  },
};
</script>

<style scoped>
.GenerateArt1 {
  width: 100%;
  margin: 0 auto;
}
.GenerateArtBack {
  margin-top: 2.625rem;
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
.GenerateArt {
  width: 89.5%;
  height: 31.625rem;

  margin-top: 3.625rem;
  margin-left: 5.2%;
  border-radius: 1.25rem;

  background: #ab97ff;

  position: relative;
}
.GenerateArt > div {
  height: 8rem;

  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);

  position: absolute;

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
.stepOne {
  margin: 0 auto;
  margin-top: 5.6875rem;

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

.Generate {
  margin: 0 auto;
  margin-top: 3.875rem;
  height: 70rem;
  width: 70%;
  /* display: flex;
  flex-wrap: wrap; */
  /* position: relative; */
}

.Generate div {
  height: 30rem;
  width: 45%;
  /* border: 1px solid; */
  box-sizing: border-box;
  margin-right: 10%;
  margin-bottom: 6rem;
  background: rgba(83, 29, 171, 0.2);
  border-radius: 1.25rem;
  position: relative;

  cursor: pointer;

  display: inline-block;
}

.Generate div:nth-last-of-type(-n + 2) {
  margin-bottom: 0px;
}

.Generate div:nth-of-type(2n) {
  margin-right: 0px;
}
.Generate p {
  height: auto;

  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  margin: 0;

  position: absolute;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;
}
.Generate .currentGenerate {
  background: rgba(83, 29, 171, 0.4);
}
.Generate img {
  width: 70%;

  left: 50%;
  top: 20%;
  transform: translateX(-50%);

  position: absolute;
}
.nextStep {
  width: 16.6%;
  height: 6.25rem;

  margin: 0 auto;
  margin-top: 8rem;
  border-radius: 1.25rem;

  background: #faed00;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 6.25rem;
  text-align: center;
  text-transform: uppercase;
  color: #531dab;

  cursor: pointer;
}
.wave {
  width: 100%;
  margin-top: 5.6875rem;
  height: 12.5rem;
  background: url("../assets/wave.svg");
}
.todo-button-inner {
  margin-bottom: 3rem;
}
.todo-button-outer {
  width: 100%;
  height: 20rem;
  background-image: url("~@/assets/Detail-bottom-background.svg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}
/* .wave>img{
  width: 100%;
} */
</style>