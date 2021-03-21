<template>
    <div>
        Child v-model 방식 컴포넌트
        <button @click="showDataLog" >데이터 조회</button>
    <br/>
        <child-child v-model="childData"></child-child>
    </div>
</template>
<script>
import ChildAndChild from '@/components/ChildModelAndChild.vue' 
export default {
    name: 'Child',
    components: { 
            "child-child":ChildAndChild 
        }, 
    data() {
        return {
            childData: 20
        };
    }, 
    methods: {
        showDataLog: function(){
            console.log('Child 호출됨 childData:, ', this.childData) 
        }
    },
};
</script>