<template>
    <div
        class='id_card_input'
        @click="getFocus"
    >
        <div class="card_label">

        </div>
        <div class="card_value" >
            <div
                @click="getFocusPositon(index)"
                class="number_card"
                v-for="(item, index) in maxLength"
                :key="item"
                :class="[activeIndex===index?'isInput':'']"
            >
                {{valueListMap[index]}}
            </div>
            
        </div>
        <!-- <div class="number_card isInput">
            {{value}}
        </div> -->
        <div class="input">
            <input
                type="text"
               
                @input='getValue'
                class="inputValue"
                :value="value"
                ref="inputInput"
            >
        </div>
    </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {
            value: "",
            selectionStart: 0,
            activeIndex: 0,
            showing: false,
            valueList: [""],
            valueListMap: {},
            maxLength:10,
        };
    },
    methods: {
        getFocus() {
            console.log("getFocus");
            this.$refs.inputInput.focus();
        },
        getValue(e) {
            console.log(e)
            console.log(e.target.value)
            let value = e.target.value
            if(value.length>1){
                this.handleCopy(value)
            } else {
                this.valueListMap[this.activeIndex] = value
                this.activeIndex +=1
            }
        },
        getFocusPositon(index){
            this.activeIndex = index 
            this.$refs.inputInput.value=''
            // this.selectionStart = index
            // this.$refs.input.selectionStart=index
            // this.$refs.input.selectionEnd=index
        },
        handleCopy(value){
            const val = String(value)
            const list = value.split('')
            Object.keys(this.valueListMap).forEach(index=>{
                const i = Number(index)+this.activeIndex
                this.valueListMap[i] = list[index]
            })
            this.$refs.inputInput.value=''
        }
    },
    created(){
        let data = {}
        for (let index = 0; index < this.maxLength; index++) {
            data[index] = ''
        }
        
        this.valueListMap = data
    },
    mounted(){
        this.getFocus()
    }
    
};
</script>
<style lang="scss" scoped>
.id_card_input {
    .number_card {
        width: 20px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        border-radius: 5px;
        margin: 2px;

    }
    .input {
        position: relative;
        overflow: hidden;
        height: 0;
        width: 0;
        .inputValue {
            position: absolute;
            top: -9999999999999999px;
        }
    }
    .isInput {
        position: relative;
    }

    .isInput:after {
        position: absolute;
        content: "I";
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        top: 0;
        left: 0;
        // transform: translateX(-1px);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        animation: blink 1.2s infinite steps(1, start);
    }

    @keyframes blink {
        0%,
        100% {
            color: #000;
            background-color: #fff;
        }
        50% {
            color: transparent;
            background-color: transparent;
        }
    }
}
</style>

