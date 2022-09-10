<template>
  <div class="Page">
    <HeadNav></HeadNav>
    <div v-if="homeScene.length > 0" class="carousel">
      <el-carousel height="61.875em" arrow="always" :autoplay="false" @change="turnPage" >
        <el-carousel-item v-for="(item, index) in homeScene" :key="index">
          <div class="carousel-box">
            <div class="carousel-text-box">
              <div class="carousel-text">
                <div class="carousel-text-title">{{ scene_name }}</div>
                <div class="carousel-text-details">
                  {{scene_descripe}}
                </div>
              </div>
            </div>
            <el-image :src="item.url" fit="contain" style="width: 100%">
            </el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-if="show == 0">
      <WaterFall ref="freedomWaterFall" :list="freedom_list" />
    </div>
    <div v-if="show == 1">
      <WaterFall ref="freedomWaterFall" :list="grid_list" />
    </div>
    <div v-if="show == 2">
      <WaterFall ref="freedomWaterFall" :list="raster_list" />
    </div>
    <div v-if="show == 3">
      <WaterFall4 ref="freedomWaterFall" :list="sketch_list" />
    </div>
    <div v-if="show == 4">
      <WaterFall ref="freedomWaterFall" :list="fractal_list" />
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeadNav from "./HeadNav.vue";
import FooterNav from "./FooterNav.vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "vue-router";
import WaterFall from "./WaterFall.vue";
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import WaterFall4 from "./WaterFall4.vue";

