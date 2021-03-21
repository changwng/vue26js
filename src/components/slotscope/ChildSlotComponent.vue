<template>
    <div>
        <h1> Child Componet -Slot Scope</h1>
        <slot :message="message"></slot>
    </div>
</template>
<script>
export default {
    name: 'ChildSlotComponent', 
    data() {
        return {
            message: 'Hello 모하뉘'
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>