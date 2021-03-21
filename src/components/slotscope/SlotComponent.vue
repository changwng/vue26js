<template>
    <div>
        <child-slot-component>
            <template slot-scope="scopeProps">
                {{scopeProps.message}}
            </template>
        </child-slot-component>
    </div>
</template>
<script>
import ChildSlotComponent from './ChildSlotComponent.vue';

export default {
    name: 'SlotComponent',
    components: { ChildSlotComponent }, 
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