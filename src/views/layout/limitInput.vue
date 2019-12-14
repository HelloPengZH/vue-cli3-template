<template>
    <input :type="type" :value="value" ref="input"/>
</template>
<script>
export default {
    name:'limitInput',
    props:{
        value:{
            type:[String,Number,Boolean],
            default:''
        },
        type:String
    },
    data(){
        return {

        }
    },
    methods:{
        focus(){

        },
    }
//     Vue.directive('focusNextOnEnter', {
//     bind: function(el, {value}, vnode) {
//       el.addEventListener('keyup', (ev) => {
//         if (ev.keyCode === 13) {
//           let nextInput = vnode.context.$refs[value]
//           const nextValue = isArray(nextInput)
//           if (nextValue && typeof nextValue.focus === 'function') {
//             nextValue.focus();
//           }
//         }
//       })
//    }
// })
}
</script>