export default {
  components: {
    HeadNav,
    FooterNav,
    WaterFall,
    WaterFall4,
  },
  data() {
    return {
      scene_name:"",
      scene_descripe:''
    };
  },
  created() {
    this.getinfo();
  },
  setup() {
    const router = useRouter();
    const scene = ref(router.currentRoute.value.params.scene);
    let show = ref(0);
    let start = ref(0);
    let freedom_list = reactive([]);
    let grid_list = reactive([]);
    let sketch_list = reactive([]);
    let fractal_list = reactive([]);
    let raster_list = reactive([]);
    // console.log("scene.value", scene.value);
    if (scene.value === "freedom") {
      // console.log(0);
      show.value = 0;
      start.value = 0;
    } else if (scene.value === "grid") {
      // console.log(1);
      show.value = 1;
      start.value = 1;
    } else if (scene.value === "raster") {
      // console.log(2);
      show.value = 2;
      start.value = 2;
    } else if (scene.value === "sketch") {
      // console.log(3);
      show.value = 3;
      start.value = 3;
    } else if (scene.value === "fractal") {
      // console.log(4);
      show.value = 4;
      start.value = 4;
    } else {
      // console.log(0);
      show.value = 0;
      start.value = 0;
    }

    let homeScene = reactive([]);

    let getPic = () => {
      axios({
        method: "get",
        url: "/ac/api/archicasca/freedom",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      })
        .then((res) => {
             console.log("pic data", res);
          if (res.data.code === 200) {
            freedom_list.push(...res.data.data);
            // console.log(freedom_list);
            // console.log("freedom");
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          if (scene.value === "freedom") {
            show.value = -1;
            setTimeout(() => {
              show.value = 0;
            }, 20);
          }
        });

      axios({
        method: "get",
        url: "/ac/api/archicasca/grid",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      })
        .then((res) => {
          console.log("pic data", res);
          if (res.data.code === 200) {
            res.data.data.forEach((element) => {
              if (element.type === "svg") {
                element.url = element.url.replace(".svg", ".png");
              }
            });
            grid_list.push(...res.data.data);
            // console.log(grid_list);
            // console.log("grid");
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          if (scene.value === "grid") {
            show.value = -1;
            setTimeout(() => {
              show.value = 1;
            }, 20);
          }
        });

      axios({
        method: "get",
        url: "/ac/api/archicasca/sketch",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      })
        .then((res) => {
          //   console.log("pic data", res);
          if (res.data.code === 200) {
            res.data.data.forEach((element) => {
              if (element.type === "svg") {
                element.url = element.url.replace(".svg", ".png");
              }
            });
            sketch_list.push(...res.data.data);
            // console.log(sketch_list);
            // console.log("sketch");
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          if (scene.value === "sketch") {
            show.value = -1;
            setTimeout(() => {
              show.value = 3;
            }, 20);
          }
        });

      axios({
        method: "get",
        url: "/ac/api/archicasca/fractal",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      })
        .then((res) => {
          //   console.log("pic data", res);
          if (res.data.code === 200) {
            res.data.data.forEach((element) => {
              if (element.type === "svg") {
                element.url = element.url.replace(".svg", ".png");
              }
            });
            fractal_list.push(...res.data.data);
            // console.log(fractal_list);
            // console.log("fractal");
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          if (scene.value === "fractal") {
            show.value = -1;
            setTimeout(() => {
              show.value = 4;
            }, 20);
          }
        });

      axios({
        method: "get",
        url: "/ac/api/archicasca/raster",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      })
        .then((res) => {
          //   console.log("pic data", res);
          if (res.data.code === 200) {
            res.data.data.forEach((element) => {
              if (element.type === "svg") {
                element.url = element.url.replace(".svg", ".png");
              }
            });
            raster_list.push(...res.data.data);
            // console.log(raster_list);
            // console.log("fraster");
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          if (scene.value === "raster") {
            show.value = -1;
            setTimeout(() => {
              show.value = 2;
            }, 20);
          }
        });
    };

    onBeforeMount(() => {
      // 获取场景风格轮播图
      axios
        .get("/ac/api/image/scene")
        .then(({ data }) => {
          //   console.log("scene data", data);
          if (data.code === 200) {
            data = data.data;
            // homeScene.value = data;
            homeScene.push(...data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      getPic();
    });
    return {
      router,
      modules: [Navigation],
      homeScene,
      show,
      scene,
      getPic,
      freedom_list,
      grid_list,
      sketch_list,
      fractal_list,
      raster_list,
      start
    };
  },
  methods: {
    turnPage(index) {
      this.show = index;
      this.getinfo();
    },
    getinfo(){
      if (this.show === 0) {
      this.scene_name="自由创作"
      this.scene_descripe="携建筑之形意，运层叠之技法，展城市记忆与文化艺术神韵。"
    } else if (this.show === 1) {
      this.scene_name="格子风格"
      this.scene_descripe="以窗格为基，嵌入建筑形意，大美至简。"
    } else if  (this.show === 2)  {
      this.scene_name="光栅风格"
      this.scene_descripe="斑斓光栅，建筑浮动，城市日夜美景。"
    } else if (this.show === 3)  {
      this.scene_name="轮廓风格"
      this.scene_descripe="水平线上，层叠建筑形意、江河远山，勾勒城市印象。"
    } else if  (this.show === 4)  {
      this.scene_name="分形风格"
      this.scene_descripe="传统建筑，几何构图，分形展和谐美丽。"
    } else {
      this.scene_name="自由创作"
      this.scene_descripe="携建筑之形意，运层叠之技法，展城市记忆与文化艺术神韵。"
    }
    }
  },
};
</script>

<style scoped>
.Page {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel-box {
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.carousel .el-carousel {
  width: 100%;
  margin: 3rem 1rem;
}
.carousel-text-box {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.carousel-text-box::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.7) 5.03%,
      rgba(0, 0, 0, 0) 29.12%);
  transform: rotate(-180deg);
}

.carousel-image-mask {
  position: absolute;
  width: 100%;
  z-index: 500;
}

.carousel>>>.el-carousel__arrow {
  transform: scale(3);
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  margin: 0 3rem;
}

.carousel-text {
  position: absolute;
  width: 52rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin: 4rem;
}

.carousel-text-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 5.5rem;
  line-height: 7rem;
  text-transform: uppercase;
  color: #ffffff;
}

.carousel-text-details {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #c8c8c8;
  margin-top: 1em;
}
</style>

<style>
.el-carousel {
  width: 100%;
}
</style>