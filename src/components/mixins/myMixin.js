let myMixin = {
    props: {
        weight:{
            default: 10
        }
    },
    created() {
        console.log('myMixin.js create========================weight:',this.$props.weight)
    },
    methods:{
        onClick(){
            this.vdata++;
        }
    }
};
export default myMixin;