<template>
    <div>
       Child v-model 방식 컴포넌트 
        <button @click="sendEditdata"> parent 데이터 수정 </button>
        <button @click="showParentLog"> parent 데이터 조회 </button>
      
    </div>
</template>

<script>
export default {
    name: 'ChildandChild',
    model:{
        prop:"sendData",
        event:"event-data"
    },
    props:['sendData'],
    methods: {
      showParentLog: function(){
          console.log("child model 데이터:", this.sendData);
      },
      sendEditdata: function(){
         console.log("child model  데이터 수정후 전달 1 sendData :", this.sendData);
         let chageData = this.sendData||0 - 10;
         console.log("child model 데이터 수정후 전달 2 chageData :", chageData);
         this.$emit('event-data', chageData);
      }
    }, 
    mounted() {
        
    },
    
};
</script>