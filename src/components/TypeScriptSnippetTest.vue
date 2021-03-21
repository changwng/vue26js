<template>
    <div >
van
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";
  
    const AppProps = Vue.extend({
        props: {
            nameProp: type
        }
    })

    @Component({})
    export default class App extends AppProps {
        
    };
  import Vue from "vue"
  
  declare module "vue/types/options" {
      interface ComponentOptions<V extends Vue> {
          myOption?: type
      }
  }
  </script>

<style scoped>

</style>