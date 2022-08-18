<template>
  <div>
    <HeadNav></HeadNav>
    <div style="margin-bottom: 15.875rem">
      <div class="GenerateArt1">
        <p class="GenerateArtBack" @click="goPage('Home')">&lt;返回</p>
        <div class="GenerateArt">
          <!-- <span class="GenerateArtShadow"></span> -->
          <div>generative art<br />生成艺术</div>
        </div>
        <div class="stepOne">STEP ONE</div>
        <div class="choose-your-scenario">CHOOSE YOUR SCENARIO</div>
      </div>
      <div class="Generate">
        <div
          @click="handleClickScenerio('skyline')"
          :class="{ currentGenerate: skyline }"
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
          @click="handleClickScenerio('stripe')"
          :class="{ currentGenerate: stripe }"
        >
          <img src="../assets/image17.svg" />
          <p>条纹</p>
        </div>
      </div>
      <div class="nextStep" v-show="isSelected" @click="goPage('GenerateArt3')"><!-- 这里改成GenerateArt2 -->
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
      stripe: false,
      skyline: false,
      fractal: false,
    };
  },
  computed: {
    isSelected: function () {
      return this.grid || this.stripe || this.skyline || this.fractal;
    },
  },
  methods: {
    handleClickScenerio: function (name) {
      if (
        (name === "grid" && this.grid) ||
        (name === "stripe" && this.stripe) ||
        (name === "skyline" && this.skyline) ||
        (name === "fractal" && this.fractal)
      ) {
        this.grid = false;
        this.stripe = false;
        this.skyline = false;
        this.fractal = false;
        return;
      }
      this.grid = false;
      this.stripe = false;
      this.skyline = false;
      this.fractal = false;
      if (name === "grid") this.grid = true;
      else if (name === "stripe") this.stripe = true;
      else if (name === "skyline") this.skyline = true;
      else if (name === "fractal") this.fractal = true;
    },
    goPage(pageName) {
      this.router.push({ name: pageName });
    },
  },
};
</script>

<style>
.GenerateArt1 {
  width: 120rem;
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
  /* or 104% */

  color: #000000;
  cursor: pointer;
}
.GenerateArt {
  margin-top: 3.625rem;
  margin-left: 6.3125rem;
  width: 107.4375rem;
  height: 31.625rem;
  background: #AB97FF;
border-radius: 1.25rem;


  position: relative;
}
.GenerateArt > div {
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
.stepOne {
  margin: 0 auto;

  margin-top: 5.6875rem;
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

.Generate {
  margin: 0 auto;
  margin-top: 3.875rem;
  height: 40.625rem;
  width: 107.5rem;
  display: flex;
  flex-wrap: wrap;
  /* position: relative; */
}

.Generate div {
  height: 40.625rem;
  width: 31.25rem;
  /* border: 1px solid; */
  box-sizing: border-box;
  margin-right: 6.25rem;
  margin-bottom: 6.25rem;
  background: rgba(83, 29, 171, 0.2);
  border-radius: 1.25rem;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 35.5rem;
  margin: 0;
  height: auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 2.75rem;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #531dab;
}
.Generate .currentGenerate {
  background: rgba(83, 29, 171, 0.4);
}
.Generate img {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  width: 65%;
  /* top: 2rem; */
}
.nextStep {
  margin: 0 auto;
  width: 20.1875rem;
  height: 6.25rem;
  margin-top: 8rem;

  background: #faed00;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 6.25rem;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #531dab;

  cursor: pointer;
}
</style>