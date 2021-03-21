<template>
    <div>
        
    </div>
    <el-select v-model="" value-key="" placeholder="" clearable filterable @change=""
    >
        <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
    
</template>

<script>
export default {
    name: 'ElementUiTest',
    components: { ComponentName },
    directives: { DirectiveName },
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

<style lang="scss" scoped>

</style>