<template>
    <div class="Page">
        <HeadNav></HeadNav>
        <div class="carousel">
            <el-carousel height="61.875em" :autoplay="true">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-box">
                        <div class="carousel-text">
                            <div class="carousel-text-title">岭南古建</div>
                            <div class="carousel-text-details">
                                岭南文化作为中华民族传统文化中最具特色和活力的地域文化之一，拥有两千多年历史，浩如烟海，源远流长。岭南建筑作为岭南文化的重要载体，更是岭南文化的精髓。
                            </div>
                        </div>
                        <el-image src="linnan1.svg" fit="contain" style="width: 100%"></el-image>
                        <el-image class="carousel-image-mask" src="Home2-1.svg" fit="contain" style="width: 100%">
                        </el-image>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div @scroll="handleScroll">
            <WaterFall :list="imgData" />
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

export default {
    name: "HomePage",
    components: {
        HeadNav,
        FooterNav,
        WaterFall
    },
    data: function () {
        return {
            imgData: [{
                url: "wf1.svg",
                describe: 'bdbdbdbdgbsdbs',
                userName: '',
                userAvatar: '',
                latitude: 23.1,
                longitude: 113.4,
                width: 30,
                height: 30,
                iconPath: 'wf1.svg',
                class: 'advertisement',
                joinCluster: true,
            },
            {
                id: 2,
                name: '测试图片2',
                url: 'wf2.svg',
                describe: '我真的',
                latitude: 23.2,
                longitude: 113.5,
                width: 30,
                height: 30,
                iconPath: 'wf2.svg',
                joinCluster: true
            },
            {
                id: 3,
                name: '测试图片3',
                url: 'wf3.svg',
                describe: '我真的有好多好多好',
                latitude: 23.3,
                longitude: 113.6,
                width: 30,
                height: 30,
                iconPath: 'wf3.svg',
                joinCluster: true
            },
            {
                id: 4,
                name: '测试图片3',
                url: 'wf4.svg',
                describe: '骑楼',
                latitude: 23.1,
                longitude: 113.6,
                width: 30,
                height: 30,
                iconPath: 'wf4.svg',
                joinCluster: true
            },
            {
                id: 5,
                name: '测试图片3',
                url: 'wf5.svg',
                describe: '我真的',
                latitude: 23.2,
                longitude: 113.3,
                width: 30,
                height: 30,
                iconPath: 'wf5.svg',
                joinCluster: true
            },
            {
                id: 6,
                name: '测试图片3',
                url: 'wf6.svg',
                describe: '屋脊',
                latitude: 23.4,
                longitude: 113.5,
                width: 30,
                height: 30,
                iconPath: 'wf6.svg',
                joinCluster: true
            },
            {
                id: 7,
                name: '测试图片3',
                url: 'wf7.svg',
                describe: '我真的',
                latitude: 23.6,
                longitude: 113.7,
                width: 30,
                height: 30,
                iconPath: 'wf7.svg',
                joinCluster: true
            },
            {
                id: 8,
                url: 'wf8.svg',
                describe: '土建',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf8.svg',
                joinCluster: true
            },
            {
                id: 9,
                url: 'wf9.svg',
                describe: '满周窗',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf9.svg',
                joinCluster: true
            },
            {
                id: 10,
                url: 'wf10.svg',
                describe: '图片描述',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf10.svg',
                joinCluster: true
            },
            {
                id: 11,
                url: 'wf11.svg',
                describe: '祠堂',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf11.svg',
                joinCluster: true
            },
            {
                id: 12,
                url: 'wf12.svg',
                describe: '湖与桥',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf12.svg',
                joinCluster: true
            },
            {
                id: 13,
                url: 'wf13.svg',
                describe: '图片描述',
                latitude: 23.3,
                longitude: 113.1,
                width: 30,
                height: 30,
                iconPath: 'wf13.svg',
                joinCluster: true
            },
            ]
        }
    },
    setup() {
        const router = useRouter();
        return {
            router,
            modules: [Navigation],
        };
    },
    methods: {
        goDetail(id) {
            this.router.push({ name: "detail", params: { id } });
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

.carousel-image-mask {
    position: absolute;
    width: 100%;
    z-index: 500;
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