<template>
    <div class="Page">
        <HeadNav></HeadNav>
        <div class="carousel">
            <el-carousel height="61.875em" :autoplay="false" @change="turnPage">
                <el-carousel-item v-for="(item, index) in homeScene.value" :key="index">
                    <div class="carousel-box">
                        <div class="carousel-text-box">
                            <div class="carousel-text">
                                <div class="carousel-text-title">{{ item.scene }}</div>
                                <div class="carousel-text-details">
                                    岭南文化作为中华民族传统文化中最具特色和活力的地域文化之一
                                </div>
                            </div>
                        </div>
                        <el-image :src="item.url" fit="contain" style="width: 100%">
                        </el-image>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div v-if="show==0">
            <WaterFall :list="freedom_list" />
        </div>
        <div v-if="show==1">
            <WaterFall :list="grid_list" />
        </div>
        <div v-if="show==2">
            <WaterFall :list="raster_list" />
        </div>
        <div v-if="show==3">
            <WaterFall4 :list="sketch_list" />
        </div>
        <div v-if="show==4">
            <WaterFall :list="fractal_list" />
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
import WaterFall from "./WaterFall.vue"
import axios from "axios";
import { reactive } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import WaterFall4 from "./WaterFall4.vue";


export default {
    components: {
        HeadNav,
        FooterNav,
        WaterFall,
        WaterFall4
    },
    data() {
        return {
            scene: "",
            show: "3",
            imgData: [],
            raster_list: [],
            freedom_list: [],
            grid_list: [],
            sketch_list: []
        }
    },
    created() {

        this.getPic();
    },
    setup() {
        const router = useRouter();
        let homeScene = reactive([]);
        onBeforeMount(() => {
            // 获取场景风格轮播图
            axios
                .get("/ac/api/image/scene")
                .then(({ data }) => {
                    console.log("scene data", data);
                    if (data.code === 200) {
                        data = data.data;
                        homeScene.value = data;
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });

        });
        return {
            router,
            modules: [Navigation],
            homeScene,
        };
    },
    methods: {
        getPic() {
            axios({
                method: "get",
                url: "/ac/api/archicasca/freedom",
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })
                .then(res => {
                    console.log("pic data", res);
                    if (res.data.code === 200) {
                        this.freedom_list = res.data.data
                        console.log(this.freedom_list)
                        console.log("freedom")
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });

            axios({
                method: "get",
                url: "/ac/api/archicasca/grid",
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })
                .then(res => {
                    console.log("pic data", res);
                    if (res.data.code === 200) {
                        this.grid_list = res.data.data
                        console.log(this.grid_list)
                        console.log("grid")
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });


            axios({
                method: "get",
                url: "/ac/api/archicasca/sketch",
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })
                .then(res => {
                    console.log("pic data", res);
                    if (res.data.code === 200) {
                        this.sketch_list = res.data.data
                        console.log(this.sketch_list)
                        console.log("sketch")
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });

            axios({
                method: "get",
                url: "/ac/api/archicasca/fractal",
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })
                .then(res => {
                    console.log("pic data", res);
                    if (res.data.code === 200) {
                        this.fractal_list = res.data.data
                        console.log(this.fractal_list)
                        console.log("fractal")
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });
            axios({
                method: "get",
                url: "/ac/api/archicasca/raster",
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })
                .then(res => {
                    console.log("pic data", res);
                    if (res.data.code === 200) {
                        this.raster_list = res.data.data
                        console.log(this.raster_list)
                        console.log("fraster")
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });

        },
         turnPage(index) {
             this.show = index;
         },
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
    width: 46rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    margin: 3rem;
}

.carousel-text-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 8rem;
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
    color: #C8C8C8;
    margin-top: 1em;
}
</style>

<style>
.el-carousel {
    width: 100%;
}
</style>