<template>
    <div style="margin-left: 7.7%; margin-right: 7.7%; margin-top: 4%;">
        <div id="List2" class="left" ref="List2">
            <div v-for="element in List2" :key="element">
                <div class="fleterBox">
                    <img :src="element.url">
                    <div class="describe">
                        <p style="position:relative;left:2%;">{{ element.describe }}</p>
                    </div>
                    <div style="height: 2rem;"></div>
                </div>
            </div>
        </div>

        <div id="List4" class="left" ref="List4">
            <div v-for="element in List4" :key="element">
                <div class="fleterBox">
                    <img :src="element.url">
                    <div class="describe">
                        <p style="position:relative;left:2%;">{{ element.describe }}</p>
                    </div>
                    <div style="height: 2rem;"></div>
                </div>
            </div>
        </div>
        <div id="List5" class="left" ref="List5">
            <div v-for="element in List5" :key="element">
                <div class="fleterBox">
                    <img :src="element.url">
                    <div class="describe">
                        <p style="position:relative;left:2%;">{{ element.describe }}</p>
                    </div>
                    <div style="height: 2rem;"></div>
                </div>
            </div>
        </div>
        <div id="List3" class="left" ref="List3">
            <div v-for="element in List3" :key="element">
                <div class="fleterBox">
                    <img :src="element.url">
                    <div class="describe">
                        <p style="position:relative;left:2%;">{{ element.describe }}</p>
                    </div>
                    <div style="height: 2rem;"></div>
                </div>
            </div>
        </div>

        <div id="List1" class="right" ref="List1">
            <div v-for="element in List1" :key="element">
                <div class="fleterBox">
                    <img :src="element.url">
                    <div class="describe">
                        <p style="position:relative;left:2%;">{{ element.describe }}</p>
                    </div>
                    <div style="height: 2rem;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WaterFall',
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
            List1: [],
            List2: [],
            List3: [],
            List4: [],
            List5: [],
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
            let Height1 = this.$refs.List1.offsetHeight;
            console.log(Height1);
            let Height2 = this.$refs.List2.offsetHeight;
            console.log(Height2);
            let Height3 = this.$refs.List3.offsetHeight;
            console.log(Height3);
            let Height4 = this.$refs.List4.offsetHeight;
            console.log(Height4);
            let Height5 = this.$refs.List5.offsetHeight;
            console.log(Height5);
            if(Height1<Height2&&Height1<Height3&&Height1<Height4&&Height1<Height5){
                this.$data.List1.push(this.$props.list[index])
                console.log(index)
                console.log("1")
            }
            if(Height2<Height3&&Height2<Height4&&Height2<Height5){
                this.$data.List2.push(this.$props.list[index])
                 console.log(index)
                 console.log("2")
            }
            if(Height3<Height4&&Height3<Height5){
                this.$data.List3.push(this.$props.list[index])
                console.log(index)
                console.log("3")
            }
            if(Height4<Height5){
                this.$data.List4.push(this.$props.list[index])
                console.log(index)
                console.log("4")
            }
            if(Height5<=Height1){
                this.$data.List5.push(this.$props.list[index])
                console.log(index)
                console.log("5")
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
    width: 15.2%;
    float: left;
    margin-right: 5.8%;
}

.right {
    width: 15.2%;
    float: right;
}

.fleterBox {
    position: relative;
    background: #fff;
    font-size: 1rem;
    color: #333;
    margin-top: 2rem;
    line-height: 1rem;
    text-align: center;
}

.fleterBox img {
    width: 100%;
}

.namebackground {
    position: absolute;
    width: 100%;
    height: 20%;
    mix-blend-mode: normal;
    border-radius: 1rem;
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
    font-size: 1.25rem;
    font-family: Amaranth;
    line-height: 2em;
}
</style>
