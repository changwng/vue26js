`<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <child></child>
     <br/>
     <child-model></child-model>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Child from '@/components/Child.vue' 

import ChildModel from '@/components/ChildModel.vue' 

export default {
  name: 'Home',
  components: {
    "child" :Child,
    "child-model":ChildModel

  },
}
</script>
 