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
        <div
          @click="handleClickScenerio('sketch')"
          :class="{ currentGenerate: sketch }"
        >
          <img src="../assets/image18.svg" />
          <p>天际线</p>
        </div>
        <div
          @click="handleClickScenerio('grid')"
          :class="{ currentGenerate: grid }"
        >
          <img src="../assets/3c3ee662d122cf2e2a7279fc9c3c1a612.svg" />
          <p>网格</p>
        </div>
        <div
          @click="handleClickScenerio('raster')"
          :class="{ currentGenerate: raster }"
        >
          <img src="../assets/image17.svg" />
          <p>条纹</p>
        </div>
      </div>
      <div class="nextStep" v-show="isSelected" @click="goPage('GenerateArt2')">
        下一步
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
  data() {
    return {
      grid: false,
      raster: false,
      sketch: false,
      fractal: false,
    };
  },
  computed: {
    isSelected: function () {
      return this.grid || this.raster || this.sketch || this.fractal;
    },
  },
  methods: {
    goPage(pageName) {
      this.router.push({ name: pageName, params: {Scenerio:this.SelectedParams()} });
    },
    handleClickScenerio: function (name) {
      if (
        (name === "grid" && this.grid) ||
        (name === "stripe" && this.raster) ||
        (name === "sketch" && this.sketch) ||
        (name === "fractal" && this.fractal)
      ) {
        this.grid = false;
        this.raster = false;
        this.sketch = false;
        this.fractal = false;
        return;
      }
      this.grid = false;
      this.raster = false;
      this.sketch = false;
      this.fractal = false;
      if (name === "grid") this.grid = true;
      else if (name === "raster") this.raster = true;
      else if (name === "sketch") this.sketch = true;
      else if (name === "fractal") this.fractal = true;
    },

    SelectedParams: function () {
      if (this.grid) return 'grid';
      if (this.stripe) return 'stripe';
      if (this.sketch) return 'sketch';
      if (this.fractal) return 'fractal';
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
  height: 40.625rem;
  width: 87.5%;

  margin: 0 auto;
  margin-top: 3.875rem;

  display: flex;
  flex-wrap: wrap;
  /* position: relative; */
}

.Generate div:nth-of-type(1) {
  margin-left: 5.7%;
}
.Generate div {
  height: 40.625rem;
  width: 25%;

  margin-right: 5.7%;
  margin-bottom: 6.25rem;
  border-radius: 1.25rem;
  box-sizing: border-box;

  background: rgba(83, 29, 171, 0.2);

  position: relative;

  cursor: pointer;
}

/* .Generate div:nth-last-of-type(-n + 1) {
  margin-bottom: 0px;
} */

.Generate div:nth-of-type(n + 3) {
  margin-right: 0px;
}
.Generate p {
  height: auto;

  left: 50%;
  top: 35.5rem;
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
  width: 60%;

  left: 50%;
  top: 10%;
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
</style>