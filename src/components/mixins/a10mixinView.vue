
<template>
   <div>
      {{text1}}
   </div>
</template><script>
import a10mixin from './a10mixin.js'
export default {
    data() {
       return {
          'text1': 'mixinCompnent',
       };
    },
   mixins: [a10mixin],
   created: function () {
      console.log(this.$data)
      this.displayMessage()
   },
   mounted: function(){
         this.text1 = this.$data.msg;
   }
}
</script>