<template>
    <div
        class='id_card_input'
        @click="getFocus"
    >
        <div class="card_label">
            label测试
        </div>
        <div class="card_value" >
            <div class="input_box"  v-for="(item, index) in maxLength"  :key="index" :class="[(index+1)==maxLength?'isLastInput':'']">
                <div
                    @click="getFocusPositon(index)"
                    class="number_card"
                    :class="[activeIndex===index?'isInput':'']"
                >
                    {{valueList[index]}}
                </div>
            </div>
            
            
        </div>
        <!-- <div class="number_card isInput">
            {{value}}
        </div> -->
        <!-- <div class="input"> -->
            <input
                type="text"
                @blur="activeIndex=-1"
                @input='getValue'
                class="inputValue"
                v-model="value"
                ref="input"
            >
        <!-- </div> -->
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
            maxLength:10,
        };
    },
    methods: {
        getFocus() {
            console.log("getFocus");
            this.$refs.input.focus();
        },
        getValue() {
            const val = String(this.value)
            if(this.value.length>this.valueList.length){
                this.activeIndex +=1
            } else {
                this.activeIndex -=1
            }
            this.valueList = val.split('')
            if(this.valueList.length>this.maxLength){
                this.getMaxValue()
            } else {
                this.getDetailValue()
            }
            
        },
        getDetailValue(){
             console.log(this.valueList.join(''))
            this.$emit('getValue',this.valueList)
        },
        getMaxValue(){
            const list = this.valueList.slice(0,this.maxLength)
            console.log(list.join(''))
            this.$emit('getValueTotal',list.join(''))
            this.$emit('getValue',list.join(''))
            this.value = list.join('')
            this.getFocusPositon(this.maxLength)
        },
        getFocusPositon(index){
            if(!this.valueList.length>0){
                this.activeIndex=0
                return false
            } else {
                this.activeIndex = index 
                this.$refs.input.selectionStart=index+1
                this.$refs.input.selectionEnd=index+1
            }
        }
    },
    mounted(){
        this.getFocus()
    }
};
</script>
<style lang="scss" scoped>
.id_card_input {
    $inputWidth:20px;
    $inputHeight:30px;
    $lineHeight:20px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .card_label {
        padding-bottom: $lineHeight;
        width: 100%;
        text-align: center;
    }
    .input_box {
        padding: 2px;
        position: relative;
    }
    .input_box::before {
        position: absolute;
        width: 100%;
        content: "";
        left: 50%;
        top: -$lineHeight;
        border-radius: 2px;
        border-top: 1px solid #000;
    }
    .input_box::after {
        position: absolute;
        height:  $lineHeight;

        top: -$lineHeight;
        content: "";
        left: 50%;
        border-radius: 2px;
        border-left: 1px solid #000;
    }
    .isLastInput::before {
        width: 0;
    }
    .number_card {
        width:  $inputWidth;
        height: $inputHeight;
        line-height: $inputHeight;
        
        text-align: center;
        border: 1px solid #000;
        border-radius: 5px;
       
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
    .card_value {
        // overflow: hidden;
        display: flex;
    }
    .isInput {
        position: relative;
    }
    .isInput:after {
        position: absolute;
        content: "I";
        display: inline-block;

        width:  $inputWidth;
        height: $inputHeight;
        line-height: $inputHeight;

        border-radius: 5px;
        top: 0;
        left: 0;
        // transform: translateX(-1px);
        text-align: center;
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

