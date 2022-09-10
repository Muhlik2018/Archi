<template>
<div style="margin-left: 5%;">
    <div id="left" class="left" ref="left">
        <div v-for="element in leftList" :key="element">
            <img :src="element.url">
        </div>
    </div>

    <div id="mid" class="mid" ref="mid">
        <div v-for="element in midList" :key="element">
            <img :src="element.url">
        </div>
    </div>

    <div id="right" class="right" ref="right">
        <div v-for="element in rightList" :key="element">
            <img :src="element.url">
        </div>
    </div>
</div>
</template>
  
<script>
export default {
    name: 'FloodEr',
    props: {
        list: {
            type: Array,
            watch: function (newVal, oldVal) {
                console.log("hahahah");
                let index = oldVal.length;
                this.loopList(index);
            }
        }
    },
    data: function () {
        return {
            leftList: [],
            midList: [],
            rightList: []
        }
    },
    mounted() {
        this.initial();
    },
    methods: {
        initial() {
            //this.$data.leftList=this.$props.list;
            //this.$data.rightList=this.$props.list;
            this.loopList(0)
        },
        isLeft() {

        },
        loopList(index) {
            if (!this.$props.list[index]) return;
            let leftHeight = this.$refs.left.offsetHeight;
            let rightHeight = this.$refs.right.offsetHeight;
            let midheight = this.$refs.mid.offsetHeight;
            if (midheight < rightHeight && midheight <= leftHeight) {
                this.$data.midList.push(this.$props.list[index])
            }
            else if (rightHeight <= leftHeight) {
                this.$data.rightList.push(this.$props.list[index])
            }
            else if (leftHeight <= midheight) {
                this.$data.leftList.push(this.$props.list[index])
            }
            this.$nextTick(() => {
                this.loopList(++index);
            })
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
    font-size: 16px;
}

.left {
    width: 31%;
    float: left;
    /* margin-right: 18%; */
    /* margin-left: -10%; */
}

.mid {
    width: 31%;
    /* margin-left: 2%; */
    float: left;

}

.right {
    width: 31%;
    /* margin-right: 10%; */
    float: left;
    
}
img{
    width: 100%;
}
.fleterBox {
    position: relative;
    background: #fff;
    font-size: 1rem;
    color: #333;
    margin-top: 2rem;
    line-height: 1rem;
    padding: 0rem 0rem 1rem;
    text-align: center;
    border-radius: 1rem;
    filter: drop-shadow(0rem 2rem 1rem rgba(0, 0, 0, 0.4));
}

.fleterBox img,
.fleterBox img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.namebackground {
    position: absolute;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    mix-blend-mode: normal;
    border-radius: 1rem;
}

.name {
    top: 1%;
    left: 3%;
    position: absolute;
    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    /* identical to box height, or 59% */
    letter-spacing: 0.03em;
    text-transform: capitalize;
    color: #FFFFFF;
    text-shadow: 0px 1px 4px rgba(255, 255, 255, 0.5);
}

.detail {
    background: #FFFFFF;
    mix-blend-mode: normal;
    height: 6rem;
    border-bottom: 0.1rem solid #B9B9B9;
}

.school {
    position: absolute;
    left: 2%;
    border: 0.1rem solid #A9BCD3;
    box-sizing: border-box;
    font-size: 2rem;
    border-radius: 1rem;
    color: #606892;
    line-height: 2rem;
}

.time {
    position: absolute;
    right: 2%;
    border: 0.1rem;
    font-family: 'Shanti';
    font-style: normal;
    font-size: 2rem;
    line-height: 2rem;
}

.describe {
    text-align: left;
    font-size: 1rem;
}
</style>
  
