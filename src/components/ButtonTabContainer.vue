<template>
<div>
    <button-tab>
        <template slot="header">
            <h1> First Tab Tab slot</h1>
        </template>
    </button-tab>
    <button-tab>
         <template slot="header">
            <h1> Second Tab slot</h1>
        </template>
        <h1> Second Tab h1</h1>
    </button-tab>
    </div>
</template>


<script>
import ButtonTab from './ButtonTab.vue'
export default {
    name: 'ButtonTabContainer',
    components: { ButtonTab }, 
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>