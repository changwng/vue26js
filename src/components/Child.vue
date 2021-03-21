<template>
    <div>
        Child
        <button @click="showDataLog" >데이터 조회</button>
    <br/>
        <child-child :send-data="childData" @event-data="setChildData"></child-child>
    </div>
</template>
<script>
import ChildAndChild from '@/components/ChildAndChild.vue' 
export default {
    name: 'Child',
    components: { 
        "child-child":ChildAndChild }, 
    data() {
        return {
            childData: 20
        };
    }, 
    methods: {
        showDataLog: function(){
            console.log('Child 호출됨 childData:, ', this.childData) 
        },
        setChildData:function(newChildData){
            this.childData = newChildData;
          console.log('변경된 newChildData:, ', this.childData) 

        }
    },
};
</script>