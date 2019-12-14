<template>
    <div class='id_card_input' @click="getInput">
        <div class="card_label">

        </div>
        <div class="card_value">
            <div class="number_card isInput">
                9
            </div>
        </div>
        <div v-show='false' class="input">
            <input type="text" ref="input">
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    methods: {
        getInput(){
            
        }
    },
}
</script>
<style lang="scss" scoped>
.id_card_input{
    .number_card {
        width: 20px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
    }

    .isInput{
        position: relative;
    }
    
    .isInput:after {
        position: absolute;
        content: 'I';
        display: inline-block;
        width: 100%;
        height: 100%;
        top: 0;
        left:  0;
        // transform: translateX(-1px);
        border-radius: 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        animation: blink 1.2s infinite steps(1, start);
    }

    @keyframes blink {
        0%, 100% {
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

