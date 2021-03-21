<template>
    <div >
        <div id="sub" @click="onClick" @contextmenu.prevent="onRightClick">{{vdata}}</div>
    </div>
</template>

<script>
    import myMixin from '@/components/mixins/myMixin.js'

    export default {
        mixins: [myMixin],
        name: 'MixinComponent',
        components: {},
        created(){
            console.log('component create vdata:',this.vdata ,this.weight); 
        },
        data: function () {
            return {
                vdata: 10 + this.weight,
            }
        },
        methods: {
            onRightClick(){
                this.vdata--;
                 console.log('component:' , this.vdata);
            }
        }
    }
</script>

<style>
    #app{
        display: table;
    }
    #sub {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>