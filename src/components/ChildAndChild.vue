<template>
    <div>
        child And Child
        <button @click="showParentLog"> parent 데이터 조회 </button>
        <button @click="sendEditdata"> parent 데이터 수정 </button>
    </div>
</template>

<script>
export default {
    name: 'ChildandChild', 
    props:['sendData'],
    methods: {
      showParentLog: function(){
          console.log("child 데이터:", this.sendData);
      },
      sendEditdata: function(){
         console.log("child 데이터 수정후 전달 1 sendData :", this.sendData);
         let chageData = this.sendData+30;
         console.log("child 데이터 수정후 전달 2 chageData :", chageData);
         this.$emit('event-data', chageData);
      }
    }, 
    mounted() {
        
    },
    
};
</script>