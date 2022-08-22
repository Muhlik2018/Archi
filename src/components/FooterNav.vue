<template>
  <div class="footerNav">
    <span style="flex: 1" class="bottomnav">
      <span @click="goPage('Home')">首页</span> | <span @click="goPage('Home')">收藏&周边</span> | <span @click="goPage('Home')">活动</span> |
      <span @click="goPage('TeamMembers')">关于我们</span>
      <div class="copyright">CiMEM 团队 版权所有 隐私保护</div>
    </span>

    <span style="flex: 1; display: flex">
      <span style="flex: 1">
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 29.0625rem;
            height: 12.8763rem;
          "
        >
          <div style="flex: 2" class="bottomname">
            <img src="../assets/Archi&Casca.svg" alt="" />
          </div>
          <div style="flex: 1" class="title">建筑是凝固的音乐。</div>
          <div style="flex: 3" class="description">
            <div>
              Archi 刻画建筑几何与色彩特征的元素符号， 凝聚建筑局部之美。 Casca
              由计算机以层叠交 汇形式布局到画布中，迭代优化和谐美丽的画作。
            </div>
          </div>
        </div>
      </span>

      <span style="flex: 1; position: relative"
        ><div class="biglogo"><img src="../assets/BigLogo.svg" alt="" /></div
      ></span>
    </span>

    <span class="contact" style="flex: 1">
      <div style="display: flex">
        <span style="flex: 1" class="qrcode">
          <img src="../assets/QRCode.svg" />
        </span>
        <span style="flex: 1; display: flex; flex-direction: column">
          <div style="flex: 1">
            <div class="followus">Follow us</div>
          </div>
          <div style="flex: 1">
            <div class="phone">
              相关事务联系请发邮件至我站公共邮箱：chunhuachen@scut.edu.cn
              联系电话：15013153445
            </div>
          </div>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
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
.footerNav {
  width: 100%;
  height: 15.9375rem;
  
  margin: 0 auto;
  border-top: 0.0625rem solid;
  margin-top: 10rem;

  display: flex;
  
}

.bottomnav {
  margin-left: 4.25rem;
  margin-top: 3.1875rem;

  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  letter-spacing: 0.1em;
  color: #597ef7;
}
.bottomnav span {
  color: #000000;

  cursor: pointer;
}

.copyright {
  margin-top: 1.375rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.5625rem;
  color: #8c8c8c;
  
}

.bottomname {
  margin-top: 0.625rem;
  margin-left: 1.875rem;

  font-family: "Big Shoulders Inline Display";
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 5rem;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  background: linear-gradient(89.77deg, #754abc 15.08%, #009fe8 80.82%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  
}
.bottomname img {
  width: 16.75rem;
  height: 4.25rem;
}
.title {
  width: 16.375rem;

  margin-left: 1.875rem;

  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #597ef7;
  text-align: center;
  
}
.description {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
}

.description > div {
  width: 17.5625rem;
  height: 6.1875rem;

  margin-left: 1.875rem;
  margin-top: 0.625rem;
}

.contact {
  position: relative;
}

.contact > div {
  width: 100%;
  height: 11.25rem;

  border-left: 0.0625rem solid #597ef7; 
  padding: 0 1.875rem;
  box-sizing: border-box;

  position: absolute;

  top: 50%;
  transform: translateY(-50%);
}
.followus {
  width: 12rem;
  height: 2.25rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.125rem;
  color: #000000;

}
.phone {
  width: 11.5625rem;
  height: 6.625rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  color: #000000;
}
.biglogo {
  margin-left: -5rem;

  position: absolute;

  top: 50%;
  transform: translateY(-50%);
}
.biglogo img {
  width: 8.25rem;
  height: 11.3087rem;
}
.qrcode {
  /* display: flex;
  align-content: center;
  justify-content: center; */
}
.qrcode img {
  width: 9.9375rem;
  height: 9.9375rem;
}
</style>

