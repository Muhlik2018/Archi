<template>
  <div class="HomePage">
    <div class="to-generate">
      <div class="to-generate-footer">
        <div class="tgf-left">
          <div class="tgf-left-up">
            <div>生成艺术</div>
            <div>GENERATE ART</div>
          </div>
          <div class="tgf-left-down">
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
        <div class="tgf-right">
          <button class="tgf-right-button">去创作</button>
        </div>
      </div>
      <el-image src="1.svg" fit="contain" style="width: 100%"></el-image>
    </div>
    <div class="carousel">
      <el-carousel height="800px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <div class="carousel-box">
            <div class="carousel-text">
              <div class="carousel-text-title">TITLE</div>
              <div class="carousel-text-details">
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <el-image src="2.svg" fit="contain" style="width: 100%;transform: rotate(0);"></el-image>
            <el-image
              class="carousel-image-mask"
              src="2-1.svg"
              fit="contain"
              style="width: 100%"
            ></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.HomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.to-generate {
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.to-generate-footer {
  position: absolute;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tgf-left {
  width: 40rem;
  margin: 10rem;
}
.tgf-left-up {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 5rem;
  /* line-height: 7.625rem; */
  color: #ffffff;
}
.tgf-left-down {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  color: #ffffff;
}
.tgf-right-button {
  width: 20rem;
  height: 6rem;
  background: #faed00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #000000;
  border: none;
  margin: 10rem;
}
.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.el-carousel {
  width: 100%;
  margin: 2rem;
}
.carousel-box {
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.carousel-image-mask {
  position: absolute;
  width: 100%;
  z-index: 500;
}
.carousel-text {
  position: absolute;
  width: 35rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin: 3rem;
  transform: rotate(0);
}
.carousel-text-title {
  font-family: "Arimo";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.5rem;
  text-transform: uppercase;
  color: #ffffff;
}
.carousel-text-details {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  color: #ffffff;
}
</style>